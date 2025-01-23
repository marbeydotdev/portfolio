<script>
import Navlink from "./Navlink.svelte";
import { content } from '$lib/content';
import { user_config } from '$lib/config.svelte.ts';
let languageSet = $derived(content[user_config.language])
</script>

<div class="sticky backdrop-blur-2xl z-[100] dark:bg-zinc-950/50 top-0 pt-12 pb-8">
    <div class="flex flex-col sm:flex-row sm:items-center breakpoints !px-8">
        <h1 class="text-3xl font-bold mb-8 sm:mb-0">Zavid</h1>
        <span class="sm:flex-grow"></span>
        <div class="flex gap-10 ml-auto items-center">
            <select class="bg-transparent text-white cursor-pointer outline-0" bind:value={user_config.language}>
                {#each Object.keys(content) as lang}
                    <option value="{lang}">{lang}</option>
                {/each}
            </select>
            <Navlink link="/" text={languageSet.NavAbout} />
            <Navlink link="/projects" text={languageSet.NavProjects} />
            <Navlink link="/contact" text={languageSet.NavContact} />
        </div>
    </div>
</div>