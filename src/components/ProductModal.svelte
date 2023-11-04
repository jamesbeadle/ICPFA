<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount } from 'svelte';

    import type { Product } from '../types/product';

    const dispatch = createEventDispatcher();

    export let product: Product | null = null;
    export let showModal = false;
    let activeImageType: 'front' | 'back' = 'front';

    onMount(() => {
        currentImageSrc = `shirts/${product?.teamId}.jpg`;
    });

    function close() {
        dispatch('close');
    }

    let sizes = ['S', 'M', 'L', 'XL'];
    let selectedSize = 'L';
    let quantity = 1;
    let currentImageSrc = '';

    function increment() {
        quantity += 1;
    }

    function decrement() {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    function changeImage(imageType: 'front' | 'back'): void {
        if (product) {
            currentImageSrc = (imageType === 'front') ? `shirts/${product.teamId}.jpg` : `shirts/${product.teamId}_${product.shirtNumber}.jpg`;
            activeImageType = imageType; // Set the active image type
        }
    }

</script>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    .modal-content {
        width: 600px; 
        background: #000;
        border-radius: 10px;
        border-radius: 8px;
        border: 1px solid #1a1d21;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.60);
    }
    .inner-modal{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .main-row{
        display: flex;
    }
    
    .large-img-col{
        flex-basis: 65%;
    }

    .product-detail-col{
        flex-basis: 35%;
    }

    .product-title{
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
    }

    .product-description{
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
        color: #C2C3C4;
    }

    .thumbnail-container {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .thumbnail {
        width: 80px;
        height: 80px;
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .thumbnail-active {
        border-color: #FFF;
    }

    .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    
    .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
    
    .thumbnail-col{
        flex-basis: 65%;
        display: flex;
        gap: 10px;  
    }
    
    .size-col{
        flex-basis: 35%;
    }

    .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
}

.flex-item {
    flex: 1;
    text-align: center;
    padding: 5px;
}


</style>

{#if showModal}
<div class="modal-overlay" role="button" tabindex="0" on:click={close} on:keydown={close}>
    <div class="modal-content" role="button" tabindex="0" on:click={e => e.stopPropagation()} on:keydown={e => e.stopPropagation()}>
        <div class="inner-modal">
            <div class="header-row">
                <h5>Details</h5>
                <button class="close-button" on:click={close} aria-label="Close">×</button>
            </div>
            <div class="main-row mt-4">
                <div class="large-img-col">
                    <img class="pr-8" src={currentImageSrc} alt="Product" />
                </div>
                <div class="product-detail-col">
                    <h2 class="product-title">{product?.name}</h2>
                    <h2 class="product-description mt-2">{product?.description}</h2>
                    <p class="mt-4">{product?.price.toFixed(2)} ICP</p>
                </div>
            </div>
            <div class="thumbnail-row">
                <div class="thumbnail-container">
                    <div class="thumbnail-col">
                        <div class="thumbnail {activeImageType === 'front' ? 'thumbnail-active' : ''}" role="button" tabindex="0" aria-label="Show front view"
                            on:click={() => changeImage('front')} 
                            on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && changeImage('front')}>
                                <img src={`shirts/${product?.teamId}.jpg`} alt="Front view" class="w-full h-full object-cover" />
                        </div>
                        <div class="thumbnail {activeImageType === 'back' ? 'thumbnail-active' : ''}" role="button" tabindex="0" aria-label="Show back view"
                            on:click={() => changeImage('back')} 
                            on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && changeImage('back')}>
                            {#if product?.teamId && product?.teamId > 0}
                                <img src={`shirts/${product?.teamId}_${product?.shirtNumber}.jpg`} alt="Back view" class="w-full h-full object-cover" />
                            {:else}
                                <img src={`shirts/${product?.teamId}.jpg`} alt="Back view" class="w-full h-full object-cover" />
                            {/if}
                        </div>
                    </div>
                    <div class="size-col">
                        <div class="bg-black text-white">
                            <!-- Size Selector -->
                            <div class="flex mb-4">
                                {#each sizes as size}
                                    <button
                                        class="mx-1 px-4 py-2 border border-white {selectedSize === size ? 'bg-blue-600' : 'bg-black'}"
                                        on:click={() => selectedSize = size}
                                    >
                                        {size}
                                    </button>
                                {/each}
                            </div>
    
                            <div class="flex-container">
                                <button class="flex-item" on:click={decrement}>-</button>
                                <div class="flex-item">{quantity}</div>
                                <button class="flex-item" on:click={increment}>+</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <!-- Add to Cart Button -->
                <button class="mt-4 w-full py-2 bg-blue-600 text-white uppercase disabled:bg-gray-400 disabled:text-gray-200" disabled>Add to Cart (Coming Soon)</button>
            
            </div>
        </div>
    </div>
</div>
{/if}
