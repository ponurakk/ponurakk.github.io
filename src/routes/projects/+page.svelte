<script lang="ts">
  import Fa from 'svelte-fa'
  import { projects } from '$lib/hooks'
  import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

  let scrollTop: number = 0;
  let scrolled: boolean = false;
  let element: HTMLDivElement;

  function onScroll(event: Event) {
    let target = event.target as HTMLDivElement;
    scrollTop = target.scrollTop;
    scrolled = true;
  }

  async function scrollToTop(node: HTMLDivElement) {
    node.scroll({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="snap-y snap-mandatory overflow-y-scroll h-full w-full flex flex-col container-wrapper" bind:this={element} on:scroll={onScroll}>
  {#each projects as item}
    <div class="snap-start snap-always w-full h-full flex flex-col flex-10a">
      <div class="m-auto p-12 text-white w-96 relative">
        <img src={item?.logo} class="w-14 absolute top-10 left-10" alt="">
        <a href={item?.link} target="_blank"><h1 class="text-2xl text-center" class:hover:text-neutral-700={item.link != null}>
          {item?.title}
          {#if item.link != null}
            <svg class="w-6 inline-block -mt-1" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,10.82a1,1,0,0,0-1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8A1,1,0,0,1,5,7h7.18a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V19a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V11.82A1,1,0,0,0,18,10.82Zm3.92-8.2a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L8.29,14.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"/></svg>
          {/if}
        </h1></a>
        <div class="text-center p-2">
          {#if item.gitLink != null}
            <a href={item?.gitLink} target="_blank" class="hover:text-neutral-700 inline-block align-middle"><i class="devicon-github-original ml-1 text-xl"></i></a>
          {/if}
          {#each item?.languages as lang}
            {#if lang.startsWith("<")}
              <svg role="img" class="w-5 inline-block mr-1" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {@html lang}
              </svg>
            {:else}
              <i class="devicon-{lang}-plain ml-1 mr-1 text-xl align-middle"
                class:text-2xl={lang == "rust"}
                class:text-lg={lang == "kotlin"}
                title={lang.charAt(0).toUpperCase() + lang.slice(1)} />
            {/if}
          {/each}
        </div>
        <p class="text-center">{item?.description}</p>
      </div>
    </div>
  {/each}
</div>

<div class="absolute right-10 bottom-1/2 translate-y-1/2 transition-opacity duration-200" class:opacity-0={scrolled}>
  <svg width="50px" height="100px" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="ldl-scale">
      <path fill="none" d="M39.3 13.1h-.9v8.4c-.9-.3-1.8-.4-2.7-.4h-.1c-1 0-1.9.2-2.7.4v-8.4H32c-9.3 0-16.8 7.5-16.8 16.8v7.9h11.6v5.6H15v22.9c0 11.1 9 20.3 20.2 20.5h.4c5.4 0 10.6-2.2 14.5-6.2 3.9-4 6.1-9.3 6.1-14.8V43.5H44.5v-5.6h11.6V30c0-9.4-7.5-16.9-16.8-16.9zm1.9 33.2c0 3.1-2.5 5.6-5.6 5.6h-.1c-3.1 0-5.6-2.5-5.6-5.6V30c0-3.1 2.5-5.6 5.6-5.6h.1c3.1 0 5.6 2.5 5.6 5.6v16.3z"/>
      <g>
        <path fill="#fff" class="animate-bounce-fade" d="M35.6 24.4h-.1c-3.1 0-5.6 2.5-5.6 5.6v16.3c0 3.1 2.5 5.6 5.6 5.6h.1c3.1 0 5.6-2.5 5.6-5.6V30c0-3.1-2.5-5.6-5.6-5.6z"/>
        <path fill="#fff" d="m39.3 7.5h-7.4c-12.4 0-22.5 10.1-22.5 22.4v36.4c0 14.2 11.5 25.9 25.6 26.1h0.5c7 0 13.6-2.8 18.5-7.9s7.6-11.7 7.6-18.7v-35.9c0.1-12.3-9.9-22.4-22.3-22.4zm16.8 58.4c0 5.6-2.2 10.8-6.1 14.8s-9.1 6.2-14.5 6.2h-0.4c-11-0.2-20.1-9.4-20.1-20.6v-36.3c0-23.057 40.9-23.057 40.9 0z"/>
        <path fill="#fff" class="" d="M81.8 22.2h8.8L78.4 10 66.2 22.2h8.9v55.6h-8.9L78.4 90l12.2-12.2h-8.8z"/>
      </g>
    </g>
  </svg>
</div>

{#if scrollTop > 100}
  <button class="absolute right-10 bottom-10" title="Scroll to Top" on:click={() => scrollToTop(element)}>
    <Fa icon={faCircleChevronUp} class="text-4xl hover:text-neutral-700" />
  </button>
{/if}

<style>
.container-wrapper {
  overflow: auto;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none;
}
</style>

