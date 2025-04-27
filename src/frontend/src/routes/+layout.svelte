<script lang="ts">
  import { onMount } from "svelte"; 
  import { browser } from "$app/environment";
  import Toasts from "$lib/components/toasts/toasts.svelte";

  import "../app.css";
  import Footer from "$lib/components/shared/footer.svelte";
  import Header from "$lib/components/shared/header.svelte";
  import type { Snippet } from 'svelte';
  import LocalSpinner from "$lib/components/shared/local-spinner.svelte";

    
  interface Props { children: Snippet }
  let { children }: Props = $props();
    
  let isLoading = $state(true);

  const init = async () => {
    if (!browser) return;
  };

  onMount(async () => {
    console.log("mounting")
    if (browser) {
      document.querySelector('#app-spinner')?.remove();
    }
    await init();
    isLoading = false;
  });
</script>

{#if browser && isLoading}
  <LocalSpinner />
  {:else}
<div class="flex flex-col h-screen justify-between bg-black">
  <Header />
  <main class="mb-auto">
    {@render children()}
  </main>
  <div class="flex-grow"></div>
  <Footer />
  <Toasts />
</div>
{/if}