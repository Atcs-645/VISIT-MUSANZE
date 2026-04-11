// ============================================
//   VISIT MUSANZE — App Script
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const appContent = document.getElementById('app-content');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  let currentPage = 'home';

  // ── Navbar scroll effect ────────────────────
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Mobile hamburger ────────────────────────
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // ── Close mobile menu on nav click ──────────
  navLinks.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-item')) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });

  // ── Navigation ──────────────────────────────
  function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.page === page);
    });
    if (page === 'home') {
      appContent.innerHTML = renderHome();
      window.scrollTo({ top: 0 });
    } else {
      appContent.innerHTML = renderPage(page);
      const hero = document.getElementById('hero');
      const offset = hero ? hero.offsetHeight - 80 : 0;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    bindPageLinks();
  }

  function bindPageLinks() {
    document.querySelectorAll('[data-page]').forEach(el => {
      if (!el.closest('#navbar') && !el.closest('#footer')) return;
      // already bound via delegation
    });
    // Bind in-content buttons
    document.querySelectorAll('#app-content [data-page]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(el.dataset.page);
      });
    });
  }

  // ── Global click delegation ─────────────────
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-page]');
    if (!el) return;
    e.preventDefault();
    navigate(el.dataset.page);
  });

  // ── Page Renderers ───────────────────────────

  function renderHome() {
    return `
      <div>
        <!-- Intro split -->
        <div class="home-intro">
          <div class="home-intro-text">
            <h2>Welcome to the <em>Heart of Rwanda</em></h2>
            <p>
              Musanze sits at the foot of the Virunga volcanoes — a land where ancient forests shelter 
              the world's last mountain gorillas, twin lakes shimmer beneath volcanic peaks, and culture 
              runs as deep as the lava tunnels beneath your feet.
            </p>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <button class="btn-primary" data-page="destinations">Explore Destinations</button>
              <button class="btn-ghost" data-page="trip">Plan Your Visit</button>
            </div>
          </div>
          <div class="home-intro-stats">
            <div class="stat-item">
              <div class="stat-num">5</div>
              <div class="stat-label">Virunga Volcanoes</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">~700</div>
              <div class="stat-label">Mountain Gorillas Left</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">2°C</div>
              <div class="stat-label">Avg Cool Temperature</div>
            </div>
            <div class="stat-item">
              <div class="stat-num">2,400m</div>
              <div class="stat-label">Elevation Above Sea Level</div>
            </div>
          </div>
        </div>

        <!-- Highlights -->
        <div class="home-highlights">
          <div class="highlight-strip">
            <div class="highlight-item">
              <div class="highlight-icon">🦍</div>
              <h3>Gateway to Gorillas</h3>
              <p>The world's best mountain gorilla trekking experience, starting right here in Musanze.</p>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">🌋</div>
              <h3>Volcanic Landscapes</h3>
              <p>Hike active and dormant volcanoes with crater lakes, lava caves, and sweeping highland views.</p>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">🎭</div>
              <h3>Rich Culture</h3>
              <p>Dance, craft, and community — Rwandan traditions are alive and welcoming in Musanze.</p>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <p class="section-label">Featured Destinations</p>
            <h2 class="section-title">Where to <em>Explore</em></h2>
          </div>
          <div class="grid-3">
            ${destinationCards().slice(0, 3).map(cardHTML).join('')}
          </div>
          <div style="text-align:center; margin-top: 40px;">
            <button class="btn-ghost" data-page="destinations">View All Destinations →</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderPage(page) {
    const pages = {
      destinations: renderDestinations,
      trip: renderTrip,
      sports: renderSports,
      food: renderFood,
      advertise: renderAdvertise,
      login: renderLogin,
    };
    return pages[page] ? pages[page]() : renderHome();
  }

  // ── Destinations ─────────────────────────────
  function destinationCards() {
    return [
      {
        tag: 'Wildlife',
        title: 'Gorilla Trekking',
        text: 'Trek through dense forest to observe endangered mountain gorillas in their natural habitat. The ultimate wildlife encounter.',
        bg: 'bg-green',
        label: 'Volcanoes National Park',
        link: 'https://visitrwanda.com/interests/gorilla-tracking/',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg'
      },
      {
        tag: 'Adventure',
        title: 'Musanze Caves',
        text: 'Ancient lava tunnels stretching for kilometers, once used as wartime shelters. Fascinating geology underground.',
        bg: 'bg-slate',
        label: 'City Centre'
      },
      {
        tag: 'Nature',
        title: 'Twin Lakes',
        text: 'Burera & Ruhondo sit nestled among volcanic peaks — boat trips, birdwatching, and island villages await.',
        bg: 'bg-teal',
        label: 'Lakes Burera & Ruhondo'
      },
      {
        tag: 'History',
        title: 'Dian Fossey Memorial',
        text: 'Hike to the resting place of the legendary primatologist and visit the Karisoke Research Center she founded.',
        bg: 'bg-purple',
        label: 'Volcanoes National Park'
      },
      {
        tag: 'Culture',
        title: "Iby'Iwacu Cultural Village",
        text: 'Traditional dances, crafts, local food and community. An immersive and unforgettable Rwandan cultural experience.',
        bg: 'bg-amber',
        label: 'Gorilla Guardians Village'
      },
      {
        tag: 'Wildlife',
        title: 'Golden Monkey Tracking',
        text: 'Playful and endemic to these volcanic forests — tracking golden monkeys is an active and joyful trek.',
        bg: 'bg-pink',
        label: 'Volcanoes National Park'
      },
    ];
  }

  function cardHTML(d) {
    const imgHTML = d.img
      ? `<img src="${d.img}" alt="${d.title}" class="card-img" onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder ${d.bg}\\'>${d.label}</div>'">`
      : `<div class="card-img-placeholder ${d.bg}">${d.label}</div>`;
    const linkHTML = d.link
      ? `<a href="${d.link}" target="_blank" rel="noopener" class="card-link">Learn More →</a>`
      : '';
    return `
      <div class="card">
        ${imgHTML}
        <div class="card-body">
          <p class="card-tag">${d.tag}</p>
          <h3 class="card-title">${d.title}</h3>
          <p class="card-text">${d.text}</p>
          ${linkHTML}
        </div>
      </div>
    `;
  }

  function renderDestinations() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Places to Visit</p>
        <h1 class="page-title">Incredible <em>Destinations</em></h1>
        <p class="page-desc">Six extraordinary experiences, all within reach of Musanze town.</p>
      </div>
      <div class="container">
        <div class="grid-3">
          ${destinationCards().map(cardHTML).join('')}
        </div>
      </div>
    `;
  }

  // ── Trip ──────────────────────────────────────
  function renderTrip() {
    const tips = [
      { icon: '🎫', text: 'Book gorilla permits well in advance — especially for peak season (Jun–Sep, Dec–Feb).' },
      { icon: '🥾', text: 'Pack sturdy waterproof hiking boots, rain jacket, and long sleeves for treks.' },
      { icon: '💧', text: 'Stay hydrated and acclimatize to the altitude (2,400m+) before strenuous hikes.' },
      { icon: '🧭', text: 'Hire a local guide for cultural tours to support the community directly.' },
      { icon: '🌿', text: 'Combine activities: gorilla trekking, cave exploration, lake cruises, cultural village.' },
      { icon: '🍽️', text: 'Try authentic Rwandan food — brochettes, isombe, and fresh highland produce.' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Trip Planning</p>
        <h1 class="page-title">Plan Your <em>Visit</em></h1>
        <p class="page-desc">Everything you need to craft an unforgettable Musanze itinerary.</p>
      </div>
      <div class="trip-layout">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg"
            alt="Mountain Gorilla in Volcanoes National Park"
            class="trip-hero-img"
            onerror="this.style.display='none'"
          />
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:40px; font-style:italic;">
            Mountain gorilla in Volcanoes National Park. Photo: Rod Waddington, CC BY-SA 2.0, via Wikimedia Commons.
          </p>

          <p class="section-label">Why Musanze</p>
          <h2 class="section-title" style="margin-bottom:20px;">The <em>Complete</em> Highland Experience</h2>
          <p style="color:var(--text-muted); line-height:1.8; font-family:var(--ff-serif); font-size:1.1rem; font-style:italic; font-weight:300; max-width:640px; margin-bottom:40px;">
            Musanze is Rwanda's adventure capital. Whether you have two days or two weeks, 
            the combination of wildlife, nature, culture, and cuisine makes it one of Africa's 
            most compelling destinations.
          </p>

          <div class="grid-2">
            <div class="card">
              <div class="card-img-placeholder bg-green" style="height:140px;">Best Time</div>
              <div class="card-body">
                <p class="card-tag">When to Go</p>
                <h3 class="card-title">Dry Season Peaks</h3>
                <p class="card-text">June–September and December–February offer the best trekking conditions. Gorilla permits are in high demand during these months.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-img-placeholder bg-indigo" style="height:140px;">Getting There</div>
              <div class="card-body">
                <p class="card-tag">Transport</p>
                <h3 class="card-title">2 Hours from Kigali</h3>
                <p class="card-text">Musanze is easily reached from Kigali International Airport via comfortable bus services or private transfer on a scenic highland road.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="trip-tips">
            <h3>Travel Tips</h3>
            ${tips.map(t => `
              <div class="tip-item">
                <div class="tip-icon">${t.icon}</div>
                <p class="tip-text">${t.text}</p>
              </div>
            `).join('')}
            <div style="margin-top:24px; text-align:center;">
              <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">Need personalized help?</p>
              <a href="mailto:hello@visitmusanze.rw" class="btn-primary" style="display:inline-block; font-size:0.8rem;">Contact a Local Expert</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Sports ───────────────────────────────────
  function renderSports() {
    const activities = [
      { tag: 'Hiking', title: 'Volcano Hiking', text: 'Conquer the Virungas — from Mount Bisoke\'s day hike and crater lake to the two-day ascent of Mount Karisimbi (4,507m).', bg: 'bg-slate' },
      { tag: 'Wildlife Trek', title: 'Golden Monkey Tracking', text: 'An energetic bamboo-forest trek to find the endemic golden monkeys. Playful, colourful, and utterly charming.', bg: 'bg-amber' },
      { tag: 'Cycling', title: 'Cycling Tours', text: 'Explore on two wheels through scenic villages. Visit the Africa Rising Cycling Centre and meet Rwanda\'s world-class cycling team.', bg: 'bg-blue' },
      { tag: 'Water Sport', title: 'Kayaking & Canoeing', text: 'Glide across tranquil Lake Burera and Lake Ruhondo. Explore hidden islands and watch diverse birdlife at the water\'s edge.', bg: 'bg-teal' },
      { tag: 'Exploration', title: 'Cave Exploration', text: 'Venture into the vast lava tube caves beneath Musanze — ancient geological formations with a rich history as wartime shelters.', bg: 'bg-brown' },
      { tag: 'River', title: 'Mukungwa River Canoe', text: 'A relaxing half-day canoe trip along the Mukungwa River, drifting through lush riverine scenery and local village life.', bg: 'bg-lime' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Get Active</p>
        <h1 class="page-title">Sports &amp; <em>Adventure</em></h1>
        <p class="page-desc">Musanze is built for the outdoors. Here's where to burn some energy.</p>
      </div>
      <div class="container">
        <div class="grid-3">
          ${activities.map(d => `
            <div class="card">
              <div class="card-img-placeholder ${d.bg}">${d.title}</div>
              <div class="card-body">
                <p class="card-tag">${d.tag}</p>
                <h3 class="card-title">${d.title}</h3>
                <p class="card-text">${d.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ── Food ──────────────────────────────────────
  function renderFood() {
    const items = [
      { tag: 'Dining', title: 'Featured Restaurants', text: 'La Paillote for international flair, Isange at Five Volcanoes Boutique Hotel for refined dining, and hidden local gems throughout town.', bg: 'bg-olive' },
      { tag: 'Street Food', title: 'Local Delights', text: 'Brochettes (grilled skewers), Ubugari, Isombe — fresh from Musanze Central Market. The real Rwanda on a plate.', bg: 'bg-rust' },
      { tag: 'Café Culture', title: 'Cafés & Bakeries', text: 'Freshly brewed Rwandan single-origin coffee, pastries, and light snacks. Try Crema Cafe or Migano Café for a refined stop.', bg: 'bg-brown' },
      { tag: 'Nightlife', title: 'Bars & Local Scene', text: 'Unwind with a cold Primus or Skol at a local Imigongo bar. Laid-back, social, and a perfect window into everyday Musanze life.', bg: 'bg-indigo' },
    ];
    return `
      <div class="page-header">
        <p class="page-eyebrow">Eat & Drink</p>
        <h1 class="page-title">Food &amp; <em>Flavour</em></h1>
        <p class="page-desc">From highland coffee to open-fire brochettes — Musanze feeds the soul.</p>
      </div>
      <div class="container">
        <div class="grid-2">
          ${items.map(d => `
            <div class="card">
              <div class="card-img-placeholder ${d.bg}" style="height:180px;">${d.title}</div>
              <div class="card-body">
                <p class="card-tag">${d.tag}</p>
                <h3 class="card-title">${d.title}</h3>
                <p class="card-text">${d.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ── Advertise ────────────────────────────────
  function renderAdvertise() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Partnership</p>
        <h1 class="page-title">Advertise <em>With Us</em></h1>
      </div>
      <div class="advertise-wrap">
        <div class="advertise-card">
          <h2>Reach Rwanda's Travellers</h2>
          <p>
            Visit Musanze connects passionate travellers with the best experiences, accommodations, 
            and services in the region. Partner with us to put your business in front of the 
            right audience at the right moment.
          </p>
          <a href="mailto:advertise@visitmusanze.rw" class="advertise-email">
            advertise@visitmusanze.rw
          </a>
          <div class="advertise-features">
            <div class="adv-feat">
              <div class="adv-feat-icon">🎯</div>
              <h4>Targeted Reach</h4>
              <p>Connect with travellers actively planning Musanze trips.</p>
            </div>
            <div class="adv-feat">
              <div class="adv-feat-icon">🌍</div>
              <h4>Global Audience</h4>
              <p>Visitors from across Africa, Europe, and beyond.</p>
            </div>
            <div class="adv-feat">
              <div class="adv-feat-icon">📈</div>
              <h4>Flexible Packages</h4>
              <p>Options for lodges, tour operators, and local businesses.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Login ─────────────────────────────────────
  function renderLogin() {
    return `
      <div class="page-header">
        <p class="page-eyebrow">Account</p>
        <h1 class="page-title">Sign <em>In</em></h1>
      </div>
      <div class="login-wrap">
        <div class="login-card">
          <h2>Welcome back</h2>
          <p class="login-sub">Sign in to manage your trip and bookmarks.</p>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" autocomplete="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" autocomplete="current-password" />
          </div>
          <button class="btn-submit" type="button">Sign In</button>
          <p class="login-footer">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>
      </div>
    `;
  }

  // ── Init ──────────────────────────────────────
  navigate('home');
});
