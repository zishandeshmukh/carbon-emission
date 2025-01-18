<script>
    import Navbar from "../navbar/+page.svelte"
    import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";

  let show = false;

  onMount(() => {
    show = true;
  });

  const features = [
    {
      icon: "🌱",
      title: "NFTizing Carbon Footprints",
      content:
        "We tokenize verified carbon credits as NFTs, creating a unique, traceable, and immutable record of carbon offsets.",
      color: "text-green-400",
    },
    {
      icon: "📊",
      title: "Decentralized Marketplace",
      content:
        "Our platform serves as a dynamic marketplace for buying and selling carbon credits.",
      color: "text-blue-400",
    },
    {
      icon: "⚡",
      title: "Automated Smart Contracts",
      content:
        "By integrating Chainlink automation, we have streamlined the management of smart contracts.",
      color: "text-yellow-400",
    },
  ];

</script>
<Navbar/>
<div class="bg-[#051016] text-[#76DEE1]">
    
<style>
    :global(body) {
      background-color: rgb(0, 0, 0) !important;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }
  
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(8px);
    }
  </style>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen text-gray-300  ">
        <h1 class="mt-12 text-4xl sm:text-5xl font-bold text-center text-teal-400">About Us</h1>
      
        <section class="mt-8 bg-gray-900 border border-gray-600 rounded-lg p-6 shadow-lg">
          <p class="text-lg">
            Welcome to our innovative Web3 platform, where technology meets sustainability! At the heart of our mission is a groundbreaking approach to combating climate change by leveraging blockchain technology. We are transforming the way carbon credits are managed, traded, and utilized by NFTizing carbon footprints—bringing transparency, security, and efficiency to an otherwise complex process.
          </p>
        </section>
      
        <h2 class="mt-12 text-3xl font-semibold text-center text-teal-400">What We Do</h2>
      
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {#each features as feature}
            <div class="bg-gray-900 border border-gray-600 rounded-lg p-6 shadow-lg">
              <div class="flex items-center gap-2 mb-4">
                <span class="{feature.color} text-2xl">{feature.icon}</span>
                <h3 class="text-lg font-bold text-teal-300">{feature.title}</h3>
              </div>
              <p>{feature.content}</p>
            </div>
          {/each}
        </div>
      
        <h2 class="mt-12 text-3xl font-semibold text-center text-teal-400">Why Choose Us?</h2>
      
        <ul class="list-disc pl-6 mt-6 space-y-4 text-gray-300">
          <li><strong>Transparency and Trust:</strong> With blockchain technology, all transactions and credit verifications are fully transparent and immutable, building trust in every step of the process.</li>
          <li><strong>Empowering Sustainability:</strong> We provide tools for individuals, businesses, and governments to actively contribute to a sustainable future.</li>
          <li><strong>Cutting-Edge Technology:</strong> By combining NFTs, smart contracts, and Chainlink automation, we redefine how carbon credits are managed and traded.</li>
          <li><strong>Global Impact:</strong> Our vision is to create a decentralized ecosystem that accelerates the world's transition to a greener, more sustainable economy.</li>
        </ul>
      
        <section class="mt-12 bg-gray-900 border border-gray-600 rounded-lg p-6 shadow-lg">
          <h3 class="flex items-center gap-2 text-lg font-bold text-teal-300">
            <span>🌍</span> Our Vision
          </h3>
          <p class="mt-4">
            We aim to bridge the gap between climate action and emerging technologies by creating a decentralized platform where sustainability becomes a shared responsibility. By empowering users to take control of their carbon footprints and actively participate in reducing emissions, we envision a future where every action contributes to a healthier planet.
          </p>
          <p class="mt-4">
            Join us in making sustainability not just a goal but a way of life. Together, we can revolutionize the carbon credit market and leave a lasting, positive impact on the world.
          </p>
        </section>
      
        <div class="text-center mt-12 mb-8">
          <p class="text-lg font-semibold text-teal-400">Welcome to the future of sustainability—powered by Web3!</p>
          <button class="mt-8 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-bold transition duration-300 hover:scale-105">
            Join Our Mission
          </button>
        </div>
      </div>
      <footer class="w-full border-t bg-black py-4 mt-10"> <!-- bg-black for footer -->
        <div class="text-center text-sm text-gray-500">
          &copy; 2025 AURA. All rights reserved.
        </div>
      </footer>
</div>
