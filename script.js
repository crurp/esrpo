document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year automatically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.domain-card, .contact-card, .section-header');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Parallax effect for hero elements
    const heroContent = document.querySelector('.hero-content');
    const floatingElements = document.querySelectorAll('.float-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${rate}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }

        floatingElements.forEach((el, index) => {
            const speed = (index + 1) * 0.1;
            el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Card hover effects with mouse tracking
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Animated gradient for gradient text
    const gradientTexts = document.querySelectorAll('.gradient-text');
    let gradientPosition = 0;
    
    setInterval(() => {
        gradientPosition = (gradientPosition + 1) % 100;
        gradientTexts.forEach(text => {
            text.style.backgroundPosition = `${gradientPosition}% 50%`;
        });
    }, 50);

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    const handleScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Scroll-based animations here
                ticking = false;
            });
            ticking = true;
        }
    };

    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Live Chat Widget
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');

    if (chatButton && chatWindow) {
        // Open/close chat
        chatButton.addEventListener('click', () => {
            chatWindow.classList.add('active');
            chatInput.focus();
        });

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });

        // Response patterns with topic labels and contextual email CTAs
        const responsePatterns = [
            {
                keywords: ['quantum', 'quantum computing', 'quantum information'],
                topic: 'quantum computing',
                responses: [
                    'Great question about quantum computing! We specialize in quantum information science, helping organizations leverage quantum algorithms, quantum machine learning, and quantum cryptography.',
                    'Quantum technologies are a core part of what we do. Our services include strategic planning, quantum-enhanced applications, and infrastructure development for the quantum era.',
                    'Quantum computing is one of our primary domains. We help organizations explore quantum solutions, from algorithm design to infrastructure readiness.'
                ],
                ctas: [
                    'To discuss how quantum computing can benefit your organization, reach out to us at info@esrpo.com.',
                    'Our quantum team would love to learn more about your goals. Drop us a line at info@esrpo.com to get the conversation started.',
                    'For a deeper dive into our quantum consulting services, contact us at info@esrpo.com and we\'ll set up a time to talk.'
                ]
            },
            {
                keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'agentic', 'agents'],
                topic: 'AI and machine learning',
                responses: [
                    'AI and machine learning are at the heart of what we build. We develop fully agentic AI systems with autonomous reasoning and execution capabilities, including enterprise AI enhancement and custom ML development.',
                    'You\'re asking about the right space. Our AI/ML expertise spans from strategy to implementation, helping organizations build intelligent systems that transform operations.',
                    'Agentic AI is one of our specialties. We create autonomous systems that can independently reason, learn, and execute tasks at enterprise scale.'
                ],
                ctas: [
                    'To explore how AI/ML can transform your operations, contact our team at info@esrpo.com.',
                    'We\'d love to discuss your AI goals in more detail. Reach out to info@esrpo.com and we\'ll connect you with the right people.',
                    'For a consultation on AI and machine learning solutions, email us at info@esrpo.com.'
                ]
            },
            {
                keywords: ['cybersecurity', 'security', 'cyber', 'protection', 'threat', 'vulnerability'],
                topic: 'cybersecurity',
                responses: [
                    'Cybersecurity is critical, and it\'s one of our core domains. We provide comprehensive security solutions including threat assessment, vulnerability analysis, and Zero Trust Architecture design.',
                    'You\'re right to prioritize security. Our cybersecurity services help protect digital assets and infrastructure from evolving threats through strategic planning and hands-on implementation.',
                    'Security is something we take seriously. We help organizations build robust security postures through advanced threat detection, security architecture, and continuous monitoring.'
                ],
                ctas: [
                    'To discuss your security needs and how we can help strengthen your defenses, reach out to info@esrpo.com.',
                    'Our cybersecurity team can walk you through a tailored approach. Contact us at info@esrpo.com to get started.',
                    'For a security consultation or assessment, email info@esrpo.com and we\'ll schedule a call.'
                ]
            },
            {
                keywords: ['service', 'services', 'offer', 'offerings', 'what do you do', 'help'],
                topic: 'our services',
                responses: [
                    'EchoSpark specializes in three domains: Quantum Information Science, AI & Machine Learning, and Cybersecurity. We provide strategic consulting, infrastructure development, and custom solutions across all three.',
                    'We offer end-to-end services across quantum computing, agentic AI systems, and cybersecurity. From strategy to implementation, we help organizations leverage cutting-edge technology.',
                    'Our services span quantum technologies, AI/ML development, and cybersecurity solutions. Every engagement is built on our Resilient Performance Operations philosophy.'
                ],
                ctas: [
                    'To learn which of our services best fits your needs, contact us at info@esrpo.com.',
                    'We\'d be happy to walk you through our full service offerings. Reach out to info@esrpo.com to start the conversation.',
                    'For a detailed overview tailored to your organization, email info@esrpo.com and we\'ll put together a custom briefing.'
                ]
            },
            {
                keywords: ['contact', 'reach', 'email', 'get in touch', 'how to contact', 'talk'],
                topic: 'getting in touch',
                responses: [
                    'The best way to reach us is by email at info@esrpo.com. Our team typically responds within one business day and we\'re happy to set up a call to discuss your needs.',
                    'You can contact us directly at info@esrpo.com. Whether you have a specific project in mind or just want to explore possibilities, we\'d love to hear from you.',
                    'Reach out to us at info@esrpo.com. We\'re always open to conversations about how quantum, AI, or cybersecurity can drive value for your organization.'
                ],
                ctas: []
            },
            {
                keywords: ['price', 'pricing', 'cost', 'how much', 'fee', 'budget', 'quote'],
                topic: 'pricing',
                responses: [
                    'Pricing is something we tailor to each engagement based on scope, complexity, and timeline. We don\'t believe in one-size-fits-all, so every proposal is customized to your specific requirements.',
                    'Our pricing depends on the nature and scale of your project. We work with organizations of all sizes and build proposals that align with your budget and objectives.',
                    'We offer flexible engagement models and pricing structures. Whether it\'s a focused consulting sprint or a long-term partnership, we\'ll find a model that works for you.'
                ],
                ctas: [
                    'For a customized quote, reach out to info@esrpo.com with a brief description of your project and we\'ll get back to you promptly.',
                    'Email info@esrpo.com with your project details and we\'ll put together a tailored proposal for you.',
                    'Contact us at info@esrpo.com to discuss your requirements and we\'ll provide a detailed pricing breakdown.'
                ]
            },
            {
                keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
                topic: 'greeting',
                responses: [
                    'Hello! Welcome to EchoSpark. I\'m here to help answer questions about our quantum, AI/ML, and cybersecurity services. What can I help you with?',
                    'Hi there! Thanks for reaching out. Whether you\'re curious about quantum computing, AI systems, or cybersecurity, I\'m happy to point you in the right direction.',
                    'Hey! Great to hear from you. What area of our expertise are you most interested in? I can share some details or connect you with our team.'
                ],
                ctas: []
            },
            {
                keywords: ['rpo', 'resilient', 'performance', 'operations', 'esrpo'],
                topic: 'Resilient Performance Operations',
                responses: [
                    'ESRPO stands for EchoSpark Resilient Performance Operations. It\'s our core philosophy: every system we build and every engagement we deliver is designed for resilience, performance, and operational excellence.',
                    'Resilient Performance Operations is the foundation of everything we do. It means building technology systems that maintain peak performance through adversity, whether that\'s a cyberattack, a paradigm shift, or rapid scaling.',
                    'RPO is what sets us apart. It\'s a discipline focused on designing systems that don\'t just work, but continue to perform at their best even under pressure.'
                ],
                ctas: [
                    'To learn how RPO can strengthen your technology operations, reach out to info@esrpo.com.',
                    'We\'d love to discuss how our RPO approach applies to your specific challenges. Contact us at info@esrpo.com.',
                    'For more on how Resilient Performance Operations can transform your infrastructure, email info@esrpo.com.'
                ]
            },
            {
                keywords: ['about', 'company', 'who are you', 'what is echospark', 'team'],
                topic: 'EchoSpark',
                responses: [
                    'EchoSpark is a technology consulting firm operating under the name ESRPO, which stands for EchoSpark Resilient Performance Operations. We specialize in quantum computing, AI/ML, and cybersecurity.',
                    'We\'re a team of specialists in quantum science, artificial intelligence, and cybersecurity. Our mission is to help organizations build technology systems that are resilient, high-performing, and operationally excellent.',
                    'EchoSpark was founded on the belief that the most critical technology systems must be engineered for resilience from day one. We operate across quantum, AI, and security domains.'
                ],
                ctas: [
                    'Want to learn more about our team and approach? Reach out to info@esrpo.com and we\'ll share more details.',
                    'We\'d love to tell you more about what we do. Contact us at info@esrpo.com to start a conversation.',
                    'For a deeper look at EchoSpark and how we work, email info@esrpo.com.'
                ]
            }
        ];

        // Pick a random item from an array
        function pickRandom(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        // Get contextual response based on user input
        function getResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            // Find matching pattern
            for (const pattern of responsePatterns) {
                for (const keyword of pattern.keywords) {
                    if (lowerMessage.includes(keyword)) {
                        const response = pickRandom(pattern.responses);
                        // If the pattern has CTAs, append one; otherwise the response is self-contained
                        if (pattern.ctas && pattern.ctas.length > 0) {
                            return response + ' ' + pickRandom(pattern.ctas);
                        }
                        return response;
                    }
                }
            }
            
            // Default: echo back what the user asked about and point to email
            // Extract a meaningful snippet from the user's message to reference
            const trimmedMessage = userMessage.trim();
            const topic = trimmedMessage.length > 80 
                ? trimmedMessage.substring(0, 77) + '...' 
                : trimmedMessage;
            
            const defaultResponses = [
                'Thanks for asking about "' + topic + '." While I may not have specific details on that here, our team can definitely help.',
                'That\'s a great question regarding "' + topic + '." I\'d love to connect you with someone who can give you a thorough answer.',
                'I appreciate your interest in "' + topic + '." Our specialists would be the best people to walk you through the details.'
            ];
            const defaultCtas = [
                ' Reach out to info@esrpo.com and we\'ll get back to you promptly.',
                ' Email info@esrpo.com with your question and our team will follow up.',
                ' Contact us at info@esrpo.com so we can give you the attention this deserves.'
            ];
            return pickRandom(defaultResponses) + pickRandom(defaultCtas);
        }

        // Add message to chat
        function addMessage(text, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            
            const p = document.createElement('p');
            p.textContent = text;
            contentDiv.appendChild(p);
            
            messageDiv.appendChild(contentDiv);
            chatMessages.appendChild(messageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Send message
        function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            // Add user message
            addMessage(message, true);
            chatInput.value = '';
            
            // Simulate typing delay
            chatSend.disabled = true;
            setTimeout(() => {
                const response = getResponse(message);
                addMessage(response);
                chatSend.disabled = false;
                chatInput.focus();
            }, 800);
        }

        // Send button click
        chatSend.addEventListener('click', sendMessage);

        // Enter key to send
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});
