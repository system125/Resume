<script lang="ts">
	import type { UniversityInfo } from  "$lib";
    export let college:UniversityInfo
</script>


<section>
    <div class="flex flex-row w-[100%] justify-between content-center">
        <h3 class="text-slate-700 text-xl">
            {college.degree} - {college.field}
        </h3> 
        <span class="text-xs w-[4rem]">{college.startDate}-{college.endDate}</span>
    </div>
    <div class="ml-4 px-1 border-l-2">
        <p class="flex flex-row justify-between span w-[100%] content-center">
            <span>{college.collegeName}</span> 
            <span class="text-xs">Overall CGPA</span>
        </p>
    </div>
</section>