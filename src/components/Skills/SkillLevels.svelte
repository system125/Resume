<script lang="ts">
    export let skillLevel:number
    
</script>

  
  <div class="ml-2 w-[100px] h-2 bg-slate-400 relative self-center overflow-hidden">
    <div class="h-[100%] bg-slate-900 absolute top-0 left-0" style={`width: ${skillLevel/5 * 100}%`}></div>

    <!-- <div class="filled-level" style={`width: ${skillLevel/5 * 100}%`}></div> -->
  </div>