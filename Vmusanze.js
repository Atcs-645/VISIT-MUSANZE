// script.js

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    let currentPage = 'home'; // Initial page

    // Function to render page content
    const renderPage = () => {
        let content = '';
        switch (currentPage) {
            case 'home':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-5xl font-extrabold text-green-800 mb-8 text-center rounded-lg bg-white p-4 shadow-xl">
                            Discover the Heart of Rwanda: Visit Musanze
                        </h1>
                        <div class="flex flex-col items-center">
                            <p class="text-lg text-gray-700 mb-8 max-w-3xl text-center">
                                Welcome to Musanze, your gateway to the breathtaking Virunga Mountains and the iconic Volcanoes National Park.
                                Immerse yourself in the rich culture, stunning landscapes, and unforgettable wildlife encounters that await you here.
                            </p>
                            <div class="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-screen"
                                        allowFullScreen
                                        class="rounded-xl"
                                        title="Musanze Tourism Video"
                                    ></iframe>
                                </div>
                                <p class="text-sm text-gray-500 text-center py-3">
                                    Experience the beauty of Rwanda in this captivating video.
                                </p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                                <div class="p-6 rounded-xl shadow-lg bg-blue-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-blue-800">Gateway to Gorillas</h3>
                                    <p class="text-gray-700">Musanze is the prime starting point for unforgettable mountain gorilla treks in Volcanoes National Park.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-orange-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-orange-800">Volcanic Landscapes</h3>
                                    <p class="text-gray-700">Explore the majestic Virunga volcanoes and their lush, vibrant ecosystems.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-purple-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-purple-800">Rich Culture</h3>
                                    <p class="text-gray-700">Engage with local communities and discover the vibrant traditions and hospitality of Rwanda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'destinations':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Explore Musanze's Incredible Destinations
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg" alt="Gorilla Trekking (Volcanoes National Park)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Gorilla Trekking (Volcanoes National Park)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">The ultimate wildlife encounter. Trek through dense forests to observe endangered mountain gorillas in their natural habitat. An unforgettable and awe-inspiring experience.</p>
                                    <a href="https://visitrwanda.com/interests/gorilla-tracking/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Learn more about Gorilla Trekking →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/78909C/FFFFFF?text=Musanze+Caves" alt="Musanze Caves" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Musanze Caves</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Explore ancient lava tunnels stretching for kilometers, once used as shelters during wars. A unique subterranean adventure with fascinating geological formations.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/musanze-caves/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Discover Musanze Caves →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/4CAF50/FFFFFF?text=Twin+Lakes" alt="Twin Lakes (Burera & Ruhondo)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Twin Lakes (Burera & Ruhondo)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Nestled at the base of the Virunga volcanoes, these serene lakes offer stunning scenery, boat trips to islands, birdwatching, and cultural interactions with local communities.</p>
                                    <a href="https://www.insidevolcanoesnationalpark.com/what-to-see-in-volcanoes-national-park/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Visit the Twin Lakes →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/9C27B0/FFFFFF?text=Dian+Fossey+Memorial" alt="Dian Fossey Grave & Karisoke Research Center" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Dian Fossey Grave & Karisoke Research Center</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Hike to the resting place of renowned primatologist Dian Fossey and visit the research center she founded. A poignant tribute to gorilla conservation efforts.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/dian-fossey-hike/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Explore Dian Fossey's Legacy →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FFC107/FFFFFF?text=Cultural+Village" alt="Iby'Iwacu Cultural Village (Gorilla Guardians Village)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Iby'Iwacu Cultural Village (Gorilla Guardians Village)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Immerse yourself in authentic Rwandan culture. Enjoy traditional dances, learn about local crafts, taste traditional food, and engage with the community.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/ibyiwacu-cultural-village/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Experience Rwandan Culture →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/E91E63/FFFFFF?text=Golden+Monkey" alt="Golden Monkey Tracking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Golden Monkey Tracking</h3>
                                    <p class="text-gray-700 mb-4 text-justify">A delightful experience tracking the playful and inquisitive golden monkeys, a sub-species endemic to the Virunga volcanic forests. A more active and engaging trek.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/golden-monkey-trekking/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Track Golden Monkeys →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'trip':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Plan Your Unforgettable Trip to Musanze
                        </h1>
                        <div class="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
                            <p class="text-lg text-gray-700 text-center">
                                Musanze, the heart of Rwanda's tourism, offers a diverse range of experiences.
                                From thrilling gorilla encounters to serene lake cruises and cultural immersions,
                                we're here to help you plan the perfect itinerary.
                            </p>

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg"
                                alt="Majestic Mountain Gorilla in Volcanoes National Park"
                                class="w-full max-w-2xl h-auto rounded-xl shadow-2xl object-cover border-4 border-green-700"
                                onerror="this.onerror=null;this.src='https://placehold.co/800x600/DDDDDD/333333?text=Gorilla+Image+Error';"
                            />
                            <p class="text-sm text-gray-500 text-center italic">
                                An awe-inspiring moment with a mountain gorilla in its natural habitat.
                                (Photo by Rod Waddington, CC BY-SA 2.0 via Wikimedia Commons)
                            </p>

                            <div class="bg-white p-8 rounded-xl shadow-lg w-full">
                                <h2 class="text-3xl font-bold text-green-700 mb-4">Trip Planning Tips:</h2>
                                <ul class="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Book gorilla permits well in advance (especially for peak season).</li>
                                    <li>Consider a combination of activities: gorilla trekking, golden monkey tracking, cave exploration, and cultural village visits.</li>
                                    <li>Pack appropriate gear: rain jacket, hiking boots, long sleeves/pants for treks.</li>
                                    <li>Hire a local guide for cultural tours and hikes to support the community.</li>
                                    <li>Stay hydrated and be prepared for varying altitudes.</li>
                                    <li>Enjoy the local cuisine and interact with the friendly Rwandan people!</li>
                                </ul>
                                <p class="mt-6 text-gray-600">
                                    For personalized trip planning assistance, consider contacting a local tour operator in Rwanda.
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'sports':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Adventure and Sports in Musanze
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/607D8B/FFFFFF?text=Volcano+Hiking" alt="Volcano Hiking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Volcano Hiking</h3>
                                    <p class="text-gray-700 text-justify">Conquer the majestic Virunga volcanoes. Options range from the day hike of Mount Bisoke with its crater lakes to the challenging two-day ascent of Mount Karisimbi.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FF9800/FFFFFF?text=Golden+Monkey+Trekking" alt="Golden Monkey Tracking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Golden Monkey Tracking</h3>
                                    <p class="text-gray-700 text-justify">An energetic trek to find the vibrant golden monkeys unique to this region. Witness their playful antics in the bamboo forests of Volcanoes National Park.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/2196F3/FFFFFF?text=Cycling+Tour" alt="Cycling Tours" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Cycling Tours</h3>
                                    <p class="text-gray-700 text-justify">Explore Musanze and its surroundings on two wheels. Enjoy scenic routes, visit local villages, and even meet the Rwandan cycling team at the Africa Rising Cycling Centre.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/00BCD4/FFFFFF?text=Kayaking+Canoeing" alt="Kayaking & Canoeing" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Kayaking & Canoeing</h3>
                                    <p class="text-gray-700 text-justify">Glide across the tranquil waters of Lake Burera and Lake Ruhondo. Enjoy peaceful paddles, explore hidden islands, and observe diverse birdlife.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/795548/FFFFFF?text=Cave+Exploration" alt="Musanze Caves Exploration" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Musanze Caves Exploration</h3>
                                    <p class="text-gray-700 text-justify">Delve into the mysterious world beneath Musanze. Explore the vast lava tube caves, learning about their geological formation and historical significance.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/8BC34A/FFFFFF?text=River+Canoeing" alt="Mukungwa River Canoe Trip" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Mukungwa River Canoe Trip</h3>
                                    <p class="text-gray-700 text-justify">Embark on a relaxing half-day canoe trip along the Mukungwa River, enjoying the lush riverine scenery and local life along the banks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'food':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Savor Musanze: Food & Drinks
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/D4E157/FFFFFF?text=Restaurant+Interior" alt="Featured Restaurants" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Featured Restaurants</h3>
                                    <p class="text-gray-700 text-justify">Musanze boasts a variety of restaurants catering to different tastes. From international cuisine at places like La Paillote and the refined dining at Isange (Five Volcanoes Boutique Hotel), to cozy cafes such as Crema Cafe and Migano Café, you'll find quality options for every meal.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FF7043/FFFFFF?text=Rwandan+Cuisine" alt="Local Delights & Street Food" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Local Delights & Street Food</h3>
                                    <p class="text-gray-700 text-justify">Don't miss the authentic Rwandan experience! Indulge in delicious 'brochettes' (grilled meat skewers), fresh local produce from Musanze Central Market, and traditional dishes like 'Ubugari' and 'Isombe'. Embrace the flavors of the region.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/A1887F/FFFFFF?text=Coffee+Shop" alt="Cafes & Bakeries" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Cafes & Bakeries</h3>
                                    <p class="text-gray-700 text-justify">For your morning coffee or an afternoon treat, Musanze has charming cafes. Enjoy freshly brewed Rwandan coffee, pastries, and light snacks in a relaxed atmosphere. Perfect for a quick stop or lingering over a book.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/6D4C41/FFFFFF?text=Local+Bar" alt="Local Bars & Nightlife" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Local Bars & Nightlife</h3>
                                    <p class="text-gray-700 text-justify">Experience the local social scene at one of Musanze's 'Imigongo' bars. Enjoy a cold Rwandan beer (Primus or Skol) and mingle with locals in a casual setting. While not a bustling club scene, it's a great way to unwind.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'advertise':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
                        <div class="bg-white p-10 rounded-xl shadow-xl max-w-2xl text-center">
                            <h1 class="text-4xl font-extrabold text-green-800 mb-6">Advertise With Us</h1>
                            <p class="text-lg text-gray-700 mb-4">
                                Interested in reaching a wide audience passionate about travel and Musanze?
                                Partner with "Visit Musanze" to showcase your business, accommodation, or tour services.
                            </p>
                            <p class="text-xl font-semibold text-green-700">
                                Contact us at <a href="mailto:advertise@visitmusanze.rw" class="text-blue-600 hover:underline">advertise@visitmusanze.rw</a> for more information on advertising opportunities.
                            </p>
                        </div>
                    </div>
                `;
                break;
            case 'login':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
                        <div class="bg-white p-10 rounded-xl shadow-xl max-w-md w-full">
                            <h1 class="text-4xl font-extrabold text-green-800 mb-8 text-center">Login</h1>
                            <form class="space-y-6">
                                <div>
                                    <label for="email" class="block text-gray-700 text-lg font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 shadow-sm"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="password" class="block text-gray-700 text-lg font-medium mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 shadow-sm"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Log In
                                </button>
                            </form>
                            <p class="mt-6 text-center text-gray-600">
                                Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign Up</a>
                            </p>
                        </div>
                    </div>
                `;
                break;
            default:
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-5xl font-extrabold text-green-800 mb-8 text-center rounded-lg bg-white p-4 shadow-xl">
                            Discover the Heart of Rwanda: Visit Musanze
                        </h1>
                        <div class="flex flex-col items-center">
                            <p class="text-lg text-gray-700 mb-8 max-w-3xl text-center">
                                Welcome to Musanze, your gateway to the breathtaking Virunga Mountains and the iconic Volcanoes National Park.
                                Immerse yourself in the rich culture, stunning landscapes, and unforgettable wildlife encounters that await you here.
                            </p>
                            <div class="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-screen"
                                        allowFullScreen
                                        class="rounded-xl"
                                        title="Musanze Tourism Video"
                                    ></iframe>
                                </div>
                                <p class="text-sm text-gray-500 text-center py-3">
                                    Experience the beauty of Rwanda in this captivating video.
                                </p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                                <div class="p-6 rounded-xl shadow-lg bg-blue-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-blue-800">Gateway to Gorillas</h3>
                                    <p class="text-gray-700">Musanze is the prime starting point for unforgettable mountain gorilla treks in Volcanoes National Park.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-orange-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-orange-800">Volcanic Landscapes</h3>
                                    <p class="text-gray-700">Explore the majestic Virunga volcanoes and their lush, vibrant ecosystems.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-purple-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-purple-800">Rich Culture</h3>
                                    <p class="text-gray-700">Engage with local communities and discover the vibrant traditions and hospitality of Rwanda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        appContent.innerHTML = content; // Inject content into the main area
    };

    // Event listeners for navigation buttons
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', (event) => {
            currentPage = event.currentTarget.dataset.page;
            renderPage();
        });
    });

    // Initial page load
    renderPage();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    let currentPage = 'home'; // Initial page

    // Function to render page content
    const renderPage = () => {
        let content = '';
        switch (currentPage) {
            case 'home':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-5xl font-extrabold text-green-800 mb-8 text-center rounded-lg bg-white p-4 shadow-xl">
                            Discover the Heart of Rwanda: Visit Musanze
                        </h1>
                        <div class="flex flex-col items-center">
                            <p class="text-lg text-gray-700 mb-8 max-w-3xl text-center">
                                Welcome to Musanze, your gateway to the breathtaking Virunga Mountains and the iconic Volcanoes National Park.
                                Immerse yourself in the rich culture, stunning landscapes, and unforgettable wildlife encounters that await you here.
                            </p>
                            <div class="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-screen"
                                        allowFullScreen
                                        class="rounded-xl"
                                        title="Musanze Tourism Video"
                                    ></iframe>
                                </div>
                                <p class="text-sm text-gray-500 text-center py-3">
                                    Experience the beauty of Rwanda in this captivating video.
                                </p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                                <div class="p-6 rounded-xl shadow-lg bg-blue-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-blue-800">Gateway to Gorillas</h3>
                                    <p class="text-gray-700">Musanze is the prime starting point for unforgettable mountain gorilla treks in Volcanoes National Park.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-orange-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-orange-800">Volcanic Landscapes</h3>
                                    <p class="text-gray-700">Explore the majestic Virunga volcanoes and their lush, vibrant ecosystems.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-purple-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-purple-800">Rich Culture</h3>
                                    <p class="text-gray-700">Engage with local communities and discover the vibrant traditions and hospitality of Rwanda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'destinations':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Explore Musanze's Incredible Destinations
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/640px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg" alt="Gorilla Trekking (Volcanoes National Park)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Gorilla Trekking (Volcanoes National Park)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">The ultimate wildlife encounter. Trek through dense forests to observe endangered mountain gorillas in their natural habitat. An unforgettable and awe-inspiring experience.</p>
                                    <a href="https://visitrwanda.com/interests/gorilla-tracking/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Learn more about Gorilla Trekking →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/78909C/FFFFFF?text=Musanze+Caves" alt="Musanze Caves" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Musanze Caves</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Explore ancient lava tunnels stretching for kilometers, once used as shelters during wars. A unique subterranean adventure with fascinating geological formations.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/musanze-caves/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Discover Musanze Caves →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/4CAF50/FFFFFF?text=Twin+Lakes" alt="Twin Lakes (Burera & Ruhondo)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Twin Lakes (Burera & Ruhondo)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Nestled at the base of the Virunga volcanoes, these serene lakes offer stunning scenery, boat trips to islands, birdwatching, and cultural interactions with local communities.</p>
                                    <a href="https://www.insidevolcanoesnationalpark.com/what-to-see-in-volcanoes-national-park/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Visit the Twin Lakes →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/9C27B0/FFFFFF?text=Dian+Fossey+Memorial" alt="Dian Fossey Grave & Karisoke Research Center" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Dian Fossey Grave & Karisoke Research Center</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Hike to the resting place of renowned primatologist Dian Fossey and visit the research center she founded. A poignant tribute to gorilla conservation efforts.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/dian-fossey-hike/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Explore Dian Fossey's Legacy →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FFC107/FFFFFF?text=Cultural+Village" alt="Iby'Iwacu Cultural Village (Gorilla Guardians Village)" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Iby'Iwacu Cultural Village (Gorilla Guardians Village)</h3>
                                    <p class="text-gray-700 mb-4 text-justify">Immerse yourself in authentic Rwandan culture. Enjoy traditional dances, learn about local crafts, taste traditional food, and engage with the community.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/ibyiwacu-cultural-village/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Experience Rwandan Culture →</a>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/E91E63/FFFFFF?text=Golden+Monkey" alt="Golden Monkey Tracking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Golden Monkey Tracking</h3>
                                    <p class="text-gray-700 mb-4 text-justify">A delightful experience tracking the playful and inquisitive golden monkeys, a sub-species endemic to the Virunga volcanic forests. A more active and engaging trek.</p>
                                    <a href="https://www.volcanoesparkrwanda.org/what-to-do/golden-monkey-trekking/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-semibold">Track Golden Monkeys →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'trip':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Plan Your Unforgettable Trip to Musanze
                        </h1>
                        <div class="flex flex-col items-center justify-center space-y-8 max-w-4xl mx-auto">
                            <p class="text-lg text-gray-700 text-center">
                                Musanze, the heart of Rwanda's tourism, offers a diverse range of experiences.
                                From thrilling gorilla encounters to serene lake cruises and cultural immersions,
                                we're here to help you plan the perfect itinerary.
                            </p>

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg/1024px-Mountain_Gorilla_in_Volcanoes_National_Park%2C_Rwanda.jpg"
                                alt="Majestic Mountain Gorilla in Volcanoes National Park"
                                class="w-full max-w-2xl h-auto rounded-xl shadow-2xl object-cover border-4 border-green-700"
                                onerror="this.onerror=null;this.src='https://placehold.co/800x600/DDDDDD/333333?text=Gorilla+Image+Error';"
                            />
                            <p class="text-sm text-gray-500 text-center italic">
                                An awe-inspiring moment with a mountain gorilla in its natural habitat.
                                (Photo by Rod Waddington, CC BY-SA 2.0 via Wikimedia Commons)
                            </p>

                            <div class="bg-white p-8 rounded-xl shadow-lg w-full">
                                <h2 class="text-3xl font-bold text-green-700 mb-4">Trip Planning Tips:</h2>
                                <ul class="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Book gorilla permits well in advance (especially for peak season).</li>
                                    <li>Consider a combination of activities: gorilla trekking, golden monkey tracking, cave exploration, and cultural village visits.</li>
                                    <li>Pack appropriate gear: rain jacket, hiking boots, long sleeves/pants for treks.</li>
                                    <li>Hire a local guide for cultural tours and hikes to support the community.</li>
                                    <li>Stay hydrated and be prepared for varying altitudes.</li>
                                    <li>Enjoy the local cuisine and interact with the friendly Rwandan people!</li>
                                </ul>
                                <p class="mt-6 text-gray-600">
                                    For personalized trip planning assistance, consider contacting a local tour operator in Rwanda.
                                </p>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'sports':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Adventure and Sports in Musanze
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/607D8B/FFFFFF?text=Volcano+Hiking" alt="Volcano Hiking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Volcano Hiking</h3>
                                    <p class="text-gray-700 text-justify">Conquer the majestic Virunga volcanoes. Options range from the day hike of Mount Bisoke with its crater lakes to the challenging two-day ascent of Mount Karisimbi.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FF9800/FFFFFF?text=Golden+Monkey+Trekking" alt="Golden Monkey Tracking" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Golden Monkey Tracking</h3>
                                    <p class="text-gray-700 text-justify">An energetic trek to find the vibrant golden monkeys unique to this region. Witness their playful antics in the bamboo forests of Volcanoes National Park.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/2196F3/FFFFFF?text=Cycling+Tour" alt="Cycling Tours" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Cycling Tours</h3>
                                    <p class="text-gray-700 text-justify">Explore Musanze and its surroundings on two wheels. Enjoy scenic routes, visit local villages, and even meet the Rwandan cycling team at the Africa Rising Cycling Centre.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/00BCD4/FFFFFF?text=Kayaking+Canoeing" alt="Kayaking & Canoeing" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Kayaking & Canoeing</h3>
                                    <p class="text-gray-700 text-justify">Glide across the tranquil waters of Lake Burera and Lake Ruhondo. Enjoy peaceful paddles, explore hidden islands, and observe diverse birdlife.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/795548/FFFFFF?text=Cave+Exploration" alt="Musanze Caves Exploration" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Musanze Caves Exploration</h3>
                                    <p class="text-gray-700 text-justify">Delve into the mysterious world beneath Musanze. Explore the vast lava tube caves, learning about their geological formation and historical significance.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/8BC34A/FFFFFF?text=River+Canoeing" alt="Mukungwa River Canoe Trip" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Mukungwa River Canoe Trip</h3>
                                    <p class="text-gray-700 text-justify">Embark on a relaxing half-day canoe trip along the Mukungwa River, enjoying the lush riverine scenery and local life along the banks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'food':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-4xl font-extrabold text-green-800 mb-10 text-center rounded-lg bg-white p-4 shadow-xl">
                            Savor Musanze: Food & Drinks
                        </h1>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/D4E157/FFFFFF?text=Restaurant+Interior" alt="Featured Restaurants" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Featured Restaurants</h3>
                                    <p class="text-gray-700 text-justify">Musanze boasts a variety of restaurants catering to different tastes. From international cuisine at places like La Paillote and the refined dining at Isange (Five Volcanoes Boutique Hotel), to cozy cafes such as Crema Cafe and Migano Café, you'll find quality options for every meal.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/FF7043/FFFFFF?text=Rwandan+Cuisine" alt="Local Delights & Street Food" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Local Delights & Street Food</h3>
                                    <p class="text-gray-700 text-justify">Don't miss the authentic Rwandan experience! Indulge in delicious 'brochettes' (grilled meat skewers), fresh local produce from Musanze Central Market, and traditional dishes like 'Ubugari' and 'Isombe'. Embrace the flavors of the region.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/A1887F/FFFFFF?text=Coffee+Shop" alt="Cafes & Bakeries" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Cafes & Bakeries</h3>
                                    <p class="text-gray-700 text-justify">For your morning coffee or an afternoon treat, Musanze has charming cafes. Enjoy freshly brewed Rwandan coffee, pastries, and light snacks in a relaxed atmosphere. Perfect for a quick stop or lingering over a book.</p>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src="https://placehold.co/600x400/6D4C41/FFFFFF?text=Local+Bar" alt="Local Bars & Nightlife" class="w-full h-48 object-cover rounded-t-xl" onerror="this.onerror=null;this.src='https://placehold.co/600x400/DDDDDD/333333?text=Image+Not+Found';" />
                                <div class="p-6">
                                    <h3 class="text-2xl font-bold text-green-800 mb-3">Local Bars & Nightlife</h3>
                                    <p class="text-gray-700 text-justify">Experience the local social scene at one of Musanze's 'Imigongo' bars. Enjoy a cold Rwandan beer (Primus or Skol) and mingle with locals in a casual setting. While not a bustling club scene, it's a great way to unwind.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'advertise':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
                        <div class="bg-white p-10 rounded-xl shadow-xl max-w-2xl text-center">
                            <h1 class="text-4xl font-extrabold text-green-800 mb-6">Advertise With Us</h1>
                            <p class="text-lg text-gray-700 mb-4">
                                Interested in reaching a wide audience passionate about travel and Musanze?
                                Partner with "Visit Musanze" to showcase your business, accommodation, or tour services.
                            </p>
                            <p class="text-xl font-semibold text-green-700">
                                Contact us at <a href="mailto:advertise@visitmusanze.rw" class="text-blue-600 hover:underline">advertise@visitmusanze.rw</a> for more information on advertising opportunities.
                            </p>
                        </div>
                    </div>
                `;
                break;
            case 'login':
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
                        <div class="bg-white p-10 rounded-xl shadow-xl max-w-md w-full">
                            <h1 class="text-4xl font-extrabold text-green-800 mb-8 text-center">Login</h1>
                            <form class="space-y-6">
                                <div>
                                    <label for="email" class="block text-gray-700 text-lg font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 shadow-sm"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="password" class="block text-gray-700 text-lg font-medium mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 shadow-sm"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    class="w-full bg-green-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Log In
                                </button>
                            </form>
                            <p class="mt-6 text-center text-gray-600">
                                Don't have an account? <a href="#" class="text-blue-600 hover:underline">Sign Up</a>
                            </p>
                        </div>
                    </div>
                `;
                break;
            default:
                content = `
                    <div class="p-8 bg-gray-100 min-h-screen">
                        <h1 class="text-5xl font-extrabold text-green-800 mb-8 text-center rounded-lg bg-white p-4 shadow-xl">
                            Discover the Heart of Rwanda: Visit Musanze
                        </h1>
                        <div class="flex flex-col items-center">
                            <p class="text-lg text-gray-700 mb-8 max-w-3xl text-center">
                                Welcome to Musanze, your gateway to the breathtaking Virunga Mountains and the iconic Volcanoes National Park.
                                Immerse yourself in the rich culture, stunning landscapes, and unforgettable wildlife encounters that await you here.
                            </p>
                            <div class="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
                                <div class="aspect-w-16 aspect-h-9">
                                    <iframe
                                        width="100%"
                                        height="450"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-screen"
                                        allowFullScreen
                                        class="rounded-xl"
                                        title="Musanze Tourism Video"
                                    ></iframe>
                                </div>
                                <p class="text-sm text-gray-500 text-center py-3">
                                    Experience the beauty of Rwanda in this captivating video.
                                </p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                                <div class="p-6 rounded-xl shadow-lg bg-blue-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-blue-800">Gateway to Gorillas</h3>
                                    <p class="text-gray-700">Musanze is the prime starting point for unforgettable mountain gorilla treks in Volcanoes National Park.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-orange-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-orange-800">Volcanic Landscapes</h3>
                                    <p class="text-gray-700">Explore the majestic Virunga volcanoes and their lush, vibrant ecosystems.</p>
                                </div>
                                <div class="p-6 rounded-xl shadow-lg bg-purple-100 transform hover:scale-105 transition-transform duration-300">
                                    <h3 class="text-2xl font-bold mb-3 text-purple-800">Rich Culture</h3>
                                    <p class="text-gray-700">Engage with local communities and discover the vibrant traditions and hospitality of Rwanda.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        appContent.innerHTML = content; // Inject content into the main area
    };

    // Event listeners for navigation buttons
    document.querySelectorAll('.nav-item').forEach(button => {
        button.addEventListener('click', (event) => {
            currentPage = event.currentTarget.dataset.page;
            renderPage();
        });
    });

    // Initial page load
    renderPage();
});
