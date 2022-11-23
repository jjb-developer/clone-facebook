<script>
   export let post;
</script>
<!-- component posts -->
<div class='bg-slate-50 text-[0.9rem] pt-2'>
   <div class='w-[90%] mx-auto'>
      <div class='py-2 flex items-start justify-between'>
         <div class='flex items-center'>
            <figure><img class='rounded-full w-12 h-12' src={ post.portable } alt='portable'></figure>
            <div class='pl-3'>
               <h1 class='text-lg font-semibold capitalize leading-none'>{ post.user }</h1>
               <small class='text-xs font-medium text-slate-500'>{ post.day }</small>
            </div>
         </div>
         <button class='h-2 outline-none flex-center'><i class='text-2xl bx bx-dots-horizontal-rounded'></i></button>
      </div>
      {#if post.comentary}
      <div class='pb-2 leading-snug'>
         <p>{ post.comentary }</p>
      </div>
      {/if}
      {#if post.imagen}
      <figure>
         <img class='w-full' src={ post.imagen } alt='imagen post'>
      </figure>
      {/if}
      <!-- <div class='py-2 text-xl flex items-center'>
         <i class='bx bxs-like text-azul'></i>
         <i class='bx bxs-heart text-red-600'></i>
         <span class='pl-2 font-medium text-[0.97rem]'>257</span>
      </div> -->
      <div class='py-2 text-sm flex justify-around gap-x-2 font-medium'>
         <button class='flex outline-none gap-x-1 items-center group'><i class='group-hover:text-azul text-lg bx bx-like'></i><span>17</span></button>
         <button class='flex outline-none gap-x-1 items-center group'><i class='group-hover:text-azul text-lg bx bx-message-square-detail'></i><span>11</span></button>
         <button class='flex outline-none gap-x-1 items-center group'><i class='group-hover:text-azul text-lg bx bx-network-chart'></i><span>5</span></button>
      </div>
   </div>
</div>