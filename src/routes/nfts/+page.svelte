<script lang="ts">
    type NFT = {
        name: string;
        club: string;
        shirtNumber: number;
        imageUrl: string;
        earned: number;
        roi: number;
        itemsSold: number;
    };

    type Collection = {
        name: string;
        bio: string;
        termsAndConditions: string;
        launchpadPrice: number;
        stoicLink: string;
        nfts: NFT[];
    };

    const collections: Collection[] = [
        {
            name: 'Open FPL Merchandising Rights NFT',
            bio: 'The wallet holding an OpenFPL Merchandising Rights NFT will be sent 10% of relevant sales revenue immediately when a purchase is made through the ICPFA shop.',
            termsAndConditions: 'Each NFT is associated with a specific club and shirt number combination. Relevant sales include any items sold on the ICPFA site pertaining to this combination. If an item is sold that is related to the club of your Merchandising NFT, but not linked to any of the original special shirt numbers, then the revenue will be divided. Every NFT holder for that particular club will receive an equal share of this collective club merchandising revenue.',
            launchpadPrice: 250.00,
            stoicLink: 'https://stoic.ic0.app/',
            nfts: [
                {
                    name: 'Manchester United 7',
                    club: 'Manchester United',
                    shirtNumber: 7,
                    imageUrl: 'path_to_image',
                    earned: 125.00,
                    roi: 50,
                    itemsSold: 500
                },
                {
                    name: 'Manchester United 7',
                    club: 'Manchester United',
                    shirtNumber: 7,
                    imageUrl: 'path_to_image',
                    earned: 125.00,
                    roi: 50,
                    itemsSold: 500
                },
                // ... add more NFTs as required
            ]
        },
        {
            name: 'Podcast Revenue Share NFT',
            bio: 'The wallet holding a Podcast Revenue Share NFT will receive a monthly payment related to the podcast revenue generated from The OpenFPL Podcast.',
            termsAndConditions: 'Each month, revenue figures will be published, and payments will be made to the NFT holders. NFTs are specific to clubs, and we intend to set up satellite fan-specific podcasts. NFT holders will also receive 10% of the revenue from their fan-specific podcast.',
            launchpadPrice: 25.00,
            stoicLink: 'https://stoic.ic0.app/',
            nfts: [
                {
                    name: 'Manchester United 7',
                    club: 'Manchester United',
                    shirtNumber: 7,
                    imageUrl: 'path_to_image',
                    earned: 125.00,
                    roi: 50,
                    itemsSold: 500
                },
            ]
        }
    ];

    let selectedCollection = collections[0]; // Default to the first collection
</script>

<div class="p-8">
    <div class="flex space-x-4 mb-6">
        {#each collections as collection, index}
            <button 
                class="px-4 py-2 rounded shadow focus:outline-none {selectedCollection === collection ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-300 text-gray-700'}"
                on:click={() => selectedCollection = collection}
            >
                {collection.name}
            </button>
        {/each}
    </div>

    <div class="p-6 rounded shadow">
        <h2 class="text-2xl font-bold mb-4">{selectedCollection.name}</h2>
        <p class="text-gray-600 mb-2">{selectedCollection.bio}</p>
        <p class="text-gray-500 text-sm mb-4">{selectedCollection.termsAndConditions}</p>
        <p class="mb-4 font-medium">Launchpad Price: {selectedCollection.launchpadPrice} ICP</p>
        <a href="{selectedCollection.stoicLink}" target="_blank" class="text-indigo-600 underline mb-6">View Collection on Stoic</a>
        
        <h3 class="text-xl font-semibold mb-4">Return On Investment Table</h3>
        <div class="mt-2">
            {#each selectedCollection.nfts as nft}
                <div class="flex items-center mb-4 border-b pb-2">
                    <img src="{nft.imageUrl}" alt="{nft.name}" class="w-16 h-16 rounded shadow mr-4">
                    <div class="flex-1">
                        <p class="font-medium">{nft.name}</p>
                        <p class="text-gray-600 text-sm">Club: {nft.club} | Shirt Number: {nft.shirtNumber} | Items Sold: {nft.itemsSold}</p>
                    </div>
                    <p class="font-medium ml-4">{nft.earned} ICP Earned</p>
                    <p class="text-indigo-600 ml-4">{nft.roi}% ROI</p>
                </div>
            {/each}
        </div>
    </div>
</div>
