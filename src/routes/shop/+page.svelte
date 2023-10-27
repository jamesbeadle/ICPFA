<script lang="ts">
    import Clothing from '../../components/Clothing.svelte';
    import Accessories from '../../components/Accessories.svelte';
    import Equipment from '../../components/Equipment.svelte';
    import type { Product } from '../../types/product';
    import type { Team } from '../../types/team';
    let products: Product[] = [
        { id: 1, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 14', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 14 },
        { id: 2, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 10', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 10 },
        { id: 3, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 7', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 7 },
        { id: 4, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 8', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 8 },
        { id: 5, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 23', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 23 },
        { id: 6, type: 'Shirt', image: '', name: 'Arsenal Home Original Number 6', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 6 },
        { id: 7, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 7, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 7, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 24', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 24 },
        { id: 7, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 7, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 7, type: 'Shirt', image: '', name: 'Brentford Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 7, type: 'Shirt', image: '', name: 'Brentford Home Original Number 19', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 19 },
        { id: 7, type: 'Shirt', image: '', name: 'Brentford Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Brentford Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Brighton Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 7, type: 'Shirt', image: '', name: 'Brighton Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 7, type: 'Shirt', image: '', name: 'Brighton Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 7, type: 'Shirt', image: '', name: 'Brighton Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 7, type: 'Shirt', image: '', name: 'Burnley Home Original Number 2', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 2 },
        { id: 7, type: 'Shirt', image: '', name: 'Burnley Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 7, type: 'Shirt', image: '', name: 'Burnley Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 7, type: 'Shirt', image: '', name: 'Burnley Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 7, type: 'Shirt', image: '', name: 'Burnley Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 26', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 26 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 7, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 7, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 7, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 4', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 4 },
        { id: 7, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 18', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 18 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 3', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 3 },
        { id: 7, type: 'Shirt', image: '', name: 'Everton Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 7, type: 'Shirt', image: '', name: 'Fulham Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 7, type: 'Shirt', image: '', name: 'Fulham Home Original Number 23', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 23 },
        { id: 7, type: 'Shirt', image: '', name: 'Fulham Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Fulham Home Original Number 4', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 4 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 14', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 14 },
        { id: 7, type: 'Shirt', image: '', name: 'Luton Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Luton Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 47', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 47 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 20', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 20 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 45', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 45 },
        { id: 7, type: 'Shirt', image: '', name: 'Man City Original Number 42', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 42 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 18', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 16', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 7, type: 'Shirt', image: '', name: 'Man United Original Number 20', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },



    ];
    let teams: Team[] = [
        { id: 1, name: "Arsenal" },
        { id: 2, name: "Aston Villa" },
        { id: 3, name: "Bournemouth" },
        { id: 4, name: "Brentford" },
        { id: 5, name: "Brighton" },
        { id: 6, name: "Burnley" },
        { id: 7, name: "Chelsea" },
        { id: 8, name: "Crystal Palace" },
        { id: 9, name: "Everton" },
        { id: 10, name: "Fulham" },
        { id: 11, name: "Liverpool" },
        { id: 12, name: "Luton" },
        { id: 13, name: "Man City" },
        { id: 14, name: "Man United" },
        { id: 15, name: "Newcastle" },
        { id: 16, name: "Nottingham Forest" },
        { id: 17, name: "Sheffield United" },
        { id: 18, name: "Tottenham" },
        { id: 19, name: "West Ham" },
        { id: 20, name: "Wolves" }
    ];
    let selectedType = "All";
    let selectedTeamId = 0;
    let productTypes = ["All", "Shirts", "Keyrings", "Hats", "Custom"];
    let categories = ["Clothing", "Accessories", "Equipment"];
    let selectedCategory = "Clothing"; // Default selected category
    let showTeams = false;
    let numberFilter = -1;
    let filteredProducts: Product[] = products;

     $: {
        if (selectedType !== 'All') {
            filteredProducts = products.filter(product => product.type === selectedType);
        } else {
            filteredProducts = products;
        }
        if (showTeams) {
            filteredProducts = filteredProducts.filter(product => product.teamId === selectedTeamId);
        }
        if (numberFilter > -1) {
            filteredProducts = filteredProducts.filter(product => product.shirtNumber && product.shirtNumber == numberFilter);
        }
    }


    function handleKeyDown(event: KeyboardEvent, category: string) {
        if (event.key === 'Enter' || event.key === ' ') {
            selectedCategory = category;
            event.preventDefault(); // Prevent any default action
        }
    }
</script>



<style>

    .filter-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        padding: 10px 0;
    }

    .filter-item {
        margin: 0 20px;
        color: #fff;
        cursor: pointer;
        transition: color 0.3s;
    }

    .filter-item:hover {
        color: #3C71FA; /* Adjust this for hover color */
    }

    .active {
        color: #3C71FA; /* Adjust this for active category color */
    }

    .banner {
        position: relative;
        overflow: hidden;
    }

    .banner-background {
        width: 100%;   /* This will make sure the image covers the entire width of its container */
        height: auto;  /* Keep aspect ratio */
        z-index: 1;    /* Ensure the image is below the content */
    }

    .banner-content {
        position: absolute; /* Make content overlay the image */
        top: 50%;          /* Start from 50% of the container's height */
        left: 65%;         /* Adjust as necessary for desired positioning */
        transform: translateY(-50%); /* Center content vertically */
        z-index: 2;        /* Ensure the content is above the image */
        color: white;
        /* ... rest of your styles ... */
    }

    .banner-cta {
        background-color: transparent;
        border: 2px solid white;
        color: white;
        padding: 0.75rem 1.5rem; /* Adjust padding */
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
        font-weight: bold;
        z-index: 3;
    }

    .container {
        display: flex;
    }

    .sidebar {
        flex-basis: 20%; /* Adjust as needed based on design */
        padding: 20px;   /* Some padding to space out the content */
        background-color: #1a1a1a; /* Dark background as in your design */
        color: white;    /* Text color */
    }

    .products-grid {
        flex-basis: 80%; /* Adjust as needed based on design */
        padding: 20px;   /* Some padding to space out the content */
        background-color: #2a2a2a; /* Slightly lighter background */
        grid-template-columns: repeat(3, 1fr); /* As there are three products in each row in your design */
        gap: 20px; /* Some space between products */
    }

    .breadcrumb, .item-count {
        color: white; /* White text color */
        margin-bottom: 20px; /* Space them out a bit */
    }

    .breadcrumb {
        font-size: 14px; /* Adjust as needed */
    }

    .item-count {
        font-size: 16px; /* Adjust as needed */
        font-weight: bold; /* Bold text */
    }



</style>

<div class="filter-bar">
    {#each categories as category}
        <button 
            class="filter-item {selectedCategory === category ? 'active' : ''}" 
            on:click={() => selectedCategory = category}
            on:keydown={(event) => handleKeyDown(event, category)}>
            {category}
        </button>
    {/each}
</div>
<div class="banner">
    <img src="ShopBanner.png" alt="Banner background" class="banner-background">

    <div class="banner-content">
        <h1>Exclusive OpenFPL shirts!</h1>
        <button type="button" class="banner-cta mt-4 rounded focus:outline-none" disabled>Pre-order<br /><small>(Coming Soon)</small></button>
    </div>
</div>

<div class="container">
    <!-- Left Sidebar: Filters -->
        
    <div class="sidebar">
        <button 
    on:click="{() => showTeams = !showTeams}" 
    class="w-full text-left focus:outline-none"
>
    <h3 class="flex justify-between items-center">
        BY TEAM
        {#if showTeams}
        <!-- Arrow Up (Close) -->
        <svg class="w-4 h-4" viewBox="0 0 24 24">
          <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M19 13l-7-7-7 7"
          ></path>
        </svg>
      {:else}
        <!-- Arrow Down (Expand) -->
        <svg class="w-4 h-4" viewBox="0 0 24 24">
            <path 
            fill="none" 
            stroke="currentColor" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M7 13l7 7 7-7"
        ></path>
        </svg>
      {/if}
    </h3>
</button>

{#if showTeams}
    <div class="mt-2">
        {#each teams as team}
            <label class="block mb-2">
                <input type="checkbox" class="mr-2">
                {team.name} <!-- Assuming your Team object has a name property -->
            </label>
        {/each}
    </div>
{/if}


<h3>BY NUMBER</h3>
<input 
  type="number" 
  class="w-full py-1 px-2 rounded border focus:outline-none focus:border-blue-500 mt-2" 
  placeholder="Enter number" 
  bind:value={numberFilter} 
/>
    </div>
    
    <!-- Right Grid: Products -->
        
    <div class="products-grid">
        {#if selectedCategory === 'Clothing'}
            <Clothing />
        {:else if selectedCategory === 'Accessories'}
            <Accessories />
        {:else if selectedCategory === 'Equipment'}
            <Equipment />
        {/if}
    </div>
</div>
