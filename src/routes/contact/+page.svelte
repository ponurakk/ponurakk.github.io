<script lang="ts">
    import { faDiscord, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa'
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="flex flex-row justify-center items-center gap-40 w-full h-full">
  <a href="https://github.com/ponurakk" class="hover:text-neutral-500"><Fa icon={faGithub} class="text-6xl" /></a>
  <a href="https://discord.com/users/739776948523237387" class="hover:text-neutral-500"><Fa icon={faDiscord} class="text-6xl" /></a>
  <a href="https://reddit.com/u/ponurakk" class="hover:text-neutral-500"><Fa icon={faReddit} class="text-6xl" /></a>
  <a href="mailto:p0unrakg@int.pl" class="hover:text-neutral-500"><Fa icon={faEnvelope} class="text-6xl" /></a>
</div>
