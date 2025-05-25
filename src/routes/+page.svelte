<script lang="ts">
	import { content } from '$lib/content';
	import { userConfig } from '$lib/config.svelte.ts';
	import {fly} from 'svelte/transition';
	import ProjectTile from '../components/ProjectTile.svelte';
	import NiceFooter from '../components/NiceFooter.svelte';

	let languageSet = $derived(content[userConfig.language])
</script>

<div class="flex flex-col md:flex-row justify-between mb-14 mt-10" in:fly|global={{y: 50}}>
	<div class="md:mb-0 mb-5">
		<span class="block text-xl font-semibold mb-3">ZAVID VAN DEN WORM</span>
		<div class="flex justify-center items-center px-3 py-1 rounded-xl bg-neutral-900 w-max gap-2 relative">
			<span class="absolute w-16 h-16 block bg-orange-500 blur-3xl left-10 -top-10"></span>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M3.99096 14.9233C-1.33032 11.8555 -1.33032 4.14444 3.99096 1.07666C9.31224 -1.99112 16 1.86444 16 8C16 14.1356 9.31227 17.9911 3.99096 14.9233ZM7.85721 9.04166L5.04834 6.23278L4.16446 7.11666L6.08946 9.04166L4.16446 10.9666L5.04834 11.8505L7.85721 9.04166ZM11.9799 8.88888L10.0549 6.96388L11.9799 5.03891L11.096 4.15503L8.28718 6.96388L11.096 9.77278L11.9799 8.88888Z" fill="#FF5219"/>
			</svg>
			<span class="text-orange-500 text-sm font-semibold">Full-stack web development</span>
		</div>
	</div>

	<div class="md:w-60 p-5 rounded-lg border border-white/15">
		<span class="block font-semibold">In het kort.</span>
		<p class="text-sm text-neutral-300">
			Ik ben een nieuwsgierige, gemotiveerde en creatieve ICT-student aan Fontys Hogescholen in Eindhoven.
		</p>
	</div>
</div>

<span class="block mb-8 text-3xl font-semibold text-neutral-100" in:fly|global={{y: 50, delay: 100}}>Projecten waaraan ik heb gewerkt.</span>

<ProjectTile />

<span class="block mb-8 font-mono text-3xl font-semibold text-neutral-100 mt-16" in:fly|global={{y: 50, delay: 100}}>Tech stack</span>

<div class="grid md:grid-cols-2 font-mono gap-y-2" in:fly|global={{y: 50, delay: 100}}>
	<div class="">
		<span class="block p-1 text-lg text-yellow-400">web front-end</span>
		<span class="block p-1">+ nextjs</span>
		<span class="block p-1">+ svelte(kit)</span>
		<div class="block p-1">
			<span class="block">vormgeving</span>
			<span class="block text-neutral-200 text-sm ml-5">+ figma</span>
			<span class="block text-neutral-200 text-sm ml-5">+ tailwindcss</span>
			<span class="block text-neutral-200 text-sm ml-5">+ shadcn</span>
		</div>
	</div>
	<div class="">
		<span class="block p-1 text-lg text-blue-400">web back-end</span>
		<span class="block p-1">+ supabase</span>
		<div class="block p-1">
			<span class="block">+ asp.net</span>
			<span class="block text-neutral-200 text-sm ml-5">+ blazor</span>
			<span class="block text-neutral-200 text-sm ml-5">+ razor</span>
			<span class="block text-neutral-200 text-sm ml-5">+ entity framework</span>
			<span class="block text-neutral-200 text-sm ml-5">+ automapper</span>
		</div>
	</div>
	<div class="">
		<span class="block p-1 text-lg text-emerald-300">software</span>
		<div class="block p-1">
			<span class="block">microsoft office/copilot 365</span>
			<span class="block text-neutral-200 text-sm ml-5">+ word</span>
			<span class="block text-neutral-200 text-sm ml-5">+ powerpoint</span>
			<span class="block text-neutral-200 text-sm ml-5">+ excel</span>
		</div>
	</div>
</div>

<div class="mt-20 w-max mx-auto mb-10 relative z-10" in:fly|global={{y: 50, delay: 100}}>
	<span class="block text-left text-3xl font-semibold z-10 relative">Interesse?</span>
	<span class="block text-left text-3xl font-semibold text-orange-500 z-10 relative">Laat het weten!</span>
	<span class="block w-14 h-14 rotate-6 rounded-xl animate-bounce touch-manipulation bg-orange-500/30 absolute -z-1 -top-5 -left-8"></span>
</div>

<div class="grid grid-cols-2 w-full md:w-[30rem] mx-auto items-center justify-center relative gap-y-2 text-sm" in:fly|global={{y: 50, delay: 100}}>
	<span>LinkedIn</span>
	<a href="https://www.linkedin.com/in/zavidvandenworm/" class="flex gap-2 items-center justify-center px-2 py-1 rounded-xl bg-blue-600 text-center">
		zavidvandenworm
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg>
	</a>
	<span>E-mail</span>
	<div class="flex justify-between items-center align-middle gap-4">
		<a href="mailto:zavidvandenworm2@gmail.com" class="px-2 py-1 w-full rounded-xl bg-green-500 text-neutral-950 text-center">open</a>
		<span>of</span>
		<button onclick={() => navigator.clipboard.writeText("zavidvandenworm2@gmail.com")} class="px-2 py-1 rounded-xl w-full bg-neutral-300 text-neutral-800 text-center">kopieer</button>
	</div>
</div>

<div class="block w-full mt-20 text-xs text-neutral-400 text-center">
	Deze website is ontwikkeld met behulp van tailwindcss en sveltekit, zónder gebruik van AI.
</div>