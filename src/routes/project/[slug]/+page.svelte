<script lang="ts">
	import type { PageProps } from './$types';
	import hljs from "highlight.js";

	import {fly} from 'svelte/transition';

	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';

	let { data }: PageProps = $props();

	let marked = new Marked().use(
		markedHighlight({
			langPrefix: "language-",
			highlight: (code, lang) => {
				const language = hljs.getLanguage(lang) ? lang : "plaintext";
				return hljs.highlight(code, { language }).value;
			}
		}),
	)

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
			<span class="bg-base-300 flex rounded-full px-3 py-1">{tech}</span>
		{/each}
	</div>
	<p class="ml-14 block text-sm">{data.project.description}</p>
</div>

	<div in:fly={{y: 50, delay: 100}}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html marked?.parse(data.project.content)}
	</div>
