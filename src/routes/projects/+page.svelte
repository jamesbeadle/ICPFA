<script lang="ts">
    import Projects from '../../components/Projects.svelte';
    import type { Project } from '../../types/project';

    let projects: Project[] = [
        { name: 'OpenFPL', description: 'Decentralised Fantasy Football', releaseDate: 'August 2023', url: 'openfpl.xyz', detailedDescription: '', imagePath: 'OpenFPL.png', showButton: true, buttonText: 'Map NFT to IID', redirect: 'nft-mapping' },
        { name: 'OpenFPL NFTs', description: 'OpenFPL Investment NFTs.', releaseDate: 'November 2023', url: 'toniq.io/OpenFPL', detailedDescription: '', showButton: true, imagePath: 'boardroom.jpg', buttonText: 'Details', redirect: 'nfts' },
        { name: 'FootballGod', description: 'Prediction Games', releaseDate: 'May 2023', url: 'footballgod.xyz', detailedDescription: '', imagePath: 'FootballGod.jpg', showButton: false, buttonText: '', redirect: '' },
        { name: 'The OpenFPL Podcast', description: 'Our weekly football podcast.', releaseDate: 'Jan 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'Podcast.jpg', showButton: false, buttonText: '', redirect: ''  },
        { name: 'Football News', description: 'A football news site is in the design phase.', releaseDate: 'Mar 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'News.jpg', showButton: false, buttonText: '', redirect: ''  },
        { name: 'Euro 2024', description: 'A Euro 2024 fanasy football game is in the planning phase.', releaseDate: 'May 2024', url: 'Coming Soon', detailedDescription: '', imagePath: 'Euro2024.jpg', showButton: false, buttonText: '', redirect: ''  }
    ];

</script>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-6 mx-auto mb-4">
        <div class="flex flex-col text-center w-full mb-8">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Our Projects</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Where profit meets purpose.</p>
        </div>

        <Projects {projects} />
        
    </div>
</section>
