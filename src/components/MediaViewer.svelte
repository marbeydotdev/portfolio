<script lang="ts">
	import {fly, fade} from 'svelte/transition';


	export let media: {url: string, description: string}[]

	let currentMedia = 0

	function mediaPrev(){
		currentMedia = currentMedia > 0 ? currentMedia - 1 : media.length - 1
	}

	function mediaNext() {
		currentMedia = currentMedia < (media.length - 1) ? currentMedia + 1 : 0
	}

	function pauseIfUnfocused(idx: number, element: EventTarget | null) {
		if (idx !== currentMedia && element instanceof HTMLObjectElement) {
			element.contentDocument?.querySelector("video")?.pause()
		}

	}

	function getCalculateTransform(index: number) {
		let offset = index - currentMedia
		return `opacity: ${100 - (offset * 30)}%;transform: translateX(${offset * 100}%)`
	}

</script>

<div class="block mb-8" in:fly={{y: 50, delay: 200}}>
	<div class="w-full h-72 mb-4 relative overflow-clip">
			{#each media as m, idx}
				{#key currentMedia}
					<object on:load="{(e) => pauseIfUnfocused(idx, e.target)}" class="w-full h-full rounded object-contain transition-all absolute" data="{m.url}" title="{m.description}" style="{getCalculateTransform(idx)}" />
				{/key}
			{/each}
	</div>
	<div class="flex justify-between items-center mb-4 mt-5 text-neutral-300">
		<button class="block p-3 w-24 text-sm aspect-video relative bg-zinc-800 rounded-full" on:click={mediaPrev}>{'<--'}</button>
		<span class="text-xs block text-zinc-400">viewing {currentMedia + 1} of {media.length}</span>
		<button class="block p-3 w-24 text-sm aspect-video relative bg-zinc-800 rounded-full" on:click={mediaNext}>{'-->'}</button>
	</div>
	{#key currentMedia}
		<small class="block text-zinc-300" in:fade>{media.at(currentMedia)?.description}</small>
	{/key}

</div>
