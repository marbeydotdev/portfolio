<script lang="ts">
	import { content } from '$lib/content';
	import { userConfig } from '$lib/config.svelte.ts';
	import {fly} from 'svelte/transition';
	import ProjectTile from '../components/ProjectTile.svelte';

	let languageSet = $derived(content[userConfig.language])
</script>

<div class="mb-8" in:fly={{y: 50}}>
	<h1>{languageSet.AboutTitle}</h1>
	<p class="text-balance">{languageSet.AboutIntro}</p>
</div>

<ProjectTile />

<div class="flex mt-2 gap-20 flex-col sm:flex-row" in:fly={{y: 50, delay: 100}}>
	<div class="flex flex-1 flex-col">
		<span class="font-semibold mb-4">Web development</span>
		<span>C#</span>
		<small class="ml-auto -mt-6">ASP.NET</small>
		<small class="ml-auto">Blazor / Razor</small>
		<small class="ml-auto">CQRS</small>
		<small class="ml-auto">Entity Framework</small>
		<span class="mt-4">Javascript</span>
		<small class="ml-auto -mt-6">Node.JS</small>
		<small class="ml-auto">React</small>
		<small class="ml-auto">SvelteKit</small>
		<span class="mt-4">HTML</span>
		<small class="ml-auto -mt-6">React</small>
		<small class="ml-auto">SvelteKit</small>
		<span class="mt-4">CSS</span>
		<small class="ml-auto -mt-6">Tailwind</small>
		<small class="ml-auto">Responsive design</small>
		<span class="mt-4">Python</span>
		<small class="-mt-6 ml-auto">FastAPI</small>
	</div>
	<div class="flex flex-1 flex-col">
		<span class="font-semibold mb-4">Software development</span>
		<span>C#</span>
		<small class="-mt-6 ml-auto">Winforms</small>
		<small class="ml-auto">WPF</small>
		<span class="mt-4">Python</span>
		<small class="-mt-6 ml-auto">GUI Development</small>
		<small class="ml-auto">Discord bot</small>
		<small class="ml-auto">Web scraping</small>
		<span class="mt-4">Mobile</span>
		<small class="-mt-6 ml-auto">MAUI</small>
	</div>
</div>