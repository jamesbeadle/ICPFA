<script lang="ts">
  import { onMount } from "svelte"; 
  import { browser } from "$app/environment";
  import Toasts from "$lib/components/toasts/toasts.svelte";

  import "../app.css";
  import { appStore } from "$lib/stores/app-store";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";

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
  <Navbar />
  <main class="mb-auto">
    <slot />
  </main>
  <div class="flex-grow"></div>
  <Footer />
  <Toasts />
</div>
