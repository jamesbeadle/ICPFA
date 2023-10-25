<script lang="ts">
  import { onMount } from "svelte";
  
  let menu: HTMLUListElement | null = null;

  onMount(() => {
    function resizeMenu() {
      if (menu) {
        if (window.innerWidth <= 768) {
          menu.classList.remove("flex");
          menu.classList.add("flex-col", "items-center", "w-full");
        } else {
          menu.classList.remove("flex-col", "items-center", "w-full");
          menu.classList.add("flex");
        }
      }
    }

    window.addEventListener("resize", resizeMenu);
    resizeMenu(); // Call once to set initial state

    return () => { window.removeEventListener("resize", resizeMenu); };
  });
</script>


<nav class="text-white">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <a href="/" class="text-white hover:text-gray-400">
      <img src="logo.png" alt="Logo" class="h-8 w-auto logo">
    </a>
    <ul bind:this={menu} class="flex">
      <li class="mx-2"><a href="/projects" class="text-white hover:text-gray-400">Our Projects</a></li>
      <li class="mx-2"><a href="/community-fund" class="text-white hover:text-gray-400">Community Fund</a></li>
      <li class="mx-2"><a href="/shop" class="text-white hover:text-gray-400">Shop</a></li>
    </ul>
  </div>
</nav>
<style>
  .logo {
    width: 144px;
    height: auto;
    padding: 16px;
  }
</style>
