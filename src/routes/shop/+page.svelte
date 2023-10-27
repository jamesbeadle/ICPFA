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
        { id: 8, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 9, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 10, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 11, type: 'Shirt', image: '', name: 'Aston Villa Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 12, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 13, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 24', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 24 },
        { id: 14, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 15, type: 'Shirt', image: '', name: 'Bournemouth Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 16, type: 'Shirt', image: '', name: 'Brentford Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 17, type: 'Shirt', image: '', name: 'Brentford Home Original Number 19', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 19 },
        { id: 18, type: 'Shirt', image: '', name: 'Brentford Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 19, type: 'Shirt', image: '', name: 'Brentford Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 20, type: 'Shirt', image: '', name: 'Brighton Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 21, type: 'Shirt', image: '', name: 'Brighton Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 22, type: 'Shirt', image: '', name: 'Brighton Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 23, type: 'Shirt', image: '', name: 'Brighton Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 24, type: 'Shirt', image: '', name: 'Burnley Home Original Number 2', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 2 },
        { id: 25, type: 'Shirt', image: '', name: 'Burnley Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 26, type: 'Shirt', image: '', name: 'Burnley Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 27, type: 'Shirt', image: '', name: 'Burnley Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 28, type: 'Shirt', image: '', name: 'Burnley Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 29, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 30, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 26', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 26 },
        { id: 31, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 32, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 33, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 34, type: 'Shirt', image: '', name: 'Chelsea Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 35, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 36, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 37, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 38, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 4', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 4 },
        { id: 39, type: 'Shirt', image: '', name: 'Crystal Palace Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 40, type: 'Shirt', image: '', name: 'Everton Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 41, type: 'Shirt', image: '', name: 'Everton Home Original Number 18', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 18 },
        { id: 42, type: 'Shirt', image: '', name: 'Everton Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 43, type: 'Shirt', image: '', name: 'Everton Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 44, type: 'Shirt', image: '', name: 'Everton Home Original Number 3', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 3 },
        { id: 45, type: 'Shirt', image: '', name: 'Everton Home Original Number 25', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 25 },
        { id: 46, type: 'Shirt', image: '', name: 'Fulham Home Original Number 13', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 13 },
        { id: 47, type: 'Shirt', image: '', name: 'Fulham Home Original Number 23', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 23 },
        { id: 48, type: 'Shirt', image: '', name: 'Fulham Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 49, type: 'Shirt', image: '', name: 'Fulham Home Original Number 4', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 4 },
        { id: 50, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 51, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 52, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 53, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 54, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 55, type: 'Shirt', image: '', name: 'Liverpool Home Original Number 14', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 14 },
        { id: 56, type: 'Shirt', image: '', name: 'Luton Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 57, type: 'Shirt', image: '', name: 'Luton Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 58, type: 'Shirt', image: '', name: 'Man City Home Original Number 17', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 17 },
        { id: 59, type: 'Shirt', image: '', name: 'Man City Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 60, type: 'Shirt', image: '', name: 'Man City Home Original Number 47', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 47 },
        { id: 61, type: 'Shirt', image: '', name: 'Man City Home Original Number 20', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 20 },
        { id: 62, type: 'Shirt', image: '', name: 'Man City Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 63, type: 'Shirt', image: '', name: 'Man City Home Original Number 45', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 45 },
        { id: 64, type: 'Shirt', image: '', name: 'Man City Home Original Number 42', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 42 },
        { id: 65, type: 'Shirt', image: '', name: 'Man United Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 66, type: 'Shirt', image: '', name: 'Man United Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 67, type: 'Shirt', image: '', name: 'Man United Home Original Number 18', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 68, type: 'Shirt', image: '', name: 'Man United Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 69, type: 'Shirt', image: '', name: 'Man United Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 70, type: 'Shirt', image: '', name: 'Man United Home Original Number 16', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 71, type: 'Shirt', image: '', name: 'Man United Home Original Number 20', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 72, type: 'Shirt', image: '', name: 'Newcastle Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 73, type: 'Shirt', image: '', name: 'Newcastle Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 74, type: 'Shirt', image: '', name: 'Newcastle Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 75, type: 'Shirt', image: '', name: 'Newcastle Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 76, type: 'Shirt', image: '', name: 'Newcastle Home Original Number 23', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 23 },
        { id: 77, type: 'Shirt', image: '', name: 'Nottingham Forest Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 78, type: 'Shirt', image: '', name: 'Nottingham Forest Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 79, type: 'Shirt', image: '', name: 'Nottingham Forest Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 80, type: 'Shirt', image: '', name: 'Nottingham Forest Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 81, type: 'Shirt', image: '', name: 'Sheffield United Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 82, type: 'Shirt', image: '', name: 'Sheffield United Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 83, type: 'Shirt', image: '', name: 'Sheffield United Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 84, type: 'Shirt', image: '', name: 'Sheffield United Home Original Number 16', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 16 },
        { id: 85, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 86, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 14', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 14 },
        { id: 87, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 88, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 5', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 5 },
        { id: 89, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 90, type: 'Shirt', image: '', name: 'Tottenham Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 91, type: 'Shirt', image: '', name: 'West Ham Home Original Number 16', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 16 },
        { id: 92, type: 'Shirt', image: '', name: 'West Ham Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 93, type: 'Shirt', image: '', name: 'West Ham Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 94, type: 'Shirt', image: '', name: 'West Ham Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 95, type: 'Shirt', image: '', name: 'West Ham Home Original Number 26', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 26 },
        { id: 96, type: 'Shirt', image: '', name: 'Wolves Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 97, type: 'Shirt', image: '', name: 'Wolves Home Original Number 8', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 8 },
        { id: 98, type: 'Shirt', image: '', name: 'Wolves Home Original Number 28', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 28 },
        { id: 99, type: 'Shirt', image: '', name: 'Wolves Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 100, type: 'Shirt', image: '', name: 'Wolves Home Original Number 16', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 16 },
        { id: 101, type: 'Shirt', image: '', name: 'Arsenal Home Original', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 0 },
        { id: 102, type: 'Shirt', image: '', name: 'Aston Villa Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 103, type: 'Shirt', image: '', name: 'Bournemouth Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 104, type: 'Shirt', image: '', name: 'Brentford Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 105, type: 'Shirt', image: '', name: 'Brighton Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 106, type: 'Shirt', image: '', name: 'Burnley Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 107, type: 'Shirt', image: '', name: 'Chelsea Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 108, type: 'Shirt', image: '', name: 'Crystal Palace Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 109, type: 'Shirt', image: '', name: 'Everton Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 110, type: 'Shirt', image: '', name: 'Fulham Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 111, type: 'Shirt', image: '', name: 'Liverpool Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 112, type: 'Shirt', image: '', name: 'Luton Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 113, type: 'Shirt', image: '', name: 'Man City Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 114, type: 'Shirt', image: '', name: 'Man United Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 115, type: 'Shirt', image: '', name: 'Newcastle Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 116, type: 'Shirt', image: '', name: 'Nottingham Forest Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 117, type: 'Shirt', image: '', name: 'Sheffield United Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 118, type: 'Shirt', image: '', name: 'Tottenham Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 119, type: 'Shirt', image: '', name: 'West Ham Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 120, type: 'Shirt', image: '', name: 'Wolves Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 }
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
