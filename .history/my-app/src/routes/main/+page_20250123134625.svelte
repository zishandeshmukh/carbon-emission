<script>
  let user = {
    name: "Green Pioneer",
    role: "Environmental Activist",
    profilePic: "/profile.jpg",
    achievements: [
      {
        title: "Carbon Reducer",
        icon: "fa-solid fa-leaf",
        points: 150,
        description: "Reduced 50kg of carbon emissions.",
        progress: 75,
        date: "2024-12-10",
      },
      {
        title: "Eco Warrior",
        icon: "fa-solid fa-globe",
        points: 200,
        description: "Completed 5 green initiatives.",
        progress: 100,
        date: "2025-01-15",
      },
    ],
    portfolio: {
      carbonCredits: 250,
      valueUSD: 1250,
      growth: 15,
    },
  };
</script>

<div class="bg-gray-900 text-white min-h-screen px-6 py-4 space-y-8">
  <!-- Header Section -->
  <header class="flex items-center space-x-4">
    <img src={user.profilePic} alt="Profile Picture" class="w-16 h-16 rounded-full" />
    <div>
      <h1 class="text-2xl font-bold">{user.name}</h1>
      <p class="text-sm text-gray-400">{user.role}</p>
    </div>
  </header>

  <!-- Carbon Credit Portfolio -->
  <section class="bg-gray-800 p-6 rounded-lg space-y-4">
    <h2 class="text-lg font-semibold text-blue-400">Carbon Credit Portfolio</h2>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-sm text-gray-400">Total Carbon Credits</p>
        <p class="text-2xl font-bold">{user.portfolio.carbonCredits} CC</p>
      </div>
      <div>
        <p class="text-sm text-gray-400">Portfolio Value</p>
        <p class="text-2xl font-bold">${user.portfolio.valueUSD}</p>
      </div>
      <div class="col-span-2">
        <p class="text-sm text-gray-400">Portfolio Growth</p>
        <div class="w-full bg-gray-700 h-3 rounded-full">
          <div
            class="bg-green-500 h-3 rounded-full"
            style="width: {user.portfolio.growth}%"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Achievements Section -->
  <section>
    <h2 class="text-lg font-semibold text-blue-400 mb-4">Achievements</h2>
    {#each user.achievements as achievement}
      <div class="bg-gray-800 p-4 rounded-lg mb-4">
        <div class="flex justify-between items-center mb-3">
          <div class="flex items-center space-x-2">
            <i class="{achievement.icon} text-green-400"></i>
            <h3 class="text-green-400 font-medium">{achievement.title}</h3>
          </div>
          <div
            class="bg-gray-700 py-1 px-3 rounded-full text-yellow-400 text-sm flex items-center"
          >
            <i class="fa-solid fa-star mr-1"></i>
            {achievement.points} pts
          </div>
        </div>
        <p class="text-sm text-gray-300">{achievement.description}</p>
        <div class="mt-3">
          <p class="text-sm text-gray-400">Progress</p>
          <div class="w-full bg-gray-700 h-2 rounded-full">
            <div
              class="bg-green-500 h-2 rounded-full"
              style="width: {achievement.progress}%"
            ></div>
          </div>
        </div>
        <p class="text-sm text-gray-400 mt-3">Achieved on: {achievement.date}</p>
      </div>
    {/each}
  </section>

  <!-- Footer -->
  <footer class="text-center text-gray-500 text-sm">
    &copy; 2025 Green Pioneer Dashboard. All rights reserved.
  </footer>
</div>
