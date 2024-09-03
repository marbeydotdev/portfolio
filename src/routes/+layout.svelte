<script lang="ts">
    import "$lib/style.css"
    import Header from "../components/Header.svelte";
</script>

<svelte:head>
    <meta name="description" content="The portfolio website belonging to Zavid van den Worm">
    <meta name="theme-color" content="rgb(9,9,30)" />
</svelte:head>

<div class="container mb-14">
    <Header />
    <slot></slot>
</div>