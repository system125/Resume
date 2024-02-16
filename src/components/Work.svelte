<script lang="ts">
    import type {WorkInfo} from "$lib"
    export let workExperienceData:WorkInfo
</script>

<section>
    <div class="flex flex-row w-[100%] justify-between content-center">
        <h3 class="text-slate-700 text-xl">
            {workExperienceData.title}
        </h3> 
        <span class="text-xs w-[4rem]">{workExperienceData.startDate}-{workExperienceData.endDate}</span>
    </div>
    <div class="ml-4 px-1 border-l-2">
        <p class="flex flex-row justify-between span w-[100%] content-center">
            <span>{workExperienceData.companyName}</span> 
        </p>

        <h4 class="text-slate-400 text-sm">Roles:</h4>
        <ul class="flex flex-col gap-.5">
            {#each workExperienceData.workRoles as roles}
                <li><p class="text-xs flex flex-row"><span class="text-slate-400 mr-4">-</span>{roles}</p></li>
            {/each}
        </ul>

    </div>
</section>