<script lang="ts">
	import Hobbies from "./Hobbies.svelte";
	import Skills from "./Skills/Skills.svelte";
    import { Skillz } from "$lib";
    import type {SkillTree} from "$lib";

</script>

<div class="flex-1 flex flex-col">
    {#each Skillz as skill}
        <Skills skillz={skill} />
    {/each}
    <Hobbies />
</div>