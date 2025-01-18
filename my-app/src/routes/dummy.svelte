
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            background: linear-gradient(135deg, #1f2937, #111827);
            animation: gradient 15s ease infinite;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .card {
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .button {
            transition: background-color 0.3s, transform 0.3s;
        }
        .button:hover {
            background-color: #38a169; /* Darker green */
            transform: translateY(-2px);
        }
        .buy-sell-container {
            background: rgba(34, 197, 94, 0.1);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s;
        }
        .buy-sell-container:hover {
            transform: scale(1.02);
        }
    </style>

<div class="bg-gray-900 text-gray-200">

    <!-- Navbar -->
    <nav class="fixed w-full bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="navbar" class="text-white text-2xl font-bold">CarbonTrade</a>
            <div class="space-x-4">
                <a href="navbarbuy-sell" class="text-gray-300 hover:text-white">Buy/Sell Credits</a>
                <a href="navbarprofile" class="text-gray-300 hover:text-white">Profile</a>
                <a href="navbarabout" class="text-gray-300 hover:text-white">About Us</a>
            </div>
        </div>
    </nav>

    <!-- Homepage -->
    <header class="bg-gray-800 py-20 text-center">
        <h1 class="text-4xl font-bold">Welcome to CarbonTrade</h1>
        <p class="mt-4 text-lg">Trade carbon credits and contribute to a sustainable future.</p>
        <a href="navbarbuy-sell" class="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">Get Started</a>
    </header>

    <!-- Benefits Section -->
    <section class="py-20">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold">Platform Benefits</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Eco-Friendly</h3>
                    <p>Reduce your carbon footprint while trading credits. Join over 10,000 users making a difference!</p>
                </div>
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Real-Time Trading</h3>
                    <p>Engage in real-time trading with blockchain integration. Over 500 trades executed daily!</p>
                </div>
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Transparent Transactions</h3>
                    <p>All transactions are recorded on the blockchain for transparency. 100% verified transactions!</p>
                </div>
            </div>
        </div>
    </section>

   
    <!-- Buy/Sell Credits Section -->
    <section id="buy-sell" class="py-20 bg-gray-800">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center">Buy/Sell Credits</h2>
            <div class="mt-8 flex justify-center">
                <button class="bg-green-600 text-white px-4 py-2 rounded button">Connect Wallet</button>
            </div>
            <div class="mt-8 buy-sell-container text-center">
                <h3 class="text-xl font-semibold">Real-Time Trading Interface</h3>
                <p class="mt-2">Current Market Price: <span class="text-green-400">$15.00</span> per ton</p>
                <p>Available Credits: <span class="text-green-400">1,200 tons</span></p>
                <div class="mt-4 flex justify-center space-x-4">
                    <button class="bg-green-600 text-white px-6 py-3 rounded button">Buy Credits</button>
                    <button class="bg-red-600 text-white px-6 py-3 rounded button">Sell Credits</button>
                </div>
                <p class="mt-4">Recent Trades:</p>
                <ul class="list-disc list-inside">
                    <li>Sold 50 tons to User123 for $750</li>
                    <li>Purchased 100 tons from User456 for $1,500</li>
                </ul>
                <div class="mt-8">
                    <canvas id="tradingChart" class="w-full h-64"></canvas>
                </div>
            </div>
        </div>
    </section>

    <!-- Profile Section -->
    <section id="profile" class="py-20">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center">Your Profile</h2>
            <div class="mt-8">
                <h3 class="text-xl">Industry Details</h3>
                <p>Industry: Renewable Energy</p>
                <p>Company: Green Solutions Inc.</p>
                <h3 class="text-xl mt-4">Past Transactions</h3>
                <ul class="list-disc list-inside">
                    <li>Sold 200 tons on 2023-09-15 for $3,000</li>
                    <li>Purchased 150 tons on 2023-09-10 for $2,250</li>
                    <li>Sold 75 tons on 2023-08-30 for $1,125</li>
                </ul>
                <h3 class="text-xl mt-4">Calculate Emissions</h3>
                <form class="mt-4">
                    <input type="number" placeholder="Weekly Fuel Usage" class="border border-gray-600 bg-gray-700 p-2 rounded mr-2 text-gray-200">
                    <input type="number" placeholder="Weekly Coal Usage" class="border border-gray-600 bg-gray-700 p-2 rounded mr-2 text-gray-200">
                    <input type="number" placeholder="Weekly Energy Usage" class="border border-gray-600 bg-gray-700 p-2 rounded mr-2 text-gray-200">
                    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">Calculate</button>
                </form>
                <h3 class="text-xl mt-4">Emission Trends</h3>
                <div class="mt-2 bg-gray-700 p-4 rounded shadow">
                    <p>Placeholder for interactive graphs displaying emission trends.</p>
                    <p>Last Month's Emissions: 500 tons</p>
                    <p>Trend: Decreasing by 10% month-over-month.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-20 bg-gray-800">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center">About Us</h2>
            <p class="mt-4 text-center">We are committed to reducing carbon emissions through innovative trading solutions.</p>
            <h3 class="text-xl mt-8">Our Mission</h3>
            <p>To create a sustainable future by facilitating carbon credit trading. Since our inception in 2020, we have helped offset over 1 million tons of CO2.</p>
        </div>
    </section>

    <!-- Additional Features Section -->
    <section class="py ```html
    -20">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold">Additional Features</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Emission Reduction Tips</h3>
                    <p>Learn how to reduce your carbon footprint effectively. Tip: Use public transport to save 1 ton of CO2 per month!</p>
                </div>
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Leaderboard</h3>
                    <p>Top Contributors:</p>
                    <ul class="list-disc list-inside">
                        <li>User123: 500 tons</li>
                        <li>User456: 450 tons</li>
                        <li>User789: 400 tons</li>
                    </ul>
                </div>
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Marketplace Analytics</h3>
                    <p>Get real-time insights into the carbon credit marketplace. Average price: <span class="text-green-400">$15.00</span> per ton.</p>
                </div>
                <div class="card bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold">Live Support</h3>
                    <p>Access live support for any queries or assistance. Available 24/7!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-4">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 CarbonTrade. All rights reserved.</p>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        const ctx = document.getElementById('tradingChart').getContext('2d');
        const tradingChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Carbon Credits Price',
                    data: [12, 15, 14, 16, 15, 17, 18],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
</div>
