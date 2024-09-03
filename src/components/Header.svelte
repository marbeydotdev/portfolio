<script>
import Navlink from "./Navlink.svelte";
import { content } from '$lib/content';
import { user_config } from '$lib/config';
let languageSet = content[user_config.language]
</script>

<div class="flex mb-5 items-center">
    <h1 class="text-5xl font-bold">Zavid</h1>
    <span class="flex-grow"></span>
    <div class="flex gap-10">
        <Navlink link="/" text="{languageSet.NavAbout}" />
        <Navlink link="/projects" text="{languageSet.NavProjects}" />
        <Navlink link="/contact" text="{languageSet.NavContact}" />
    </div>

</div>