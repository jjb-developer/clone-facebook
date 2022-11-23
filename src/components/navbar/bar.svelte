<script>
   const sections = ['bxs-home','bxs-group','bxl-messenger','bxs-bell','bxs-store']
   const menu = ['bxs-grid','bxl-messenger','bx-notification','bx-user']
   let active = 0

   let data = []
   async function conexionApi(url){
      const response = await fetch(url)
      data = await response.json()
   }
</script>
<!--bar navegación -->
<div>
   <div class='mx-auto flex items-center justify-between'>
      <figure><img class='h-14' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt='logo'></figure>
      <div class='flex gap-x-1 pr-4 text-2xl'>
         <button class='cursor-pointer outline-none w-9 h-9 rounded-full bg-slate-100 flex-center'>
            <i class='bx bx-search'></i>
         </button>
         <button class='cursor-pointer outline-none w-9 h-9 rounded-full bg-slate-100 flex-center'>
            <i class='bx bx-menu'></i>
         </button>
      </div>
   </div>
   <nav class='h-16 flex items-center justify-between shadow border-b'>
      <div class='hidden relative flex-center w-72'>
         <i class='cursor-pointer bx bxl-facebook-circle text-azul text-[2.6rem] bg-white rounded-full w-8 h-8 flex-center mx-4'></i>
         <input type="text" name="search" class='bg-slate-800 rounded-full outline-none border-0 placeholder-slate-500 px-5 w-56 text-slate-300' placeholder="search">
         <i class='absolute text-2xl text-slate-600 bx bx-search right-4 cursor-pointer'></i>
      </div>
      <div class='flex text-slate-300 text-[1.65rem] w-full'>
      {#each sections as e,i}
         <button on:click={ ()=> active = i } class='w-1/5 h-16 cursor-pointer outline-none border-azul duration-200 flex-center'><i class="bx {e} {active == i ? 'text-azul':''}"></i></button>
      {/each}
      </div>
      <div class='hidden flex w-72 justify-end pr-4'>
      {#each menu as e}
         <button class='cursor-pointer outline-none text-slate-300 text-xl bg-slate-800 rounded-full w-10 h-10 flex-center mx-2 hover:bg-azul'><i class='bx { e }'></i></button>
      {/each}
      </div>
   </nav>
</div>