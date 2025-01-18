<script>
    import Navbar from "../navbar/+page.svelte";
    let selected=2;
    let items = [
    { id: 1, name: "Charles corp.", type: "Carbon Credit", price: 0.587040, quantity: 48920, expires: "Jan 10, 2026", imgSrc: "/images/f1.png" },
    { id: 2, name: "infobytes", type: "Carbon Credit", price: 0.587040, quantity: 48920, expires: "Jan 8, 2026", imgSrc: "/images/f2.png" },
    { id: 3, name: "Fusion Technologies", type: "Carbon Credit", price: 0.587040, quantity: 48920, expires: "Jan 13, 2026", imgSrc: "/images/f3.png" },
    { id: 4, name: "infrastructure", type: "Carbon Credit", price: 0.489200, quantity: 48920, expires: "Jan 14, 2026", imgSrc: "/images/image.png" }
  ];

  let dropdownOpen = false;

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let token = "1CC";
  let btcPrice = 0;
  let tokenPrice = 0;
  let buyAmount = "";
  let sellAmount = "";
  let balance = 1000; 
  let tokenBalance = 0;
  let isWalletConnected = false;
  let testTokens = 0; 

  let ongoingTrades = [];
  let closedTrades = [];
  let tradeHistory = [];

  const TOKEN_BTC_RATIO = 0.01;

  async function fetchBTCPrice() {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
      );
      const data = await response.json();
      btcPrice = parseFloat(data.price);
      tokenPrice = btcPrice * TOKEN_BTC_RATIO;
    } catch (error) {
      console.error("Error fetching BTC price:", error);
    }
  }

  function connectWallet() {
    isWalletConnected = !isWalletConnected;
    alert(
      isWalletConnected ? "Wallet connected successfully!" : "Wallet disconnected."
    );
  }

  function buy() {
    const totalCost = parseFloat(buyAmount) * tokenPrice;
    if (totalCost <= balance) {
      balance -= totalCost;
      tokenBalance += parseFloat(buyAmount);

      const trade = {
        type: "Buy",
        amount: parseFloat(buyAmount),
        price: tokenPrice.toFixed(2),
        status: "Ongoing",
        time: new Date().toLocaleString(),
      };
      ongoingTrades.push(trade);
      tradeHistory.push({ ...trade, status: "Completed" });

      alert(`Successfully bought ${buyAmount} ${token} at ${tokenPrice.toFixed(2)} USDT`);
    } else {
      alert("Insufficient balance");
    }
  }

  function sell() {
    if (parseFloat(sellAmount) <= tokenBalance) {
      const totalRevenue = parseFloat(sellAmount) * tokenPrice;
      balance += totalRevenue;
      tokenBalance -= parseFloat(sellAmount);

      const trade = {
        type: "Sell",
        amount: parseFloat(sellAmount),
        price: tokenPrice.toFixed(2),
        status: "Ongoing",
        time: new Date().toLocaleString(),
      };
      ongoingTrades.push(trade);
      tradeHistory.push({ ...trade, status: "Completed" });

      alert(`Successfully sold ${sellAmount} ${token} at ${tokenPrice.toFixed(2)} USDT`);
    } else {
      alert("Insufficient token balance");
    }
  }

  function addTestTokens() {
    testTokens += 100;
    alert("Added 100 test tokens to your balance!");
  }

  function completeTrade(index) {
    const trade = ongoingTrades.splice(index, 1)[0];
    trade.status = "Closed";
    closedTrades.push(trade);
  }

  onMount(() => {
    fetchBTCPrice();
    setInterval(fetchBTCPrice, 10000); 

    const ctx = document.getElementById("btcChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h"],
        datasets: [
          {
            label: "BTC Price (USDT)",
            data: [103456, 103400, 103250, 103300, 103500, 103600, 103455],
            borderColor: "rgba(0, 255, 0, 1)",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  });
</script>

<Navbar/>
<div class="bg-[#051016]  text-[#76DEE1]">
    <!-- Main Content -->
<div class="container  mx-auto px-4 py-8 pt-24">
    <!-- Search and Filter -->
    <div class="flex justify-between items-center mb-6">
      <input type="text" placeholder="Search by credit type" class="border rounded px-4 py-2 w-1/3 bg-[#051016] border-gray-700 hover:border-gray-500">
      <div class="relative z-0">
        <button class="px-4 py-2 bg-gray-800 rounded-lg  w-[150px] flex items-center border " on:click={toggleDropdown}>
          Direct Sale
          <svg class="ml-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {#if dropdownOpen}
          <div class="absolute z-0 mt-1 w-[150px] p-3 bg-gray-800 border rounded-lg shadow-lg">
           
            <div class="w-[130px]  hover:bg-[#E92063]"><button on:click={() => {selected = 2; dropdownOpen=false}} class="block pl-1 py-1 px-auto">Trading Platform</button></div>
            <div class="w-[130px] hover:bg-[#E92063]"><button on:click={() =>{ selected = 1; dropdownOpen=false}} class="block px-1 py-1 ">P2P</button></div>
            
          </div>
        {/if}
      </div>
    </div>
  
    <!-- Items Grid -->
   
  {#if selected === 1}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each items as item}
      <div class=" border rounded-lg shadow-lg overflow-hidden">
        <img src={item.imgSrc} alt={item.name} class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-bold">{item.name}</h3>
          <p class="text-green-600">{item.type}</p>
          <p>Price: <span class="font-bold">{item.price} AVX</span></p>
          <p>Quantity: {item.quantity}</p>
          <p>Expires: {item.expires}</p>
        </div>
      </div>
    {/each}
  </div>
  {/if}

  <!-- trading -->
  {#if selected === 2}
  
<div class="bg-[#051016] text-white min-h-screen flex flex-col">
  
  <div class="container mx-auto px-4 py-6 flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold">{token}/USDT</h1>
      <p class="text-green-500 text-xl">{btcPrice ? `$${btcPrice.toFixed(2)} BTC` : "Loading..."}</p>
      <p class="text-blue-500 text-xl">{tokenPrice ? `$${tokenPrice.toFixed(2)} 1CC` : "Calculating..."}</p>
    </div>
    <button class="bg-blue-600 text-white py-2 px-4 rounded-lg" on:click={connectWallet}>
      {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
    </button>
  </div>

  
  <div class="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
    <div class="col-span-8 bg-[#071821] p-6 rounded-lg shadow-lg">
      <h2 class="text-lg font-bold mb-4">Price Chart</h2>
      <canvas id="btcChart" class="bg-gray-800 h-80 rounded-lg"></canvas>
    </div>

    <div class="col-span-4 bg-[#071821] p-6 rounded-lg shadow-lg space-y-6">
      <h2 class="text-lg font-bold mb-4">Trade {token}</h2>

      <div class="bg-[#0b2635] p-4 rounded-lg space-y-4">
        <label for="buy-amount" class="text-sm">Amount</label>
        <input
          id="buy-amount"
          type="number"
          placeholder="Enter amount"
          bind:value={buyAmount}
          class="w-full p-3 rounded-lg bg-[#06161d] text-white border border-gray-700"
        />
        <button
          on:click={buy}
          class="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Buy {token}
        </button>
      </div>

      <div class="bg-[#0a2432] p-4 rounded-lg space-y-4">
        <label for="sell-amount" class="text-sm">Amount</label>
        <input
          id="sell-amount"
          type="number"
          placeholder="Enter amount"
          bind:value={sellAmount}
          class="w-full p-3 rounded-lg bg-[#06161d] text-white border border-gray-700"
        />
        <button
          on:click={sell}
          class="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Sell {token}
        </button>
      </div>

      <div class="bg-[#0b2837] p-4 rounded-lg space-y-4">
        <button
          on:click={addTestTokens}
          class="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Add 100 Test Tokens
        </button>
      </div>
    </div>
  </div>

 
  <div class="bg-[#071821] p-6 mt-auto">
    <h2 class="text-lg font-bold mb-4">Trade Records</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 class="text-md font-bold text-yellow-400">Ongoing Trades</h3>
        <ul>
          {#each ongoingTrades as trade, index}
            <li class="bg-gray-800 p-2 mb-2 rounded-lg">
              {trade.type} {trade.amount} {token} @ ${trade.price} ({trade.time})
              <button
                class="bg-green-600 text-white ml-2 px-2 py-1 rounded"
                on:click={() => completeTrade(index)}
              >
                Complete
              </button>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-md font-bold text-red-400">Closed Trades</h3>
        <ul>
          {#each closedTrades as trade}
            <li class="bg-gray-800 p-2 mb-2 rounded-lg">
              {trade.type} {trade.amount} {token} @ ${trade.price} ({trade.time})
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-md font-bold text-blue-400">Trade History</h3>
        <ul>
          {#each tradeHistory as trade}
            <li class="bg-gray-800 p-2 mb-2 rounded-lg">
              {trade.type} {trade.amount} {token} @ ${trade.price} ({trade.time}) [{trade.status}]
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

  {/if}





  </div>
  <footer class="w-full border-t bg-black py-4 mt-10"> <!-- bg-black for footer -->
    <div class="text-center text-sm text-gray-500">
      &copy; 2025 AURA. All rights reserved.
    </div>
  </footer>
</div>