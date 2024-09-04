<script lang="ts">
	import {fly, fade} from 'svelte/transition';
	import {page} from '$app/stores';
	import {projects} from '$lib/projects';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	if (!Object.keys(projects).includes($page.params.slug)){
		goto("/")
	}

	let project = projects[$page.params.slug];

	let currentMedia = 0

	function setMediaType() {
		let extension = project.media.at(currentMedia).url.split(".").at(-1).toLowerCase()

		if (["mp4", "avi"].includes(extension)){
			mediaType = "video"
		} else if (["jpeg", "jpg", "png", "webp"].includes(extension)){
			mediaType = "image"
		} else if (["docx", "pdf"].includes(extension)){
			mediaType = "document"
		}
	}


	let mediaType: string

	function mediaPrev(){
		currentMedia = currentMedia > 0 ? currentMedia - 1 : project.media.length - 1
		setMediaType()
	}

	function mediaNext() {
		currentMedia = currentMedia < (project.media.length - 1) ? currentMedia + 1 : 0
		setMediaType()
	}

	onMount(() => {
		setMediaType()
	})

</script>

<div in:fly={{y: 50}} class=" flex flex-col sm:flex-row sm:items-center gap-4 mb-4 border-b-2 pb-3" style="border-bottom-color: hsl({project.color} 100%, 10%)">
	<h1 class="text-3xl grow inline-block" style="color: hsl({project.color} 100%, 50%) !important;">{project.name}</h1>
	<small class="">{project.short}</small>
</div>

<p in:fly={{y: 50, delay: 100}} class="mb-8 text-balance">{project.description}</p>

<div class="block mb-8" in:fly={{y: 50, delay: 200}}>
	<div class="w-full h-72 mb-4">
		{#key mediaType}
			{#if mediaType === "image"}
				<img class="w-full h-full object-contain" alt="project related media" src="{project.media.at(currentMedia).url}">
			{:else if mediaType === "video"}
				<video class="w-full h-full bg-transparent" controls>
					<source src="{project.media.at(currentMedia).url}">
					<track kind="captions" src="">
				</video>
			{:else if mediaType === "document"}
				<embed width="100%" height="100%" type="application/pdf" title="Document" src="{project.media.at(currentMedia).url}">
			{/if}
		{/key}
	</div>
	<div class="flex justify-between items-center mb-4">
		<button class="block p-2 w-10 text-xl aspect-square relative fancy-hover" on:click={mediaPrev}>{"<"}</button>
		<button class="block p-2 w-10 text-xl aspect-square relative fancy-hover" on:click={mediaNext}>{">"}</button>
	</div>
	{#key currentMedia}
		<small class="block text-zinc-300" in:fade>{project.media.at(currentMedia).description}</small>
	{/key}

</div>

<div in:fly={{y: 50, delay: 300}} class="block relative before:inset-0 before:bg-gradient-to-r before:to-50% before:from-white/20">
	<h2 style="color: hsl({project.color} 100%, 70%) !important;">Features</h2>

	<div class="block mb-8 ">
		{#each project.features as feature}
			<span class="block">{feature}</span>
		{/each}
	</div>
</div>


<div in:fly={{y: 50, delay: 400}} class="block text-right">
<h2 style="color: hsl({project.color} 100%, 70%) !important;">Contributions</h2>
	{#each project.contributions as contribution, index}
		<span in:fly|global={{y: 50, delay: (400 + (index * 100))}} class="block">{contribution}</span>
		{/each}
</div>