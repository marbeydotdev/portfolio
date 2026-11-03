<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import hljs from 'highlight.js';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import { fly } from 'svelte/transition';

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

<div class="mb-5" in:fly={{y: 50}}>
	<h1>{data.blog.title}</h1>
</div>

<div class="prose" in:fly={{y: 50, delay: 100}}>
	{@html marked.parse(data.blog.content)}
</div>


