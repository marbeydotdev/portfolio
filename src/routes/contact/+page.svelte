<script lang="ts">
	import {fly} from 'svelte/transition';
</script>


<a in:fly={{y: 50}} href="https://www.linkedin.com/in/zavid-van-den-worm-a1479a217/" class="contact-btn fancy-hover mb-5">
	LinkedIn
</a>

<a in:fly={{y: 50, delay: 100}} href="mailto:contact@marbey.dev" class="contact-btn fancy-hover">
	Email
</a>

<style lang="postcss">
	.contact-btn {
			@apply block p-3 text-xl font-semibold text-center border border-zinc-600 hover:border-zinc-400 rounded dark:text-zinc-100 text-zinc-900 transition-all relative;
	}
</style>