<script>
	import Header from "./Header.svelte";
	import Sidebar from "./Sidebar.svelte";
	import WorkEducation from "./Work_Education.svelte";

</script>


    <!-- Resume content here-->
    <div id="mainContent" class="flex flex-col w-[100%] h-[100%]">
        <Header />

        <div class="flex flex-row flex-1">
            <div id="Work_Education" class="flex-1 flex-col w-[100%]">
                <WorkEducation />
            </div>

            <div id="Skillz" class="p-4">
                <Sidebar />
            </div>
    
        </div>
    </div>

