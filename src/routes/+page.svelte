<script lang="ts">
    import { setDoc } from "@junobuild/core";
  
    let doc: any;
  
    const insert = async () =>
      (doc = await setDoc({
        collection: "demo",
        doc: {
          key: `my-key-${new Date().getTime()}`,
          data: {
            hello: "world",
          },
        },
      }));
  </script>
  
  <button on:click="{insert}">Insert a document</button>
  
  {#if doc !== undefined}
  <span>Key: {doc.key}</span>
  {/if}
