/* ===== NAV ===== */
const nav = document.getElementById('main-nav');
if (nav) {
  // On sub-pages the nav is always solid; on home it fades in on scroll
  if (document.body.dataset.page !== 'home') {
    nav.classList.add('solid');
  } else {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }
}

function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}
document.querySelectorAll('#nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
});

// Highlight active nav link
(function() {
  const page = document.body.dataset.page || 'home';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

/* ===== HERO BG ANIMATION ===== */
const heroBg = document.getElementById('hero-bg');
if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 100);

/* ===== DOG MODAL DATA ===== */
const BASE = '/images/';
const dogs = {
  jake: {
    name: 'Jake',
    titles: "GCH CH Wachter's Amethyst Storm RN CGC CGCU CGCA",
    photos: [
      { src: BASE+'Jake-Master.jpg', caption: 'Jake — Master Portrait' },
      { src: BASE+'Jake-Close-Up-Aa-.jpg', caption: 'Jake — Close-Up' },
      { src: BASE+'Jake-Best-of-Breed-Oct-2013-Aa-.jpg', caption: 'Best of Breed — Oct 2013' },
      { src: BASE+'Jake-Best-of-Breed-Sept-2013-B.jpg', caption: 'Best of Breed — Sept 2013' },
      { src: BASE+'Jake-and-Handler-Aa-.jpg', caption: 'Jake & Handler' },
      { src: BASE+'Jake-Best-of-Winners-March-2013-Aa-.jpg', caption: 'Best of Winners — March 2013' },
      { src: BASE+'Jake-Best-of-Winners-March-2011-Aa-.jpg', caption: 'Best of Winners — March 2011' },
      { src: BASE+'Jake-Best-of-Winners-Jan-2011-B-.jpg', caption: 'Best of Winners — Jan 2011' },
    ],
    bio: [
      "My Bullmastiff love story began January 11, 2010 with my first Bullmastiff Jake. His pedigree is Leatherneck. Owing to that great Bullmastiff line he has an outstanding headpiece, rich red coat, balance soundness and type. He stands at 27\" and weighs 158 lbs. He was eye catching and unmistakable in the breed ring earning him many titles.",
      "His impressive physical presence belies a beautiful, patient and sweet nature. Everywhere he goes crowds of people want to pet him and hug him and he is always happy to oblige. He is a great ambassador for the breed and he promotes this positive image wherever he goes.",
      "On a very personal level, he served as a \"therapy dog\" for my own father. My father had a massive stroke and lost his ability to communicate. Jake was the only one my father could speak to without trouble. For those precious moments Jake became the healing presence my father needed. I could hear him tell Jake \"But Jake I have no more cheese for you today\". As my father looked up at me and I at him there were happy tears of disbelief and gratitude. For 6 more years I made many trips from Maryland to Massachusetts to work with my father. Jake was always at my side doing his healing work. Because of the love of this phenomenal dog we got another Bullmastiff, Shiloh.",
      "Eventually Shiloh was bred and she produced a phenomenal litter. We kept one of the girls and we named her Charlie. Charlie has followed in her mother's footsteps. Jake has become the doting stepdad and best friend to Charlie. Because of Jake we are now committed to this glorious and noble breed. Our \"Boundless Bullmastiffs\" story continues…"
    ]
  },
  shiloh: {
    name: 'Shiloh',
    titles: 'GCH CH Spiritsongs Thankfully Mine CD CGC CGCU CGCA FDC ATT RE RA RN OAP NAP NJP RATS RATO RATN RATI BCAT TKA TKI TKN SEA SCA SIA SWN SBN SEN SIN SCN THD ThDN NW1 L1C L1V L1I L1E ORT WDV2 WDP-O1 WDP-A1 GROM SROM CROM BROM',
    photos: [
      { src: BASE+'Shiloh-Best-of-Breed-Aug-2013-Aa-.jpg', caption: 'Best of Breed — Aug 2013' },
      { src: BASE+'Shiloh-Best-of-Opposite-Oct-2012-Aa-1-1.jpg', caption: 'Best of Opposite Sex — Oct 2012' },
      { src: BASE+'Shiloh-Group-Placing-Puppy-Aa-1-1.jpg', caption: 'Group Placing — Puppy' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2012-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2012' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2014-2-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2014' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2014-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2014 (alt)' },
      { src: BASE+'Shiloh-Best-of-Opposite-May-2012-Aa-1-1.jpg', caption: 'Best of Opposite Sex — May 2012' },
    ],
    bio: [
      "Shiloh, Start of a Great Line — In the world of dogs you may encounter that rarest of creatures that possesses not only great strength and beauty but perfect temperament as well. Shiloh is that rare creature and it is my honor and constant pleasure to call her mine.",
      "We got her in a snow storm. From the moment we picked her up she was high energy, fearless and smart. Throughout the 8 hour drive home she tried to get our big boy Jake to pay attention to her. Once home, after weeks of constantly following Jake around like a shadow she achieved success. Jake gave in and they became inseparable companions.",
      "Shiloh continually \"pushed the envelope\" always wanting to do more than was asked of her. At 6 months and 1 day she started in the conformation ring and won WB the entire weekend. While a class Bitch she won Breed over GCH males. She finished her CH and GCH quickly. In her first competition in agility (after working agility for only 4 months) she won Top Dog at the 2014 ABA Nationals in Gettysburg, PA. Before she was 3 she earned titles in obedience, CGC, Rally, Conformation and agility.",
      "Shiloh is the Foundation Bitch for Boundless Bullmastiffs. She earned a Gold Registry of Merit (GROM) on her first and only litter! She is a nice size girl at 25\" and 128 pounds. Her topline is perfect, her head is magnificent, she has superior muscle tone and she possesses the most perfect teeth I have seen on a Bullmastiff.",
      "In her first litter she gave me 11 beautiful puppies (Sire: Ch Banstock Bruno Of The North East). As of this writing the litter is 24 months old and has already produced 5 Champions, 3 are GCH as well as 3 CGCs. When the litter was 4 years: one puppy had earned 40 titles, 7 puppies had finished their championship in the confirmation ring as either CH or GCH status, 2 of the puppies are Silver GCH and in the top 20 Bullmastiffs.",
      "Currently Shiloh and her daughter are trying out Barn Hunting, Dock Diving, the next level of obedience (CDX), next levels Agility and Coursing Ability, temperament testing and scent work. When Shiloh is not competing or playing she guards our home and family. At night she beats everyone to the bed, steals the best spot and most of the pillows and covers. The future for her first litter is Boundless!"
    ]
  },
  odin: {
    name: 'Odin',
    titles: 'BPISS GCHS Boundless Carpe Diem BCAT NOHS Gold',
    photos: [
      { src: BASE+'Odin-Group-Placing-April-2017-.jpg', caption: 'Group Placing — April 2017' },
      { src: BASE+'Odin-Best-of-Breed-May-2017.jpg', caption: 'Best of Breed — May 2017' },
      { src: BASE+'Odin-Group-Placing-Nov-2016-Aa-.jpg', caption: 'Group Placing — Nov 2016' },
      { src: BASE+'Odin-Best-of-Breed-Nov-2016-Aa-1.jpg', caption: 'Best of Breed — Nov 2016' },
      { src: BASE+'Odin-Best-of-Breed-Nov-2016a-Aa-1.jpg', caption: 'Best of Breed — Nov 2016 (alt)' },
      { src: BASE+'Odin-Best-of-Breed-Sept-2016-Aa-1.jpg', caption: 'Best of Breed — Sept 2016' },
      { src: BASE+'Odin-Best-of-Breed-Sept-2016a-Aa-1.jpg', caption: 'Best of Breed — Sept 2016 (alt)' },
      { src: BASE+'Odin-Group-4th-Dec-2016-Aa-1.jpg', caption: 'Group 4th — Dec 2016' },
      { src: BASE+'Odin-Best-of-Breed-Feb-2017-Aa-1.jpg', caption: 'Best of Breed — Feb 2017' },
    ],
    bio: [
      "Owned by Ron Klopfer, Gary Grimm, and Debbe Quadri. Offered at stud to select and approved bitches. Contact: 302-588-9848 | ron8302599@aol.com. Professionally presented by JJ \"Pepe\" Leyton. Owner handled through his Grand Championship by Ron Klopfer. Pedigree and pictures available by request.",
      "Dam: GCH CH Spiritsongs Thankfully Mine CD CGC CGCU CGCA FDC ATT RE RA RN OAP NAP NJP RATS RATO RATN RATI BCAT TKA TKI TKN SEA SCA SIA SWN SBN SEN SIN SCN THD ThDN NW1 L1C L1V L1I L1E ORT WDV2 WDP-O1 WDP-A1 GROM SROM CROM BROM | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "Odin: Multi group placing Grand Champion Boundless Carpe Diem, ranked number 12 bullmastiff in all breed points. Odin finished his AKC championship 1 day before his first birthday! Three months later he became a Grand Champion. All this has been accomplished before his second birthday!",
      "Highlights of Odin's show career: Best In Show 4–6 month puppy · Two Best in Show 6–12 month puppy wins · Reserve Best in Show Owner Handler · One Working Group 3 · Three Working Group 4 · AKC Champion · AKC Grand Champion · Ranked #12 in the United States for all breed Points (Canine Chronicle May 2017)"
    ]
  },
  beans: {
    name: 'Beans',
    titles: 'CH Boundless Cave Canem Baby Beans CGC',
    photos: [
      { src: BASE+'Beans-Best-of-Winners-Mar-2015-Aa-.jpg', caption: 'Best of Winners — March 2015' },
      { src: BASE+'Beans-Best-of-Winners-Nov-2016-Aa-.jpg', caption: 'Best of Winners — Nov 2016' },
      { src: BASE+'Beans-Best-of-Winners-Nov-2016a-Aa-.jpg', caption: 'Best of Winners — Nov 2016 (alt)' },
      { src: BASE+'Beans-Puppy-Group-Placing-2016-Aa-.jpg', caption: 'Puppy Group Placing — April 2016' },
      { src: BASE+'Beans-Winners-Opposite-Best-Puppy-April-2016-Aa.jpg', caption: 'Winners Opposite & Best Puppy — April 2016' },
      { src: BASE+'Beans-Best-of-Winners-Dec-2016-Aa.jpg', caption: 'Best of Winners — Dec 2016' },
      { src: BASE+'Beans-Best-of-Winners-May-2016-Aa.jpg', caption: 'Best of Winners — May 2016' },
    ],
    bio: [
      "Owned by Susan Luftman and Jonathan Hale. Professionally handled by Carissa Shimpeno. Offered at stud to select and approved bitches. Contact: 914-523-8013 | Susanluftman1@gmail.com. Pedigree, health certifications and pictures available on request.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "The English translation of the Latin \"Cave Canem,\" found over a doorway in the ruins of Pompeii, is \"Beware the Dog,\" combined with \"Baby Beans\" is the perfect fit for this very impressive dog. Beans has an athletic build with great bone and muscularity. With his very expressive face, strong pigment, and beautiful fawn coat, he always draws a crowd. Imposing at 27\" and 140 pounds, he is still maturing. Because of his \"tight lips\" (no pendulous flews), there is no drooling, so his dry kisses are always welcome. In the conformation ring, he is a force to be reckoned with. By 20 months of age, he had already become a Champion.",
      "As befits the second part of his name, \"Baby Beans\" has a sweet and loving nature, making him the perfect companion for any home. He is loving and patient with everyone, including small children. He has his AKC Canine Good Citizen title, and we are on the road to making him a Certified Therapy Dog. He has already visited a school for at-risk youth, where he was a great success.",
      "At about 2 years of age Beans sired 2 beautiful litters — one with Canadian UKC and FCC Champion Miss Perriwinkle Dr Versailles, the second with Canadian FCC and US Champion La Rose De Versailles. The pups are now 6 months old and several have started their show careers. On another note, Beans has begun his \"acting\" career — he has done a video ad. If interested simply go on YouTube and enter \"Sunday under siege\". This Boundless litter is certainly multi-talented!"
    ]
  },
  gus: {
    name: 'Gus',
    titles: 'BISS GCHG Boundless Going for the Gusto',
    photos: [
      { src: BASE+'Gus-Sand-Dune.jpg', caption: 'Gus — Adventure Day' },
      { src: BASE+'GUS-June-2017.jpg', caption: 'Gus — June 2017' },
      { src: BASE+'Gus-ABA-Nationals-Sept-2017.jpg', caption: '2017 ABA National' },
      { src: BASE+'Gus-Best-of-Breed-Jan-2017-Aa.jpg', caption: 'Best of Breed — Jan 2017' },
      { src: BASE+'Gus-Best-of-Breed-April-2017.jpg', caption: 'Best of Breed — April 2017' },
      { src: BASE+'Gus-Select-Dog-Nov-2017-Aa.jpg', caption: 'Select Dog — Purina National Nov 2017' },
      { src: BASE+'Gus-Best-of-Winners-July-2016a-Aa-.jpg', caption: 'Best of Winners — July 2016' },
      { src: BASE+'Gus-Best-of-Winners-July-2016-Aa-.jpg', caption: 'Best of Winners — July 2016 (alt)' },
      { src: BASE+'Gus-Best-of-Winners-Sept-2016-Aa-.jpg', caption: 'Best of Winners — Sept 2016' },
      { src: BASE+'Gus-Best-of-Winners-Sept-2016a-Aa.jpg', caption: 'Best of Winners — Sept 2016 (alt)' },
    ],
    bio: [
      "Owned by John and Lisa McCormick. Professionally handled by Zack & Heather Helmer. Offered at stud to select and approved bitches. Contact: 703-772-9042 | lisa@murraysod.com. Pedigree, health certifications and pictures available on request.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "In the conformation ring Gus has proven himself at a young age that he can hold his own & compete amongst the top Dogs. At just 18 months of age and only 7 months in the ring Gus was awarded Select Dog at the prestigious 2016 Purina National Dog Show which is televised on Thanksgiving Day. Gus beat 32 other Bullmastiffs and was a top contender for BOB and had quite the match against the winning Dog! This was one of our most memorable competitions that is still talked about today!",
      "Gus has also been closely compared to his famous father Bruno with his extra height along with his beautiful head & very sweet eyes. When not in the ring, Gus loves to be at home with his people & his brother and sister Maine Coon cats. One of Gus's favorite days of the week is Sundays when he goes to the local Starbucks for coffee & meets and greets all of his fans who look forward to seeing him every Sunday! For sure Gus is the most gentle & loving Dog ever who just loves to be around people and have all of the attention!"
    ]
  },
  beau: {
    name: 'Beau',
    titles: 'CH Boundless Floats Like a Butterfly CGC',
    photos: [
      { src: BASE+'Beau-Best-of-Winners-July-2017-.jpg', caption: 'Best of Winners — July 2017' },
      { src: BASE+'Beau-Champion-01-SM-.jpg', caption: 'Beau — Champion Portrait' },
      { src: BASE+'Beau-00.jpg', caption: 'Beau — Candid' },
      { src: BASE+'Beau-08.jpg', caption: 'Beau — Portrait' },
      { src: BASE+'Beau-06.jpg', caption: 'Beau — Ring Ready' },
      { src: BASE+'Beau-05.jpg', caption: 'Beau — Stack' },
      { src: BASE+'Beau-04.jpg', caption: 'Beau — Profile' },
      { src: BASE+'Beau-02.jpg', caption: 'Beau — Portrait 2' },
    ],
    bio: [
      "Owned by Charles and Odette Trotter. Professionally handled by Brittany Cipriotti. Offered at stud to select and approved bitches. Contact: 850-374-3396 | navonco@yahoo.com. Pedigree, health certifications and pictures available on request.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "Maximus our previous Bullmastiff was described as an \"old soul\" while Beau can best be described as a \"young soul\" and they are both perfect. As \"handsome\", \"magnificent\" etc. as Beau might be his \"silly\" and loving personality is that two-fold. He loves everything and it does not take much time for all to love him; well Min Min the 12 year old cat we are babysitting does not seem too impressed but she might come around. He is 27 inches and 155 pounds. His arch enemy is the vacuum and his favorite possession which he falls asleep with in his mouth is his stuffed Bullmastiff puppy."
    ]
  },
  charlie: {
    name: 'Charlie',
    titles: 'CH Boundless Go Big or Go Home TxBkYx CD VHM CGC CGCU CGCA FDC ATT RE RA RN CAA CA DJX DJA DJ DN MXP3 MXP2 MXPB MXP MJP2 MJP MJPB MFP AJP AXP XFP OJP OAP OFP NAP NJP NFP FCAT DCAT BCAT CZ8B RATM RATS RATO RATN RATI TKA TKI TKN SCM SEM SEE SCE SIE SWA SEA SIA SCA SBA SWN SCN SIN SEN SBN THD THDN ORT ELITE NW3 NW2 NW1 L3I L3C L3E L2C L2I L2E L2V L1V L1E L1I L1C CW-ScR1 CW-SP CW-SD WDV3 WDP-01 WDP-A2 CD-SD',
    photos: [
      { src: BASE+'shiloh-charlie-headsuse-USE-No-Frame-.jpg', caption: 'Shiloh & Charlie — Mother & Daughter' },
      { src: BASE+'Charlie-Best-of-Opposite-Sex-Sept-2016-Aa-.jpg', caption: 'Best of Opposite Sex — Sept 2016' },
      { src: BASE+'Charlie-Winners-Aug-2016-Aa.jpg', caption: 'Winners — Aug 2016' },
      { src: BASE+'Charlie-Winners-June-2016-Aa.jpg', caption: 'Winners — June 2016' },
      { src: BASE+'Charlie-Winners-Nov-2016-Aa.jpg', caption: 'Winners — Nov 2016' },
      { src: BASE+'Charlie-Best-of-Opposite-and-Winners-Sept-2016-Aa-.jpg', caption: 'Best of Opposite & Winners — Sept 2016' },
      { src: BASE+'Charlie-Best-of-Opposite-Sex-Nov-2016-Aa-.jpg', caption: 'Best of Opposite Sex — Nov 2016' },
      { src: BASE+'Charlie-Dive-01-.jpg', caption: 'Charlie — Dock Diving' },
    ],
    bio: [
      "Owned and Bred by Deborah Quadri. CHIC# 161161. OFA tested Hips, Elbows, Heart, Eyes, Thyroid — All Good/Pass at 2 yrs 7 months. See OFA website for full certifications.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "Charlie, a Shiloh daughter, bears a striking resemblance to her mother in a more compact package. She is a powerful female possessed of high intelligence, great spirit, and a strong willingness to please. With a beautiful head, short back, large chest and powerful hindquarters, she is built for explosive speed, making her capable of the work Bullmastiffs were bred to do. She earned her Championship in the show ring by 16 months of age.",
      "Charlie's career has not stopped there. She has been successful in obedience, agility, rally, lure coursing and dock diving. At 24 months, Charlie held 12 titles: CH, CD, CGC, RA, RN, RE, CA, CAA, DN, DJ, NAP, NJP. By 26 months she held 16 titles. At 4 yrs old she holds 43 titles (40 AKC, 3 ABA). At 5 years Charlie holds 54 AKC titles and 8 titles from other venues. At 7 yrs old this amazing little girl holds 80 titles.",
      "She was the #1 Agility Bullmastiff in 2019 at the AKC Agility Invitational in Orlando, FL. She received an invite to the Agility Invitational 4 years in a row in Orlando, FL — she is one amazing girl. Her enthusiasm for all of her activities is infectious. She never fails to draw attention and cheers at all her events. Who knew a Bullmastiff could be so versatile? Even without all of her accomplishments, she is simply a joy to own."
    ]
  },
  reesi: {
    name: 'Reesi',
    titles: 'CH Boundless Respect All Fear None',
    photos: [
      { src: BASE+'Reesi-Email-MAIN-Picture-01-1-1.jpg', caption: 'Reesi — Main Portrait' },
      { src: BASE+'Reesi-Email-Picture-01a-.jpg', caption: 'Reesi — Portrait' },
      { src: BASE+'Reesi-Email-Picture-a-.jpg', caption: 'Reesi — 2017' },
      { src: BASE+'Reesi-Winners-Major-July-2017-.jpg', caption: 'Winners Major — July 2017' },
      { src: BASE+'Reesi-Best-of-Winners-Oct-2017-.jpg', caption: 'Best of Winners — Oct 2017' },
      { src: BASE+'Reesi-Best-of-Winners-Sept-2016-.jpg', caption: 'Best of Winners — Sept 2016' },
      { src: BASE+'Reesi-Winners-April-2017-.jpg', caption: 'Winners — April 2017' },
    ],
    bio: [
      "Owned by Misty Grauel-Henkin. Contact: 301-395-4279 | mistygrauel@yahoo.com. Pedigree, health certifications and pictures available on request. OFA tested Hips, Heart, Eyes, Thyroid — All Good/Pass at 2 yrs 10 months. See OFA website for full certifications.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "Reesi — Boundless Respect All Fear None — is a daughter of the celebrated Shiloh × Bruno litter, the same pairing that produced Odin, Gus, Charlie, Beau, and Beans. She inherited the bold, fearless character that defines the Boundless line.",
      "Reesi went on to become the dam of the Reesi × Foster P litter (Sire: GCHB Banstock N' Highpoints Ours Yours And Mine), producing Bobbi, Wasabi, Otis, and Maui — each of whom has built an impressive record of their own."
    ]
  },
  gracie: {
    name: 'Gracie',
    titles: 'GCH Boundless Rae of Fearless Grace',
    photos: [
      { src: BASE+'Gracie-Best-of-Breed-Apr-2017-Aa-1-2.jpg', caption: 'Best of Breed — April 2017' },
      { src: BASE+'Gracie-Grand-Champion-Select-Major-April-2017-Aa-2.jpg', caption: 'Grand Champion Select Major — April 2017' },
      { src: BASE+'Gracie-Grand-Champion-Select-Major-April-2017-Aa-3.jpg', caption: 'Grand Champion — April 2017' },
      { src: BASE+'Gracie-Best-of-Opposite-Nov-2016-Aa.jpg', caption: 'Best of Opposite — Nov 2016' },
      { src: BASE+'Gracie-Best-of-Winners-Aug-2016-Aa-.jpg', caption: 'Best of Winners — Aug 2016' },
    ],
    bio: [
      "For information on Gracie please contact the breeder.",
      "Dam: GCH CH Spiritsongs Thankfully Mine (full titles) | Sire: CH Banstock Bruno of the Northeast BISS | Whelped: 7/10/2015 Litter # WS508446",
      "Gracie — Boundless Rae of Fearless Grace — is a Grand Champion from the landmark Shiloh × Bruno litter. She carries both her dam's competitive excellence and her own fearless grace through every ring she enters, earning her Grand Championship with multiple Select Major wins and Best of Breed placements."
    ]
  },
  bobbi: {
    name: 'Bobbi',
    titles: 'GCH CH Boundless One More Time RA RN CD TKI TKN CGC ATT CGCU CGCA FDC RATO RATN RATI SCM SWE SIE SBE SEE SCE SWA SEA SBA SCA SIA SWN SEN SBN SCN SIN THD ThDN THDA THDX NW3 NW2 NW1 L3E L2C L2I L2E L2V L1E L1I L1C L1V ORT CW-SP CW-SD CW-ScR1 CW-SI CW-SSS',
    photos: [
      { src: BASE+'Bobbi-GCH-April-2021-.jpg', caption: 'Earning Her GCH — April 2021' },
      { src: BASE+'Bobbi-Best-of-Opposite-5-pt-major.jpg', caption: 'Best of Opposite — 5pt Major' },
      { src: BASE+'Bobbi-Best-of-Opposite-.jpg', caption: 'Best of Opposite' },
      { src: BASE+'Bobbi-Best-of-Opposite.jpg', caption: 'Best of Opposite (alt)' },
      { src: BASE+'Bobbi-agility-2.jpg', caption: 'Bobbi — Agility' },
      { src: BASE+'Bobbi-agility-scaled.jpg', caption: 'Bobbi — Agility' },
    ],
    bio: [
      "Owned by Debbe Quadri. Professionally handled by Cassandra Vargas. Contact: 443-676-0181. Dam: CH Boundless Respect All Fear None | Sire: GCHB Banstock N' Highpoints Ours Yours And Mine | Whelped: 7/19/2019 Litter # WS 65236401",
      "Health Clearances: Hips OFA Good · Elbows OFA Normal · Heart OFA Good · Eyes OFA Normal · Thyroid OFA Normal. You can go to OFA and look up Bobbi and other show siblings.",
      "Introducing my newest Boundless girl. Meet Bobbi! She is a Shiloh granddaughter and Charlie's niece. Although she is a larger girl she bears a strong resemblance to both Shiloh and Charlie. She is a thick boned female with a powerful square frame. She has a nice head, short back, large chest and powerful hindquarters. She is built for explosive speed which definitely makes her capable of the work Bullmastiffs were created for.",
      "She is very eager to please as well as being a fast learner. She quickly earned her Grand Champion (GCH). She was entered in 8 shows where she earned 7 majors and a 2 point win making her a GCH. At 22 months Bobbi held 16 titles earned even with a year off due to Covid! Bobbi is continuing her career by following Shiloh and Charlie into the performance world. She loves doing obedience, agility, rally, scent work, barn hunt and swimming. At 3 years this beautiful girl holds 40 titles.",
      "Besides her prowess in the ring she has a very sweet and gentle nature. But don't let that fool you. Her protection instincts are right on point! When I watch Bobbi, Charlie and Shiloh playing, sleeping and working together it is truly a sight to behold. Each of the girls is unique but they are all wonderful and of course Boundless!"
    ]
  },
  wasabi: {
    name: 'Wasabi',
    titles: 'GCH Boundless Up All Night For Good Fun BCAT ThDN CGCA TKN RN',
    photos: [
      { src: BASE+'Wasabi-Winners-Bitch-.jpg', caption: 'Winners Bitch' },
      { src: BASE+'Wasabi-earning-her-BCAT.jpg', caption: 'Earning Her BCAT' },
      { src: BASE+'Wasabi-and-Mom-Wedding-day.jpg', caption: 'Wasabi & Mom — Wedding Day' },
    ],
    bio: [
      "Owned by Tamar Paltin. Contact: 484-686-7394. Dam: CH Boundless Respect All Fear None | Sire: GCHB Banstock N' Highpoints Ours Yours And Mine | Whelped: 7/19/2019 Litter # WS 65236403",
      "Wasabi — Boundless Up All Night For Good Fun — lives up to every word of her registered name. A Grand Champion who earned her BCAT (coursing ability) and Therapy Dog Notable alongside her conformation career. A daughter of Reesi × Foster P, Wasabi brings joyful, spirited energy that epitomizes the Boundless temperament ideal."
    ]
  },
  otis: {
    name: 'Otis',
    titles: 'GCHB Boundless You Make Me Want To Shout',
    photos: [
      { src: BASE+'Otis-Best-of-Winners--scaled.jpg', caption: 'Best of Winners' },
      { src: BASE+'Otis-Done-Fixed-.jpg', caption: 'Otis — Portrait' },
      { src: BASE+'Otis-having-fun.jpg', caption: 'Otis — Fun in the Sun' },
    ],
    bio: [
      "Owned by John and Lisa McCormick. Professionally handled by Zack Helmer. Offered at stud to select and approved bitches. Contact: 703-772-9042 | lisa@murraysod.com. Pedigree, health certifications and pictures available on request.",
      "Dam: CH Boundless Respect All Fear None | Sire: GCHB Banstock N' Highpoints Ours Yours And Mine | Whelped: 7/19/2019 Litter # WS 65236402",
      "Otis — Boundless You Make Me Want To Shout — is a Bronze Grand Champion (GCHB) and the embodiment of joyful charisma. A son of Reesi × Foster P, Otis earned his title with the same enthusiasm he brings to every moment. His personality is as big as his presence — exactly what you expect from a dog whose name makes you want to shout."
    ]
  },
  maui: {
    name: 'Maui',
    titles: 'Boundless Hawaiian Super Man',
    photos: [
      { src: BASE+'Maui-Boundless-Hawaiian-Super-Man-1.jpg', caption: 'Maui — Hawaiian Super Man' },
      { src: BASE+'Maui-in-DC.jpg', caption: 'Maui in Washington D.C.' },
      { src: BASE+'Maui-in-D.C.-scaled.jpg', caption: 'Maui in D.C.' },
      { src: BASE+'Maui-1-1.jpg', caption: 'Maui — Portrait' },
      { src: BASE+'Maui--scaled.jpg', caption: 'Maui — Portrait' },
    ],
    bio: [
      "Owned by Raynette Jervis & Shawn Jervis Jarvis. Professionally handled by Cassandra Vargas. Contact: 202-230-2097. Dam: CH Boundless Respect All Fear None | Sire: GCHB Banstock N' Highpoints Ours Yours And Mine | Whelped: 7/19/2019 Litter # WS 65236404",
      "Maui — Boundless Hawaiian Super Man — brings island sunshine to the Boundless family. A son of Reesi × Foster P, Maui earned a 3 point major at Macungie on September 19, 2021. He approaches life with boundless enthusiasm and the unmistakable dignity of a well-bred Bullmastiff."
    ]
  }
};

/* ===== MODAL ===== */
let modalPhotoIndex = 0;
let modalPhotos = [];

function openDogModal(id) {
  const dog = dogs[id];
  if (!dog) return;
  modalPhotos = dog.photos;
  modalPhotoIndex = 0;

  const heroImg = document.getElementById('modal-img');
  heroImg.src = dog.photos[0].src;
  heroImg.alt = dog.photos[0].caption;

  const stripHTML = dog.photos.length > 1 ? `
    <div class="modal-photo-strip">
      ${dog.photos.map((p, i) => `
        <div class="modal-thumb ${i===0?'active':''}" onclick="setModalPhoto(${i})" title="${p.caption}">
          <img src="${p.src}" alt="${p.caption}" loading="lazy" />
        </div>`).join('')}
    </div>` : '';

  const arrowHTML = dog.photos.length > 1 ? `
    <button class="modal-arrow modal-arrow-prev" onclick="stepModalPhoto(-1)">&#8249;</button>
    <button class="modal-arrow modal-arrow-next" onclick="stepModalPhoto(1)">&#8250;</button>` : '';

  document.getElementById('modal-body').innerHTML = `
    ${arrowHTML}
    <h2>${dog.name}</h2>
    <div class="modal-titles">${dog.titles}</div>
    <div style="width:50px;height:3px;background:var(--gold);margin:0.8rem 0 1.4rem;"></div>
    ${dog.bio.map(p=>`<p>${p}</p>`).join('')}
    ${stripHTML}
    <p id="modal-caption" style="font-size:0.78rem;color:var(--text-light);margin-top:0.5rem;text-align:center;font-style:italic;">${dog.photos[0].caption}</p>
  `;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function setModalPhoto(i) {
  modalPhotoIndex = i;
  const p = modalPhotos[i];
  const heroImg = document.getElementById('modal-img');
  heroImg.style.opacity = '0';
  setTimeout(() => { heroImg.src = p.src; heroImg.alt = p.caption; heroImg.style.opacity = '1'; }, 180);
  document.querySelectorAll('.modal-thumb').forEach((t, idx) => t.classList.toggle('active', idx === i));
  const cap = document.getElementById('modal-caption');
  if (cap) cap.textContent = p.caption;
}

function stepModalPhoto(dir) {
  setModalPhoto((modalPhotoIndex + dir + modalPhotos.length) % modalPhotos.length);
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay') || (e.target.classList && e.target.classList.contains('modal-close'))) {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ===== LIGHTBOX ===== */
function openLightbox(item) {
  const img = item.querySelector('img');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== VIDEO MODAL ===== */
function openVideo(id) {
  document.getElementById('video-iframe').src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  document.getElementById('video-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeVideo(e) {
  if (!e || e.target === document.getElementById('video-modal') || (e.target.classList && e.target.classList.contains('video-modal-close'))) {
    document.getElementById('video-iframe').src = '';
    document.getElementById('video-modal').classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ===== GALLERY FILTER ===== */
function filterGallery(cat, btn) {
  document.querySelectorAll('.gallery-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

/* ===== DOG FILTER ===== */
function filterDogs(tag, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.dog-card').forEach(card => {
    const tags = card.dataset.tags || '';
    card.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
  });
}

/* ===== CONTACT FORM ===== */
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const fields = Object.fromEntries(data.entries());
  const body = `Name: ${fields.fname||''} ${fields.lname||''}\nEmail: ${fields.email||''}\nInquiry: ${fields.inquiry||''}\n\n${fields.message||''}`;
  window.location.href = `mailto:debbeq@verizon.net?subject=Boundless Bullmastiffs Inquiry — ${encodeURIComponent(fields.inquiry||'General')}&body=${encodeURIComponent(body)}`;
  form.style.display = 'none';
  const msg = document.getElementById('form-success');
  if (msg) msg.style.display = 'block';
}

/* ===== KEYBOARD ===== */
document.addEventListener('keydown', e => {
  const modalOpen = document.getElementById('modal-overlay') && document.getElementById('modal-overlay').classList.contains('active');
  if (modalOpen) {
    if (e.key === 'ArrowRight') stepModalPhoto(1);
    if (e.key === 'ArrowLeft') stepModalPhoto(-1);
  }
  if (e.key === 'Escape') { closeModal(); closeLightbox(); closeVideo(); }
});

/* ===== FOOTER YEAR ===== */
document.querySelectorAll('.footer-year').forEach(el => { el.textContent = new Date().getFullYear(); });
