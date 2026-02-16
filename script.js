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

        // Generic response patterns
        const responsePatterns = [
            {
                keywords: ['quantum', 'quantum computing', 'quantum information'],
                responses: [
                    'Quantum computing represents a paradigm shift in computational power. We specialize in quantum information science, helping organizations leverage quantum algorithms, quantum machine learning, and quantum cryptography.',
                    'Our quantum services include strategic planning, quantum-enhanced applications, and infrastructure development. We help organizations prepare for the quantum era.',
                    'Quantum technologies can solve problems intractable for classical computers through superposition and entanglement. We can help you explore quantum solutions for your specific needs.'
                ]
            },
            {
                keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'agentic', 'agents'],
                responses: [
                    'We develop fully agentic AI systems with autonomous reasoning and execution capabilities. Our services include enterprise AI enhancement, agentic infrastructure design, and custom ML development.',
                    'Our AI/ML expertise spans from strategy to implementation, helping organizations build intelligent systems that transform business operations.',
                    'We specialize in creating autonomous AI agents that can independently reason and execute tasks, making intelligent systems a reality for your organization.'
                ]
            },
            {
                keywords: ['cybersecurity', 'security', 'cyber', 'protection', 'threat', 'vulnerability'],
                responses: [
                    'Cybersecurity is critical in today\'s digital landscape. We provide comprehensive security solutions including threat assessment, vulnerability analysis, and security infrastructure design.',
                    'Our cybersecurity services help protect your digital assets and infrastructure from evolving threats. We offer strategic security planning and implementation.',
                    'We help organizations build robust security postures through advanced threat detection, security architecture, and ongoing security management.'
                ]
            },
            {
                keywords: ['service', 'services', 'offer', 'offerings', 'what do you do'],
                responses: [
                    'EchoSpark specializes in three main domains: Quantum Information Science, AI & Machine Learning, and Cybersecurity. We provide strategic consulting, infrastructure development, and custom solutions.',
                    'We offer services across quantum computing, agentic AI systems, and cybersecurity. From strategy to implementation, we help organizations leverage cutting-edge technology.',
                    'Our services span quantum technologies, AI/ML development, and cybersecurity solutions. We work with organizations to build and deploy advanced technology systems.'
                ]
            },
            {
                keywords: ['contact', 'reach', 'email', 'get in touch', 'how to contact'],
                responses: [
                    'You can reach us at info@esrpo.com for inquiries about our services. We\'d be happy to discuss how we can help with your technology needs.',
                    'For more information or to discuss your project, please contact us at info@esrpo.com. Our team is ready to assist you.',
                    'Feel free to reach out to info@esrpo.com with any questions. We\'d love to learn more about your requirements and how we can help.'
                ]
            },
            {
                keywords: ['price', 'pricing', 'cost', 'how much', 'fee'],
                responses: [
                    'Pricing varies based on project scope and requirements. We provide customized quotes for each engagement. Please reach out to info@esrpo.com for detailed pricing information.',
                    'Our pricing is tailored to each project\'s specific needs. Contact us at info@esrpo.com to discuss your requirements and receive a customized proposal.',
                    'We offer flexible pricing based on your project needs. For detailed pricing information, please contact info@esrpo.com and we\'ll provide a customized quote.'
                ]
            },
            {
                keywords: ['hello', 'hi', 'hey', 'greetings'],
                responses: [
                    'Hello! I\'m here to help answer questions about EchoSpark\'s services. What would you like to know?',
                    'Hi there! How can I assist you with information about our quantum, AI/ML, or cybersecurity services?',
                    'Greetings! I\'m ready to help you learn more about EchoSpark. What interests you most?'
                ]
            }
        ];

        // Get generic response based on user input
        function getResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            
            // Find matching pattern
            for (const pattern of responsePatterns) {
                for (const keyword of pattern.keywords) {
                    if (lowerMessage.includes(keyword)) {
                        const randomResponse = pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
                        return randomResponse;
                    }
                }
            }
            
            // Default response if no pattern matches
            const defaultResponses = [
                'That\'s an interesting question. Let me help you with that.',
                'I understand you\'re looking for more information. Let me provide some details.',
                'Thanks for your inquiry. I\'d be happy to assist you with that.'
            ];
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
                addMessage(response + ' Please reach out to info@esrpo.com we\'d love to assist you with this topic.');
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
