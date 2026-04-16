// ============================================
//   VISIT MUSANZE  —  script.js
// ============================================

const EMAILJS_SERVICE_ID  = 'service_6b0rbuc';
const EMAILJS_TEMPLATE_ID = 'template_f8pccge';
const EMAILJS_PUBLIC_KEY  = 'QICH0i1piXaX-4Rtx';

// ─── Image helper ────────────────────────────────────────────────────────────
function imgBox(url, gradClass, h, rounded) {
  const br = rounded ? `border-radius:${rounded};` : '';
  if (!url) {
    return `<div class="${gradClass}" style="height:${h};${br}overflow:hidden"></div>`;
  }
  return `<div class="${gradClass}" style="height:${h};${br}overflow:hidden;position:relative">` +
    `<img src="${url}" alt="" aria-hidden="true" referrerpolicy="no-referrer" ` +
    `style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block" ` +
    `onerror="this.remove()"></div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const app        = document.getElementById('app-content');
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('nav-links');
  const modal      = document.getElementById('volcano-modal');
  const modalClose = document.getElementById('modal-close');

  // ── Scroll ──────────────────────────────────────────────────────────────────
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Hamburger ───────────────────────────────────────────────────────────────
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // ── Modal ───────────────────────────────────────────────────────────────────
  let _guard = false;

  function openModal(html) {
    document.getElementById('modal-body').innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    _guard = true;
    setTimeout(() => { _guard = false; }, 300);
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', e => { e.stopPropagation(); closeModal(); });
  modal.addEventListener('click', e => { if (e.target === modal && !_guard) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── Navigation ──────────────────────────────────────────────────────────────
  function navigate(page) {
    document.querySelectorAll('.nav-item').forEach(el =>
      el.classList.toggle('active', el.dataset.page === page)
    );
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');

    app.innerHTML = (page === 'home') ? renderHome() : (renderPage(page) || renderHome());
    window.scrollTo({ top: page === 'home' ? 0 : (document.getElementById('hero')?.offsetHeight - 80 || 0), behavior: 'smooth' });
    bindAll();
  }

  function bindAll() {
    app.querySelectorAll('[data-page]').forEach(el =>
      el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.page); })
    );
    app.querySelectorAll('.volcano-card[data-volcano]').forEach(card =>
      card.addEventListener('click', e => { e.stopPropagation(); openVolcanoModal(card.dataset.volcano); })
    );
    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleContactSubmit);
  }

  // Global delegation for nav + footer
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-page]');
    if (!el || app.contains(el)) return;
    e.preventDefault();
    navigate(el.dataset.page);
  });

  // ─────────────────────────────────────────────────────────────────────────────
  //  DATA
  // ─────────────────────────────────────────────────────────────────────────────

  const V = {
    karisimbi: {
      name: 'Mount Karisimbi', subtitle: 'The Roof of Rwanda',
      eyebrow: 'Dormant Stratovolcano', elevation: '4,507m', duration: '2 Days', difficulty: 'Challenging',
      grad: 'bg-vol1',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
      desc: ['Mount Karisimbi is the highest of the eight Virunga volcanoes and Rwanda\'s highest peak at 4,507 metres. Its summit is frequently capped with mist or light snow — giving rise to its name, which means "white shell" in Kinyarwanda.',
             'The two-day trek to the summit is one of the most rewarding adventures in East Africa. Trekkers camp at around 3,700m on the first night, then push for the summit at dawn to catch sweeping views over the Virunga chain, Lake Kivu, and vast stretches of Central Africa.',
             'The mountain\'s slopes pass through bamboo forest, moorland and Afro-alpine heath — an ecological journey as remarkable as the physical challenge itself.'],
      acts: ['2-Day Summit Trek','Wildlife Spotting','Camping at 3,700m','Bird Watching','Photography','Stargazing'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/mount-karisimbi/'
    },
    bisoke: {
      name: 'Mount Bisoke', subtitle: 'The Crater Lake Summit',
      eyebrow: 'Dormant Volcano', elevation: '3,711m', duration: '1 Day', difficulty: 'Moderate',
      grad: 'bg-vol3',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg',
      desc: ['Mount Bisoke is the most popular day hike in Volcanoes National Park, famous for its emerald crater lake at the 3,711m summit — one of the most photographed spots in Rwanda.',
             'The 6–8 hour round trip passes through dense bamboo zones and Hagenia woodland, home to buffalo, golden monkeys, and over 200 bird species.',
             'Clear mornings offer views to Karisimbi on one side and deep into the DRC on the other. The crater lake — Lac de Bisoke — is a perfectly round pool that rewards every step of the climb.'],
      acts: ['Day Hike to Crater Lake','Golden Monkey Encounter','Bird Watching','Nature Photography','Wildlife Tracking'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    sabyinyo: {
      name: 'Mount Sabyinyo', subtitle: "The Old Man's Teeth",
      eyebrow: 'Extinct Volcano', elevation: '3,634m', duration: '1 Day', difficulty: 'Challenging',
      grad: 'bg-vol4',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
      desc: ["Sabyinyo means \"Old Man's Teeth\" — a fitting name for a volcano whose jagged, eroded peak resembles worn molars against the sky. It is the oldest and most heavily eroded of the Virunga chain.",
             'The summit ridge is the meeting point of three countries: Rwanda, Uganda, and the DRC — making it one of the only places on earth where you can stand in three nations at once.',
             'The hike involves exciting ladder-assisted scrambles and exposed ridges, making it one of the most dramatic ascents in the region. Gorilla families often range the lower slopes.'],
      acts: ['3-Country Summit','Gorilla Encounters','Ladder Ridge Scramble','Photography','Wildlife Watching'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    muhabura: {
      name: 'Mount Muhabura', subtitle: 'The Guide',
      eyebrow: 'Dormant Volcano', elevation: '4,127m', duration: '1–2 Days', difficulty: 'Strenuous',
      grad: 'bg-vol2',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg',
      desc: ['Mount Muhabura — "The Guide" — towers at 4,127 metres and was historically used as a navigation landmark by travellers across the Great Lakes region. Its perfectly symmetrical cone is visible for miles.',
             'A small crater lake sits at the summit. On clear days panoramic views stretch far into Uganda, Rwanda and the DRC — a reward that justifies the strenuous 8–10 hour round trip.',
             'Golden monkeys inhabit the bamboo zones lower on the mountain and are frequently encountered during the ascent, making the journey as memorable as the destination.'],
      acts: ['Summit Day Hike','Crater Lake','Golden Monkey Spotting','Panoramic Views','Photography'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    gahinga: {
      name: 'Mount Gahinga', subtitle: 'The Pile of Stones',
      eyebrow: 'Dormant Volcano', elevation: '3,474m', duration: '1 Day', difficulty: 'Moderate',
      grad: 'bg-vol5', img: '',
      desc: ['The smallest of Rwanda\'s Virunga volcanoes at 3,474m, Mount Gahinga sits between Muhabura and Sabyinyo on the Rwanda–Uganda border. Despite its modest size, it is enchanting.',
             'The summit holds a swamp — unusual for the region — and the mountain is beloved by ornithologists for exceptional bird diversity. Mountain gorillas also range through its lower forested flanks.',
             'Its relative accessibility and moderate difficulty make it an ideal acclimatisation hike before attempting the higher summits of Muhabura or Karisimbi.'],
      acts: ['Summit Hike','Bamboo Forest Walk','Birding Safari','Mountain Gorilla Range','Photography'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
  };

  const hotels = {
    luxury: [
      { name:'Five Volcanoes Boutique Hotel', stars:5, tag:'Luxury',
        loc:'Kinigi, near Volcanoes National Park',
        desc:"Musanze's finest boutique retreat: 13 rooms, outdoor pool, full-board dining, and a Volcano Manor villa. Post-trek boot cleaning and foot massages are complimentary.",
        price:'From $1,080/night (full board)', grad:'bg-vol1',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/800px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg',
        link:'https://fivevolcanoesrwanda.com/' },
      { name:'Virunga Lodge', stars:5, tag:'Luxury',
        loc:'Ridge above Lakes Bulera & Ruhondo',
        desc:'Perched on a dramatic ridge overlooking twin lakes and five Virunga peaks. Stone bandas, eco-conscious ethos, and world-class gorilla trek access.',
        price:'From $850/night', grad:'bg-vol3',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
        link:'https://volcanoessafaris.com/lodges/virunga-lodge/' },
      { name:'Wilderness Bisate', stars:5, tag:'Ultra Luxury',
        loc:'Bisate Village, Volcanoes National Park',
        desc:'Six magnificent forest villas in a volcanic crater. Immersive eco-experience with daily guided treks, reforestation walks, and ultra-high-end service.',
        price:'From $2,200/night', grad:'bg-vol2',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
        link:'https://www.wildernessdestinations.com/destinations/rwanda/wilderness-bisate/' },
    ],
    midrange: [
      { name:"The Bishop's House Rwanda", stars:4, tag:'Boutique',
        loc:'Musanze Town Centre',
        desc:'Elegant 9-room boutique hotel in a historic property with manicured gardens, bird-rich grounds, and a warm personal atmosphere. Walking distance to Musanze town.',
        price:'From $180/night', grad:'bg-slate',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg/800px-Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg',
        link:'https://www.the-bishops-house.com/' },
      { name:'Virunga Inn Resort & Spa', stars:4, tag:'Resort & Spa',
        loc:'Near Red Rocks Arts Centre, Musanze',
        desc:'Twenty individually furnished rooms with fireplaces, set within a nature reserve. Full spa, gym, lush gardens, and complimentary breakfast. 3.2km from the park.',
        price:'From $140/night', grad:'bg-teal',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg',
        link:'https://www.booking.com/hotel/rw/virunga-inn-resort-amp-spa.html' },
      { name:'Amakoro Songa Lodge', stars:4, tag:'Eco-Lodge',
        loc:'Kinigi, Musanze District',
        desc:'Community-focused eco-lodge close to the park gates. Beautiful rooms with fireplaces, excellent Rwandan cuisine, and knowledgeable staff.',
        price:'From $160/night', grad:'bg-green',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg',
        link:'https://www.amakorosongalodge.com/' },
    ],
    budget: [
      { name:'Kinigi Guest House', stars:3, tag:'Budget',
        loc:'Kinigi Village',
        desc:'Simple, clean, and cheerful accommodation minutes from park headquarters. Ideal for budget-conscious gorilla trekkers. Friendly staff and reliable WiFi.',
        price:'From $45/night', grad:'bg-brown',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg',
        link:'https://www.tripadvisor.com/Hotel_Review-g12120944-d1218085-Reviews-Kinigi_Guest_House-Kinigi_Musanze_District.html' },
      { name:'Best View Hotel', stars:3, tag:'City Hotel',
        loc:'Musanze City Centre',
        desc:'Comfortable rooms in the heart of Musanze with views of the Virunga hills. Rooftop restaurant, art deco interior, easy access to cafés and transport.',
        price:'From $35/night', grad:'bg-indigo',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/640px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
        link:'https://www.volcanoesnationalpark.org/lodges/best-view-hotel-musanze/' },
      { name:'La Paillotte Gorilla Place', stars:3, tag:'Guest House',
        loc:'Mitobo, Musanze',
        desc:'Characterful guest house popular with travellers. Warm Rwandan hospitality, hearty meals, lush garden, and perfect location for early gorilla trek departures.',
        price:'From $40/night', grad:'bg-lime',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
        link:'https://www.tripadvisor.com/Hotel_Review-g3193015-d1218093-Reviews-La_Paillotte_Gorilla_Place-Musanze_Northern_Province.html' },
    ],
  };

  const gallery = [
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg', cap:'Mountain gorilla, Volcanoes National Park', grad:'bg-vol1' },
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/800px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg', cap:'Karisimbi, Nyamuragira & Bisoke at sunset', grad:'bg-vol3' },
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/800px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg', cap:'Mount Sabyinyo, Kinigi sector', grad:'bg-vol4' },
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/800px-Mt_Bisoke%2C_Rwanda.jpg', cap:'Mount Bisoke trail', grad:'bg-vol2' },
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/800px-Muhavura_Volcano_in_Rwanda.jpg', cap:'Mount Muhabura rising above the plains', grad:'bg-slate' },
    { url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg/800px-Ruhengeri_and_the_Parc_National_de_Volcans_in_the_background_%281%29.jpg', cap:'Musanze and Volcanoes National Park', grad:'bg-green' },
  ];

  // ─────────────────────────────────────────────────────────────────────────────
  //  VOLCANO MODAL (FIXED)
  // ─────────────────────────────────────────────────────────────────────────────
  function openVolcanoModal(key) {
    const v = V[key];
    if (!v) return;
    
    // We use inline styles here to force visibility.
    openModal(`
      ${imgBox(v.img, v.grad, '300px', '12px 12px 0 0')}
      <div class="modal-content" style="padding: 24px; background-color: #ffffff; color: #1a1a1a; display: block;">
        <p class="modal-eyebrow" style="font-weight: 700; color: #d9534f; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 8px;">${v.eyebrow}</p>
        <h2 class="modal-title" style="font-size: 2rem; margin: 0 0 8px 0; font-family: var(--ff-display, serif); line-height: 1.2;">${v.name}</h2>
        <p class="modal-subtitle" style="font-size: 1.1rem; color: #555; margin-bottom: 20px; font-style: italic;">${v.subtitle}</p>
        <div class="modal-stats" style="display: flex; gap: 16px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #eee;">
          <div class="modal-stat" style="text-align: center;">
             <div class="modal-stat-num" style="font-weight: bold; font-size: 1.1rem; color: #000;">${v.elevation}</div>
             <div class="modal-stat-label" style="font-size: 0.8rem; color: #666;">Elevation</div>
          </div>
          <div class="modal-stat" style="text-align: center;">
             <div class="modal-stat-num" style="font-weight: bold; font-size: 1.1rem; color: #000;">${v.duration}</div>
             <div class="modal-stat-label" style="font-size: 0.8rem; color: #666;">Hike Duration</div>
          </div>
          <div class="modal-stat" style="text-align: center;">
             <div class="modal-stat-num" style="font-weight: bold; font-size: 1.1rem; color: #000;">${v.difficulty}</div>
             <div class="modal-stat-label" style="font-size: 0.8rem; color: #666;">Difficulty</div>
          </div>
        </div>
        <div class="modal-body-text" style="margin-bottom: 24px; line-height: 1.6;">
          ${v.desc.map(p => `<p style="margin-bottom: 12px;">${p}</p>`).join('')}
        </div>
        <div class="modal-activities" style="margin-bottom: 32px;">
          <h4 style="margin: 0 0 12px 0; font-size: 1rem;">Activities &amp; Experiences</h4>
          <div class="activity-pills" style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${v.acts.map(a => `<span style="background: #f0f0f0; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; color: #333;">${a}</span>`).join('')}
          </div>
        </div>
        <a href="${v.link}" target="_blank" rel="noopener" 
           style="display: inline-block; background-color: #d9534f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
           Book This Hike →
        </a>
      </div>
    `);
  }

  // ─────────────────────────────────────────────────────────────────────────────
  //  PAGE RENDERERS
  // ─────────────────────────────────────────────────────────────────────────────
  function renderPage(page) {
    return ({
      destinations: renderDestinations,
      volcanoes:    renderVolcanoes,
      hotels:       renderHotels,
      trip:         renderTrip,
      sports:       renderSports,
      food:         renderFood,
      gallery:      renderGallery,
      contact:      renderContact,
      advertise:    renderAdvertise,
    }[page] || renderHome)();
  }

  // ── HOME ──────────────────────────────────────────────────────────────────────
  function renderHome() {
    const dest = destinations().slice(0, 3);
    return `
      <div class="home-intro">
        <div class="home-intro-text">
          <h2>Welcome to the <em>Heart of Rwanda</em></h2>
          <p>Musanze sits at the foot of the Virunga volcanoes — ancient forests shelter the world's last mountain gorillas, twin lakes shimmer beneath volcanic peaks, and culture runs as deep as the lava tunnels beneath your feet.</p>
          <div class="home-intro-btns">
            <button class="btn-primary" data-page="destinations">Explore Destinations</button>
            <button class="btn-ghost"  data-page="trip">Plan Your Visit</button>
          </div>
        </div>
        <div class="home-intro-stats">
          <div class="stat-item"><div class="stat-num">5+</div><div class="stat-label">Virunga Volcanoes</div></div>
          <div class="stat-item"><div class="stat-num">~700</div><div class="stat-label">Mountain Gorillas Left</div></div>
          <div class="stat-item"><div class="stat-num">2,400m</div><div class="stat-label">Elevation</div></div>
          <div class="stat-item"><div class="stat-num">2h</div><div class="stat-label">From Kigali</div></div>
        </div>
      </div>

      <div class="home-highlights">
        <p class="section-label">Musanze Climate</p>
        <div class="weather-strip">
          <div class="weather-card"><div class="wi">🌡️</div><div class="wl">Avg Temp</div><div class="wv">15°C</div><div class="ws">Cool highlands</div></div>
          <div class="weather-card"><div class="wi">🌧️</div><div class="wl">Best Season</div><div class="wv">Jun–Sep</div><div class="ws">Long dry season</div></div>
          <div class="weather-card"><div class="wi">🦍</div><div class="wl">Peak Trekking</div><div class="wv">Jul–Aug</div><div class="ws">Clearest trails</div></div>
          <div class="weather-card"><div class="wi">✈️</div><div class="wl">Airport</div><div class="wv">KGL</div><div class="ws">2h from Musanze</div></div>
        </div>

        <div class="highlight-strip">
          <div class="highlight-item"><div class="hi-icon">🦍</div><h3>Gateway to Gorillas</h3><p>The world's best mountain gorilla trekking, starting right here in Musanze.</p></div>
          <div class="highlight-item"><div class="hi-icon">🌋</div><h3>Volcanic Landscapes</h3><p>Hike crater lakes, lava caves, and sweeping highland views.</p></div>
          <div class="highlight-item"><div class="hi-icon">🎭</div><h3>Rich Culture</h3><p>Dance, craft, and community — Rwandan traditions are alive in Musanze.</p></div>
        </div>

        <p class="section-label">Featured Destinations</p>
        <h2 class="section-title">Where to <em>Explore</em></h2>
        <div class="grid-3">${dest.map(destCard).join('')}</div>
        <div style="text-align:center;margin-top:36px">
          <button class="btn-ghost" data-page="destinations">View All Destinations →</button>
        </div>
      </div>
    `;
  }

  // ── DESTINATIONS ──────────────────────────────────────────────────────────────
  function destinations() {
    return [
      { tag:'Wildlife',   title:'Gorilla Trekking',          text:'Trek through dense forest to observe endangered mountain gorillas in their natural habitat.',            grad:'bg-green',  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg', link:'https://visitrwanda.com/interests/gorilla-tracking/' },
      { tag:'Adventure',  title:'Musanze Caves',             text:'Ancient lava tunnels stretching for kilometers, once used as wartime shelters.',                        grad:'bg-slate',  img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/musanze-caves/' },
      { tag:'Nature',     title:'Twin Lakes',                text:'Burera & Ruhondo nested among volcanic peaks — boat trips, birdwatching, island villages.',            grad:'bg-teal',   img:'', link:'https://www.insidevolcanoesnationalpark.com/what-to-see-in-volcanoes-national-park/' },
      { tag:'History',    title:'Dian Fossey Memorial',      text:'Hike to the resting place of the legendary primatologist and visit the Karisoke Research Center.',     grad:'bg-purple', img:'', link:'https://www.volcanoesparkrwanda.org/dian-fossey-hike/' },
      { tag:'Culture',    title:"Iby'Iwacu Cultural Village",text:'Traditional dances, crafts, local food and community — an immersive Rwandan cultural experience.',      grad:'bg-amber',  img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/ibyiwacu-cultural-village/' },
      { tag:'Wildlife',   title:'Golden Monkey Tracking',    text:'Track the playful golden monkeys endemic to the Virunga volcanic bamboo forests.',                     grad:'bg-pink',   img:'', link:'https://www.volcanoesparkrwanda.org/what-to-do/golden-monkey-trekking/' },
    ];
  }

  function destCard(d) {
    return `<div class="card">
      ${imgBox(d.img, d.grad, '220px')}
      <div class="card-body">
        <p class="card-tag">${d.tag}</p>
        <h3 class="card-title">${d.title}</h3>
        <p class="card-text">${d.text}</p>
        ${d.link ? `<a href="${d.link}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">Learn More →</a>` : ''}
      </div>
    </div>`;
  }

  function renderDestinations() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Places to Visit</p>
        <h1 class="page-title">Incredible <em>Destinations</em></h1>
        <p class="page-desc">Six extraordinary experiences, all within reach of Musanze.</p>
      </div>
      <div class="container"><div class="grid-3">${destinations().map(destCard).join('')}</div></div>`;
  }

  // ── VOLCANOES ─────────────────────────────────────────────────────────────────
  function renderVolcanoes() {
    const volcs = [
      { key:'karisimbi', name:'Mount Karisimbi', elev:'4,507m', sub:'The Roof of Rwanda',    tag:'2-Day Trek', text:"Rwanda's highest peak — two days of trekking rewarded with snow-capped summit views.", grad:'bg-vol1', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg' },
      { key:'bisoke',    name:'Mount Bisoke',    elev:'3,711m', sub:'The Crater Lake',       tag:'Day Hike',   text:'Classic day hike — emerald crater lake at the summit, golden monkeys on the way.',    grad:'bg-vol3', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/640px-Mt_Bisoke%2C_Rwanda.jpg' },
      { key:'sabyinyo',  name:'Mount Sabyinyo',  elev:'3,634m', sub:'Three Borders Summit',  tag:'Day Hike',   text:'Stand in Rwanda, Uganda, and DRC at once on this ancient eroded volcano.',             grad:'bg-vol4', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/640px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg' },
      { key:'muhabura',  name:'Mount Muhabura',  elev:'4,127m', sub:'The Guide',             tag:'Day/2-Day',  text:'Perfect cone visible for miles, with a crater lake crowning its 4,127m summit.',        grad:'bg-vol2', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/640px-Muhavura_Volcano_in_Rwanda.jpg' },
      { key:'gahinga',   name:'Mount Gahinga',   elev:'3,474m', sub:'The Pile of Stones',    tag:'Day Hike',   text:'The smallest of the five — beloved for bamboo forest, summit swamp, and incredible birdlife.', grad:'bg-vol5', img:'' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">The Virunga Chain</p>
        <h1 class="page-title">Rwanda's <em>Volcanoes</em></h1>
        <p class="page-desc">Five extraordinary volcanoes — click any card for full details, trail guides, and booking links.</p>
      </div>
      <div class="container">
        <div class="volcano-grid">
          ${volcs.map(v => `
            <div class="volcano-card" data-volcano="${v.key}">
              <div class="vc-img-wrap">
                ${imgBox(v.img, v.grad, '240px')}
                <span class="volcano-badge">${v.tag}</span>
              </div>
              <div class="volcano-body">
                <h3 class="volcano-title">${v.name}</h3>
                <div class="volcano-meta"><span>${v.elev}</span><span>${v.sub}</span></div>
                <p class="volcano-text">${v.text}</p>
                <span class="volcano-cta">View Details &amp; Book →</span>
              </div>
            </div>`).join('')}
        </div>
        <div class="info-box" style="margin-top:56px">
          <p class="section-label">Know Before You Go</p>
          <h3 style="font-family:var(--ff-display);font-size:1.5rem;color:var(--white);margin-bottom:20px">Trekking Essentials</h3>
          <div class="grid-3">
            <div><p class="card-tag">Permits</p><p class="card-text">All hikes require a permit from Rwanda Development Board. Book via <a href="https://www.rdb.rw" target="_blank" style="color:var(--gold)">rdb.rw</a>.</p></div>
            <div><p class="card-tag">What to Bring</p><p class="card-text">Waterproof boots, rain jacket, long trousers, gloves (high summits), 2L+ water, headlamp.</p></div>
            <div><p class="card-tag">Fitness Level</p><p class="card-text">Bisoke suits active hikers. Karisimbi demands serious preparation and high-altitude experience.</p></div>
          </div>
        </div>
      </div>`;
  }

  // ── HOTELS ────────────────────────────────────────────────────────────────────
  function hotelCard(h) {
    const stars = '★'.repeat(h.stars) + '☆'.repeat(5 - h.stars);
    return `<div class="hotel-card">
      ${imgBox(h.img, h.grad, '200px')}
      <div class="hotel-body">
        <div class="hotel-stars">${stars}</div>
        <h3 class="hotel-name">${h.name}</h3>
        <p class="hotel-loc">${h.loc}</p>
        <p class="hotel-desc">${h.desc}</p>
        <p class="hotel-price">${h.price}</p>
        <a href="${h.link}" target="_blank" rel="noopener" class="hotel-link">View &amp; Book →</a>
      </div>
    </div>`;
  }

  function tier(label, list) {
    return `<div>
      <div class="tier-label-wrap"><div class="tier-line"></div><span class="tier-label">${label}</span><div class="tier-line"></div></div>
      <div class="grid-3">${list.map(hotelCard).join('')}</div>
    </div>`;
  }

  function renderHotels() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Where to Stay</p>
        <h1 class="page-title">Hotels &amp; <em>Lodges</em></h1>
        <p class="page-desc">From ultra-luxury crater villas to warm budget guest houses.</p>
      </div>
      <div class="container">
        <div class="hotel-tiers">
          ${tier('Luxury &amp; Ultra Luxury', hotels.luxury)}
          ${tier('Mid-Range &amp; Boutique',  hotels.midrange)}
          ${tier('Budget &amp; Guest Houses', hotels.budget)}
        </div>
        <div class="info-box" style="margin-top:48px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;border-color:var(--border-h)">
          <div style="flex:1;min-width:200px">
            <p class="card-tag">Booking Tip</p>
            <p style="font-family:var(--ff-serif);font-size:1.05rem;font-style:italic;color:var(--text-muted);font-weight:300">Gorilla permits sell out months in advance. Book hotel and permit together.</p>
          </div>
          <a href="https://visitrwanda.com/experiences/gorilla-trekking/" target="_blank" rel="noopener" class="btn-primary">Book Gorilla Permits →</a>
        </div>
      </div>`;
  }

  // ── TRIP ──────────────────────────────────────────────────────────────────────
  function renderTrip() {
    const tips = [
      {i:'🎫',t:'Book gorilla permits well in advance — especially for peak season (Jun–Sep, Dec–Feb).'},
      {i:'🥾',t:'Pack sturdy waterproof hiking boots, rain jacket, and long sleeves for treks.'},
      {i:'💧',t:'Stay hydrated and acclimatise to the altitude (2,400m+) before strenuous hikes.'},
      {i:'🧭',t:'Hire a local guide for cultural tours to support the community directly.'},
      {i:'🌿',t:'Combine activities: gorilla trekking, cave exploration, lake cruises, cultural village.'},
      {i:'🍽️',t:'Try authentic Rwandan food — brochettes, isombe, and fresh highland produce.'},
      {i:'💊',t:'Consult your doctor about malaria prophylaxis and altitude medication beforehand.'},
      {i:'📵',t:'During gorilla encounters: stay 7m away, no flash, keep voices low, max 1 hour.'},
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Trip Planning</p>
        <h1 class="page-title">Plan Your <em>Visit</em></h1>
        <p class="page-desc">Everything you need for an unforgettable Musanze itinerary.</p>
      </div>
      <div class="trip-layout">
        <div>
          ${imgBox('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg','bg-vol1','380px','var(--radius)')}
          <p style="font-size:0.75rem;color:var(--text-muted);font-style:italic;margin:10px 0 36px">Mountain gorilla, Volcanoes National Park. Photo: Rod Waddington, CC BY-SA 2.0.</p>
          <p class="section-label">Sample Itineraries</p>
          <h2 class="section-title" style="margin-bottom:24px">Pick Your <em>Adventure</em></h2>
          <div class="grid-2" style="margin-bottom:40px">
            <div class="card"><div class="bg-green" style="height:100px;display:flex;align-items:center;justify-content:center;font-family:var(--ff-display);font-size:1.8rem;color:rgba(255,255,255,.5)">3 Days</div><div class="card-body"><p class="card-tag">Short Break</p><h3 class="card-title">3-Day Classic</h3><p class="card-text">Day 1: Arrive, Musanze Caves. Day 2: Gorilla trekking. Day 3: Cultural Village + Twin Lakes.</p></div></div>
            <div class="card"><div class="bg-vol2" style="height:100px;display:flex;align-items:center;justify-content:center;font-family:var(--ff-display);font-size:1.8rem;color:rgba(255,255,255,.5)">5 Days</div><div class="card-body"><p class="card-tag">Full Experience</p><h3 class="card-title">5-Day Explorer</h3><p class="card-text">Adds: Bisoke hike, golden monkeys, Dian Fossey memorial, cycling, Mukungwa River canoe.</p></div></div>
            <div class="card"><div class="bg-vol1" style="height:100px;display:flex;align-items:center;justify-content:center;font-family:var(--ff-display);font-size:1.8rem;color:rgba(255,255,255,.5)">7 Days</div><div class="card-body"><p class="card-tag">Deep Dive</p><h3 class="card-title">7-Day Immersion</h3><p class="card-text">All above plus: Karisimbi 2-day summit, kayaking Lake Burera, village community tour.</p></div></div>
            <div class="card"><div class="bg-teal" style="height:100px;display:flex;align-items:center;justify-content:center;font-family:var(--ff-display);font-size:1.1rem;color:rgba(255,255,255,.5)">Getting There</div><div class="card-body"><p class="card-tag">Transport</p><h3 class="card-title">Kigali to Musanze</h3><p class="card-text">Fly into KGL. Volcano Express bus (~$3) or private transfer (~$60). Scenic 2h road.</p></div></div>
          </div>
        </div>
        <div>
          <div class="trip-tips">
            <h3>Travel Tips</h3>
            ${tips.map(t => `<div class="tip-item"><div class="tip-icon">${t.i}</div><p class="tip-text">${t.t}</p></div>`).join('')}
            <div style="margin-top:20px;text-align:center">
              <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:10px">Need personalised help?</p>
              <button class="btn-primary" data-page="contact" style="font-size:0.8rem;padding:10px 20px">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ── SPORTS ────────────────────────────────────────────────────────────────────
  function renderSports() {
    const items = [
      {tag:'Hiking',       title:'Volcano Hiking',         text:"Conquer the Virungas — from Bisoke's crater lake day hike to the two-day ascent of Karisimbi.", grad:'bg-vol1', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/640px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg'},
      {tag:'Wildlife Trek',title:'Golden Monkey Tracking', text:'Energetic bamboo-forest trek to find the endemic golden monkeys. Playful, colourful, charming.', grad:'bg-amber', img:''},
      {tag:'Cycling',      title:'Cycling Tours',          text:"Explore on two wheels through scenic villages. Visit the Africa Rising Cycling Centre and meet Rwanda's world-class team.", grad:'bg-blue', img:''},
      {tag:'Water Sport',  title:'Kayaking & Canoeing',    text:'Glide across tranquil Lake Burera and Lake Ruhondo. Hidden islands, diverse birdlife.',        grad:'bg-teal', img:''},
      {tag:'Exploration',  title:'Cave Exploration',       text:'Venture into the vast lava tube caves — ancient geological formations with wartime history.',   grad:'bg-brown', img:''},
      {tag:'River',        title:'Mukungwa River Canoe',   text:'A relaxing half-day canoe trip drifting through lush riverine scenery.',                        grad:'bg-lime', img:''},
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Get Active</p>
        <h1 class="page-title">Sports &amp; <em>Adventure</em></h1>
        <p class="page-desc">Musanze is built for the outdoors.</p>
      </div>
      <div class="container"><div class="grid-3">${items.map(d => destCard({...d, link:null})).join('')}</div></div>`;
  }

  // ── FOOD ──────────────────────────────────────────────────────────────────────
  function renderFood() {
    const items = [
      {tag:'Dining',      title:'Featured Restaurants', text:'La Paillote for international flair, Isange at Five Volcanoes for refined dining, and hidden gems throughout town.', grad:'bg-olive', img:''},
      {tag:'Street Food', title:'Local Delights',       text:'Brochettes, Ubugari, Isombe — fresh from Musanze Central Market. The real Rwanda on a plate.',   grad:'bg-rust',  img:''},
      {tag:'Café Culture',title:'Cafés & Bakeries',     text:'Freshly brewed Rwandan single-origin coffee and pastries. Try Crema Cafe or Migano Café.',       grad:'bg-brown', img:''},
      {tag:'Nightlife',   title:'Bars & Local Scene',   text:'Cold Primus or Skol at a local Imigongo bar — laid-back, social, and a window into Musanze life.',grad:'bg-indigo',img:''},
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Eat &amp; Drink</p>
        <h1 class="page-title">Food &amp; <em>Flavour</em></h1>
        <p class="page-desc">From highland coffee to open-fire brochettes — Musanze feeds the soul.</p>
      </div>
      <div class="container">
        <div class="grid-2">${items.map(d => destCard({...d, link:null})).join('')}</div>
        <div class="info-box" style="margin-top:40px">
          <p class="section-label">Must-Try Dishes</p>
          <div class="grid-4" style="margin-top:20px">
            ${[{e:'🍢',n:'Brochettes',d:'Grilled skewers at every street corner'},{e:'🫓',n:'Ubugari',d:'Thick cassava or sorghum porridge'},{e:'🥬',n:'Isombe',d:'Cassava leaves with palm oil & groundnuts'},{e:'☕',n:'Rwandan Coffee',d:'World-class highland single-origin'}]
              .map(x=>`<div class="stat-item" style="text-align:center"><div style="font-size:2rem;margin-bottom:8px">${x.e}</div><p style="font-weight:500;color:var(--white);margin-bottom:4px">${x.n}</p><p style="font-size:0.8rem;color:var(--text-muted)">${x.d}</p></div>`).join('')}
          </div>
        </div>
      </div>`;
  }

  // ── GALLERY ───────────────────────────────────────────────────────────────────
  function renderGallery() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Visual Journey</p>
        <h1 class="page-title">Photo <em>Gallery</em></h1>
        <p class="page-desc">A window into the landscapes, wildlife, and people of Musanze.</p>
      </div>
      <div class="container">
        <div class="gallery-grid">
          ${gallery.map(g => `
            <div class="gallery-item">
              ${imgBox(g.url, g.grad, '100%')}
              <div class="gallery-overlay"><p class="gallery-cap">${g.cap}</p></div>
            </div>`).join('')}
        </div>
        <p style="font-size:0.74rem;color:var(--text-muted);text-align:center;margin-top:14px;font-style:italic">Photos: Wikimedia Commons, CC licences. Gorilla: Rod Waddington, CC BY-SA 2.0.</p>
      </div>`;
  }

  // ── CONTACT ───────────────────────────────────────────────────────────────────
  function renderContact() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Get in Touch</p>
        <h1 class="page-title">Contact <em>Us</em></h1>
        <p class="page-desc">Questions, partnerships, or planning your dream trip.</p>
      </div>
      <div class="contact-layout">
        <div class="contact-info">
          <h2>Let's talk about Rwanda</h2>
          <p>Whether you're planning your first gorilla trek, looking to advertise, or simply want more info about Musanze — we're happy to help.</p>
          <div class="contact-detail"><div class="cd-icon">📧</div><div><h4>Email</h4><p>hello@visitmusanze.rw</p></div></div>
          <div class="contact-detail"><div class="cd-icon">📞</div><div><h4>Phone</h4><p>+250 788 000 000</p></div></div>
          <div class="contact-detail"><div class="cd-icon">📍</div><div><h4>Location</h4><p>Musanze District, Northern Province, Rwanda</p></div></div>
          <div class="contact-detail"><div class="cd-icon">🕒</div><div><h4>Office Hours</h4><p>Mon–Fri 8:00am – 5:00pm (CAT)</p></div></div>
        </div>
        <div>
          <div class="contact-form">
            <h3>Send us a Message</h3>
            <p class="form-sub">We'll respond within 24 hours.</p>
            <div id="contact-form-wrap">
              <form id="contact-form" novalidate>
                <div class="form-row">
                  <div class="form-group"><label for="cf-name">Full Name *</label><input type="text" id="cf-name" placeholder="Jane Smith" required></div>
                  <div class="form-group"><label for="cf-email">Email *</label><input type="email" id="cf-email" placeholder="jane@example.com" required></div>
                </div>
                <div class="form-group">
                  <label for="cf-subject">Subject</label>
                  <select id="cf-subject">
                    <option>Trip Planning Enquiry</option>
                    <option>Gorilla Permit Help</option>
                    <option>Hotel Booking</option>
                    <option>Advertising Partnership</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group"><label for="cf-message">Message *</label><textarea id="cf-message" placeholder="Tell us how we can help..." required></textarea></div>
                <button type="submit" class="btn-submit" id="contact-submit">Send Message</button>
                <p class="form-error" id="form-error" style="display:none"></p>
              </form>
            </div>
          </div>
        </div>
      </div>`;
  }

  async function handleContactSubmit(e) {
    e.preventDefault();
    const btn  = document.getElementById('contact-submit');
    const err  = document.getElementById('form-error');
    const name = document.getElementById('cf-name').value.trim();
    const email= document.getElementById('cf-email').value.trim();
    const subj = document.getElementById('cf-subject').value;
    const msg  = document.getElementById('cf-message').value.trim();

    if (!name || !email || !msg) { err.textContent = 'Please fill in all required fields.'; err.style.display='block'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Please enter a valid email address.'; err.style.display='block'; return; }

    btn.disabled = true; btn.textContent = 'Sending…'; err.style.display = 'none';
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name:name, from_email:email, reply_to:email, subject:subj, message:msg });
      document.getElementById('contact-form-wrap').innerHTML = `
        <div class="form-success">
          <div class="si">✅</div>
          <h3>Message Sent!</h3>
          <p>Thank you, ${name}. We'll be in touch within 24 hours.</p>
        </div>`;
    } catch(ex) {
      btn.disabled = false; btn.textContent = 'Send Message';
      err.textContent = `Failed to send (${ex?.text||'error'}). Email us at hello@visitmusanze.rw`;
      err.style.display = 'block';
    }
  }

  // ── ADVERTISE ─────────────────────────────────────────────────────────────────
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
            <div class="adv-feat"><div class="adv-feat-icon">🎯</div><h4>Targeted Reach</h4><p>Travellers actively planning Musanze trips.</p></div>
            <div class="adv-feat"><div class="adv-feat-icon">🌍</div><h4>Global Audience</h4><p>Visitors from Africa, Europe, and beyond.</p></div>
            <div class="adv-feat"><div class="adv-feat-icon">📈</div><h4>Flexible Packages</h4><p>For lodges, operators, and local businesses.</p></div>
          </div>
        </div>
      </div>`;
  }

  // ── INIT ──────────────────────────────────────────────────────────────────────
  navigate('home');
});
