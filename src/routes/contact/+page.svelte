<script lang="ts">
	import {fly} from 'svelte/transition';
</script>


<a in:fly={{y: 50}} href="https://www.linkedin.com/in/zavid-van-den-worm-a1479a217/" class="block mb-8 p-3 text-xl font-bold text-center border border-zinc-600 hover:border-zinc-400 rounded text-zinc-100 relative transition-all fancy-hover">
	LinkedIn
</a>

<a in:fly={{y: 50, delay: 100}} href="mailto:contact@marbey.dev" class="block p-3 text-xl font-bold text-center border border-zinc-600 hover:border-zinc-400 rounded text-zinc-100 transition-all relative fancy-hover before">
	Email
</a>