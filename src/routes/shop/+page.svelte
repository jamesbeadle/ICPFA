<script lang="ts">
    import Clothing from '../../components/Clothing.svelte';
    import Accessories from '../../components/Accessories.svelte';
    import Equipment from '../../components/Equipment.svelte';
    import type { Product } from '../../types/product';
    import type { Team } from '../../types/team';
    let products: Product[] = [
        { id: 1, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 14', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 14 },
        { id: 2, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 10', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 10 },
        { id: 3, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 7', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 7 },
        { id: 4, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 8', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 8 },
        { id: 5, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 23', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 23 },
        { id: 6, type: 'Shirts', image: '', name: 'Arsenal Home Original Number 6', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 6 },
        { id: 7, type: 'Shirts', image: '', name: 'Aston Villa Home Original Number 9', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 9 },
        { id: 8, type: 'Shirts', image: '', name: 'Aston Villa Home Original Number 11', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 11 },
        { id: 9, type: 'Shirts', image: '', name: 'Aston Villa Home Original Number 10', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 10 },
        { id: 10, type: 'Shirts', image: '', name: 'Aston Villa Home Original Number 6', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 6 },
        { id: 11, type: 'Shirts', image: '', name: 'Aston Villa Home Original Number 7', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 7 },
        { id: 12, type: 'Shirts', image: '', name: 'Bournemouth Home Original Number 7', price: 10, category: 'Clothing', teamId: 3, shirtNumber: 7 },
        { id: 13, type: 'Shirts', image: '', name: 'Bournemouth Home Original Number 24', price: 10, category: 'Clothing', teamId: 3, shirtNumber: 24 },
        { id: 14, type: 'Shirts', image: '', name: 'Bournemouth Home Original Number 8', price: 10, category: 'Clothing', teamId: 3, shirtNumber: 8 },
        { id: 15, type: 'Shirts', image: '', name: 'Bournemouth Home Original Number 13', price: 10, category: 'Clothing', teamId: 3, shirtNumber: 13 },
        { id: 16, type: 'Shirts', image: '', name: 'Brentford Home Original Number 17', price: 10, category: 'Clothing', teamId: 4, shirtNumber: 17 },
        { id: 17, type: 'Shirts', image: '', name: 'Brentford Home Original Number 19', price: 10, category: 'Clothing', teamId: 4, shirtNumber: 19 },
        { id: 18, type: 'Shirts', image: '', name: 'Brentford Home Original Number 7', price: 10, category: 'Clothing', teamId: 4, shirtNumber: 7 },
        { id: 19, type: 'Shirts', image: '', name: 'Brentford Home Original Number 10', price: 10, category: 'Clothing', teamId: 4, shirtNumber: 10 },
        { id: 20, type: 'Shirts', image: '', name: 'Brighton Home Original Number 17', price: 10, category: 'Clothing', teamId: 5, shirtNumber: 17 },
        { id: 21, type: 'Shirts', image: '', name: 'Brighton Home Original Number 25', price: 10, category: 'Clothing', teamId: 5, shirtNumber: 25 },
        { id: 22, type: 'Shirts', image: '', name: 'Brighton Home Original Number 13', price: 10, category: 'Clothing', teamId: 5, shirtNumber: 13 },
        { id: 23, type: 'Shirts', image: '', name: 'Brighton Home Original Number 5', price: 10, category: 'Clothing', teamId: 5, shirtNumber: 5 },
        { id: 24, type: 'Shirts', image: '', name: 'Burnley Home Original Number 2', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 2 },
        { id: 25, type: 'Shirts', image: '', name: 'Burnley Home Original Number 5', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 5 },
        { id: 26, type: 'Shirts', image: '', name: 'Burnley Home Original Number 6', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 6 },
        { id: 27, type: 'Shirts', image: '', name: 'Burnley Home Original Number 11', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 11 },
        { id: 28, type: 'Shirts', image: '', name: 'Burnley Home Original Number 10', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 10 },
        { id: 29, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 8', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 8 },
        { id: 30, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 26', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 26 },
        { id: 31, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 11', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 11 },
        { id: 32, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 13', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 13 },
        { id: 33, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 10', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 10 },
        { id: 34, type: 'Shirts', image: '', name: 'Chelsea Home Original Number 25', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 25 },
        { id: 35, type: 'Shirts', image: '', name: 'Crystal Palace Home Original Number 11', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 11 },
        { id: 36, type: 'Shirts', image: '', name: 'Crystal Palace Home Original Number 17', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 17 },
        { id: 37, type: 'Shirts', image: '', name: 'Crystal Palace Home Original Number 10', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 10 },
        { id: 38, type: 'Shirts', image: '', name: 'Crystal Palace Home Original Number 4', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 4 },
        { id: 39, type: 'Shirts', image: '', name: 'Crystal Palace Home Original Number 13', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 13 },
        { id: 40, type: 'Shirts', image: '', name: 'Everton Home Original Number 9', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 9 },
        { id: 41, type: 'Shirts', image: '', name: 'Everton Home Original Number 18', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 18 },
        { id: 42, type: 'Shirts', image: '', name: 'Everton Home Original Number 17', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 17 },
        { id: 43, type: 'Shirts', image: '', name: 'Everton Home Original Number 10', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 10 },
        { id: 44, type: 'Shirts', image: '', name: 'Everton Home Original Number 3', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 3 },
        { id: 45, type: 'Shirts', image: '', name: 'Everton Home Original Number 25', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 25 },
        { id: 46, type: 'Shirts', image: '', name: 'Fulham Home Original Number 13', price: 10, category: 'Clothing', teamId: 10, shirtNumber: 13 },
        { id: 47, type: 'Shirts', image: '', name: 'Fulham Home Original Number 23', price: 10, category: 'Clothing', teamId: 10, shirtNumber: 23 },
        { id: 48, type: 'Shirts', image: '', name: 'Fulham Home Original Number 9', price: 10, category: 'Clothing', teamId: 10, shirtNumber: 9 },
        { id: 49, type: 'Shirts', image: '', name: 'Fulham Home Original Number 4', price: 10, category: 'Clothing', teamId: 10, shirtNumber: 4 },
        { id: 50, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 8', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 8 },
        { id: 51, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 9', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 9 },
        { id: 52, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 10', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 10 },
        { id: 53, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 11', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 11 },
        { id: 54, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 7', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 7 },
        { id: 55, type: 'Shirts', image: '', name: 'Liverpool Home Original Number 14', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 14 },
        { id: 56, type: 'Shirts', image: '', name: 'Luton Home Original Number 9', price: 10, category: 'Clothing', teamId: 12, shirtNumber: 9 },
        { id: 57, type: 'Shirts', image: '', name: 'Luton Home Original Number 10', price: 10, category: 'Clothing', teamId: 12, shirtNumber: 10 },
        { id: 58, type: 'Shirts', image: '', name: 'Man City Home Original Number 17', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 17 },
        { id: 59, type: 'Shirts', image: '', name: 'Man City Home Original Number 9', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 9 },
        { id: 60, type: 'Shirts', image: '', name: 'Man City Home Original Number 47', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 47 },
        { id: 61, type: 'Shirts', image: '', name: 'Man City Home Original Number 20', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 20 },
        { id: 62, type: 'Shirts', image: '', name: 'Man City Home Original Number 10', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 10 },
        { id: 63, type: 'Shirts', image: '', name: 'Man City Home Original Number 45', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 45 },
        { id: 64, type: 'Shirts', image: '', name: 'Man City Home Original Number 42', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 42 },
        { id: 65, type: 'Shirts', image: '', name: 'Man United Home Original Number 7', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 7 },
        { id: 66, type: 'Shirts', image: '', name: 'Man United Home Original Number 10', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 10 },
        { id: 67, type: 'Shirts', image: '', name: 'Man United Home Original Number 18', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 18 },
        { id: 68, type: 'Shirts', image: '', name: 'Man United Home Original Number 11', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 11 },
        { id: 69, type: 'Shirts', image: '', name: 'Man United Home Original Number 9', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 9 },
        { id: 70, type: 'Shirts', image: '', name: 'Man United Home Original Number 16', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 16 },
        { id: 71, type: 'Shirts', image: '', name: 'Man United Home Original Number 20', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 20 },
        { id: 72, type: 'Shirts', image: '', name: 'Newcastle Home Original Number 8', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 8 },
        { id: 73, type: 'Shirts', image: '', name: 'Newcastle Home Original Number 9', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 9 },
        { id: 74, type: 'Shirts', image: '', name: 'Newcastle Home Original Number 10', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 10 },
        { id: 75, type: 'Shirts', image: '', name: 'Newcastle Home Original Number 11', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 11 },
        { id: 76, type: 'Shirts', image: '', name: 'Newcastle Home Original Number 23', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 23 },
        { id: 77, type: 'Shirts', image: '', name: 'Nottingham Forest Home Original Number 9', price: 10, category: 'Clothing', teamId: 16, shirtNumber: 9 },
        { id: 78, type: 'Shirts', image: '', name: 'Nottingham Forest Home Original Number 10', price: 10, category: 'Clothing', teamId: 16, shirtNumber: 10 },
        { id: 79, type: 'Shirts', image: '', name: 'Nottingham Forest Home Original Number 7', price: 10, category: 'Clothing', teamId: 16, shirtNumber: 7 },
        { id: 80, type: 'Shirts', image: '', name: 'Nottingham Forest Home Original Number 6', price: 10, category: 'Clothing', teamId: 16, shirtNumber: 6 },
        { id: 81, type: 'Shirts', image: '', name: 'Sheffield United Home Original Number 9', price: 10, category: 'Clothing', teamId: 17, shirtNumber: 9 },
        { id: 82, type: 'Shirts', image: '', name: 'Sheffield United Home Original Number 6', price: 10, category: 'Clothing', teamId: 17, shirtNumber: 6 },
        { id: 83, type: 'Shirts', image: '', name: 'Sheffield United Home Original Number 5', price: 10, category: 'Clothing', teamId: 17, shirtNumber: 5 },
        { id: 84, type: 'Shirts', image: '', name: 'Sheffield United Home Original Number 16', price: 10, category: 'Clothing', teamId: 17, shirtNumber: 16 },
        { id: 85, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 10', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 10 },
        { id: 86, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 14', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 14 },
        { id: 87, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 9', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 9 },
        { id: 88, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 5', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 5 },
        { id: 89, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 7', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 7 },
        { id: 90, type: 'Shirts', image: '', name: 'Tottenham Home Original Number 11', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 11 },
        { id: 91, type: 'Shirts', image: '', name: 'West Ham Home Original Number 16', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 16 },
        { id: 92, type: 'Shirts', image: '', name: 'West Ham Home Original Number 8', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 8 },
        { id: 93, type: 'Shirts', image: '', name: 'West Ham Home Original Number 10', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 10 },
        { id: 94, type: 'Shirts', image: '', name: 'West Ham Home Original Number 9', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 9 },
        { id: 95, type: 'Shirts', image: '', name: 'West Ham Home Original Number 26', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 26 },
        { id: 96, type: 'Shirts', image: '', name: 'Wolves Home Original Number 9', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 9 },
        { id: 97, type: 'Shirts', image: '', name: 'Wolves Home Original Number 8', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 8 },
        { id: 98, type: 'Shirts', image: '', name: 'Wolves Home Original Number 28', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 28 },
        { id: 99, type: 'Shirts', image: '', name: 'Wolves Home Original Number 11', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 11 },
        { id: 100, type: 'Shirts', image: '', name: 'Wolves Home Original Number 16', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 16 },
        { id: 101, type: 'Shirts', image: '', name: 'Arsenal Home Original', price: 10, category: 'Clothing', teamId: 1, shirtNumber: 0 },
        { id: 102, type: 'Shirts', image: '', name: 'Aston Villa Home Original', price: 10, category: 'Clothing', teamId: 2, shirtNumber: 0 },
        { id: 103, type: 'Shirts', image: '', name: 'Bournemouth Home Original', price: 10, category: 'Clothing', teamId: 3, shirtNumber: 0 },
        { id: 104, type: 'Shirts', image: '', name: 'Brentford Home Original', price: 10, category: 'Clothing', teamId: 4, shirtNumber: 0 },
        { id: 105, type: 'Shirts', image: '', name: 'Brighton Home Original', price: 10, category: 'Clothing', teamId: 5, shirtNumber: 0 },
        { id: 106, type: 'Shirts', image: '', name: 'Burnley Home Original', price: 10, category: 'Clothing', teamId: 6, shirtNumber: 0 },
        { id: 107, type: 'Shirts', image: '', name: 'Chelsea Home Original', price: 10, category: 'Clothing', teamId: 7, shirtNumber: 0 },
        { id: 108, type: 'Shirts', image: '', name: 'Crystal Palace Home Original', price: 10, category: 'Clothing', teamId: 8, shirtNumber: 0 },
        { id: 109, type: 'Shirts', image: '', name: 'Everton Home Original', price: 10, category: 'Clothing', teamId: 9, shirtNumber: 0 },
        { id: 110, type: 'Shirts', image: '', name: 'Fulham Home Original', price: 10, category: 'Clothing', teamId: 10, shirtNumber: 0 },
        { id: 111, type: 'Shirts', image: '', name: 'Liverpool Home Original', price: 10, category: 'Clothing', teamId: 11, shirtNumber: 0 },
        { id: 112, type: 'Shirts', image: '', name: 'Luton Home Original', price: 10, category: 'Clothing', teamId: 12, shirtNumber: 0 },
        { id: 113, type: 'Shirts', image: '', name: 'Man City Home Original', price: 10, category: 'Clothing', teamId: 13, shirtNumber: 0 },
        { id: 114, type: 'Shirts', image: '', name: 'Man United Home Original', price: 10, category: 'Clothing', teamId: 14, shirtNumber: 0 },
        { id: 115, type: 'Shirts', image: '', name: 'Newcastle Home Original', price: 10, category: 'Clothing', teamId: 15, shirtNumber: 0 },
        { id: 116, type: 'Shirts', image: '', name: 'Nottingham Forest Home Original', price: 10, category: 'Clothing', teamId: 16, shirtNumber: 0 },
        { id: 117, type: 'Shirts', image: '', name: 'Sheffield United Home Original', price: 10, category: 'Clothing', teamId: 17, shirtNumber: 0 },
        { id: 118, type: 'Shirts', image: '', name: 'Tottenham Home Original', price: 10, category: 'Clothing', teamId: 18, shirtNumber: 0 },
        { id: 119, type: 'Shirts', image: '', name: 'West Ham Home Original', price: 10, category: 'Clothing', teamId: 19, shirtNumber: 0 },
        { id: 120, type: 'Shirts', image: '', name: 'Wolves Home Original', price: 10, category: 'Clothing', teamId: 20, shirtNumber: 0 }
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
    let categories = ["Clothing", "Accessories", "Equipment"];
    let selectedCategory = "Clothing";
    let productTypes = ["All", "Shirts", "Keyrings", "Hats", "Custom"];
    let selectedProductType = "All";
    
    let selectedTeams: number[] = [];

    let showTeams = false;
    let numberFilter = "-1";
    let filteredProducts: Product[] = products;

    let availableNumbers: number[] = [];
    $: availableNumbers = [...new Set(filteredProducts.map(p => p.shirtNumber).filter(num => num > 0))].sort((a, b) => a - b);


    $: {
        filteredProducts = products;
        
        if (selectedCategory !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }
        
        if (selectedProductType !== 'All') {
            filteredProducts = filteredProducts.filter(product => product.type === selectedProductType);
        }

        if (selectedTeams.length) {
            filteredProducts = filteredProducts.filter(product => selectedTeams.includes(product.teamId));
        }

        if (numberFilter != "-1") {
            filteredProducts = filteredProducts.filter(product => product.shirtNumber && product.shirtNumber == Number(numberFilter));
        }
        
        if (selectedCategory === "Clothing") {
            productTypes = ["All", "Shirts"];
        } else {
            productTypes = ["Coming Soon"];
        }
        selectedProductType = "All";
   
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

    .type-filter {
        margin-bottom: 20px;  /* Space between filters */
    }

    .type-filter button {
        display: block;
        margin-top: 10px;
        cursor: pointer;
        background: none;
        border: none;
        color: white;
        text-align: left;
    }

    .type-filter button.active {
        font-weight: bold;
        color: #3C71FA;  /* Active color */
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

         <!-- Product Type Filter -->
        <div class="type-filter">
            <h3>BY PRODUCT TYPE</h3>
            {#each productTypes as productType}
                <button 
                    on:click={() => selectedProductType = productType}
                    class="{selectedProductType === productType ? 'active' : ''}">
                    {productType}
                </button>
            {/each}
        </div>
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
                        <input 
                            type="checkbox" 
                            class="mr-2" 
                            bind:group={selectedTeams} 
                            value={team.id}
                        >
                        {team.name}
                    </label>
                {/each}
            </div>
        {/if}
        
        <h3 class="mt-4">BY NUMBER</h3>
        <select bind:value={numberFilter} 
                class="w-full py-1 px-2 rounded border bg-gray-900 text-white focus:outline-none focus:border-custom-blue mt-2">
            <option value="-1">All</option>
            {#each availableNumbers as number}
                <option value={number}>{number}</option>
            {/each}
        </select>


    </div>
    
    <!-- Right Grid: Products -->
        
    <div class="products-grid">
        {#if selectedCategory === 'Clothing'}
            <Clothing products={filteredProducts}  />
        {:else if selectedCategory === 'Accessories'}
            <Accessories />
        {:else if selectedCategory === 'Equipment'}
            <Equipment />
        {/if}
    </div>
</div>
