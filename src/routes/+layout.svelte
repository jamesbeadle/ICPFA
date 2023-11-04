<script>
    import { onMount } from "svelte";
    import { initJuno } from "@junobuild/core";
    import Navbar from "./Navbar.svelte";
    import Footer from "./Footer.svelte";
    import "../app.css";

  
    onMount(
      async () =>
        await initJuno({
          satelliteId: "kqo2t-faaaa-aaaal-ac2ja-cai",
        })
    );
  </script>

<div class="flex flex-col h-screen justify-between">
  <Navbar />
  <main class="mb-auto">
    <slot />
  </main>
  <div class="flex-grow">
  </div>
  <Footer />
</div>
