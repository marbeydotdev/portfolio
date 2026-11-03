<script lang="ts">
	import { fly } from 'svelte/transition';
	import ProjectTile from '../components/ProjectTile.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="mt-10 mb-14 flex flex-col justify-between md:flex-row" in:fly|global={{ y: 50 }}>
	<div class="mb-5 md:mb-0">
		<span class="mb-3 block text-xl font-semibold">ZAVID VAN DEN WORM</span>
		<div
			class="relative flex w-max items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-1 dark:bg-neutral-900"
		>
			<span class="absolute -top-10 left-10 hidden h-16 w-16 bg-orange-500 blur-3xl dark:block"
			></span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				class="fill-neutral-950 dark:fill-orange-500"
			>
				<path
					d="M3.99096 14.9233C-1.33032 11.8555 -1.33032 4.14444 3.99096 1.07666C9.31224 -1.99112 16 1.86444 16 8C16 14.1356 9.31227 17.9911 3.99096 14.9233ZM7.85721 9.04166L5.04834 6.23278L4.16446 7.11666L6.08946 9.04166L4.16446 10.9666L5.04834 11.8505L7.85721 9.04166ZM11.9799 8.88888L10.0549 6.96388L11.9799 5.03891L11.096 4.15503L8.28718 6.96388L11.096 9.77278L11.9799 8.88888Z"
				/>
			</svg>
			<span class="text-sm font-semibold dark:text-orange-500">Full-stack web development</span>
		</div>
	</div>

	<div class="rounded-lg border border-black/15 p-5 md:w-60 dark:border-white/15">
		<span class="block font-semibold text-neutral-950 dark:text-neutral-50">In het kort.</span>
		<p class="text-sm text-neutral-700 dark:text-neutral-300">
			Ik ben een nieuwsgierige, gemotiveerde en creatieve ICT-student aan Fontys Hogescholen in
			Eindhoven.
		</p>
	</div>
</div>

<span
	class="mb-8 flex items-center text-2xl font-semibold md:text-3xl dark:text-neutral-100"
	in:fly|global={{ y: 50, delay: 100 }}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="mr-3 aspect-square w-12 min-w-12 md:w-16 md:min-w-16"
		viewBox="0 0 16 16"
		><path
			fill="currentColor"
			d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14l.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"
		/></svg
	>
	Projecten waaraan ik heb gewerkt.
</span>

<ProjectTile projects={data.projects} />

<span
	class="mt-16 mb-8 flex items-center font-mono text-3xl font-semibold dark:text-neutral-100"
	in:fly|global={{ y: 50, delay: 100 }}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="mr-3 aspect-square w-12 min-w-12 md:w-16 md:min-w-16"
		viewBox="0 0 24 24"
		><path
			fill="currentColor"
			d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"
		/></svg
	>
	Tech stack</span
>

<div class="grid gap-y-2 font-mono md:grid-cols-2" in:fly|global={{ y: 50, delay: 100 }}>
	<div class="">
		<span class="block p-1 text-lg text-yellow-600 dark:text-yellow-400">web front-end</span>
		<span class="block p-1">+ nextjs</span>
		<span class="block p-1">+ svelte(kit)</span>
		<div class="block p-1">
			<span class="block">vormgeving</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ figma</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ tailwindcss</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ shadcn</span>
		</div>
	</div>
	<div class="">
		<span class="block p-1 text-lg text-blue-400">web back-end</span>
		<span class="block p-1">+ supabase</span>
		<div class="block p-1">
			<span class="block">+ asp.net</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ blazor</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ razor</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200"
				>+ entity framework</span
			>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ automapper</span>
		</div>
	</div>
	<div class="">
		<span class="block p-1 text-lg text-emerald-300">software</span>
		<div class="block p-1">
			<span class="block">microsoft office/copilot 365</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ word</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ powerpoint</span>
			<span class="ml-5 block text-sm text-neutral-700 dark:text-neutral-200">+ excel</span>
		</div>
	</div>
</div>

<div class="relative z-10 mx-auto mt-20 mb-10 w-max" in:fly|global={{ y: 50, delay: 100 }}>
	<span class="relative z-10 block text-left text-3xl font-semibold">Interesse?</span>
	<span class="relative z-10 block text-left text-3xl font-semibold text-orange-500"
		>Laat het weten!</span
	>
	<span
		class="absolute -top-5 -left-8 -z-1 block h-14 w-14 rotate-6 animate-bounce touch-manipulation rounded-xl bg-orange-500/30"
	></span>
</div>

<div
	class="relative mx-auto grid w-full grid-cols-2 items-center justify-center gap-y-2 text-sm md:w-[30rem]"
	in:fly|global={{ y: 50, delay: 100 }}
>
	<span>LinkedIn</span>
	<a
		href="https://www.linkedin.com/in/zavidvandenworm/"
		class="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-2 py-1 text-center text-zinc-50"
	>
		zavidvandenworm
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
			><path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
			/></svg
		>
	</a>
	<span>E-mail</span>
	<div class="flex items-center justify-between gap-4 align-middle">
		<a
			href="mailto:zavidvandenworm2@gmail.com"
			class="w-full rounded-xl bg-green-500 px-2 py-1 text-center text-neutral-950">open</a
		>
		<span>of</span>
		<button
			onclick={() => navigator.clipboard.writeText('zavidvandenworm2@gmail.com')}
			class="w-full rounded-xl bg-neutral-300 px-2 py-1 text-center text-neutral-800"
			>kopieer</button
		>
	</div>
</div>

<div class="mt-20 block w-full text-center text-xs text-neutral-400">
	Deze website is ontwikkeld met behulp van tailwindcss en sveltekit, zónder gebruik van AI.
</div>
