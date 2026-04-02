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
const BASE = '/bbm/images/';
const dogs = {
  jake: {
    name: 'Jake', titles: "GCH CH Wachter's Amethyst Storm RN CGC CGCU CGCA",
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
    bio: ["Jake began Debbe's journey into Bullmastiffs on January 11, 2010. His pedigree traces to the prestigious Leatherneck line, endowing him with an extraordinary headpiece, rich red coat, balanced proportions, and impeccable breed type. Standing 27 inches and weighing 158 pounds, Jake was a commanding presence in the show ring.", "Beyond his conformation achievements, Jake revealed the true depth of the Bullmastiff character. Following Debbe's father's stroke, Jake became an irreplaceable therapeutic companion — facilitating communication and offering gentle, patient companionship when other methods fell short. This experience was so profound that it inspired Debbe to acquire a second Bullmastiff, Shiloh, and ultimately to found Boundless Bullmastiffs.", "Jake earned his Grand Championship and multiple titles spanning Rally, Canine Good Citizen, and Conformation — but his greatest title was simply being loved."]
  },
  shiloh: {
    name: 'Shiloh', titles: 'GCH CH Spiritsongs Thankfully Mine — Multi-Title Excellence',
    photos: [
      { src: BASE+'Shiloh-Best-of-Breed-Aug-2013-Aa-.jpg', caption: 'Best of Breed — Aug 2013' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2014-2-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2014' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2014-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2014 (alt)' },
      { src: BASE+'Shiloh-Best-of-Breed-Nov-2012-Aa-1-1.jpg', caption: 'Best of Breed — Nov 2012' },
      { src: BASE+'Shiloh-Best-of-Opposite-Oct-2012-Aa-1-1.jpg', caption: 'Best of Opposite Sex — Oct 2012' },
      { src: BASE+'Shiloh-Best-of-Opposite-May-2012-Aa-1-1.jpg', caption: 'Best of Opposite Sex — May 2012' },
      { src: BASE+'Shiloh-Group-Placing-Puppy-Aa-1-1.jpg', caption: 'Group Placing — Puppy' },
    ],
    bio: ["Shiloh arrived during a snowstorm and immediately made herself at home, pursuing Jake with persistent companionship until he accepted her as his partner. At 6 months and one day old, Shiloh entered the conformation ring for the first time — and won Winners Bitch for the entire weekend while competing against seasoned Grand Champions.", "Her crowning achievement was her first and only litter, sired by Ch Banstock Bruno of the Northeast. Eleven puppies. Seven Champions by twenty months. Three Grand Champions. This performance earned Shiloh the Gold Registry of Merit.", "Shiloh also became Top Dog at the 2014 ABA Nationals in Gettysburg, Pennsylvania — in agility, after only four months of training. Her titles span conformation, agility, obedience, scent work, canine citizenship, and more."]
  },
  odin: {
    name: 'Odin', titles: 'BPISS GCHS Boundless Carpe Diem BCAT NOHS Gold',
    photos: [
      { src: BASE+'Odin-Group-Placing-April-2017-.jpg', caption: 'Group Placing — April 2017' },
      { src: BASE+'Odin-Best-of-Breed-May-2017.jpg', caption: 'Best of Breed — May 2017' },
      { src: BASE+'Odin-Group-Placing-Nov-2016-Aa-.jpg', caption: 'Group Placing — Nov 2016' },
      { src: BASE+'Odin-Best-of-Breed-Nov-2016-Aa-1.jpg', caption: 'Best of Breed — Nov 2016' },
      { src: BASE+'Odin-Best-of-Breed-Sept-2016-Aa-1.jpg', caption: 'Best of Breed — Sept 2016' },
      { src: BASE+'Odin-Best-of-Breed-Sept-2016a-Aa-1.jpg', caption: 'Best of Breed — Sept 2016 (alt)' },
      { src: BASE+'Odin-Group-4th-Dec-2016-Aa-1.jpg', caption: 'Group 4th — Dec 2016' },
      { src: BASE+'Odin-Best-of-Breed-Feb-2017-Aa-1.jpg', caption: 'Best of Breed — Feb 2017' },
    ],
    bio: ["Odin seized the day from the very beginning. He completed his AKC Championship one day before his first birthday — a remarkable achievement that announced him as a generational talent. Three months later he earned his Grand Championship.", "Ranked #12 among all United States Bullmastiffs by breed points as of May 2017, Odin's show career was marked by multiple Best in Show wins in puppy divisions, multiple Working Group placements, and a Reserve Best in Show in the prestigious Owner-Handler category.", "A son of Shiloh × Bruno, Odin represents the pinnacle of the Boundless breeding program."]
  },
  beans: {
    name: 'Beans', titles: 'CH Boundless Cave Canem CGC',
    photos: [
      { src: BASE+'Beans-Best-of-Winners-Mar-2015-Aa-.jpg', caption: 'Best of Winners — March 2015' },
      { src: BASE+'Beans-Best-of-Winners-May-2016-Aa.jpg', caption: 'Best of Winners — May 2016' },
      { src: BASE+'Beans-Puppy-Group-Placing-2016-Aa-.jpg', caption: 'Puppy Group Placing — 2016' },
      { src: BASE+'Beans-Winners-Opposite-Best-Puppy-April-2016-Aa.jpg', caption: 'Winners & Best Puppy — April 2016' },
      { src: BASE+'Beans-Best-of-Winners-Nov-2016-Aa-.jpg', caption: 'Best of Winners — Nov 2016' },
      { src: BASE+'Beans-Best-of-Winners-Dec-2016-Aa.jpg', caption: 'Best of Winners — Dec 2016' },
    ],
    bio: ["Beans is the athlete of the Boundless family — built with substantial bone and musculature, yet moving with athletic ease. Standing 27 inches and weighing 140 pounds, Beans earned his AKC Championship by 20 months of age.", "He has sired two litters from Canadian and United States champion females, passing on his exceptional structure and sweet temperament. Beyond the show ring, Beans has branched into acting, appearing in video advertisements, and visits schools for at-risk youth as a certified Canine Good Citizen."]
  },
  gus: {
    name: 'Gus', titles: 'BISS GCHG Boundless Going for the Gusto',
    photos: [
      { src: BASE+'Gus-Sand-Dune.jpg', caption: 'Gus — Adventure Day' },
      { src: BASE+'GUS-June-2017.jpg', caption: 'Gus — June 2017' },
      { src: BASE+'Gus-ABA-Nationals-Sept-2017.jpg', caption: 'ABA Nationals — Sept 2017' },
      { src: BASE+'Gus-Best-of-Breed-Jan-2017-Aa.jpg', caption: 'Best of Breed — Jan 2017' },
      { src: BASE+'Gus-Select-Dog-Nov-2017-Aa.jpg', caption: 'Select Dog — Purina National' },
      { src: BASE+'Gus-Best-of-Winners-Sept-2016-Aa-.jpg', caption: 'Best of Winners — Sept 2016' },
      { src: BASE+'Gus-Best-of-Winners-July-2016-Aa-.jpg', caption: 'Best of Winners — July 2016' },
    ],
    bio: ["Gus arrived in the show ring like a force of nature. At just 18 months old, having competed for only seven months, he stood before 32 Bullmastiffs at the 2016 Purina National Dog Show — broadcast on Thanksgiving Day — and earned Select Dog.", "Breed aficionados frequently draw comparisons between Gus and his sire Bruno, noting his extra height, beautiful head structure, and the gentle, melting expression that defines the very best Bullmastiffs.", "Gus has become something of a community fixture, making weekly appearances at local venues where fans gather to greet him."]
  },
  beau: {
    name: 'Beau', titles: 'CH Boundless Floats Like a Butterfly CGC',
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
    bio: ["Beau is described by those who know him as a \"young soul\" — an expression of pure joy and playful affection. Standing 27 inches and weighing 155 pounds, his most prized possession is a stuffed Bullmastiff puppy he carries with great pride.", "He is owned by Charles and Odette Trotter and professionally handled by Brittany Cipriotti. Beau is offered at stud to select approved females."]
  },
  charlie: {
    name: 'Charlie', titles: 'CH Boundless Go Big or Go Home — 40+ Titles',
    photos: [
      { src: BASE+'shiloh-charlie-headsuse-USE-No-Frame-.jpg', caption: 'Shiloh & Charlie — Mother & Daughter' },
    ],
    bio: ["Charlie is Shiloh's compact, powerful daughter — inheriting her mother's beauty in a more condensed package. High intelligence, fierce spirit, and exceptional character compressed into an athletic frame.", "At just four years old, Charlie had accumulated over 40 titles spanning obedience, agility, scent work, rally, and conformation. OFA health certifications — hips, elbows, heart, eyes, and thyroid — are all cleared, CHIC# 161161."]
  },
  reesi: {
    name: 'Reesi', titles: 'CH Boundless Respect All Fear None',
    photos: [
      { src: BASE+'Reesi-Email-MAIN-Picture-01-1-1.jpg', caption: 'Reesi — Main Portrait' },
      { src: BASE+'Reesi-Email-Picture-01a-.jpg', caption: 'Reesi — Portrait' },
    ],
    bio: ["Reesi — Boundless Respect All Fear None — is a daughter of the celebrated Shiloh × Bruno litter, the same pairing that produced Odin, Gus, Charlie, and Beans. She inherited the bold, fearless character that defines the Boundless line.", "Reesi went on to become the dam of the Reesi × Foster P litter, producing Bobbi, Wasabi, Otis, and Maui — each of whom has built an impressive record of their own."]
  },
  gracie: {
    name: 'Gracie', titles: 'GCH Boundless Rae of Fearless Grace',
    photos: [
      { src: BASE+'Gracie-Best-of-Breed-Apr-2017-Aa-1-2.jpg', caption: 'Best of Breed — April 2017' },
      { src: BASE+'Gracie-Grand-Champion-Select-Major-April-2017-Aa-2.jpg', caption: 'Grand Champion Select Major' },
      { src: BASE+'Gracie-Grand-Champion-Select-Major-April-2017-Aa-3.jpg', caption: 'Grand Champion — April 2017' },
    ],
    bio: ["Gracie — Boundless Rae of Fearless Grace — is a Grand Champion from the landmark Shiloh × Bruno litter. She carries both her dam's competitive excellence and her own fearless grace through every ring she enters.", "Gracie earned her Grand Championship with multiple Select Major wins and Best of Breed placements."]
  },
  bobbi: {
    name: 'Bobbi', titles: 'GCH CH Boundless One More Time — 40+ AKC Titles',
    photos: [
      { src: BASE+'Bobbi-GCH-April-2021-.jpg', caption: 'Grand Champion — April 2021' },
      { src: BASE+'Bobbi-Best-of-Opposite-5-pt-major.jpg', caption: 'Best of Opposite — 5pt Major' },
      { src: BASE+'Bobbi-Best-of-Opposite.jpg', caption: 'Best of Opposite' },
      { src: BASE+'Bobbi-agility-scaled.jpg', caption: 'Bobbi — Agility' },
      { src: BASE+'Bobbi-agility-1-scaled.jpg', caption: 'Bobbi — Agility' },
      { src: BASE+'Bobbi-agility-2.jpg', caption: 'Bobbi — Agility' },
    ],
    bio: ["Bobbi is one of the most accomplished dogs in the Boundless program — a Grand Champion who has earned titles in Rally, Obedience, Agility, Scent Work at every level, Tracking, and Therapy Dog work. Her title list spans over 40 AKC designations.", "A daughter of Reesi × Foster P, Bobbi is a Therapy Dog Excellent (THDX), a Nose Work Champion at multiple levels, and an agility competitor. Full titles: RA RN CD TKI TKN CGC ATT CGCU CGCA FDC RATO RATN RATI SCM SWE SIE SBE SEE SCE SWA SEA SBA SCA SIA SWN SEN SBN SCN SIN THD ThDN THDA THDX NW3 NW2 NW1."]
  },
  wasabi: {
    name: 'Wasabi', titles: 'GCH Boundless Up All Night For Good Fun ThDN BCAT CGCA TKN RN',
    photos: [
      { src: BASE+'Wasabi-Winners-Bitch-.jpg', caption: 'Winners Bitch' },
      { src: BASE+'Wasabi-earning-her-BCAT.jpg', caption: 'Earning Her BCAT' },
      { src: BASE+'Wasabi-and-Mom-Wedding-day.jpg', caption: 'Wasabi — Wedding Day with Mom' },
    ],
    bio: ["Wasabi — Boundless Up All Night For Good Fun — lives up to every word of her registered name. A Grand Champion who earned her BCAT (coursing ability) and Therapy Dog Notable alongside her conformation career.", "A daughter of Reesi × Foster P, Wasabi brings joyful, spirited energy that epitomizes the Boundless temperament ideal."]
  },
  otis: {
    name: 'Otis', titles: 'GCHB Boundless You Make Me Want To Shout',
    photos: [
      { src: BASE+'Otis-Done-Fixed-.jpg', caption: 'Otis — Portrait' },
      { src: BASE+'Otis-Best-of-Winners--scaled.jpg', caption: 'Best of Winners' },
      { src: BASE+'Otis-having-fun.jpg', caption: 'Otis — Having Fun' },
    ],
    bio: ["Otis — Boundless You Make Me Want To Shout — is a Bronze Grand Champion (GCHB) and the embodiment of joyful charisma. A son of Reesi × Foster P, Otis earned his title with the same enthusiasm he brings to every moment.", "His personality is as big as his presence — exactly what you expect from a dog whose name makes you want to shout."]
  },
  maui: {
    name: 'Maui', titles: 'Boundless Hawaiian Super Man',
    photos: [
      { src: BASE+'Maui-Boundless-Hawaiian-Super-Man-1.jpg', caption: 'Maui — Hawaiian Super Man' },
      { src: BASE+'Maui-in-DC.jpg', caption: 'Maui in Washington D.C.' },
      { src: BASE+'Maui-in-D.C.-scaled.jpg', caption: 'Maui in D.C.' },
      { src: BASE+'Maui-1-1.jpg', caption: 'Maui — Portrait' },
      { src: BASE+'Maui--scaled.jpg', caption: 'Maui — Portrait' },
    ],
    bio: ["Maui — Boundless Hawaiian Super Man — brings island sunshine to the Boundless family. A son of Reesi × Foster P, Maui has charmed everyone he has encountered, including an entire visit to Washington D.C.", "He approaches life with boundless enthusiasm and the unmistakable dignity of a well-bred Bullmastiff."]
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
