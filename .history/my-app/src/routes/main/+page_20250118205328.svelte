<script>
    import Navbar from "../navbar/+page.svelte"
    let selected=1;
</script>


<Navbar/>
 <div class="bg-[#051016] text-white pt-24 space-y-4 w-screen  text-[[#76DEE1]]">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <div class="ml-[235px] font-bold text-3xl"><p>VINAY TITARMARE's Dashboard</p></div>
    <div class="flex gap-3  flex-col md:flex-row justify-center">
   <div class="mx-3  bg-gray-800 text-white rounded-lg  shadow-lg ">
        <div class="px-6 pt-6 flex justify-between items-center w-[100%] mb-6">
          <h2 class="text-2xl font-semibold">Operator Details</h2>
          <div class=" ">
            <i class="fa-duotone fa-solid fa-user"></i>
          </div>
          
        </div>
        <!-- line -->
        <div class="h-[1px] w-full bg-gray-600"></div>
        <div class="space-y-4 grid grid-cols-2  gap-4 m-2 p-6 border-solid border-top-1 border-gray-800">
          <div class="flex items-center">
            <div class="">
              <i class="fa-duotone fa-solid fa-user"></i>
            </div>
            <p class="ml-4">
              <span class="block font-medium">Name</span>
              <span class="text-gray-400">Vinay Titarmare</span>
            </p>
          </div>
          <div class="flex items-center">
            <div class="">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <p class="ml-4">
              <span class="block font-medium">Email</span>
              <span class="text-gray-400">vinaytitarmare420@gmail.com</span>
            </p>
          </div>
         
          <div class="flex items-center">
            <i class="fa-duotone fa-solid fa-phone"></i>
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
        <div class="space-y-4 grid grid-cols-2  gap-4 m-2 p-6 border-solid border-top-1 border-gray-800">
          <div class="flex items-center">
            <i class="fa-solid fa-building"></i>
            <p class="ml-4">
              <span class="block font-medium">Company Name</span>
              <span class="text-gray-400 flex  overflow-hidden">SureTech Pvt. Ltd</span>
            </p>
          </div>
          <div class="flex items-center">
            <div class="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5.25l3.75 2.25" />
              </svg>
            </div>
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
            <i class="fa-brands fa-searchengin"></i>
            <p class="ml-4">
              <span class="block font-medium">Accesories Used</span>
              <span class="text-gray-400">Not provided</span>
            </p>
          </div>
        </div>
        <div class="px-6 mt-6 flex space-x-2">
          <i class="fa-solid fa-calendar text-sm"></i> <p class="text-sm text-gray-400">Joined on January 18, 2025</p>
        </div>
        <div class="mt-6 px-6 pb-3 flex justify-evenly space-x-4">
          <button class="bg-[#2191DC]  hover:bg-[#3080b5]  text-white font-medium py-2 px-4 rounded-3xl"><i class="fa-solid fa-pen-to-square mr-3"></i>Edit Profile</button>
          <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-3xl"><i class="fa-solid fa-circle-xmark mr-3"></i>Sign Out</button>
        </div>
      </div> 

      <!-- component 2 -->
       <div class="flex flex-col">
        <!-- connect to continue -->
        <div  class="max-w-md flex justify-center items-center bg-gray-800 hover:bg-gray-700 transform-ease-out mx-2 text-white rounded-lg  shadow-lg h-[220px] mb-3">
          <div class="flex flex-col justify-center items-center">
            <i class="fa-solid fa-wallet size-10 text-3xl "></i>
            <p>Connect your wallet to continue</p>
          </div>
        </div>
       <div class="max-w-md bg-gray-800 mx-2 text-white rounded-lg  shadow-lg h-[450px]">
        <div class="flex justify-between px-6 items-center mb-3">
          <div class=" px-6 py-3">
            <h2 class="text-lg font-semibold">Carbon Credit Portfolio</h2>
            <p class="text-sm text-gray-400">Overview</p>
          </div>
          <i class="fa-solid fa-leaf"></i>
        </div>
        <div class="h-[1px]  w-full bg-gray-600"></div>  
        <div class="text-center  mb-6">
          <h1 class="text-4xl font-semibold">0</h1>
          <p class="text-gray-400 text-sm">Tons of CO₂ Equivalent 
           
          </p>
        </div>
        <div class="mb-6 px-6">
          <div class="flex justify-between items-center mb-1">
            <p class="text-sm font-medium text-gray-400">Portfolio Growth</p>
            <p class="text-sm text-blue-400">+15% YTD</p>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-2">
            <div class="bg-[#2191DC]  h-2 rounded-full" style="width: 50%"></div>
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
          <div><i class="fa-solid fa-chart-simple text-green-400"></i></div>
          <p class="text-sm text-green-400 ml-2">15% Increase This Quarter</p>
          <i class="fa-solid fa-circle-info ml-40"></i>
        </div>

        <div class="sm:flex sm:flex-row justify-between space-x-4 px-6">
          <button class="bg-[#2191DC]  hover:bg-[#276894]  text-white text-xs py-2 px-2  rounded-md flex items-center">
            <i class="fa-solid fa-leaf mr-2"></i>
            Purchase More Credits
          </button>
          <button class="bg-gray-700  hover:bg-gray-600 text-white font-medium text-xs  py-2 px-2 rounded-md">View History</button>
          <button class="bg-gray-700 hover:bg-gray-600 text-white font-medium text-xs py-2 px-2 rounded-md flex items-center">
            <i class="fa-solid fa-arrows-rotate mr-2"></i>
            Refresh
          </button>
        </div>
      </div> 
    </div>
    </div>
      <!-- component 3 -->
       <div class="flex  mt-24 justify-center">
       
      
      <div class="max-w-lg  mt-6  bg-gray-800 text-white rounded-lg p-6 shadow-lg ">
        <div class="flex justify-between text-lg items-center mb-4">
          <div>
            <h2 class="text-xl font-semibold">SureTech Pvt. Ltd's Achievements</h2>
            <p class="text-sm text-gray-400">Celebrating sustainable development</p>
          </div>
          <div class="bg-[#2191DC]  text-white text-sm py-1 px-2 rounded-xl flex flex-col items-center">
            <i class="fa-solid fa-star"></i>
            <p>Eco-Champion</p>
          </div>
        </div>
        <div class="h-[1px] w-full bg-gray-600"></div>
        <!-- <div class="flex flex-wrap space-x-2 space-y-2 mb-6 mt-6">
          <button class="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg flex flex-col items-center w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Green Pioneer
          </button>
          <button class="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg flex flex-col  items-center w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Water Saver
          </button>
          <button class="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg flex flex-col  items-center w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Energy Expert
          </button>
          <button class="bg-gray-700 text-gray-400 py-2 px-4 rounded-lg flex flex-col items-center w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Air Champion
          </button>
        </div> -->
        <div class="flex justify-center  my-3 py-3 rounded-xl bg-gray-700 ">
          <div class="button-group" >
          <button on:click={() => selected = 1}><div class="flex flex-col justify-center items-center bg-gray-700  hover:bg-gray-600 p-2 rounded-xl ">
            <i class="fa-solid fa-leaf"></i>
            <p class="text-xs">Green Pioneer</p>

          </div>
        </button>
        <button on:click={() => selected = 2}><div class="flex flex-col justify-center items-center bg-gray-700  hover:bg-gray-600 p-2 rounded-xl ">
          <i class="fa-solid fa-droplet"></i>
          <p class="text-xs">Water Saver</p>

        </div>
      </button>
      <button on:click={() => selected = 3}><div class="flex flex-col justify-center items-center bg-gray-700  hover:bg-gray-600 p-2 rounded-xl ">
        <i class="fa-solid fa-bolt"></i>
        <p class="text-xs">Energy expert</p>

      </div>
    </button>
    <button on:click={() => selected = 4}><div class="flex flex-col justify-center items-center bg-gray-700  hover:bg-gray-600 p-2 rounded-xl ">
      <i class="fa-solid fa-wind"></i>
      <p class="text-xs">Air Champion</p>

    </div>
  </button>
        </div>
      </div>
        
      
       <div>
        <div>
        {#if selected === 1}
        <div class="bg-gray-700 p-4 rounded-lg mb-6">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-leaf text-blue-400   "></i>
              <h3 class="text-blue-400 font-medium">Green Pioneer</h3>
            </div>
            <div class="bg-gray-800 py-1 px-2 rounded-full text-yellow-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
              </svg>
              1250 pts
            </div>
          </div>
          <p class="text-sm text-gray-300 mb-4">
            Achieved significant reduction in carbon footprint. This award recognizes organizations that have made substantial efforts to minimize their carbon emissions through innovative practices.
          </p>
          <div class="mb-4">
            <p class="text-sm text-gray-400">Progress</p>
            <div class="w-full bg-gray-800 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 75%"></div>
            </div>
          </div>
          <p class="text-sm text-gray-400">Achieved on: 12/12/2024</p>
        </div>
        {/if}

        {#if selected === 2}
        <div class="bg-gray-700 p-4 rounded-lg mb-6">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-droplet text-blue-400   "></i>
              <h3 class="text-blue-400 font-medium"> Water Saver</h3>
            </div>
            <div class="bg-gray-800 py-1 px-2 rounded-full text-yellow-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
              </svg>
              1250 pts
            </div>
          </div>
          <p class="text-sm text-gray-300 mb-4">
            Successfully implemented water conservation measures. This award honors those who have effectively reduced water usage and promoted sustainable water management practices. </p>
          <div class="mb-4">
            <p class="text-sm text-gray-400">Progress</p>
            <div class="w-full bg-gray-800 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 89%"></div>
            </div>
          </div>
          <p class="text-sm text-gray-400">Achieved on: 17/1/2025</p>
        </div>
        {/if}
        {#if selected === 3}
        <div class="bg-gray-700 p-4 rounded-lg mb-6">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-leaf text-blue-400   "></i>
              <h3 class="text-blue-400 font-medium">Energy Expert</h3>
            </div>
            <div class="bg-gray-800 py-1 px-2 rounded-full text-yellow-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
              </svg>
              1250 pts
            </div>
          </div>
          <p class="text-sm text-gray-300 mb-4">
            Demonstrated excellence in energy efficiency. This award is given to those who have excelled in optimizing energy use and integrating renewable energy sources.

          </p>
          <div class="mb-4">
            <p class="text-sm text-gray-400">Progress</p>
            <div class="w-full bg-gray-800 rounded-full h-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 55%"></div>
            </div>
          </div>
          <p class="text-sm text-gray-400">Achieved on: 1/12/2024</p>
        </div>
        {/if}
        {#if selected === 4}
        <div class="bg-gray-700 p-4 rounded-lg mb-6">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <i class="fa-solid fa-leaf text-blue-400   "></i>
              <h3 class="text-blue-400 font-medium">Air Champion</h3>
            </div>
            <div class="bg-gray-800 py-1 px-2 rounded-full text-yellow-400 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
              </svg>
              1250 pts
            </div>
          </div>
          <p class="text-sm text-gray-300 mb-4">
            Contributed to improving air quality standards. This award acknowledges efforts in reducing air pollution and enhancing air quality through various initiatives.   </p>
          <div class="mb-4">
            <p class="text-sm text-gray-400">Progress</p>
            <div class="w-full bg-gray-800 rounded-full h-2">
              <div class="bg-[#2191DC]  h-2 rounded-full" style="width: 70%"></div>
            </div>
          </div>
          <p class="text-sm text-gray-400">Achieved on: 12/1/2024</p>
        </div>
        {/if}

</div>
       </div> 
      
      </div>
      <div  class="max-w-md flex flex-col  bg-gray-800  transform-ease-out mx-5 text-white rounded-lg  mt-6 shadow-lg h-[260px] w-[600px] mb-3">
        <div class="flex flex-col p-4  ">
          <p class="text-3xl mb-2 font-semibold">Project Verification</p>
          <p class="text-gray-300">Get verified as a green project</p>
        </div>
        <div class="h-[1px] mt-3 w-full  bg-gray-600"></div>
        <div class="my-5 text-sm p-2"><p>Complete verification to access additional features and build trust with buyers.</p></div>
        <div class="flex justify-center items-center bg-[#2191DC] hover:bg-[#3586bc] w-[80%] mx-auto rounded-lg h-8"><button><p>Start Verification</p></button></div>
      </div>
    </div>
     
  <style>
    .button-group button.selected {
    background: #007bff;
    color: white;
    border-color: #0056b3;
  }
  </style>    
     <footer class="w-full border-t bg-black py-4 mt-10"> <!-- bg-black for footer -->
      <div class="text-center text-sm text-gray-500">
        &copy; 2025 AURA. All rights reserved.
      </div>
    </footer>
</div> 