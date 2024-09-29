import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
  return (
<section>

<Navbar/>

<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white ">
  <div className="absolute inset-0">
    <img src="./images/wakkk.png" 
    alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
</div>

<iframe width="1519" height="790" src="https://www.youtube.com/embed/EbF_xgOmuB8" title="วิดีโอโปรโมต Outer Ring &quot;บางครั้งก็ต้องออกไปเดินเล่นกันบ้าง&quot; | Zenless Zone Zero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div className="bg-black dark:bg-gray-800  py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-yellow-500 lg:text-3xl dark:text-white">Zenless Zone Zero</h2>

                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                is a free-to-play action RPG developed and published by HoYoverse. It was released for Windows, PlayStation 5, iOS, and Android on July 4th, 2024.
                </p>
            </div>

            

            <Link href="#"
                className="inline-block rounded-lg border bg-yellow-500 dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold
                 text-gray-500 dark:text-gray-600 outline-none ring-gray-600 transition duration-100
                  hover:bg-yellow-600 focus-visible:ring active:bg-gray-600 md:px-8 md:py-3 md:text-xl">
                Read more
            </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            
            <Link href="./PageAbout"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="./images/story.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-yellow-500 md:ml-5 md:text-3xl">Story</span>
            </Link>
            
            <Link href="./PageAgents"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="./images/Agents1.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-yellow-500 md:ml-5 md:text-3xl">Agents</span>
            </Link>
            
            <Link href="./PageBangboos"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="./images/thumb-1920-1370585.png" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-yellow-500 md:ml-5 md:text-3xl">Bangboos</span>
            </Link>
            
            <Link href="./pageServices"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="./images/Agents.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-yellow-500 md:ml-5 md:text-3xl">Services</span>
            </Link>
          
        </div>
    </div>
</div>

<Footer />

</section>
  );
}
