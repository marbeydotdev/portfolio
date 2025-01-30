<script lang="ts">
	import { fly } from 'svelte/transition';
	import ProjectTile from '../components/ProjectTile.svelte';
</script>

<div class="mb-8" in:fly={{y: 50}}>
	<h1 class="block text-5xl md:text-6xl mb-5">Make your business <span
		class="inline-block bg-clip-text text-transparent bg-gradient-to-bl from-orange-500 to-purple-500">stand out</span>.
	</h1>
	<p class="text-balance">Netisan specializes in creating beautiful and effective websites for individuals, companies,
		and more.</p>
</div>

<ProjectTile />

