<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Product } from '../types/product';

    const dispatch = createEventDispatcher();

    export let product: Product | null = null;
    export let showModal = false;

    function close() {
        dispatch('close');
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
        width: 400px; /* You can adjust based on your design */
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    /* Add more styling based on your design */
</style>

{#if showModal}
<div class="modal-overlay" role="button" tabindex="0" on:click={close} on:keydown={close}>
    <div class="modal-content" role="button" tabindex="0" on:click={e => e.stopPropagation()} on:keydown={e => e.stopPropagation()}>
        <!-- Product Details Here -->
        <img src={`shirts/shirt_${product?.teamId}_front.jpg`} alt="Product" />
        <h2>{product?.name}</h2>
        <p>{product?.price} ICP</p>
        <!-- Add more details and functionality based on your design -->
    </div>
</div>
{/if}
