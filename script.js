// ============================================
//   VISIT MUSANZE — Full App Script
// ============================================

// ── EmailJS credentials ──────────────────────
const EMAILJS_SERVICE_ID  = 'service_6b0rbuc';
const EMAILJS_TEMPLATE_ID = 'template_f8pccge';
const EMAILJS_PUBLIC_KEY  = 'QICH0i1piXaX-4Rtx';

// ── Wikimedia image helper ───────────────────
// Wikipedia /thumb/ URLs are CDN-optimised thumbnails designed for embedding.
// DO NOT strip /thumb/ — that turns them into full multi-MB originals which
// time out on slow connections. Just use the URL as-is with referrer policy.
//
// wikiTag(url, alt, cssClass, fallbackClass, fallbackLabel, inlineStyle)
// Returns an <img> with referrerpolicy + crossorigin + loading=lazy,
// and an onerror that swaps to the coloured placeholder div on failure.
function wikiTag(url, alt, cssClass, fallbackClass, fallbackLabel, inlineStyle) {
  if (!url) {
    return `<div class="${fallbackClass}"${inlineStyle ? ` style="${inlineStyle}"` : ''}>${fallbackLabel || ''}</div>`;
  }
  // Escape single quotes inside the fallback HTML used in the onerror attribute
  const label  = (fallbackLabel  || '').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  const fClass = (fallbackClass  || '').replace(/'/g, '&#39;');
  const fStyle = (inlineStyle    || '').replace(/'/g, '&#39;');
  const imgClass = cssClass ? ` class="${cssClass}"` : '';
  const imgStyle = inlineStyle ? ` style="${inlineStyle}"` : '';
  return `<img src="${url}" alt="${alt}"${imgClass}${imgStyle}
    referrerpolicy="no-referrer" crossorigin="anonymous" loading="lazy"
    onerror="this.outerHTML='<div class=\\'${fClass}\\'${fStyle ? ` style=\\'${fStyle}\\'` : ''}>${label}</div>'">`;
}

// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const appContent = document.getElementById('app-content');
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('nav-links');
  const modal      = document.getElementById('volcano-modal');
  const modalClose = document.getElementById('modal-close');
  let currentPage  = 'home';

  // ── Navbar scroll ────────────────────────────
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Hamburger ────────────────────────────────
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
  });

  // ── Modal ────────────────────────────────────
  let _modalJustOpened = false;

  modalClose.addEventListener('click', e => { e.stopPropagation(); closeModal(); });
  modal.addEventListener('click', e => {
    if (e.target === modal && !_modalJustOpened) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function openModal(html) {
    document.getElementById('modal-body').innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    _modalJustOpened = true;
    setTimeout(() => { _modalJustOpened = false; }, 350);
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Navigation ───────────────────────────────
  function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.nav-item').forEach(el =>
      el.classList.toggle('active', el.dataset.page === page)
    );
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');

    if (page === 'home') {
      appContent.innerHTML = renderHome();
      window.scrollTo({ top: 0 });
    } else {
      appContent.innerHTML = renderPage(page);
      const hero = document.getElementById('hero');
      window.scrollTo({ top: hero ? hero.offsetHeight - 80 : 0, behavior: 'smooth' });
    }
    bindAll();
  }

  function bindAll() {
    document.querySelectorAll('#app-content [data-page]').forEach(el => {
      el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.page); });
    });
    document.querySelectorAll('.volcano-card[data-volcano]').forEach(card => {
      card.addEventListener('click', e => {
        e.stopPropagation();
        openVolcanoModal(card.dataset.volcano);
      });
    });
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleContactSubmit);
  }

  // Global nav/footer delegation
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-page]');
    if (!el) return;
    e.preventDefault();
    navigate(el.dataset.page);
  });

  // ─────────────────────────────────────────────
  //  ALL VOLCANO DATA  (all 5 volcanoes complete)
  // ─────────────────────────────────────────────
  const volcanoData = {
    karisimbi: {
      name:       'Mount Karisimbi',
      subtitle:   'The Roof of Rwanda',
      eyebrow:    'Dormant Stratovolcano',
      elevation:  '4,507m',
      duration:   '2 Days',
      difficulty: 'Challenging',
      imgClass:   'bg-vol1',
      imgUrl:     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
      description: [
        'Mount Karisimbi is the highest of the eight Virunga volcanoes and Rwanda\'s highest peak, reaching a breathtaking 4,507 metres. Its summit is frequently capped with mist or light snow — giving rise to its name, which means "white shell" in Kinyarwanda.',
        'The two-day trek to the summit is one of the most rewarding adventures in East Africa. Trekkers typically camp at around 3,700m on the first night, then push for the summit at dawn to catch sweeping views over the Virunga chain, Lake Kivu, and vast stretches of Central Africa.',
        'The mountain\'s slopes pass through bamboo forest, moorland and Afro-alpine heath — an ecological journey as remarkable as the physical challenge itself.',
      ],
      activities: ['2-Day Summit Trek', 'Wildlife Spotting', 'Camping at 3,700m', 'Bird Watching', 'Photography', 'Stargazing'],
      bookLink: 'https://www.volcanoesparkrwanda.org/what-to-do/mount-karisimbi/'
    },
    bisoke: {
      name:       'Mount Bisoke',
      subtitle:   'The Crater Lake Summit',
      eyebrow:    'Dormant Volcano',
      elevation:  '3,711m',
      duration:   '1 Day',
      difficulty: 'Moderate',
      imgClass:   'bg-vol3',
      imgUrl:     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg',
      description: [
        'Mount Bisoke is the most popular day hike in Volcanoes National Park, famous for its emerald crater lake nestled at the 3,711m summit — one of the most photographed spots in Rwanda.',
        'The hike takes 6–8 hours round trip through dense bamboo zones and Hagenia woodland, home to buffalo, golden monkeys, and over 200 bird species.',
        'Clear mornings offer views across to Karisimbi on one side and deep into the DRC on the other. The crater lake itself — Lac de Bisoke — is a perfectly round pool that rewards every step of the climb.',
      ],
      activities: ['Day Hike to Crater Lake', 'Golden Monkey Encounter', 'Bird Watching', 'Nature Photography', 'Wildlife Tracking'],
      bookLink: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    sabyinyo: {
      name:       'Mount Sabyinyo',
      subtitle:   "The Old Man's Teeth",
      eyebrow:    'Extinct Volcano',
      elevation:  '3,634m',
      duration:   '1 Day',
      difficulty: 'Challenging',
      imgClass:   'bg-vol4',
      imgUrl:     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
      description: [
        'Sabyinyo means "Old Man\'s Teeth" in Kinyarwanda — a fitting name for a volcano whose jagged, eroded peaks resemble worn molars against the sky. It is the oldest and most heavily eroded of the Virunga chain.',
        'The summit ridge is the meeting point of three countries: Rwanda, Uganda, and the Democratic Republic of Congo — making it one of the only places on earth where you can stand in three nations at once.',
        'The hike involves exciting ladder-assisted scrambles and exposed ridges, making it one of the most dramatic ascents in the region. Gorilla families often range the lower slopes.',
      ],
      activities: ['3-Country Summit', 'Gorilla Encounters', 'Ladder Ridge Scramble', 'Photography', 'Wildlife Watching'],
      bookLink: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    muhabura: {
      name:       'Mount Muhabura',
      subtitle:   'The Guide',
      eyebrow:    'Dormant Volcano',
      elevation:  '4,127m',
      duration:   '1–2 Days',
      difficulty: 'Strenuous',
      imgClass:   'bg-vol2',
      imgUrl:     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg',
      description: [
        'Mount Muhabura — "The Guide" — towers at 4,127 metres and was historically used as a navigation landmark by travellers across the Great Lakes region. Its perfectly symmetrical cone is visible for miles.',
        'A small crater lake sits at the summit, and on clear days panoramic views stretch far into Uganda, Rwanda and the DRC — a reward that justifies the strenuous 8–10 hour round trip.',
        'Golden monkeys inhabit the bamboo zones lower on the mountain and are frequently encountered during the ascent, making the journey as memorable as the destination.',
      ],
      activities: ['Summit Day Hike', 'Crater Lake', 'Golden Monkey Spotting', 'Panoramic Views', 'Photography'],
      bookLink: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    gahinga: {
      name:       'Mount Gahinga',
      subtitle:   'The Pile of Stones',
      eyebrow:    'Dormant Volcano',
      elevation:  '3,474m',
      duration:   '1 Day',
      difficulty: 'Moderate',
      imgClass:   'bg-vol5',
      imgUrl:     '',
      description: [
        'The smallest of Rwanda\'s Virunga volcanoes at 3,474m, Mount Gahinga (meaning "pile of stones") sits between Muhabura and Sabyinyo on the Rwanda–Uganda border. Despite its modest size, it is enchanting.',
        'The summit holds a swamp — unusual for the region — and the mountain is particularly beloved by ornithologists for exceptional bird diversity. Mountain gorillas also range through Gahinga\'s lower forested flanks.',
        'Its relative accessibility and moderate difficulty make it an ideal acclimatisation hike before attempting the higher summits of Muhabura or Karisimbi.',
      ],
      activities: ['Summit Hike', 'Bamboo Forest Walk', 'Birding Safari', 'Mountain Gorilla Range', 'Photography'],
      bookLink: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
  };

  // ─────────────────────────────────────────────
  //  HOTEL DATA  (all images with wikiImg fix)
  // ─────────────────────────────────────────────
  const hotelData = {
    luxury: [
      {
        name: 'Five Volcanoes Boutique Hotel', stars: 5, tag: 'Luxury',
        location: 'Kinigi, near Volcanoes National Park',
        desc: 'Musanze\'s finest boutique retreat: 13 beautifully appointed rooms, outdoor pool, full-board dining, and a Volcano Manor villa. Post-trek boot cleaning and foot massages are complimentary.',
        price: 'From $1,080/night (full board)',
        imgClass: 'bg-vol1',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/800px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg',
        link: 'https://fivevolcanoesrwanda.com/'
      },
      {
        name: 'Virunga Lodge', stars: 5, tag: 'Luxury',
        location: 'Ridge above Lakes Bulera & Ruhondo',
        desc: 'Perched on a dramatic ridge with arguably the best views in Rwanda — overlook twin lakes and five Virunga peaks simultaneously. Stone bandas and eco-conscious ethos.',
        price: 'From $850/night',
        imgClass: 'bg-vol3',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
        link: 'https://volcanoessafaris.com/lodges/virunga-lodge/'
      },
      {
        name: 'Wilderness Bisate', stars: 5, tag: 'Ultra Luxury',
        location: 'Bisate Village, Volcanoes National Park',
        desc: 'Six magnificent forest villas embedded in a volcanic crater. Immersive ecological experience with daily guided treks, reforestation walks, and ultra-high-end service.',
        price: 'From $2,200/night',
        imgClass: 'bg-vol2',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
        link: 'https://www.wildernessdestinations.com/destinations/rwanda/wilderness-bisate/'
      },
    ],
    midrange: [
      {
        name: "The Bishop's House Rwanda", stars: 4, tag: 'Boutique',
        location: 'Musanze Town Centre',
        desc: 'An elegant 9-room boutique hotel in a historic property with manicured gardens, bird-rich grounds, and a warm personal atmosphere. Walking distance to Musanze town.',
        price: 'From $180/night',
        imgClass: 'bg-slate',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg/800px-Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg',
        link: 'https://www.the-bishops-house.com/'
      },
      {
        name: 'Virunga Inn Resort & Spa', stars: 4, tag: 'Resort & Spa',
        location: 'Near Red Rocks Arts Centre, Musanze',
        desc: 'Twenty individually furnished rooms with fireplaces, set within a nature reserve. Full spa, gym, lush gardens, and complimentary breakfast. 3.2km from Volcanoes National Park.',
        price: 'From $140/night',
        imgClass: 'bg-teal',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg',
        link: 'https://www.booking.com/hotel/rw/virunga-inn-resort-amp-spa.html'
      },
      {
        name: 'Amakoro Songa Lodge', stars: 4, tag: 'Eco-Lodge',
        location: 'Kinigi, Musanze District',
        desc: 'Community-focused eco-lodge close to the park gates. Beautiful rooms with fireplaces, excellent Rwandan cuisine, and a team deeply knowledgeable about local culture.',
        price: 'From $160/night',
        imgClass: 'bg-green',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg',
        link: 'https://www.amakorosongalodge.com/'
      },
    ],
    budget: [
      {
        name: 'Kinigi Guest House', stars: 3, tag: 'Budget',
        location: 'Kinigi Village',
        desc: 'Simple, clean, and cheerful accommodation minutes from the park headquarters. Ideal for budget-conscious gorilla trekkers. Friendly staff and reliable WiFi.',
        price: 'From $45/night',
        imgClass: 'bg-brown',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg',
        link: 'https://www.tripadvisor.com/Hotel_Review-g12120944-d1218085-Reviews-Kinigi_Guest_House-Kinigi_Musanze_District.html'
      },
      {
        name: 'Best View Hotel', stars: 3, tag: 'City Hotel',
        location: 'Musanze City Centre',
        desc: 'Comfortable rooms in the heart of Musanze with views of the Virunga hills. Rooftop terrace restaurant, art deco interior, and easy access to cafés, markets, and transport.',
        price: 'From $35/night',
        imgClass: 'bg-indigo',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/640px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
        link: 'https://www.volcanoesnationalpark.org/lodges/best-view-hotel-musanze/'
      },
      {
        name: 'La Paillotte Gorilla Place', stars: 3, tag: 'Guest House',
        location: 'Mitobo, Musanze',
        desc: 'Characterful guest house popular with travellers. Known for warm Rwandan hospitality, hearty meals, lush garden, and unbeatable location for early gorilla trek departures.',
        price: 'From $40/night',
        imgClass: 'bg-lime',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
        link: 'https://www.tripadvisor.com/Hotel_Review-g3193015-d1218093-Reviews-La_Paillotte_Gorilla_Place-Musanze_Northern_Province.html'
      },
    ]
  };

  // ─────────────────────────────────────────────
  //  GALLERY IMAGES
  // ─────────────────────────────────────────────
  const galleryImages = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg', caption: 'Mountain gorilla, Volcanoes National Park', bg: 'bg-vol1', span: true },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg', caption: 'Karisimbi, Nyamuragira & Bisoke at sunset', bg: 'bg-vol3' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg', caption: 'Mount Sabyinyo, Kinigi sector', bg: 'bg-vol4' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg', caption: 'Mount Bisoke trail', bg: 'bg-vol2' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg', caption: 'Mount Muhabura rising above the plains', bg: 'bg-slate' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg/800px-Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg', caption: 'Musanze and Volcanoes National Park', bg: 'bg-green' },
  ];

  // ─────────────────────────────────────────────
  //  VOLCANO MODAL  (full content, all 5 working)
  // ─────────────────────────────────────────────
  function openVolcanoModal(key) {
    const v = volcanoData[key];
    if (!v) { console.warn('No volcano data for key:', key); return; }

    // Hero image — fallback is the coloured placeholder div
    const heroImg = v.imgUrl
      ? wikiTag(v.imgUrl, v.name, 'modal-img', `modal-img-placeholder ${v.imgClass}`, v.name, '')
      : `<div class="modal-img-placeholder ${v.imgClass}">${v.name}</div>`;

    openModal(`
      ${heroImg}
      <div class="modal-content">
        <p class="modal-eyebrow">${v.eyebrow}</p>
        <h2 class="modal-title">${v.name}</h2>
        <p class="modal-subtitle">${v.subtitle}</p>

        <div class="modal-stats">
          <div class="modal-stat">
            <div class="modal-stat-num">${v.elevation}</div>
            <div class="modal-stat-label">Elevation</div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat-num">${v.duration}</div>
            <div class="modal-stat-label">Hike Duration</div>
          </div>
          <div class="modal-stat">
            <div class="modal-stat-num">${v.difficulty}</div>
            <div class="modal-stat-label">Difficulty</div>
          </div>
        </div>

        <div class="modal-body-text">
          ${v.description.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="modal-activities">
          <h4>Activities &amp; Experiences</h4>
          <div class="activity-pills">
            ${v.activities.map(a => `<span class="activity-pill">${a}</span>`).join('')}
          </div>
        </div>

        <a href="${v.bookLink}" target="_blank" rel="noopener" class="modal-book-btn">
          Book This Hike →
        </a>
      </div>
    `);
  }

  // ─────────────────────────────────────────────
  //  PAGE RENDERERS
  // ─────────────────────────────────────────────
  function renderPage(page) {
    const map = {
      destinations: renderDestinations,
      volcanoes:    renderVolcanoes,
      hotels:       renderHotels,
      trip:         renderTrip,
      sports:       renderSports,
      food:         renderFood,
      gallery:      renderGallery,
      contact:      renderContact,
      advertise:    renderAdvertise,
    };
    return map[page] ? map[page]() : renderHome();
  }

  // ── HOME ────────────────────────────────────
  function renderHome() {
    return `
      <div>
        <div class="home-intro">
          <div class="home-intro-text">
            <h2>Welcome to the <em>Heart of Rwanda</em></h2>
            <p>Musanze sits at the foot of the Virunga volcanoes — a land where ancient forests shelter the world's last mountain gorillas, twin lakes shimmer beneath volcanic peaks, and culture runs as deep as the lava tunnels beneath your feet.</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <button class="btn-primary" data-page="destinations">Explore Destinations</button>
              <button class="btn-ghost" data-page="trip">Plan Your Visit</button>
            </div>
          </div>
          <div class="home-intro-stats">
            <div class="stat-item"><div class="stat-num">5+</div><div class="stat-label">Virunga Volcanoes</div></div>
            <div class="stat-item"><div class="stat-num">~700</div><div class="stat-label">Mountain Gorillas Left</div></div>
            <div class="stat-item"><div class="stat-num">2,400m</div><div class="stat-label">Elevation Above Sea Level</div></div>
            <div class="stat-item"><div class="stat-num">2h</div><div class="stat-label">From Kigali</div></div>
          </div>
        </div>

        <div class="home-highlights">
          <p class="section-label">Musanze Climate</p>
          <div class="weather-strip">
            <div class="weather-card"><div class="weather-icon">🌡️</div><div class="weather-label">Average Temp</div><div class="weather-val">15°C</div><div class="weather-sub">Cool highlands year-round</div></div>
            <div class="weather-card"><div class="weather-icon">🌧️</div><div class="weather-label">Best Season</div><div class="weather-val">Jun–Sep</div><div class="weather-sub">Long dry season</div></div>
            <div class="weather-card"><div class="weather-icon">🦍</div><div class="weather-label">Peak Trekking</div><div class="weather-val">Jul–Aug</div><div class="weather-sub">Clearest trails & views</div></div>
            <div class="weather-card"><div class="weather-icon">✈️</div><div class="weather-label">Nearest Airport</div><div class="weather-val">KGL</div><div class="weather-sub">Kigali Int'l — 2h drive</div></div>
          </div>

          <div class="highlight-strip">
            <div class="highlight-item"><div class="highlight-icon">🦍</div><h3>Gateway to Gorillas</h3><p>The world's best mountain gorilla trekking experience, starting right here in Musanze.</p></div>
            <div class="highlight-item"><div class="highlight-icon">🌋</div><h3>Volcanic Landscapes</h3><p>Hike active and dormant volcanoes with crater lakes, lava caves, and sweeping highland views.</p></div>
            <div class="highlight-item"><div class="highlight-icon">🎭</div><h3>Rich Culture</h3><p>Dance, craft, and community — Rwandan traditions are alive and welcoming in Musanze.</p></div>
          </div>

          <p class="section-label">Featured Destinations</p>
          <h2 class="section-title">Where to <em>Explore</em></h2>
          <div class="grid-3">
            ${destinationCards().slice(0,3).map(cardHTML).join('')}
          </div>
          <div style="text-align:center;margin-top:40px;">
            <button class="btn-ghost" data-page="destinations">View All Destinations →</button>
          </div>
        </div>
      </div>
    `;
  }

  // ── DESTINATIONS ────────────────────────────
  function destinationCards() {
    return [
      { tag:'Wildlife',   title:'Gorilla Trekking',         text:'Trek through dense forest to observe endangered mountain gorillas in their natural habitat — the ultimate wildlife encounter.', bg:'bg-green',  label:'Volcanoes National Park',  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg', link:'https://visitrwanda.com/interests/gorilla-tracking/' },
      { tag:'Adventure',  title:'Musanze Caves',            text:'Ancient lava tunnels stretching for kilometers, once used as wartime shelters. Fascinating geology underground.',               bg:'bg-slate',  label:'City Centre',              img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/musanze-caves/' },
      { tag:'Nature',     title:'Twin Lakes',               text:'Burera & Ruhondo sit nestled among volcanic peaks — boat trips, birdwatching, and island villages await.',                      bg:'bg-teal',   label:'Lakes Burera & Ruhondo',   img:'', link:'https://www.insidevolcanoesnationalpark.com/what-to-see-in-volcanoes-national-park/' },
      { tag:'History',    title:'Dian Fossey Memorial',     text:'Hike to the resting place of the legendary primatologist and visit the Karisoke Research Center she founded.',                 bg:'bg-purple', label:'Volcanoes National Park',  img:'', link:'https://www.volcanoesparkrwanda.org/dian-fossey-hike/' },
      { tag:'Culture',    title:"Iby'Iwacu Cultural Village", text:'Traditional dances, crafts, local food and community — an immersive and unforgettable Rwandan cultural experience.',           bg:'bg-amber',  label:'Gorilla Guardians Village',img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/ibyiwacu-cultural-village/' },
      { tag:'Wildlife',   title:'Golden Monkey Tracking',   text:'Playful and endemic to these volcanic forests — tracking golden monkeys is an active and joyful trek.',                        bg:'bg-pink',   label:'Volcanoes National Park',  img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/golden-monkey-trekking/' },
    ];
  }

  function cardHTML(d) {
    const imgHTML = d.img
      ? wikiTag(d.img, d.title, 'card-img', `card-img-placeholder ${d.bg}`, d.label||'')
      : `<div class="card-img-placeholder ${d.bg}">${d.label||''}</div>`;
    const linkHTML = d.link
      ? `<a href="${d.link}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">Learn More →</a>`
      : '';
    return `<div class="card">${imgHTML}<div class="card-body"><p class="card-tag">${d.tag}</p><h3 class="card-title">${d.title}</h3><p class="card-text">${d.text}</p>${linkHTML}</div></div>`;
  }

  function renderDestinations() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Places to Visit</p>
        <h1 class="page-title">Incredible <em>Destinations</em></h1>
        <p class="page-desc">Six extraordinary experiences, all within reach of Musanze town.</p>
      </div>
      <div class="container"><div class="grid-3">${destinationCards().map(cardHTML).join('')}</div></div>
    `;
  }

  // ── VOLCANOES ────────────────────────────────
  function renderVolcanoes() {
    const volcs = [
      { key:'karisimbi', name:'Mount Karisimbi', sub:'4,507m · The Roof of Rwanda',      tag:'2-Day Trek', text:"Rwanda's highest peak, a two-day challenge rewarded with snow-capped summit views over the Virunga chain.", bg:'bg-vol1', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg' },
      { key:'bisoke',    name:'Mount Bisoke',    sub:'3,711m · The Crater Lake',          tag:'Day Hike',   text:'The classic day hike — emerald crater lake at the summit, golden monkeys on the way up, 200+ birds.',   bg:'bg-vol3', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/640px-Mt_Bisoke%2C_Rwanda.jpg' },
      { key:'sabyinyo',  name:'Mount Sabyinyo',  sub:'3,634m · Three Borders Summit',    tag:'Day Hike',   text:'Stand in Rwanda, Uganda, and DRC at once at the summit of this ancient, dramatically eroded volcano.',  bg:'bg-vol4', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/640px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg' },
      { key:'muhabura',  name:'Mount Muhabura',  sub:'4,127m · The Guide',               tag:'Day / 2-Day',text:'The sentinel of the Virungas — a perfect cone visible for miles, with a crater lake at 4,127m.',        bg:'bg-vol2', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/640px-Muhavura_Volcano_in_Rwanda.jpg' },
      { key:'gahinga',   name:'Mount Gahinga',   sub:'3,474m · The Pile of Stones',      tag:'Day Hike',   text:'The smallest of the five, beloved for its bamboo forest, summit swamp, and incredible birdlife.',       bg:'bg-vol5', img:'' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">The Virunga Chain</p>
        <h1 class="page-title">Rwanda's <em>Volcanoes</em></h1>
        <p class="page-desc">Five extraordinary volcanoes — click any card for full details, trail guides, and booking links.</p>
      </div>
      <div class="container">
        <div class="volcano-grid">
          ${volcs.map(v => {
            const imgEl = v.img
              ? wikiTag(v.img, v.name, 'volcano-card-img', `card-img-placeholder ${v.bg}`, v.name, 'height:240px;')
              : `<div class="card-img-placeholder ${v.bg}" style="height:240px;">${v.name}</div>`;
            const [elev, subtitle] = v.sub.split('·').map(s => s.trim());
            return `
              <div class="volcano-card" data-volcano="${v.key}">
                <div class="volcano-card-img-wrap">
                  ${imgEl}
                  <span class="volcano-badge">${v.tag}</span>
                </div>
                <div class="volcano-body">
                  <h3 class="volcano-title">${v.name}</h3>
                  <div class="volcano-meta">
                    <span>${elev}</span>
                    <span>${subtitle || ''}</span>
                  </div>
                  <p class="volcano-text">${v.text}</p>
                  <span class="volcano-cta">View Details &amp; Book →</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div style="margin-top:64px;padding:32px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);">
          <p class="section-label">Know Before You Go</p>
          <h3 style="font-family:var(--ff-display);font-size:1.6rem;color:var(--white);margin-bottom:20px;">Trekking Essentials</h3>
          <div class="grid-3">
            <div><p class="card-tag">Permits</p><p class="card-text">All hikes require a permit from Rwanda Development Board (RDB). Book via <a href="https://www.rdb.rw" target="_blank" style="color:var(--gold)">rdb.rw</a> or a licensed tour operator.</p></div>
            <div><p class="card-tag">What to Bring</p><p class="card-text">Waterproof boots, rain jacket, long trousers, gloves (high summits), 2L+ water, snacks, and a headlamp for early starts.</p></div>
            <div><p class="card-tag">Fitness Level</p><p class="card-text">Most hikes need moderate fitness. Bisoke suits active hikers; Karisimbi demands serious preparation and high-altitude experience.</p></div>
          </div>
        </div>
      </div>
    `;
  }

  // ── HOTELS ──────────────────────────────────
  function hotelCardHTML(h) {
    const imgEl = h.imgUrl
      ? wikiTag(h.imgUrl, h.name, 'hotel-img', `hotel-img-placeholder ${h.imgClass}`, '')
      : `<div class="hotel-img-placeholder ${h.imgClass}"></div>`;
    const stars = '★'.repeat(h.stars) + '☆'.repeat(5 - h.stars);
    return `
      <div class="hotel-card">
        ${imgEl}
        <div class="hotel-body">
          <div class="hotel-stars">${stars}</div>
          <div class="hotel-name">${h.name}</div>
          <div class="hotel-location">${h.location}</div>
          <p class="hotel-desc">${h.desc}</p>
          <p class="hotel-price">${h.price}</p>
          <a href="${h.link}" target="_blank" rel="noopener" class="hotel-link">View &amp; Book →</a>
        </div>
      </div>
    `;
  }

  function renderHotels() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Where to Stay</p>
        <h1 class="page-title">Hotels &amp; <em>Lodges</em></h1>
        <p class="page-desc">From ultra-luxury crater villas to warm budget guest houses — Musanze has the perfect base for every traveller.</p>
      </div>
      <div class="container">
        <div class="hotel-tiers">
          <div>
            <div class="tier-label-wrap"><div class="tier-line"></div><span class="tier-label">Luxury &amp; Ultra Luxury</span><div class="tier-line"></div></div>
            <div class="grid-3">${hotelData.luxury.map(hotelCardHTML).join('')}</div>
          </div>
          <div>
            <div class="tier-label-wrap"><div class="tier-line"></div><span class="tier-label">Mid-Range &amp; Boutique</span><div class="tier-line"></div></div>
            <div class="grid-3">${hotelData.midrange.map(hotelCardHTML).join('')}</div>
          </div>
          <div>
            <div class="tier-label-wrap"><div class="tier-line"></div><span class="tier-label">Budget &amp; Guest Houses</span><div class="tier-line"></div></div>
            <div class="grid-3">${hotelData.budget.map(hotelCardHTML).join('')}</div>
          </div>
        </div>
        <div style="margin-top:56px;padding:28px 32px;background:var(--bg-card);border:1px solid var(--border-h);border-radius:var(--radius);display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
          <div style="flex:1;min-width:220px;">
            <p class="card-tag">Booking Tip</p>
            <p style="font-family:var(--ff-serif);font-size:1.1rem;font-style:italic;color:var(--text-muted);font-weight:300;">Gorilla trekking permits sell out months in advance. Book your hotel and permit together for the best experience.</p>
          </div>
          <a href="https://visitrwanda.com/experiences/gorilla-trekking/" target="_blank" rel="noopener" class="btn-primary">Book Gorilla Permits →</a>
        </div>
      </div>
    `;
  }

  // ── TRIP ────────────────────────────────────
  function renderTrip() {
    const tips = [
      { icon:'🎫', text:'Book gorilla permits well in advance — especially for peak season (Jun–Sep, Dec–Feb).' },
      { icon:'🥾', text:'Pack sturdy waterproof hiking boots, rain jacket, and long sleeves for treks.' },
      { icon:'💧', text:'Stay hydrated and acclimatise to the altitude (2,400m+) before strenuous hikes.' },
      { icon:'🧭', text:'Hire a local guide for cultural tours to support the community directly.' },
      { icon:'🌿', text:'Combine activities: gorilla trekking, cave exploration, lake cruises, cultural village.' },
      { icon:'🍽️', text:'Try authentic Rwandan food — brochettes, isombe, and fresh highland produce.' },
      { icon:'💊', text:'Consult your doctor about malaria prophylaxis and altitude medication beforehand.' },
      { icon:'📵', text:'During gorilla encounters: stay 7m away, no flash, keep voices low, max 1 hour.' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Trip Planning</p>
        <h1 class="page-title">Plan Your <em>Visit</em></h1>
        <p class="page-desc">Everything you need to craft an unforgettable Musanze itinerary.</p>
      </div>
      <div class="trip-layout">
        <div>
          ${wikiTag(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg',
            'Mountain Gorilla', 'trip-hero-img', 'bg-vol1', '', ''
          )}
          <p style="font-size:0.75rem;color:var(--text-muted);font-style:italic;margin-bottom:40px;">Mountain gorilla, Volcanoes National Park. Photo: Rod Waddington, CC BY-SA 2.0.</p>

          <p class="section-label">Sample Itineraries</p>
          <h2 class="section-title" style="margin-bottom:28px;">Pick Your <em>Adventure</em></h2>
          <div class="grid-2" style="margin-bottom:48px;">
            <div class="card"><div class="card-img-placeholder bg-green" style="height:120px;">3 Days</div><div class="card-body"><p class="card-tag">Short Break</p><h3 class="card-title">3-Day Classic</h3><p class="card-text">Day 1: Arrive, Musanze Caves. Day 2: Gorilla trekking. Day 3: Iby'Iwacu Cultural Village + Twin Lakes boat trip.</p></div></div>
            <div class="card"><div class="card-img-placeholder bg-vol2" style="height:120px;">5 Days</div><div class="card-body"><p class="card-tag">Full Experience</p><h3 class="card-title">5-Day Explorer</h3><p class="card-text">Adds: Mount Bisoke day hike, golden monkey tracking, Dian Fossey memorial, cycling at Africa Rising Centre, Mukungwa River canoe.</p></div></div>
            <div class="card"><div class="card-img-placeholder bg-vol1" style="height:120px;">7 Days</div><div class="card-body"><p class="card-tag">Deep Dive</p><h3 class="card-title">7-Day Immersion</h3><p class="card-text">All of the above plus: Karisimbi 2-day summit, kayaking on Lake Burera, village community tour, and time to soak up the highland silence.</p></div></div>
            <div class="card"><div class="card-img-placeholder bg-teal" style="height:120px;">Getting There</div><div class="card-body"><p class="card-tag">Transport</p><h3 class="card-title">Kigali to Musanze</h3><p class="card-text">Fly into Kigali (KGL). Take a 2h bus (Volcano Express, ~$3) or private transfer (~$60). Road is smooth and scenic.</p></div></div>
          </div>
        </div>
        <div>
          <div class="trip-tips">
            <h3>Travel Tips</h3>
            ${tips.map(t => `<div class="tip-item"><div class="tip-icon">${t.icon}</div><p class="tip-text">${t.text}</p></div>`).join('')}
            <div style="margin-top:20px;text-align:center;">
              <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">Need personalised help?</p>
              <button class="btn-primary" data-page="contact" style="font-size:0.78rem;padding:11px 22px;">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── SPORTS ──────────────────────────────────
  function renderSports() {
    const activities = [
      { tag:'Hiking',        title:'Volcano Hiking',          text:"Conquer the Virungas — from Bisoke's day hike and crater lake to the two-day ascent of Karisimbi (4,507m).", bg:'bg-vol1', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg' },
      { tag:'Wildlife Trek', title:'Golden Monkey Tracking',  text:'An energetic bamboo-forest trek to find the endemic golden monkeys. Playful, colourful, and utterly charming.',   bg:'bg-amber', img:'' },
      { tag:'Cycling',       title:'Cycling Tours',           text:"Explore on two wheels through scenic villages. Visit the Africa Rising Cycling Centre and meet Rwanda's world-class team.", bg:'bg-blue', img:'' },
      { tag:'Water Sport',   title:'Kayaking & Canoeing',     text:'Glide across tranquil Lake Burera and Lake Ruhondo. Explore hidden islands and watch diverse birdlife.',            bg:'bg-teal', img:'' },
      { tag:'Exploration',   title:'Cave Exploration',        text:'Venture into the vast lava tube caves — ancient geological formations with a rich history as wartime shelters.',      bg:'bg-brown', img:'' },
      { tag:'River',         title:'Mukungwa River Canoe',    text:'A relaxing half-day canoe trip along the Mukungwa River, drifting through lush riverine scenery.',                   bg:'bg-lime', img:'' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Get Active</p>
        <h1 class="page-title">Sports &amp; <em>Adventure</em></h1>
        <p class="page-desc">Musanze is built for the outdoors. Here's where to burn some energy.</p>
      </div>
      <div class="container"><div class="grid-3">${activities.map(d => cardHTML({...d, label:d.title, link:null})).join('')}</div></div>
    `;
  }

  // ── FOOD ────────────────────────────────────
  function renderFood() {
    const items = [
      { tag:'Dining',      title:'Featured Restaurants', text:'La Paillote for international flair, Isange at Five Volcanoes for refined dining, and hidden gems throughout town.', bg:'bg-olive', label:'Restaurants', img:'' },
      { tag:'Street Food', title:'Local Delights',       text:'Brochettes (grilled skewers), Ubugari, Isombe — fresh from Musanze Central Market. The real Rwanda on a plate.',    bg:'bg-rust',  label:'Street Food', img:'' },
      { tag:'Café Culture',title:'Cafés & Bakeries',     text:'Freshly brewed Rwandan single-origin coffee, pastries, and light snacks. Try Crema Cafe or Migano Café.',           bg:'bg-brown', label:'Cafés',       img:'' },
      { tag:'Nightlife',   title:'Bars & Local Scene',   text:'Unwind with a cold Primus or Skol at a local Imigongo bar — laid-back, social, and a great window into Musanze life.',bg:'bg-indigo',label:'Bars',        img:'' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Eat &amp; Drink</p>
        <h1 class="page-title">Food &amp; <em>Flavour</em></h1>
        <p class="page-desc">From highland coffee to open-fire brochettes — Musanze feeds the soul.</p>
      </div>
      <div class="container">
        <div class="grid-2">${items.map(d => cardHTML({...d, link:null})).join('')}</div>
        <div style="margin-top:48px;padding:32px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);">
          <p class="section-label">Must-Try Dishes</p>
          <div class="grid-4" style="margin-top:20px;">
            ${[{emoji:'🍢',name:'Brochettes',desc:'Grilled skewers at every street corner'},{emoji:'🫓',name:'Ubugari',desc:'Thick cassava or sorghum porridge'},{emoji:'🥬',name:'Isombe',desc:'Cassava leaves with palm oil & groundnuts'},{emoji:'☕',name:'Rwandan Coffee',desc:'World-class highland single-origin'}]
              .map(d=>`<div class="stat-item" style="text-align:center;"><div style="font-size:2rem;margin-bottom:10px;">${d.emoji}</div><p style="font-weight:500;color:var(--white);margin-bottom:4px;">${d.name}</p><p style="font-size:0.8rem;color:var(--text-muted);">${d.desc}</p></div>`).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ── GALLERY ──────────────────────────────────
  function renderGallery() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Visual Journey</p>
        <h1 class="page-title">Photo <em>Gallery</em></h1>
        <p class="page-desc">A window into the landscapes, wildlife, and people of Musanze.</p>
      </div>
      <div class="container">
        <div class="gallery-grid">
          ${galleryImages.map(g => `
            <div class="gallery-item">
              ${g.url
                ? wikiTag(g.url, g.caption, '', `gallery-img-placeholder ${g.bg}`, g.caption)
                : `<div class="gallery-img-placeholder ${g.bg}">${g.caption}</div>`
              }
              <div class="gallery-overlay">
                <p class="gallery-caption">${g.caption}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <p style="font-size:0.75rem;color:var(--text-muted);text-align:center;margin-top:16px;font-style:italic;">Photos: Wikimedia Commons, CC licences. Gorilla: Rod Waddington, CC BY-SA 2.0.</p>
      </div>
    `;
  }

  // ── CONTACT ──────────────────────────────────
  function renderContact() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Get in Touch</p>
        <h1 class="page-title">Contact <em>Us</em></h1>
        <p class="page-desc">We'd love to hear from you — questions, partnerships, or planning your dream trip.</p>
      </div>
      <div class="contact-layout">
        <div class="contact-info">
          <h2>Let's talk about Rwanda</h2>
          <p>Whether you're planning your first gorilla trek, looking to advertise with us, or simply want more information about Musanze — we're here and happy to help.</p>
          <div class="contact-detail"><div class="contact-detail-icon">📧</div><div class="contact-detail-text"><h4>Email</h4><p>hello@visitmusanze.rw</p></div></div>
          <div class="contact-detail"><div class="contact-detail-icon">📞</div><div class="contact-detail-text"><h4>Phone</h4><p>+250 788 000 000</p></div></div>
          <div class="contact-detail"><div class="contact-detail-icon">📍</div><div class="contact-detail-text"><h4>Location</h4><p>Musanze District, Northern Province, Rwanda</p></div></div>
          <div class="contact-detail"><div class="contact-detail-icon">🕒</div><div class="contact-detail-text"><h4>Office Hours</h4><p>Mon–Fri 8:00am – 5:00pm (CAT, UTC+2)</p></div></div>
        </div>
        <div>
          <div class="contact-form">
            <h3>Send us a Message</h3>
            <p class="form-sub">Fill in the form and we'll respond within 24 hours.</p>
            <div id="contact-form-wrap">
              <form id="contact-form" novalidate>
                <div class="form-row">
                  <div class="form-group"><label for="cf-name">Full Name *</label><input type="text" id="cf-name" name="from_name" placeholder="Jane Smith" required></div>
                  <div class="form-group"><label for="cf-email">Email Address *</label><input type="email" id="cf-email" name="from_email" placeholder="jane@example.com" required></div>
                </div>
                <div class="form-group">
                  <label for="cf-subject">Subject</label>
                  <select id="cf-subject" name="subject">
                    <option value="Trip Planning">Trip Planning Enquiry</option>
                    <option value="Gorilla Permits">Gorilla Permit Help</option>
                    <option value="Hotel Booking">Hotel Booking</option>
                    <option value="Advertise">Advertising Partnership</option>
                    <option value="General">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="form-group"><label for="cf-message">Message *</label><textarea id="cf-message" name="message" placeholder="Tell us how we can help you..." required></textarea></div>
                <button type="submit" class="btn-submit" id="contact-submit">Send Message</button>
                <p class="form-error" id="form-error" style="display:none;"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const btn   = document.getElementById('contact-submit');
    const errEl = document.getElementById('form-error');

    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value;
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      errEl.textContent = 'Please fill in all required fields.';
      errEl.style.display = 'block';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = 'Please enter a valid email address.';
      errEl.style.display = 'block';
      return;
    }

    btn.disabled    = true;
    btn.textContent = 'Sending…';
    errEl.style.display = 'none';

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  name,
        from_email: email,
        reply_to:   email,
        subject:    subject,
        message:    message,
      });
      document.getElementById('contact-form-wrap').innerHTML = `
        <div class="form-success">
          <div class="success-icon">✅</div>
          <h3>Message Sent!</h3>
          <p>Thank you, ${name}. We'll be in touch within 24 hours.</p>
        </div>
      `;
    } catch (err) {
      btn.disabled    = false;
      btn.textContent = 'Send Message';
      const detail = err && err.text ? ` (${err.text})` : '';
      errEl.textContent = `Failed to send${detail}. Please email us at hello@visitmusanze.rw`;
      errEl.style.display = 'block';
    }
  }

  // ── ADVERTISE ────────────────────────────────
  function renderAdvertise() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Partnership</p>
        <h1 class="page-title">Advertise <em>With Us</em></h1>
      </div>
      <div class="advertise-wrap">
        <div class="advertise-card">
          <h2>Reach Rwanda's Travellers</h2>
          <p>Visit Musanze connects passionate travellers with the best experiences, accommodations, and services in the region. Partner with us to put your business in front of the right audience.</p>
          <a href="mailto:advertise@visitmusanze.rw" class="advertise-email">advertise@visitmusanze.rw</a>
          <div class="advertise-features">
            <div class="adv-feat"><div class="adv-feat-icon">🎯</div><h4>Targeted Reach</h4><p>Connect with travellers actively planning Musanze trips.</p></div>
            <div class="adv-feat"><div class="adv-feat-icon">🌍</div><h4>Global Audience</h4><p>Visitors from across Africa, Europe, and beyond.</p></div>
            <div class="adv-feat"><div class="adv-feat-icon">📈</div><h4>Flexible Packages</h4><p>Options for lodges, tour operators, and local businesses.</p></div>
          </div>
        </div>
      </div>
    `;
  }

  // ── INIT ─────────────────────────────────────
  navigate('home');
});
