<script lang="ts">
  import type { Project } from "$lib/types/project";
  export let projects: Project[] = [];
</script>

<div class="flex flex-wrap -m-4">
  {#each projects as project}
    <div class="p-4 md:w-1/3">
      <div
        class="h-full border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col"
      >
        <img
          class="lg:h-96 md:h-96 w-full object-cover object-center"
          src={project.imagePath}
          alt="project-img"
        />
        <div class="p-6 flex-grow flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-center mb-1">
              <h2
                class="tracking-widest text-xs title-font font-medium text-white"
              >
                {project.name}
              </h2>
            </div>
            <h1 class="title-font text-md font-medium text-white mb-3">
              {project.description}
            </h1>
            {#if project.showButton}
              {#if project.external}
                <a target="_blank" href={project.redirect}>
                  <button
                    type="button"
                    class="text-xs px-2 py-3 text-white custom-button rounded focus:outline-none mb-2 mt-2"
                    >{project.buttonText}</button
                  >
                </a>
              {:else}
                <a href="/{project.redirect}">
                  <button
                    type="button"
                    class="text-xs px-2 py-3 text-white custom-button rounded focus:outline-none mb-2 mt-2"
                    >{project.buttonText}</button
                  >
                </a>
              {/if}
            {/if}
          </div>
          <div class="flex justify-between items-center mt-2">
            <span class="text-white text-sm">
              {#if project.url == "Coming Soon"}
                <p>Coming Soon</p>
              {:else}
                <a target="_blank" href="https://{project.url}">{project.url}</a
                >
              {/if}</span
            >
            <span class="text-white text-sm">{project.releaseDate}</span>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
