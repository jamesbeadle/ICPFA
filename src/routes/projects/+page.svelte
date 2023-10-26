<script lang="ts">
    import Projects from '../../components/Projects.svelte';
    import Causes from '../../components/Causes.svelte';
    import type { Project } from '../../types/project';

    let projects: Project[] = [
        { name: 'OpenFPL', description: 'Decentralised Fantasy Football', releaseDate: 'August 2023', url: 'openfpl.xyz', detailedDescription: '', imagePath: 'OpenFPL.png' },
        { name: 'FootballGod', description: 'Prediction Games', releaseDate: 'May 2023', url: 'footballgod.xyz', detailedDescription: '', imagePath: 'FootballGod.png' },
        { name: 'The OpenFPL Podcast', description: 'Our weekly football podcast.', releaseDate: 'Jan 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'Podcast.jpg' },
        { name: 'Football News', description: 'A football news site is in the design phase.', releaseDate: 'Mar 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'News.png' },
        { name: 'Euro 2024', description: 'A Euro 2024 fanasy football game is in the planning phase.', releaseDate: 'May 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'Euro2024.png' }
    ];

    let causes: Project[] = [];
</script>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-6 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Our Projects</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Where profit meets purpose.</p>
        </div>

        <Projects {projects} />
        
        <div class="flex flex-col text-center w-full mb-20 mt-10">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Our Impact</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Good causes supported by the ICPFA.</p>
            <p class="mt-4">Coming Soon</p>
        </div>
        
        <Causes {causes} />
    </div>
</section>
