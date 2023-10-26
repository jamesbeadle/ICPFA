<script lang="ts">
    import type { Project } from '../types/project';
    export let causes: Project[] = [];
</script>
<div class="flex flex-wrap -m-4">
    {#each causes as cause}
    <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="cause-img">
            <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-white mb-1">{cause.name}</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{cause.description}</h1>
                <p class="leading-relaxed mb-3">{cause.detailedDescription}</p>
            </div>
        </div>
    </div>
    {/each}
</div>
