<script lang="ts">
    import type { Product } from '../../types/product';
    let products: Product[] = [
        // Example data for the products
    ];
    let selectedType = "All";
    let productTypes = ["All", "Shirts", "Keyrings", "Hats", "Custom"];
    let categories = ["Clothing", "Accessories", "Equipment"];
    let selectedCategory = "Clothing"; // Default selected category

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
        font-weight: bold; /* Make text bold */
        z-index: 3;  /* Optional, if you want the button to be above everything else */
  
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
    <!-- Background image -->
    <img src="ShopBanner.png" alt="Banner background" class="banner-background">

    <!-- Content overlaying the image -->
    <div class="banner-content">
        <h1>Exclusive OpenFPL shirts!</h1>
        <button type="button" class="banner-cta mt-4 rounded focus:outline-none" disabled>Preorder<br /><small>(Coming Soon)</small></button>

    </div>
</div>
