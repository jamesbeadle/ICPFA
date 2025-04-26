<script lang="ts">
  import { onMount } from "svelte"; 
  import { browser } from "$app/environment";
  import Toasts from "$lib/components/toasts/toasts.svelte";

  import "../app.css";
  import { appStore } from "$lib/stores/app-store";
    import Footer from "$lib/components/shared/footer.svelte";
    import Header from "$lib/components/shared/header.svelte";

  onMount(async () => {
    console.log("checking")
    await appStore.checkServerVersion();
    console.log("done")
  });

  $: (() => {
    if (!browser) return;
    const spinner = document.querySelector("body > #app-spinner");
    spinner?.remove();
  })();
</script>

<div class="flex flex-col h-screen justify-between bg-black">
  <Header />
  <main class="mb-auto">
    <slot />
  </main>
  <div class="flex-grow"></div>
  <Footer />
  <Toasts />
</div>
