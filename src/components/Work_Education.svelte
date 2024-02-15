<script lang="ts">
    import type {UniversityInfo} from "$lib";
    import {colleges} from "$lib";
	import Education from "./Education.svelte";
</script>


<div class="w-[100%] px-4">
    <section class="mt-6 flex flex-col gap-4 p-2 border-b-2 border-slate-">
        <section class="flex flex-col">
            <h2 class="text-3xl ml-6">Education</h2>
            <div class="w-[95%] self-center bg-black h-0.5"></div>
        </section>
        <!--Colleges -->

        {#each colleges as college}
            <Education {college}/>
        {/each}
    </section>
</div>

