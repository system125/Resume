<script lang="ts">
	import type { SkillTree } from "$lib";
    export let skillz:SkillTree
</script>

<section>
    <h3>{skillz.Category}</h3>
    
    <ul>
    {#each skillz.skills as skill}
       <li>
        <div class="flex flex-row justify-around">
            <p>{skill.name}</p>
        </div>
    </li> 
    {/each}
    </ul>

</section>