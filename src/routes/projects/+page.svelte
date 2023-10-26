<script>
    let projects = [
      { name: 'Project 1', description: 'Description 1' },
      // ...more projects
    ];
  </script>
  
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-6 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Our Projects</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
          Where profit meets purpose.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        {#each projects as project}
        <div class="p-4 md:w-1/3">
          <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="project-img">
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">{project.name}</h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{project.description}</h1>
              <p class="leading-relaxed mb-3">Detailed description of the project.</p>
              <div class="flex items-center flex-wrap ">
                <a href="/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                  <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
                <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h.01"></path><path d="M12 12h.01"></path><path d="M19 12h.01"></path></svg> 1.2K
                </span>
                <span class="text-gray-600 inline-flex items-center leading-none text-sm">
                  <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg> 6
                </span>
              </div>
            </div>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </section>
  