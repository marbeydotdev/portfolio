<script>
import Navlink from "./Navlink.svelte";
import { content } from '$lib/content';
import { userConfig } from '$lib/config.svelte.ts';
let languageSet = $derived(content[userConfig.language])
</script>

<div class="sticky backdrop-blur-2xl z-[100] dark:bg-zinc-950/50 top-0 pt-12 pb-8 border-b border-white/10">
    <div class="flex flex-col sm:flex-row sm:items-center breakpoints !px-8">
        <h1 class="text-3xl font-bold mb-8 sm:mb-0">Zavid</h1>
        <span class="sm:flex-grow"></span>
        <div class="flex gap-10 ml-auto items-center">
            <select class="hidden bg-transparent text-zinc-950 dark:text-zinc-50 cursor-pointer outline-0" bind:value={userConfig.language}>
                {#each Object.keys(content) as lang}
                    <option value="{lang}">{lang}</option>
                {/each}
            </select>
            <Navlink link="/" text="Homepagina" />
            <Navlink link="/projects" text="Projecten" />
            <Navlink link="/contact" text="Contact" />
        </div>
    </div>
</div>