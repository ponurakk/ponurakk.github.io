<script lang="ts">
  import Fa from 'svelte-fa'
  import { projects } from '$lib/hooks'
  import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

  let scrollTop: number;
  let element: HTMLDivElement;

  function onScroll(event: Event) {
    let target = event.target as HTMLDivElement;
    scrollTop = target.scrollTop;
  }

  async function scrollToTop(node: HTMLDivElement) {
    node.scroll({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<div class="snap-y snap-mandatory overflow-y-scroll scrollbar h-full w-full flex flex-col" on:scroll={onScroll} bind:this={element}>
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

{#if scrollTop > 100}
  <button class="absolute right-10 bottom-10" title="Scroll to Top" on:click={() => scrollToTop(element)}>
    <Fa icon={faCircleChevronUp} class="text-4xl hover:text-neutral-700" />
  </button>
{/if}

