<script>
	import Navlink from './Navlink.svelte';
</script>

<div
	class="sticky bg-base-100/50 backdrop-blur-2xl z-[100] top-0 pt-12 pb-8 border-b border-base-content/15"
>
	<div class="flex flex-col sm:flex-row sm:items-center breakpoints !px-8">
		<a class="text-3xl font-bold mb-8 sm:mb-0" href="/">Zavid</a>
		<span class="sm:flex-grow"></span>
		<div class="flex gap-10 ml-auto items-center">
			<Navlink link="/" text="Home" />
			<Navlink link="/projects" text="Projects" />
			<Navlink link="/blog" text="Blog" />
			<Navlink link="/contact" text="Contact" />
		</div>
	</div>
</div>
