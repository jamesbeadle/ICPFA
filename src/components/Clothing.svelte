<script lang="ts">
    import { onMount } from 'svelte';
    import type { Product } from '../types/product';
    export let products: Product[] = [];
  
    let activeImages: string[] = [];
    let currentPage = 1;
    const itemsPerPage = 12;
    
    function goToPage(page: number) {
        currentPage = page;
    }

    onMount(() => {
        activeImages = products.map((_, i) => `front_${i}`);
    });

    $: activeImages = products.map((_, i) => `front_${i}`);
    $: paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

</script>

<style>
    
    .image-button {
        background: none;
        padding: 0;
        cursor: pointer;
    }
  </style>
<div class="breadcrumb">
    ICPFA > MARKETPLACE > T-SHIRTS
</div>
<div class="item-count mb-4">120 ITEMS</div>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each paginatedProducts as product, i}
     
         <div class="p-4 rounded-lg w-64 mx-auto">
            <!-- Main Product Image -->
            <img class="w-full h-48 object-cover mb-3 shadow-md" src={activeImages[i] === `front_${i}` || activeImages[i] === '' ? `/shirts/shirt_${product.teamId}_front.jpg` : `/shirts/shirt_${product.teamId}_back.jpg`} alt="img">
        
            <!-- Thumbnail Images -->
            <div class="flex gap-2 mb-3">
                <button class={`image-button focus:outline-none p-1 rounded transition-all duration-200 ${activeImages.includes(`front_${i}`) ? 'border-2 border-gray-500' : 'border-none'}`} on:click={() => activeImages[i] = `front_${i}`}>
                    <img class="w-16 h-16 object-cover" src={`/shirts/shirt_${product.teamId}_front.jpg`} alt="Thumbnail 1">
                </button>
    
                <button class={`image-button focus:outline-none p-1 rounded transition-all duration-200 ${activeImages.includes(`back_${i}`) ? 'border-2 border-gray-500' : 'border-none'}`} on:click={() => activeImages[i] = `back_${i}`}>
                    <img class="w-16 h-16 object-cover" src={`/shirts/shirt_${product.teamId}_back.jpg`} alt="Thumbnail 2">
                </button>   
            </div>
        
            <!-- Product Details -->
            <div class="flex justify-between items-center">
                <div>
                    <!-- Product Title -->
                    <h2 class="text-white font-bold mb-1 text-xs">{product.name}</h2>
                    
                    <!-- Product Price -->
                    <span class="text-gray-500 font-bold">10.00 <span class="text-white">ICP</span></span>
                </div>
                <!-- Basket Button -->
                <button class="ml-2 bg-custom-blue hover:bg-custom-blue text-white font-bold py-2 px-4 rounded">
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.6667 21.0001C28.6637 20.1997 28.4207 19.4186 27.9691 18.7578C27.5175 18.097 26.878 17.5869 26.1333 17.2934L28.6267 7.96009C28.6787 7.76132 28.6842 7.5532 28.6426 7.35198C28.6009 7.15076 28.5133 6.96188 28.3867 6.80009C28.2571 6.6485 28.0953 6.52788 27.913 6.44712C27.7307 6.36636 27.5326 6.32751 27.3333 6.33343H9.06666L8.62666 4.65343C8.55016 4.36931 8.38183 4.11847 8.14789 3.94001C7.91396 3.76154 7.62756 3.66547 7.33332 3.66676H4.66666V6.33343H6.30666L9.61332 18.6801C9.69146 18.971 9.86578 19.2268 10.1079 19.406C10.35 19.5852 10.6456 19.6771 10.9467 19.6668H24.6667C25.0203 19.6668 25.3594 19.8072 25.6095 20.0573C25.8595 20.3073 26 20.6465 26 21.0001C26 21.3537 25.8595 21.6929 25.6095 21.9429C25.3594 22.193 25.0203 22.3334 24.6667 22.3334H7.33332C6.9797 22.3334 6.64056 22.4739 6.39051 22.724C6.14047 22.974 5.99999 23.3131 5.99999 23.6668C5.99999 24.0204 6.14047 24.3595 6.39051 24.6096C6.64056 24.8596 6.9797 25.0001 7.33332 25.0001H8.90666C8.68737 25.6043 8.61691 26.2524 8.70123 26.8896C8.78555 27.5268 9.02218 28.1342 9.39108 28.6606C9.75998 29.1869 10.2503 29.6166 10.8205 29.9133C11.3906 30.2099 12.0239 30.3648 12.6667 30.3648C13.3094 30.3648 13.9427 30.2099 14.5129 29.9133C15.083 29.6166 15.5733 29.1869 15.9422 28.6606C16.3111 28.1342 16.5478 27.5268 16.6321 26.8896C16.7164 26.2524 16.6459 25.6043 16.4267 25.0001H19.5733C19.3737 25.5502 19.2972 26.1375 19.3493 26.7204C19.4014 27.3033 19.5807 27.8677 19.8747 28.3737C20.1687 28.8798 20.5701 29.3152 21.0507 29.6491C21.5313 29.9831 22.0793 30.2076 22.6561 30.3067C23.2329 30.4058 23.8244 30.3771 24.3889 30.2227C24.9534 30.0683 25.4771 29.7919 25.9231 29.413C26.3692 29.0341 26.7266 28.5619 26.9703 28.0298C27.2139 27.4977 27.3379 26.9186 27.3333 26.3334C27.3308 25.6446 27.1469 24.9686 26.8 24.3734C27.3701 24.014 27.8402 23.5162 28.1666 22.9265C28.4929 22.3368 28.6649 21.6741 28.6667 21.0001V21.0001ZM23.4533 17.0001H12L9.78666 9.00009H25.6L23.4533 17.0001ZM12.6667 27.6668C12.4029 27.6668 12.1452 27.5886 11.9259 27.4421C11.7066 27.2955 11.5357 27.0873 11.4348 26.8437C11.3339 26.6 11.3075 26.3319 11.3589 26.0733C11.4104 25.8147 11.5374 25.5771 11.7238 25.3906C11.9103 25.2041 12.1479 25.0772 12.4065 25.0257C12.6652 24.9743 12.9333 25.0007 13.1769 25.1016C13.4205 25.2025 13.6288 25.3734 13.7753 25.5927C13.9218 25.8119 14 26.0697 14 26.3334C14 26.6871 13.8595 27.0262 13.6095 27.2762C13.3594 27.5263 13.0203 27.6668 12.6667 27.6668ZM23.3333 27.6668C23.0696 27.6668 22.8118 27.5886 22.5926 27.4421C22.3733 27.2955 22.2024 27.0873 22.1015 26.8437C22.0006 26.6 21.9742 26.3319 22.0256 26.0733C22.0771 25.8147 22.204 25.5771 22.3905 25.3906C22.577 25.2041 22.8146 25.0772 23.0732 25.0257C23.3318 24.9743 23.5999 25.0007 23.8436 25.1016C24.0872 25.2025 24.2954 25.3734 24.442 25.5927C24.5885 25.8119 24.6667 26.0697 24.6667 26.3334C24.6667 26.6871 24.5262 27.0262 24.2761 27.2762C24.0261 27.5263 23.6869 27.6668 23.3333 27.6668Z" fill="white"/>
                        <rect width="14" height="14" transform="translate(19)" fill="#3C71FA"/>
                        <path d="M28.6667 5.66667H27.3333V4.33333C27.3333 3.97971 27.1929 3.64057 26.9428 3.39052C26.6928 3.14048 26.3536 3 26 3C25.6464 3 25.3072 3.14048 25.0572 3.39052C24.8071 3.64057 24.6667 3.97971 24.6667 4.33333V5.66667H23.3333C22.9797 5.66667 22.6406 5.80714 22.3905 6.05719C22.1405 6.30724 22 6.64638 22 7C22 7.35362 22.1405 7.69276 22.3905 7.94281C22.6406 8.19286 22.9797 8.33333 23.3333 8.33333H24.6667V9.66667C24.6667 10.0203 24.8071 10.3594 25.0572 10.6095C25.3072 10.8595 25.6464 11 26 11C26.3536 11 26.6928 10.8595 26.9428 10.6095C27.1929 10.3594 27.3333 10.0203 27.3333 9.66667V8.33333H28.6667C29.0203 8.33333 29.3594 8.19286 29.6095 7.94281C29.8595 7.69276 30 7.35362 30 7C30 6.64638 29.8595 6.30724 29.6095 6.05719C29.3594 5.80714 29.0203 5.66667 28.6667 5.66667Z" fill="white"/>
                    </svg>
                </button>
                
            </div>
        </div>
    {/each}

</div>


<div class="flex justify-center mt-4">
    <button class="bg-custom-blue hover:bg-custom-blue text-white font-bold py-2 px-4 rounded w-32" on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
    </button>
    <div class="mx-4 p-4">
        Page {currentPage}
    </div>
    <button class="bg-custom-blue hover:bg-custom-blue text-white font-bold py-2 px-4 rounded w-32" on:click={() => goToPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= products.length}>
        Next
    </button>
</div>
