
<script lang="ts">
    import type { Product } from '../types/product';
    export let products: Product[] = [];
</script>

<div class="breadcrumb">
    ICPFA > MARKETPLACE > T-SHIRTS
</div>
<div class="item-count">120 ITEMS</div>


{#each products as product}
    <div class="clothing-tile">
        <img src={product.image} alt={product.name} />
        <div class="product-name">{product.name}</div>
        <div class="product-price">{product.price}</div>
    </div>
{/each}
