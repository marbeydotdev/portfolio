<script>
	import { resolve } from '$app/paths';
import Navlink from './Navlink.svelte';
</script>

<div
	class="bg-base-100/50 border-base-content/15 sticky top-0 z-[100] border-b pt-12 pb-8 backdrop-blur-2xl"
>
	<div class="breakpoints flex flex-col !px-8 sm:flex-row sm:items-center">
		<a class="mb-8 text-3xl font-bold sm:mb-0" href={resolve("/")}>Zavid</a>
		<span class="sm:flex-grow"></span>
		<div class="ml-auto flex items-center gap-10">
			<Navlink link="/" text="Home" />
			<Navlink link="/projects" text="Projects" />
			<Navlink link="/blog" text="Blog" />
			<Navlink link="/contact" text="Contact" />
		</div>
	</div>
</div>
