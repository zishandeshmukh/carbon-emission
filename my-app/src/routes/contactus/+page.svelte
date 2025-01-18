<script>
    import Navbar from "../navbar/+page.svelte"
    const teamMembers = [
    {
      name: "Satvik Yewale",
      role: "Polyglot",
      description: "Expert in blockchain development and smart contracts.",
      image: "/images/1.jpg",
      linkedin: "https://linkedin.com/in/"
    },
    {
      name: "Zishan Deshmukh",
      role: "Full Stack Dev",
      description: "Focused on intuitive front-end interfaces and seamless full-stack integration.",
      image: "/images/2.jpg",
      linkedin: "https://linkedin.com/in/"
    },
    {
      name: "Vinay Titarmare",
      role: "Frontend Dev",
      description: "Specialist in database optimization and API design.",
      image: "/images/3.png",
      linkedin: "https://www.linkedin.com/in//"
    },
    {
      name: "Uruj Shaikh",
      role: "AI/ML Dev",
      description: "Experienced in smart contracts and Web3 integration.",
      image: "/images/4.jpg", 
      linkedin: "https://linkedin.com/in/"
    }
  ];
</script>
<Navbar/>
<div class="bg-[#051016]   h-screen text-[#76DEE1]">
 
<div class="min-h-screen flex flex-col antialiased bg-black text-white"> <!-- bg-black and text-white applied globally -->
  

 <main class="flex-1 container mx-auto px-4 py-1 md:px-8 lg:px-12 max-w-7xl bg-black"> <!-- bg-black for the main section -->
   <div class="min-h-screen bg-black text-white"> <!-- bg-black for inner content -->
     <div class="container mx-auto px-4 py-20">
       <div class="max-w-3xl mx-auto text-center mb-16">
         <h2 class="text-5xl font-bold text-white mb-6">Meet Our Team</h2>
         <p class="text-lg text-muted-foreground">Our talented team of developers and blockchain enthusiasts working together to revolutionize carbon credits</p>
       </div>
       
       <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
         {#each teamMembers as member}
           <div class="transition-all duration-300">
             <div class="rounded-xl border text-gray-800 relative overflow-hidden group h-full bg-black text-white border-gray-600 shadow-lg hover:shadow-xl">
               <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
               <div class="p-8 flex flex-col items-center text-center h-full relative z-10">
                 <span class="relative flex shrink-0 overflow-hidden rounded-full w-32 h-32 mb-6 ring-4 ring-gray-100 shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                   <img class="aspect-square h-full w-full object-cover" alt={member.name} src={member.image || "/placeholder.svg"} />
                 </span>
                 <h3 class="text-2xl font-bold text-white mb-2">{member.name}</h3>
                 <p class="text-primary font-medium mb-3 tracking-wide text-sm uppercase">{member.role}</p>
                 <p class="text-white text-sm leading-relaxed mb-6 line-clamp-3">{member.description}</p>
                 <div class="mt-auto pt-4">
                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="inline-block w-full">
                     <button class="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-9 px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">
                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="h-5 w-5 text-white group-hover:scale-110 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                         <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                       </svg>
                       <span class="font-medium">Connect</span>
                     </button>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         {/each}
       </div>
     </div>
   </div>
 </main>

 <footer class="w-full border-t bg-black py-4 mt-10"> <!-- bg-black for footer -->
   <div class="text-center text-sm text-gray-500">
     &copy; 2025 AURA. All rights reserved.
   </div>
 </footer>
</div>
      
</div>