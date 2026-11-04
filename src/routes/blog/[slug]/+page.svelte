<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { highlight } from 'sugar-high';
	import { fly } from 'svelte/transition';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let marked = new Marked().use(
		markedHighlight({
			langPrefix: 'language-',
			highlight: (code) => {
				return highlight(code);
			}
		})
	);
</script>

<div class="mb-5 markdown" in:fly={{y: 50}}>
	<h1>{data.blog.title}</h1>
	<p>{data.blog.date}</p>
</div>

<div class="markdown" in:fly={{y: 50, delay: 100}}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html marked.parse(data.blog.content)}
</div>


