<script>
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";
</script>

<div class="flex flex-col h-screen justify-between bg-black">
  <Navbar />
  <main class="mb-auto">
    <slot />
  </main>
  <div class="flex-grow"></div>
  <Footer />
</div>
