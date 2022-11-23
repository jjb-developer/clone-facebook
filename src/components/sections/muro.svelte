<script>
   import Post from './post.svelte'
   const posts = [
   {
      id:1,
      postId:1,
      portable: 'https://randomuser.me/api/portraits/men/24.jpg',
      user:'Lionel Messi',
      comentary:'Estamos muy emocionados por el equipo que tenemos y esperamos ganar este mundial 2022. Arriba Argentina!.',
      imagen:'https://img.freepik.com/fotos-premium/cascada-haew-narok-abismo-infierno-parque-nacional-kao-yai-tailandia_109643-40.jpg?w=300',
      day:'23 Dic.',
   },
   {
      id:2,
      postId:2,
      portable: 'https://randomuser.me/api/portraits/women/17.jpg',
      user:'Kyliam Mbappe',
      comentary:'Estamos muy emocionados por el equipo que tenemos y esperamos ganar este mundial 2022. Arriba Argentina!.',
      imagen:'https://img.freepik.com/fotos-premium/amanecer-norte-chiang-rai-tailandia_130181-71.jpg?w=300',
      day:'23 Dic.',
   },
   {
      id:3,
      postId:3,
      portable: 'https://randomuser.me/api/portraits/men/15.jpg',
      user:'Cristiano Ronaldo',
      comentary:'Estamos muy emocionados por el equipo que tenemos y esperamos ganar este mundial 2022. Arriba Argentina!.',
      imagen:'https://img.freepik.com/fotos-premium/silueta-joven-practicando-meditacion-yoga-playa-al-atardecer_130181-1204.jpg?w=300',
      day:'23 Dic.',
   },
   ]
</script>
<section class='flex flex-col gap-y-2'>
   <!-- component writePost -->
   <!-- <section class='hidden w-[30%]'>options</section> -->
   <div class='w-full bg-slate-50 py-2'>
      <div class='w-[90%] h-16 mx-auto flex justify-between items-start gap-x-4'>
         <figure><img class='rounded-full w-12 h-12' src="https://randomuser.me/api/portraits/men/86.jpg" alt='portable'></figure>
         <textarea style='resize:none;' placeholder="Comentar algo ..." class='flex-1'></textarea>
         <!-- <input type="text" class='h-12 rounded-3xl border-gray-400' name="comentario"> -->
      </div>
   </div>
   {#each posts as post}
   <Post post={post}/>
   {/each}

</section>