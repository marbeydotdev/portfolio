<script lang="ts">
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { highlight } from "sugar-high";
import { fly } from "svelte/transition";
import type { PageProps } from "./$types";
import { tagColor } from '#lib/helpers.ts';
import ProjectMedia from '#components/project/ProjectMedia.svelte';

let { data }: PageProps = $props();

let marked = new Marked().use(
	markedHighlight({
		langPrefix: "language-",
		highlight: (code) => {
			return highlight(code);
		},
	}),
);
</script>

<div
	class="absolute top-0 right-0 left-0 h-12 opacity-50 blur-3xl"
	style="background: hsl({data.project.colorHue}deg 60% 70%)"
></div>	

<div in:fly={{ y: 50 }} class="mb-3 flex flex-col p-3">
	<div class="flex items-center">
		<img alt="logo" src={data.project.icon} class="mr-2 inline-block aspect-square h-12 w-12" />
		<h1 class="text-lg text-balance" style="color: hsl({data.project.colorHue}deg 60% 70%)">{data.project.title}</h1>
	</div>
	<div class="mb-4 ml-14 flex items-center gap-3 text-xs">
		{#each data.project.tags as tech (tech)}
			<span style="background: {tagColor(tech)}" class="flex rounded-full px-3 py-1">{tech}</span>
		{/each}
	</div>
	<p class="ml-14 block text-sm">{data.project.description}</p>
</div>

<ProjectMedia media={data.project.media} />

	<div in:fly={{y: 50, delay: 100}} class="markdown">
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html marked?.parse(data.project.content)}
	</div>
