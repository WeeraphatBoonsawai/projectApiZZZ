import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function page() {
  return (
    <div className='bg-black'>
      <Navbar/>
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white ">
  <div className="absolute inset-0">
    <img src="./images/waall.png" 
    alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
</div>

<div className="grid place-items-center mt-6">
  <img src="./images/zzz.png" 
  className='h-56'
  alt="My Image" />
</div>

<section className="text-gray-700 body-font overflow-hidden bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" 
          src="./images/bellewise.png" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-6xl font-medium title-font mb-4 text-yellow-500">Zenless Zone Zero</h1>
           
            <p className="leading-relaxed text-white">
            Zenless Zone Zero is a captivating action RPG set in a futuristic 
            metropolis called New Eridu. This vibrant city has been ravaged by a cataclysmic event, 
            transforming it into a labyrinth of crumbling structures and mysterious Hollows. As a Proxy, 
            a specialized combatant, players are tasked with venturing into these Hollows 
            to reclaim resources and protect the city's inhabitants from the lurking dangers.
            </p>
            <h1 className="text-6xl font-medium title-font mb-4 text-white mt-2 text-right">Belle</h1>
            <p className="leading-relaxed text-white text-right">
            Belle is the playable non-combat protagonist of 
            Zenless Zone Zero and is the co-owner of Random Play together with her brother, Wise.
             When the player starts the game, they will choose between Belle and Wise and the other will become an assistant. 
            She and her brother also work together as the Proxy known as "Phaethon".
            </p>

            <h1 className="text-6xl font-medium title-font mb-4 text-white mt-2 text-left">Wise</h1>
            <p className="leading-relaxed text-white text-left">
            Wise is the playable non-combat protagonist of Zenless Zone Zero and is the co-owner of 
            Random Play together with his sister, Belle. When the player starts the game, they will choose 
            between Belle and Wise and the other will 
            become an assistant. He and his sister also work together as the Proxy known as "Phaethon".
            </p>

          </div>
        </div>
      </div>
    </section>

    <section className="text-blueGray-700 bg-black ">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
              <h2 className="mb-8 text-3xl font-semibold tracking-widest text-yellow-500 uppercase title-font">Zenless Zone Zero</h2>
              <h1 className="mb-8 text-2xl font-black tracking-tighter text-yellow-500 md:text-5xl title-font">Overall Theme</h1>
              <p className="mb-8 text-base leading-relaxed text-left text-white">
              Zenless Zone Zero blends elements of urban fantasy, post-apocalyptic fiction,
               and action RPGs to create a unique and immersive experience. The game explores
               themes of survival, hope, and the resilience of the human spirit in the face of adversity.
              </p>
              <p className="mb-8 text-base leading-relaxed text-left text-white">
              In essence, Zenless Zone Zero offers players an exciting journey through a post-cataclysmic metropolis, where they must fight to protect humanity and unravel the mysteries of the Hollows.
              </p>
              <p className="mb-8 text-base leading-relaxed text-left text-white">
              Would you like to know more about specific aspects of the game, such as characters, gameplay mechanics, or the worldbuilding?
                            </p>
          </div>  
          <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
              <img className="object-cover object-center rounded-lg" 
              alt="hero" 
              src="https://media1.tenor.com/m/pxNUNzL71LUAAAAd/zenless-zone-zero.gif" />
          </div>
      </div>
  </section>

  <section className='bg-black'>
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-yellow-500 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Faction
            </p>
            <h1 className="max-w-5xl mx-auto px-6 text-lg text-white font-inter">
            Zenless Zone Zero introduces a rich tapestry of factions, each with its own unique motivations and goals. These factions play a crucial role in shaping the world of New Eridu and influencing the player's journey.
            </h1>

        </div>
    </div>
</section>

<section className="text-gray-400 bg-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/CunningHares.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">The Cunning Hares</h2>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/belobog_heavy_industries.d147df3.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">Belobog Heavy Industries</h2>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/victoria_housekeeping_co.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">Victoria Housekeeping co.</h2>
      </div>

      
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/new_eridu_public_security.f6ed17.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">Criminal Investigation Special Response Team</h2>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/obol_squad.e22b3dd.png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">Obol Squad</h2>
      </div>

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-96 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./images/latest (9).png"/>
        </div>
        <h2 className="text-xl font-medium title-font text-yellow-500 mt-5 text-center">Sons of Calydon
        </h2>
      </div>

    </div>
  </div>
</section>

      <Footer/>
    </div>
  )
}
