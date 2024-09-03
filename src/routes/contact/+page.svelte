<script lang="ts">
	import {fly} from 'svelte/transition';
</script>


<a in:fly={{y: 50}} href="https://www.linkedin.com/in/zavid-van-den-worm-a1479a217/" class="block mb-4 p-3 text-xl font-bold text-center text-zinc-100 transition-all hover:bg-blue-500 rounded-sm bg-blue-600">
	LinkedIn
</a>

<a in:fly={{y: 50, delay: 100}} href="mailto:contact@marbey.dev" class="block p-3 text-xl font-bold text-center text-zinc-100 transition-all hover:bg-zinc-500 rounded-sm bg-zinc-600">
	Email
</a>