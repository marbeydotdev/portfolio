<script lang="ts">
	import '$lib/style.css';
	import Header from '../components/Header.svelte';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript'
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	$effect(() => {
		page.route;
		if (browser){
			hljs.registerLanguage('javascript', javascript)
			setTimeout(hljs.highlightAll, 100);
		}
	})

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta name="description" content="The portfolio website belonging to Zavid van den Worm" />
	<meta name="theme-color" content="rgb(9,9,30)" />
	<title>Zavid van den Worm | Portfolio</title>
</svelte:head>

<Header />

<div class="relative container mb-14 scroll-smooth p-8 !px-8">
	{@render children?.()}
</div>
