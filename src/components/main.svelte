<script>
   const optionsMuro = ['bx-home','bx-user-plus','bx-video-recording','bx-store','bx-group']
   const menu = ['bxs-grid','bxl-messenger','bx-notification','bx-user']
   let active = 0

   let data = []
   async function conexionApi(){
      const response = await fetch('https://backend-jb-facebook-production.up.railway.app/')
      data = await response.json()
   }
   conexionApi()
</script>
<div>
   <!--bar navegación -->
   <nav class='h-16 flex items-center justify-between bg-slate-900'>
      <div class='relative flex-center w-72'>
         <i class='cursor-pointer bx bxl-facebook-circle text-azul text-[2.9rem] bg-white rounded-full w-9 h-9 flex-center mx-4'></i>
         <input type="text" name="search" class='bg-slate-800 rounded-full outline-none border-0 placeholder-slate-500 px-5 w-56 text-slate-300' placeholder="search">
         <i class='absolute text-2xl text-slate-600 bx bx-search right-4 cursor-pointer'></i>
      </div>
      <div>
         <ul class='flex text-slate-400 text-3xl'>
         {#each optionsMuro as e,i}
            <i on:click={ ()=> active = i } class="hover:text-azul w-28 h-16 flex-center bx cursor-pointer border-azul duration-200 {e} { active == i ? 'border-b-4 border-azul':'' }"></i>
         {/each}
         </ul>
      </div>
      <div class='flex w-72 justify-end pr-4'>
      {#each menu as e}
         <i class='cursor-pointer text-slate-300 text-xl bg-slate-800 rounded-full w-10 h-10 flex-center mx-2 hover:bg-azul bx { e }'></i>
      {/each}
      </div>
   </nav>
   <div class='flex'>
      <section class='w-[30%]'>amigos</section>
      <section class='w-[40%] h-screen'>
         <div class='w-[90%] h-[90%] bg-slate-100 mx-auto my-5 rounded-xl flex-center'>
         {#if data.rows}
            <div class='flex gap-x-4'>
            {#each data.rows as d}
            <span>{ d.title }</span>
            <span>{ d.author }</span>
            {/each}
            </div>
         {/if}
         </div>
      </section>
      <section class='w-[30%]'>publicidad</section>
   </div>
</div>
<style>
</style>
