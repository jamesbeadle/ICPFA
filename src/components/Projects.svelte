<script lang="ts">
    import type { Project } from '../types/project';
    export let projects: Project[] = [];
</script>

<div class="flex flex-wrap -m-4">
    {#each projects as project}
    <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="{project.imagePath}" alt="project-img">
            <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">{project.name}</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">{project.description}</h1>
                <p class="leading-relaxed mb-3">{project.detailedDescription}</p>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-white text-sm"><a target="_blank" href="https://{project.url}">{project.url}</a></span>
                    <span class="text-white text-sm">{project.releaseDate}</span>
                </div>
            </div>
        </div>
    </div>
    {/each}
</div>
