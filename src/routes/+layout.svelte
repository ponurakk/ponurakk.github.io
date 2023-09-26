<script lang="ts">
  import "../app.css";
  import Matrix from "$lib/components/Matrix.svelte";

  import { onMount } from "svelte";
  import Nav from "$lib/components/Nav.svelte";
  import { isLoaded } from "./stores";
  import { page } from "$app/stores";

  let loaded: boolean;
  let noiseLoad: boolean = false;
  onMount(() => {
    // set value and immediately unsub from updating
    let unsub = isLoaded.subscribe((val) => loaded = val);
    unsub()

    // update every time route changes
    page.subscribe(() => {
      if (!$isLoaded) {
        setTimeout(() => {
          isLoaded.set(true)
          loaded = true;
        }, 800)
      } else {
        noiseLoad = true;
        setTimeout(() => {
          noiseLoad = false;
        }, 350)
      }
    });
  })
</script>

<Matrix />
<div class="app relative w-screen h-screen z-10">
  <div class="panel absolute w-0.5 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
    <div class="w-screen h-screen transition-opacity" class:opacity-0={!loaded}>
      <Nav/>
      {#if noiseLoad}
        <div class="noise before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-100 before:z-10 before:pointer-events-none before:animate-noise"></div>
      {/if}
      <div class="p-2 relative" style="height: calc(100% - 2rem)">
        <slot />
      </div>
    </div>
  </div>
</div>

<!-- debug -->
<!-- <p class="fixed top-0 left-0 text-white">{JSON.stringify(noiseLoad)} | {JSON.stringify($isLoaded)}</p> -->

<style>
  .panel {
    background-color: rgba(9, 9, 11, 0.95);
    clip-path: polygon(
      0 0,
      calc(100% - 20.00px) 0,
      100% 20.00px,
      100% 100%,
      30.00px 100%,
      0 calc(100% - 30.00px)
    );
    animation: loadWidthAnim 0.5s 0s forwards, loadHeightAnim 0.5s 0.5s forwards;
  }

  @keyframes loadWidthAnim {
    from { width: 1px; }
    to { width: 95%; }
  }
  @keyframes loadHeightAnim {
    from { height: 1px; }
    to { height: 95%; }
  }
</style>

