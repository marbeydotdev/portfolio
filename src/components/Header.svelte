<script>
import Navlink from "./Navlink.svelte";
import { content } from '$lib/content';
import { userConfig } from '$lib/config.svelte.ts';
import { page } from '$app/state';
let languageSet = $derived(content[userConfig.language])
let isHomePage = $derived(page.url.pathname === "/")
</script>

<div class="sticky backdrop-blur-2xl z-[100] dark:bg-zinc-950/50 top-0 pt-16 mt-6 pb-8 transition-all">
    <div class="flex flex-col sm:flex-row sm:items-center breakpoints !px-8">
        <a href="/">
            <img src="/netisan.svg" alt="netisan" class="dark:invert">
        </a>
        <span class="sm:flex-grow"></span>
        <div class="flex gap-10 ml-auto items-center">
            <select class="hidden bg-transparent text-zinc-950 dark:text-zinc-50 cursor-pointer outline-0" bind:value={userConfig.language}>
                {#each Object.keys(content) as lang}
                    <option value="{lang}">{lang}</option>
                {/each}
            </select>
            <Navlink link="/" text={languageSet.NavAbout} />
            <Navlink link="/services" text={languageSet.NavServices} />
            <Navlink link="/projects" text={languageSet.NavProjects} />
            <Navlink link="/contact" text={languageSet.NavContact} />
        </div>
    </div>
</div>