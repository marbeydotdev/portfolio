<script lang="ts">
	import '$lib/style.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<meta name="description" content="The portfolio website belonging to Zavid van den Worm">
	<meta name="theme-color" content="rgb(9,9,30)" />
	<title>Netisan | Kickstart your business</title>
</svelte:head>

<Header />

<div class="relative container mb-14 p-8 !px-8 scroll-smooth">
	{@render children?.()}
</div>

<Footer />