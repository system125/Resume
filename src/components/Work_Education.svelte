<script lang="ts">
	import Train from './Train.svelte';
    import type {UniversityInfo,WorkInfo} from "$lib";
    import {colleges} from "$lib";
    import {WorkExperienceData,InternExperienceData,TrainingsCompleted} from "$lib"
	import Education from "./Education.svelte";
    import Work from "./Work.svelte"

</script>


<div id="Work-N-Experience" class="w-[100%] h-[100%] px-4 flex flex-col justify-center">
        <!-- Education -->
    <section class="pb-4 flex flex-col gap-4 border-b-2 border-slate-200">
        <section class="flex flex-col">
            <h2 class="text-2xl ml-4 text-slate-400">Education</h2>
            <div class="w-[100%] self-center bg-slate-200 h-0.5"></div>
        </section>
        <!--Colleges -->

        {#each colleges as college}
            <div class="pl-4">
                <Education {college}/>
            </div>
        {/each}
    </section>

        <!-- Work Experience -->
    <section class="pt-2 pb-2 flex flex-col gap-4 border-b-2 border-slate-200">
        <h2 class="text-2xl ml-4 text-slate-400">Work Experience</h2>
        <div class="w-[100%] self-center bg-slate-200 h-0.5"></div>
            {#each WorkExperienceData as workExperience}
                <div class="px-4">
                    <Work workExperienceData={workExperience}/>
                </div>
            {/each}
    </section>

        <!-- Internship Experience -->
    <section class="pt-4 pb-4 flex flex-col gap-4 border-b-2 border-slate-200">
        <h2 class="text-2xl ml-4 text-slate-400">Internship Experience</h2>
        <div class="w-[100%] self-center bg-slate-200 h-0.5"></div>
            {#each InternExperienceData as workExperience}
                <div class="px-4">
                    <Work workExperienceData={workExperience}/>
                </div>
            {/each}
    </section>

    <section class="pt-4 pb-4 flex flex-col gap-4 border-b-2 border-slate-200">
        <h2 class="text-2xl ml-4 text-slate-400">Additional Training</h2>
        <div class="w-[100%] self-center bg-slate-200 h-0.5"></div>
            {#each TrainingsCompleted as Training}
                <div class="px-4">
                    <Train trainingData={Training}/>
                </div>
            {/each}
    </section>

</div>

