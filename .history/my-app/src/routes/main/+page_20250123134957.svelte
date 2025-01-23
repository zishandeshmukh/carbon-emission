<script>
  import Navbar from "../navbar/+page.svelte";
  let selected = 1;
</script>

<Navbar />
<div class="bg-[#051016] text-white pt-24 space-y-4 w-screen text-[#76DEE1]">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
  <div class="ml-[235px] font-bold text-3xl">
    <p>VINAY TITARMARE's Dashboard</p>
  </div>

  <div class="flex flex-col md:flex-row justify-center gap-3">
    <!-- Operator Details Card -->
    <div class="mx-3 bg-gray-800 text-white rounded-lg shadow-lg">
      <div class="px-6 pt-6 flex justify-between items-center w-full mb-6">
        <h2 class="text-2xl font-semibold">Operator Details</h2>
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="h-[1px] w-full bg-gray-600"></div>
      <div class="grid grid-cols-2 gap-4 m-2 p-6 border-gray-800 space-y-4">
        <div class="flex items-center">
          <i class="fa-solid fa-user"></i>
          <p class="ml-4">
            <span class="block font-medium">Name</span>
            <span class="text-gray-400">Vinay Titarmare</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-envelope"></i>
          <p class="ml-4">
            <span class="block font-medium">Email</span>
            <span class="text-gray-400">vinaytitarmare420@gmail.com</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-phone"></i>
          <p class="ml-4">
            <span class="block font-medium">Phone</span>
            <span class="text-gray-400">Not provided</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-location-dot"></i>
          <p class="ml-4">
            <span class="block font-medium">Address</span>
            <span class="text-gray-400">Not provided</span>
          </p>
        </div>
      </div>
      <div class="h-[1px] w-full bg-gray-700"></div>
      <div class="px-6 mt-4">
        <h2 class="text-2xl font-semibold">Industry Details</h2>
      </div>
      <div class="h-[1px] mt-5 w-full bg-gray-700"></div>
      <div class="grid grid-cols-2 gap-4 m-2 p-6 border-gray-800 space-y-4">
        <div class="flex items-center">
          <i class="fa-solid fa-building"></i>
          <p class="ml-4">
            <span class="block font-medium">Company Name</span>
            <span class="text-gray-400">SureTech Pvt. Ltd</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-industry"></i>
          <p class="ml-4">
            <span class="block font-medium">Company Type</span>
            <span class="text-gray-400">Private</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-bolt"></i>
          <p class="ml-4">
            <span class="block font-medium">Energy Consumed</span>
            <span class="text-gray-400">143 MWh/month</span>
          </p>
        </div>
        <div class="flex items-center">
          <i class="fa-solid fa-tools"></i>
          <p class="ml-4">
            <span class="block font-medium">Accessories Used</span>
            <span class="text-gray-400">Not provided</span>
          </p>
        </div>
      </div>
      <div class="px-6 mt-6 flex space-x-2">
        <i class="fa-solid fa-calendar text-sm"></i>
        <p class="text-sm text-gray-400">Joined on January 18, 2025</p>
      </div>
      <div class="mt-6 px-6 pb-3 flex justify-evenly space-x-4">
        <button class="bg-[#2191DC] hover:bg-[#3080b5] text-white font-medium py-2 px-4 rounded-3xl">
          <i class="fa-solid fa-pen-to-square mr-3"></i>Edit Profile
        </button>
        <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-3xl">
          <i class="fa-solid fa-circle-xmark mr-3"></i>Sign Out
        </button>
      </div>
    </div>

    <!-- Carbon Credit Portfolio -->
    <div class="flex flex-col">
      <div class="max-w-md bg-gray-800 text-white rounded-lg shadow-lg h-[450px] mx-2">
        <div class="flex justify-between px-6 items-center mb-3">
          <div class="py-3">
            <h2 class="text-lg font-semibold">Carbon Credit Portfolio</h2>
            <p class="text-sm text-gray-400">Overview</p>
          </div>
          <i class="fa-solid fa-leaf"></i>
        </div>
        <div class="h-[1px] w-full bg-gray-600"></div>
        <div class="text-center mb-6">
          <h1 class="text-4xl font-semibold">0</h1>
          <p class="text-gray-400 text-sm">Tons of CO₂ Equivalent</p>
        </div>
        <div class="mb-6 px-6">
          <div class="flex justify-between items-center mb-1">
            <p class="text-sm font-medium text-gray-400">Portfolio Growth</p>
            <p class="text-sm text-blue-400">+15% YTD</p>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div class="bg-[#2191DC] h-2 rounded-full" style="width: 50%"></div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6 px-6">
          <div class="bg-gray-700 p-4 rounded-lg text-center">
            <p class="text-sm text-gray-400">Monthly Emission</p>
            <p class="text-md font-semibold">143 Tonnes</p>
          </div>
          <div class="bg-gray-700 p-4 rounded-lg text-center">
            <p class="text-sm text-gray-400">CC Token Available</p>
            <p class="text-md font-semibold">234</p>
          </div>
        </div>
        <div class="flex items-center mb-6 px-6">
          <i class="fa-solid fa-chart-simple text-green-400"></i>
          <p class="text-sm text-green-400 ml-2">15% Increase This Quarter</p>
        </div>
        <div class="flex justify-between space-x-4 px-6">
          <button class="bg-[#2191DC] hover:bg-[#276894] text-white text-xs py-2 px-2 rounded-md">
            <i class="fa-solid fa-leaf mr-2"></i>Purchase More Credits
          </button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-2 rounded-md">View History</button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-2 rounded-md">
            <i class="fa-solid fa-arrows-rotate mr-2"></i>Refresh
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
