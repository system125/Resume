<script lang="ts">
    import type {TrainingData} from "$lib"
    export let trainingData:TrainingData 
</script>

<section>
    <div class="flex flex-row w-[100%] justify-between content-center">
        <h3 class="text-slate-700 text-xl">
            {trainingData.trainingTitle}
        </h3> 
        {#if trainingData.company != null}
            <p class="text-xs text-slate-400">{trainingData.company}</p>
        {/if}
    </div>
    <div class="ml-4 px-1 border-l-2">
        <ul class="flex flex-col gap-.5">
            {#each trainingData.acquiredSkills as skillz}
                <li><p class="text-xs flex flex-row"><span class="text-slate-400 mr-4">-</span>{skillz}</p></li>
            {/each}
        </ul>
    </div>
</section>