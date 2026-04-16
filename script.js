/* ============================================
   VISIT MUSANZE — App Logic
   ============================================ */

/* --- CONFIG --- */
const CONFIG = {
  emailService: 'service_6b0rbuc',
  emailTemplate: 'template_f8pccge',
  emailKey: 'QICH0i1piXaX-4Rtx'
};

/* --- DATA STORE --- */
const DATA = {
  volcanoes: {
    karisimbi: {
      name: 'Mount Karisimbi', subtitle: 'The Roof of Rwanda',
      eyebrow: 'Dormant Stratovolcano', elevation: '4,507m', duration: '2 Days', difficulty: 'Challenging',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg/1024px-Mt_kalisimbi%2C_Nyamuragira_and_Bisoke_sunset_view.jpg',
      desc: [
        'Mount Karisimbi is the highest of the eight Virunga volcanoes and Rwanda\'s highest peak. The name in Kinyarwanda means "white shell", referring to the snow-capped summit.',
        'The two-day trek is arduous but rewarding. Trekkers camp at 3,700m on the first night, waking up above the clouds for the final ascent.',
        'Ecologically, you traverse bamboo forest, hypericum woods, and Afro-alpine moorland.'
      ],
      acts: ['2-Day Summit Trek', 'Camping', 'Bird Watching', 'Photography'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/mount-karisimbi/'
    },
    bisoke: {
      name: 'Mount Bisoke', subtitle: 'The Crater Lake Summit',
      eyebrow: 'Dormant Volcano', elevation: '3,711m', duration: '6 Hours', difficulty: 'Moderate',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mt_Bisoke%2C_Rwanda.jpg/1024px-Mt_Bisoke%2C_Rwanda.jpg',
      desc: [
        'Famous for its beautiful crater lake, Lake Ngezi, which sits in the crater. It is one of the most accessible hikes in the park.',
        'The trail offers stunning views of the Virunga range. It is a great option for those who want to experience the volcanic terrain without the multi-day commitment.',
        'You might also encounter buffalo or golden monkeys on the lower slopes.'
      ],
      acts: ['Crater Lake View', 'Day Hike', 'Golden Monkeys', 'Nature Walks'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    sabyinyo: {
      name: 'Mount Sabyinyo', subtitle: "The Old Man's Teeth",
      eyebrow: 'Extinct Volcano', elevation: '3,634m', duration: '1 Day', difficulty: 'Challenging',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg/1024px-Sabyinyo_Volcano%2C_Kinigi_sector%2C_Musanze_district%2C_Rwanda.jpg',
      desc: [
        'The jagged peaks resemble worn teeth, giving the mountain its name. It marks the intersection of three countries: Rwanda, Uganda, and DRC.',
        'The hike involves steep ascents and ladder climbs through lush vegetation.',
        'Reaching the summit allows you to stand in three countries at once.'
      ],
      acts: ['3-Country Summit', 'Ladder Climbing', 'Gorilla Trekking', 'Photography'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    muhabura: {
      name: 'Mount Muhabura', subtitle: 'The Guide',
      eyebrow: 'Dormant Volcano', elevation: '4,127m', duration: '1 Day', difficulty: 'Strenuous',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Muhavura_Volcano_in_Rwanda.jpg/1024px-Muhavura_Volcano_in_Rwanda.jpg',
      desc: [
        'The second highest peak in the Virunga range. The name means "The Guide" because it historically served as a navigation landmark.',
        'The trail is steep and offers little shade near the top, but the 360-degree views from the summit are unparalleled.',
        'A small crater lake sits at the top.'
      ],
      acts: ['Summit Hike', 'Panoramic Views', 'Crater Lake', 'Golden Monkeys'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
    gahinga: {
      name: 'Mount Gahinga', subtitle: 'The Pile of Stones',
      eyebrow: 'Dormant Volcano', elevation: '3,474m', duration: '6 Hours', difficulty: 'Moderate',
      img: 'https://images.unsplash.com/photo-1628151015968-3a4429f5d28d?q=80&w=1000&auto=format&fit=crop', // Generic volcanic hike
      desc: [
        'The smallest of the Rwandan volcanoes. The summit contains a swamp, which is a unique feature.',
        'It lies between Muhabura and Sabyinyo and forms part of the Mgahinga Gorilla National Park ecosystem.',
        'It is an excellent hike for bird enthusiasts.'
      ],
      acts: ['Swamp Exploration', 'Bird Watching', 'Bamboo Forest', 'Gorilla Range'],
      link: 'https://www.volcanoesparkrwanda.org/what-to-do/'
    },
  },
  hotels: {
    virunga: {
      name: 'Virunga Lodge', subtitle: 'Luxury Eco-Lodge',
      eyebrow: 'Luxury', price: '$$$$', location: 'Kinigi Area',
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
      desc: 'Virunga Lodge is arguably Rwanda\'s premier luxury lodge. Perched on a hilltop, it offers breathtaking views of the Virunga volcanoes and the twin lakes. It is known for its exceptional service, spacious bandas, and commitment to conservation.',
      amenities: ['Infinity Pool', 'Spa', 'Fine Dining', 'Butler Service'],
      link: 'https://www.volcanossafaris.com/virunga-lodge/'
    },
    bisate: {
      name: 'Bisate Lodge', subtitle: 'Rwanda’s Rewilding',
      eyebrow: 'Ultra Luxury', price: '$$$$$', location: 'Volcanoes National Park',
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
      desc: 'An architectural masterpiece located in the natural amphitheater of an eroded volcanic cone. Bisate is adjacent to the park, making it perfect for gorilla trekking. The lodge is heavily involved in reforestation efforts.',
      amenities: ['Private Villas', 'Gorilla Trekking Access', 'Conservation Center', 'Wine Cellar'],
      link: 'https://www.wilderness-safaris.com/bisate-lodge'
    },
    sabyinyo: {
      name: 'Sabyinyo Silverback Lodge', subtitle: 'Community Owned',
      eyebrow: 'Luxury', price: '$$$$', location: 'Kinigi',
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
      desc: 'Located near the park headquarters, this lodge offers stunning views of the Virungas. It is owned by a local community association, meaning your stay directly benefits the local people.',
      amenities: ['Fireplace Lounge', 'Gorilla Trekking Start', 'Garden Views', 'Community Tours'],
      link: 'https://www.governorscamp.com/sabyinyo-silverback-lodge'
    },
    five_volcanoes: {
      name: 'Five Volcanoes Boutique', subtitle: 'Charming & Affordable',
      eyebrow: 'Mid-Range', price: '$$', location: 'Musanze Town',
      img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800&auto=format&fit=crop',
      desc: 'A charming hotel located in the heart of Musanze. It features beautiful gardens, a cozy atmosphere, and serves as a great base for exploring the town and the park. Good value for money.',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Garden'],
      link: 'https://www.fivevolcanoesrwanda.com/'
    }
  },
  restaurants: {
    bulma: {
      name: 'Bulma Restaurant', subtitle: 'Mexican Flavors in Rwanda',
      eyebrow: 'Casual Dining', cuisine: 'Mexican / Fusion', price: '$',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop',
      desc: 'A local favorite known for its burritos and tacos. It has a vibrant atmosphere, great music, and is perfect for a relaxed lunch or dinner after a day of trekking.',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g297932-d12345678-Bulma_Restaurant-Musanze_Northern_Province.html'
    },
    muhabura: {
      name: 'Muhabura Hotel Restaurant', subtitle: 'Classic Rwandan Hospitality',
      eyebrow: 'Hotel Dining', cuisine: 'Continental / Rwandan', price: '$$',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      desc: 'Located in the historic Muhabura Hotel. The restaurant offers a quiet environment with a variety of local and international dishes. Great for breakfast.',
      link: '#'
    },
    paradise: {
      name: 'Paradise Malahide', subtitle: 'Twin Lakes Views',
      eyebrow: 'Scenic', cuisine: 'Rwandan / Seafood', price: '$$',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
      desc: 'Situated near the Twin Lakes, this spot offers the best views while dining. Fresh fish from the lake is their specialty. The sunset view here is unmatched.',
      link: '#'
    }
  },
  destinations: [
    { tag:'Wildlife',   title:'Gorilla Trekking',          text:'Trek through dense forest to observe endangered mountain gorillas.',              grad:'bg-green',  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg' },
    { tag:'Adventure',  title:'Musanze Caves',             text:'Ancient lava tunnels stretching for kilometers, once used as wartime shelters.', grad:'bg-slate',  img:'https://images.unsplash.com/photo-1628118034874-b05bc4a2edbe?q=80&w=800&auto=format&fit=crop' },
    { tag:'Nature',     title:'Twin Lakes',                text:'Burera & Ruhondo nested among volcanic peaks — boat trips, birdwatching.',        grad:'bg-teal',   img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop' },
    { tag:'History',    title:'Dian Fossey Memorial',      text:'Hike to the resting place of the legendary primatologist.',                         grad:'bg-purple', img:'https://upload.wikimedia.org/wikipedia/commons/8/88/Karisoke_Research_Center_sign.jpg' },
    { tag:'Culture',    title:"Iby'Iwacu Cultural Village",text:'Traditional dances, crafts, and an immersive Rwandan cultural experience.',        grad:'bg-amber',  img:'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop' },
    { tag:'Wildlife',   title:'Golden Monkey Tracking',    text:'Track the playful golden monkeys endemic to the Virunga volcanic forests.',       grad:'bg-pink',   img:'https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=800&auto=format&fit=crop' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800',
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800',
    'https://images.unsplash.com/photo-1535231563301-b6b5c0a4237c?q=80&w=800'
  ],
  tips: [
    { icon: '🎫', title: 'Permits', text: 'Gorilla trekking permits must be booked months in advance via RDB ($1500).' },
    { icon: '🧳', title: 'Packing', text: 'Bring hiking boots, rain gear, gardening gloves, and layers. It gets cold at high altitude.' },
    { icon: '🛂', title: 'Visa', text: 'Most visitors can get a Visa on Arrival or an East African Tourist Visa online.' },
    { icon: '🚗', title: 'Transport', text: 'Hire a private driver for the 2-hour trip from Kigali or take a public bus from Nyabugogo.' }
  ]
};

/* --- STATE MANAGEMENT --- */
const state = {
  currentPage: 'home',
  isModalOpen: false
};

/* --- HELPERS --- */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

/* --- RENDERERS --- */
const renderHome = () => {
  const dests = DATA.destinations.slice(0, 3).map(d => `
    <div class="card" onclick="app.openModal('dest', '${d.title}')">
      <div class="card-img-wrap">
        <img src="${d.img}" alt="${d.title}" onerror="this.parentElement.style.background='${d.grad}'">
        <span class="card-badge">${d.tag}</span>
      </div>
      <div class="card-body">
        <span class="card-eyebrow">${d.tag}</span>
        <h3 class="card-title">${d.title}</h3>
        <p class="card-desc">${d.text}</p>
        <div class="card-btn">Read More</div>
      </div>
    </div>
  `).join('');

  return `
    <section class="container">
      <div class="section-header">
        <h2 class="section-title">Featured <span class="text-gold">Experiences</span></h2>
        <p class="text-mute">Discover why Musanze is the gateway to Africa's greatest adventures.</p>
      </div>
      <div class="grid-3">${dests}</div>
      <div class="text-center" style="margin-top:50px">
        <button class="btn-ghost" onclick="app.nav('destinations')">View All Destinations →</button>
      </div>
    </section>
  `;
};

const renderVolcanoes = () => {
  const vList = Object.keys(DATA.volcanoes).map(key => {
    const v = DATA.volcanoes[key];
    return `
      <div class="card" onclick="app.openModal('vol', '${key}')">
        <div class="card-img-wrap">
          <img src="${v.img}" alt="${v.name}" onerror="this.src='https://picsum.photos/seed/${key}/400/300'">
          <span class="card-badge">${v.difficulty}</span>
        </div>
        <div class="card-body">
          <span class="card-eyebrow text-gold">${v.eyebrow}</span>
          <h3 class="card-title">${v.name}</h3>
          <p class="card-desc">${v.subtitle}</p>
          <div class="card-meta">
            <span>📍 ${v.elevation}</span>
            <span>⏱ ${v.duration}</span>
          </div>
          <div class="card-btn">View Hike Details</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="container section-header">
      <h2 class="section-title">The Virunga <span class="text-gold">Volcanoes</span></h2>
      <p class="text-mute">Five magnificent peaks. Click any card to plan your ascent.</p>
    </div>
    <div class="container grid-3" style="margin-bottom:80px">${vList}</div>
  `;
};

const renderHotels = () => {
  const list = Object.keys(DATA.hotels).map(key => {
    const h = DATA.hotels[key];
    return `
      <div class="card" onclick="app.openModal('hotel', '${key}')">
        <div class="card-img-wrap">
          <img src="${h.img}" alt="${h.name}">
          <span class="card-badge" style="background:var(--color-gold); color:black">${h.price}</span>
        </div>
        <div class="card-body">
          <span class="card-eyebrow">${h.eyebrow}</span>
          <h3 class="card-title">${h.name}</h3>
          <p class="card-desc">${h.subtitle}</p>
          <div class="card-meta">📍 ${h.location}</div>
          <div class="card-btn" style="background:transparent; border:1px solid var(--color-gold); color:var(--color-gold)">View Rooms</div>
        </div>
      </div>
    `;
  }).join('');
  
  return `
    <div class="container section-header">
      <h2 class="section-title">Luxury <span class="text-gold">Stays</span></h2>
      <p class="text-mute">From eco-lodges to boutique hotels, find your perfect base in Musanze.</p>
    </div>
    <div class="container grid-3" style="margin-bottom:80px">${list}</div>
  `;
};

const renderFood = () => {
  const list = Object.keys(DATA.restaurants).map(key => {
    const r = DATA.restaurants[key];
    return `
      <div class="card" onclick="app.openModal('food', '${key}')">
        <div class="card-img-wrap">
          <img src="${r.img}" alt="${r.name}">
          <span class="card-badge">${r.cuisine}</span>
        </div>
        <div class="card-body">
          <span class="card-eyebrow">${r.eyebrow}</span>
          <h3 class="card-title">${r.name}</h3>
          <p class="card-desc">${r.subtitle}</p>
          <div class="card-meta">💰 ${r.price}</div>
          <div class="card-btn">View Menu</div>
        </div>
      </div>
    `;
  }).join('');
  
  return `
    <div class="container section-header">
      <h2 class="section-title">Taste of <span class="text-gold">Musanze</span></h2>
      <p class="text-mute">Explore the culinary landscape, from local fufu to gourmet fusion.</p>
    </div>
    <div class="container grid-3" style="margin-bottom:80px">${list}</div>
  `;
};

const renderGallery = () => {
  const gList = DATA.gallery.map(url => `
    <div class="gallery-item">
      <img src="${url}" loading="lazy" alt="Musanze Gallery">
    </div>
  `).join('');

  return `
    <div class="container section-header">
      <h2 class="section-title">Visual <span class="text-gold">Diary</span></h2>
    </div>
    <div class="container grid-gallery" style="margin-bottom:80px">${gList}</div>
  `;
};

const renderDestinations = () => {
  const cards = DATA.destinations.map(d => `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${d.img}" alt="${d.title}" onerror="this.parentElement.style.background='${d.grad}'">
        <span class="card-badge">${d.tag}</span>
      </div>
      <div class="card-body">
        <span class="card-eyebrow">${d.tag}</span>
        <h3 class="card-title">${d.title}</h3>
        <p class="card-desc">${d.text}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="container section-header">
      <h2 class="section-title">Incredible <span class="text-gold">Destinations</span></h2>
    </div>
    <div class="container grid-3" style="margin-bottom:80px">${cards}</div>
  `;
};

const renderTrip = () => {
  const tips = DATA.tips.map(t => `
    <div class="stat-box" style="text-align:left">
      <span style="font-size:2rem; display:block; margin-bottom:10px;">${t.icon}</span>
      <h4 style="color:white; margin-bottom:5px;">${t.title}</h4>
      <p style="font-size:0.9rem; color:#aaa;">${t.text}</p>
    </div>
  `).join('');

  return `
    <div class="container section-header">
      <h2 class="section-title">Plan Your <span class="text-gold">Trip</span></h2>
    </div>
    
    <div class="container grid-2" style="margin-bottom:80px; align-items:center;">
      <div>
        <h3 class="text-gold" style="font-size:2rem; margin-bottom:20px;">Travel Tips</h3>
        <div style="display:grid; gap:20px;">
          ${tips}
        </div>
      </div>
      
      <div style="background:var(--color-card); padding:40px; border-radius:16px; border:1px solid var(--color-border);">
        <h3 style="margin-bottom:20px;">Still have questions?</h3>
        <p class="text-mute" style="margin-bottom:30px;">Send us a message and our local experts will help you craft the perfect itinerary.</p>
        <form id="contact-form" onsubmit="app.handleContact(event)">
          <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" class="form-input" name="from_name" required>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" name="reply_to" required>
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="form-input" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width:100%">Send Message</button>
        </form>
      </div>
    </div>
  `;
};

/* --- CORE APP LOGIC --- */
const app = {
  init: () => {
    emailjs.init(CONFIG.emailKey);
    
    window.addEventListener('scroll', app.handleScroll);
    $('.hamburger').addEventListener('click', app.toggleMenu);
    $('#modal-close').addEventListener('click', app.closeModal);
    $('#modal-overlay').addEventListener('click', (e) => {
      if(e.target === $('#modal-overlay')) app.closeModal();
    });
    
    app.nav('home');
  },

  nav: (page) => {
    state.currentPage = page;
    $('#app-content').innerHTML = (
      page === 'home' ? renderHome() :
      page === 'volcanoes' ? renderVolcanoes() :
      page === 'hotels' ? renderHotels() :
      page === 'food' ? renderFood() :
      page === 'gallery' ? renderGallery() :
      page === 'destinations' ? renderDestinations() :
      page === 'trip' ? renderTrip() :
      `<div class="container text-center"><h2>Page Under Construction</h2></div>`
    );
    
    $$('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    app.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  openModal: (type, key) => {
    let item;
    let html = '';

    // Fetch Data
    if(type === 'vol') item = DATA.volcanoes[key];
    if(type === 'hotel') item = DATA.hotels[key];
    if(type === 'food') item = DATA.restaurants[key];
    if(type === 'dest') item = DATA.destinations.find(d => d.title === key);

    if(!item) return;

    // Generate Specific Content
    if(type === 'vol') {
      html = `
        <img src="${item.img}" class="modal-hero" alt="${item.name}">
        <div class="modal-content">
          <span class="text-gold" style="font-weight:700; letter-spacing:1px;">${item.eyebrow}</span>
          <h2 class="modal-title">${item.name}</h2>
          <span class="modal-subtitle">${item.subtitle}</span>
          
          <div class="modal-grid">
            <div class="stat-box"><span class="stat-num">${item.elevation}</span><span class="stat-label">Elevation</span></div>
            <div class="stat-box"><span class="stat-num">${item.duration}</span><span class="stat-label">Duration</span></div>
            <div class="stat-box"><span class="stat-num">${item.difficulty}</span><span class="stat-label">Difficulty</span></div>
          </div>

          <div style="margin-bottom:30px;">
            <h4 class="text-gold">About this hike</h4>
            ${item.desc.map(p => `<p class="text-mute" style="margin-bottom:15px;">${p}</p>`).join('')}
          </div>

          <div>
            <h4 class="text-gold">Activities</h4>
            <div style="margin-top:10px;">
              ${item.acts.map(a => `<span class="pill">${a}</span>`).join('')}
            </div>
          </div>
          <a href="${item.link}" target="_blank" class="modal-action-btn">Book Official Permit</a>
        </div>
      `;
    } else if (type === 'hotel') {
      html = `
        <img src="${item.img}" class="modal-hero" alt="${item.name}">
        <div class="modal-content">
          <span class="text-gold" style="font-weight:700;">${item.eyebrow}</span>
          <h2 class="modal-title">${item.name}</h2>
          <span class="modal-subtitle">${item.subtitle}</span>
          
          <div class="modal-grid">
             <div class="stat-box"><span class="stat-num text-gold">${item.price}</span><span class="stat-label">Price Range</span></div>
             <div class="stat-box"><span class="stat-num">${item.location}</span><span class="stat-label">Location</span></div>
          </div>

          <p class="text-mute" style="margin-bottom:30px;">${item.desc}</p>

          <div style="margin-bottom:30px;">
            <h4 class="text-gold">Amenities</h4>
            <div style="margin-top:10px;">
              ${item.amenities.map(a => `<span class="pill">${a}</span>`).join('')}
            </div>
          </div>

          <a href="${item.link}" target="_blank" class="modal-action-btn">Check Availability & Book</a>
        </div>
      `;
    } else if (type === 'food') {
      html = `
        <img src="${item.img}" class="modal-hero" alt="${item.name}">
        <div class="modal-content">
          <span class="text-gold" style="font-weight:700;">${item.eyebrow}</span>
          <h2 class="modal-title">${item.name}</h2>
          <span class="modal-subtitle">${item.subtitle}</span>
          
          <div class="modal-grid">
             <div class="stat-box"><span class="stat-num text-gold">${item.cuisine}</span><span class="stat-label">Cuisine</span></div>
             <div class="stat-box"><span class="stat-num">${item.price}</span><span class="stat-label">Cost</span></div>
          </div>

          <p class="text-mute" style="margin-bottom:30px;">${item.desc}</p>
          <a href="${item.link}" target="_blank" class="modal-action-btn">Find on TripAdvisor</a>
        </div>
      `;
    }

    $('#modal-inner').innerHTML = html;
    $('#modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    state.isModalOpen = true;
  },

  closeModal: () => {
    $('#modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    state.isModalOpen = false;
  },

  toggleMenu: () => {
    $('.nav-links').classList.toggle('open');
    $('.hamburger').classList.toggle('open');
  },

  closeMenu: () => {
    $('.nav-links').classList.remove('open');
    $('.hamburger').classList.remove('open');
  },

  handleScroll: () => {
    if (window.scrollY > 50) $('#navbar').classList.add('scrolled');
    else $('#navbar').classList.remove('scrolled');
  },

  handleContact: async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Sending...';
    btn.disabled = true;

    try {
      await emailjs.sendForm(CONFIG.emailService, CONFIG.emailTemplate, e.target);
      e.target.innerHTML = `
        <div style="text-align:center; padding:20px;">
          <span style="font-size:3rem; display:block;">✨</span>
          <h3 style="color:var(--color-gold); margin-bottom:10px;">Message Sent!</h3>
          <p class="text-mute">We'll get back to you shortly.</p>
        </div>
      `;
    } catch (err) {
      console.error(err);
      alert('Error sending message. Please try again.');
      btn.innerText = originalText;
      btn.disabled = false;
    }
  }
};

// Start App
document.addEventListener('DOMContentLoaded', app.init);
