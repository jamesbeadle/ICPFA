<script>
  import { onMount } from "svelte";
  import { initJuno } from "@junobuild/core";

  onMount(
    async () =>
      await initJuno({
        satelliteId: "kqo2t-faaaa-aaaal-ac2ja-cai",
      })
  );
</script>

<slot />
