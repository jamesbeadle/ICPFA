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

  <Navbar />
  <slot />
  <Footer />
  
  