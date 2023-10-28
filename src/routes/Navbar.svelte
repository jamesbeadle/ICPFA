<script lang="ts">
  import { page } from '$app/stores';

  let menuOpen = false;
  const routes = ["/mission", "/projects", "/community-fund", "/shop"];
  let currentClass: string[] = [];

  $: currentClass = routes.map(route => $page.url.pathname === route ? 'active' : '');

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="text-white">
  <div class="px-4  w-100 flex justify-between items-center">
    <a href="/" class="text-white hover:text-gray-400">
      <img src="logo.png" alt="Logo" class="h-8 w-auto logo">
    </a>
    <button class="burger-btn md:hidden" on:click={toggleMenu}>
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="2" rx="1" fill="currentColor"/>
        <rect y="8" width="24" height="2" rx="1" fill="currentColor"/>
        <rect y="16" width="24" height="2" rx="1" fill="currentColor"/>
      </svg>      
    </button>
    <ul class="menu">
      <li class="mx-2"><a href="/mission" class="text-white hover:text-gray-400 {currentClass[0]}">The Mission</a></li>
      <li class="mx-2"><a href="/projects" class="text-white hover:text-gray-400 {currentClass[1]}">Our Projects</a></li>
      <li class="mx-2"><a href="/community-fund" class="text-white hover:text-gray-400 {currentClass[2]}">Community Fund</a></li>
      <li class="mx-2"><a href="/shop" class="text-white hover:text-gray-400 {currentClass[3]}">Shop</a></li>
    </ul>
  </div>
  
  <div class={menuOpen ? 'menu-open' : ''}>
    <ul class="mobile-menu">
      <li><a href="/mission" class="{currentClass[0]}" on:click={toggleMenu}>The Mission</a></li>
      <li><a href="/projects" class="{currentClass[1]}" on:click={toggleMenu}>Our Projects</a></li>
      <li><a href="/community-fund" class="{currentClass[2]}" on:click={toggleMenu}>Community Fund</a></li>
      <li><a href="/shop" class="{currentClass[3]}" on:click={toggleMenu}>Shop</a></li>
    </ul>
  </div>

</nav>

<style>
  
.mobile-menu {
    display: none;
    /* ... other styles ... */
}
  .logo {
    width: 144px;
    height: auto;
    padding: 16px;
  }
  .active {
    color: #3C71FA;
  }
  /* Hide menu by default on mobile */
  .menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .show-menu {
    display: flex;
  }

  /* Display menu on desktop */
  @media (min-width: 768px) {
    .menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: auto;
    }
  }

  .burger-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }

  .burger-btn:focus {
    outline: none;
  }

  .mobile-menu {
    display: none;
    position: absolute;  /* Make it float */
    top: 50px;  /* Adjust as per your header height */
    right: 10px;  /* Adjust gap from right */
    background-color: #000;  /* Adjust background color */
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;  /* Make sure it floats on top */
  }

  .mobile-menu li {
    padding: 10px 20px;  /* Padding for each menu item */
  }

  .menu-open .mobile-menu {
    display: block;
  }
</style>
