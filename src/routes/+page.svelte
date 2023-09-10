<script lang="ts">
  import Fa from 'svelte-fa';
  import { faJava, faRedhat, faRust } from '@fortawesome/free-brands-svg-icons';
  function honestWork() {
    window.location.href = "honest-work.jpg";
  }

  function altImg(event: Event) {
    let target = event.target as HTMLImageElement;
    target.src = "avatar.png";
  }
</script>

<svelte:head>
  <title>Main</title>
</svelte:head>

<!-- centering to screen looks just better -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3">
  <div class="text-center">
    <img src="https://github.com/ponurakk.png" alt="avatar" class="rounded-full w-64 m-auto mb-5" on:error={altImg}>
    <p class="text-xl">I'm a 17 year old backend developer that is trying to accomplish many things and learn as much as possible.
      My main language at this moment is Rust.
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      I also know Typescript/Javascript <span on:click={honestWork} tabindex="-1">some</span> C++ and Kotlin
    </p>
  </div>
</div>
