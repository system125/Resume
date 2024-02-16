<script lang="ts">
	import SkillLevels from './SkillLevels.svelte';
	import type { SkillTree } from "$lib";
    export let skillz:SkillTree
</script>

<section class="flex flex-col p-2 shadow-sm shadow-black rounded-md gap-1">
    <h3 class="text-xl text-center">{skillz.Category}</h3>
    <div class="w-[95%] self-center bg-black h-0.5"></div>
    
    <ul>
    {#each skillz.skills as skill}
       <li>
        <div class="flex flex-row justify-between px-0 content-center">
            <p class="text-sm">{skill.name}</p>
            <SkillLevels skillLevel={skill.level} />
        </div>
    </li> 
    {/each}
</ul>

</section>