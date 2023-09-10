<script lang="ts">
  import { onMount } from "svelte";

  let innerWidth = 0;
  let innerHeight = 0;

  let fontSize = 15;
  $: columns = innerWidth / fontSize;

  let drops: any[] = []
  $: {
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }

  function runMatrix() {
    let canvas = document.querySelector('canvas') as HTMLCanvasElement;
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');

    function draw() {
      // Create black background
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)]; // choose falling letters

        // Style the letters
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Make them fall
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setTimeout(() => {
      setInterval(draw, 33);
    }, 1000)
  }

  onMount(() => runMatrix());
</script>
<canvas class="absolute z-0" width={innerWidth} height={innerHeight}></canvas>

<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight} />

<style>
  canvas {
    background-color: rgba(0, 0, 0, 1);
  }
</style>
