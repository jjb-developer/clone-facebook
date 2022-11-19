<script>
   const items = 'registrate iniciar_sesión messenger facebook_lite watch lugares juegos marketplace meta_pay oculus portal instagram bulletin recaudaciónes_de_fondos servicios centro_de_información_de_votaciones grupos información crear_anuncio crear_página desarrolladores empleos políticas_de_privacidad centro_de_privacidad cookies opciones_de_anuncios condiciones ayuda subir_contactos_y_no_usuarios'
</script>

<div class='w-full flex flex-col justify-center gap-y-4 px-[5%] bg-zinc-100'>
   <div class='lg:flex lg:items-center lg:py-20'>
      <div class='py-4 lg:py-0 px-2 mx-auto max-w-[420px] min-w-[320px] w-full lg:w-1/2 lg:max-w-[540px]'>
         <figure class='w-3/4 lg:w-4/5 mx-auto lg:mx-0'>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='logo'>
         </figure>
         <h4 class='text-center lg:text-left text-[1.45rem] pb-8 sm:text-[1.6rem] lg:text-[1.7rem] lg:pl-8'>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h4>
      </div>
      <!-- formulario -->
      <div class='lg:w-1/2 lg:flex lg:items-center lg:justify-center'>
         <div>
            <div class='mx-auto max-w-[420px] min-w-[320px] w-full bg-white rounded-lg shadow-xl'>
               <div class='mx-auto py-5 w-[90%]'>
                  <form class='flex flex-col gap-y-2 w-full'>
                     <input class='text-lg rounded-lg h-16 border-slate-300 placeholder-slate-400' type="email" name="username" placeholder="Correo electrónico">
                     <input class='text-lg rounded-lg h-16 border-slate-300 placeholder-slate-400' type="password" name="password" placeholder="Contraseña">
                     <button class='text-[1.4rem] mt-2 rounded-lg h-14 bg-azul capitalize font-semibold text-slate-50' type='submit'>iniciar sesión</button>
                  </form>
                  <div class='py-3 text-center'>
                     <a class='text-azul text-[0.96rem]' href="#recuperar">¿Has olvidado la contraseña?</a>
                  </div>
                  <div class='pt-4 border-t border-slate-300'>
                     <button class='block mx-auto mt-2 px-5 rounded-lg h-14 bg-verde text-lg capitalize font-semibold text-slate-50' type='submit'>crear cuenta nueva</button>
                  </div>
               </div>
            </div>
            <div class='text-[0.96rem] pt-10 pb-16 mx-auto max-w-[420px] text-center text-slate-500 lg:pb-5 lg:pt-4'><strong class='text-slate-700 font-semibold'>Crea una página</strong> para un famoso, una marca o una empresa.</div>
         </div>
      </div>
   </div>
   <div class='bg-white p-10 text-[0.8rem] text-slate-400 capitalize'>
      <ul class='leading-6'>
      {#each items.split(' ') as i}
         <a href='#items' class='hover:text-slate-700 duration-200 inline-block px-1.5'>{ i }</a>
      {/each}
      </ul>
      <span class='pl-1.5 pt-4 block'>Meta &copy 2022</span>
   </div>
</div>
