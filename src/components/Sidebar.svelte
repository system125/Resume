<script lang="ts">
	import Hobbies from "./Hobbies.svelte";
	import Skills from "./Skills/Skills.svelte";
    import { Skillz } from "$lib";
    import type {SkillTree} from "$lib";
	import SoftSkills from "./SoftSkills.svelte";

</script>

<div class="flex flex-col gap-3 h-[100%] justify-center">
    {#each Skillz as skill}
        <Skills skillz={skill} />
    {/each}
    <SoftSkills />
    <Hobbies />
</div>