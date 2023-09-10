<script lang="ts">
  import { page } from "$app/stores";
  import { routes } from "$lib/hooks";
</script>

<div class="h-8 flex justify-around relative z-50 bg-[#09090bf2]">
  {#each routes as route}
    <!-- "-mr-*" should be equal to h* in upper div -->
    <div class="right-slash w-full text-center -mr-8 cursor-pointer hover:bg-neutral-700 first-of-type:-ml-7" class:bg-neutral-800={$page.route.id === route.href}>
      <a href={route.href} class="w-full h-full text-white flex flex-col justify-center text-xl">{route.name}</a>
    </div>
  {/each}
</div>

<style>
  .right-slash {
    clip-path: polygon(
      0 0,
      calc(100% - 32.00px) 0,
      100% 32.00px,
      100% 100%,
      32.00px 100%,
      0 calc(100% - 32.00px)
    );
  }
  .right-slash:first-of-type {
    clip-path: polygon(
      0 0,
      calc(100% - 32.00px) 0,
      100% 32.00px,
      100% 100%,
      0 100%
    );
  }
</style>

