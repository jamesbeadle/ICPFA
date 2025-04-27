<script lang="ts">
    import { page } from "$app/stores";
  
    let menuOpen = false;
    const routes = ["/mission", "/team", "/projects", "/nfts", "/shop"];
    let currentClass: string[] = [];
  
    $: currentClass = routes.map((route) =>
      $page.url.pathname === route ? "active" : ""
    );
  
    function toggleMenu() {
      menuOpen = !menuOpen;
    }
  </script>
  
  <header>
    <nav class="text-white">
      <div class="px-4 w-100 flex justify-between items-center">
        <a href="/" class="text-white hover:text-gray-400">
          <img src="logo.png" alt="Logo" class="h-8 w-auto logo" />
        </a>
        <button class="burger-btn md:hidden" onclick={toggleMenu} aria-label="showMenu">
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="2" rx="1" fill="currentColor" />
            <rect y="8" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="16" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        <ul class="menu">
          <li class="mx-2">
            <a
              href="/mission"
              class="text-white hover:text-gray-400 {currentClass[0]}"
              >The Mission</a
            >
          </li>
          <li class="mx-2">
            <a
              href="/team"
              class="text-white hover:text-gray-400 {currentClass[1]}">Our Team</a
            >
          </li>
          <li class="mx-2">
            <a
              href="/projects"
              class="text-white hover:text-gray-400 {currentClass[2]}">Projects</a
            >
          </li>
          <li class="mx-2">
            <a
              href="/nfts"
              class="text-white hover:text-gray-400 {currentClass[4]}">NFTs</a
            >
          </li>
          <li class="mx-2">
            <a
              href="/shop"
              class="text-white hover:text-gray-400 {currentClass[5]}">Shop</a
            >
          </li>
        </ul>
      </div>
  
      <div class={menuOpen ? "menu-open" : ""}>
        <ul class="mobile-menu">
          <li>
            <a href="/mission" class={currentClass[0]} onclick={toggleMenu}
              >The Mission</a
            >
          </li>
          <li>
            <a href="/team" class={currentClass[1]} onclick={toggleMenu}
              >Our Team</a
            >
          </li>
          <li>
            <a href="/cup" class={currentClass[1]} onclick={toggleMenu}
              >The ICPFA Cup</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  <style>
    .mobile-menu {
      display: none;
    }
  
    .logo {
      width: 144px;
      height: auto;
      padding: 16px;
    }
    .active {
      color: #3c71fa;
    }
  
    .menu {
      display: none;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  
    .show-menu {
      display: flex;
    }
  
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
    }
  
    .burger-btn:focus {
      outline: none;
    }
  
    .mobile-menu {
      display: none;
      position: absolute;
      top: 50px;
      right: 10px;
      background-color: #000;
      border-radius: 10px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  
    .mobile-menu li {
      padding: 10px 20px;
    }
  
    .menu-open .mobile-menu {
      display: block;
    }
  
    @media (min-width: 768px) {
      .mobile-menu {
        display: none !important;
      }
    }
  </style>
  