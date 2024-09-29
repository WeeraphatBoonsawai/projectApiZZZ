import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Servicespage() {
  return (
    <div>
      <Navbar/>
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white ">
  <div className="absolute inset-0">
    <img src="./images/zzzwall.png" 
    alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0"></div>
  </div>
</div>

<div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
    <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Zenless Zone Zero System Requirements</h2>
    </div>

    <div className="flex flex-col md:flex-row">
        
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img className="w-1/2 md:w-full mx-auto" src="./images/bab.png" alt="can_help_banner" />
        </div>
        

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-xl font-bold text-md mb-6">PC System Requirements (Minimum)</h3>
                    <p className="text-sm">                   
CPU: 7th Gen Intel Core i5<br/>
RAM: 8 GB<br/>
VIDEO CARD: Nvidia GeForce GTX 970<br/>
DEDICATED VIDEO RAM: 4096 MB<br/>
PIXEL SHADER: 5.1<br/>
VERTEX SHADER: 5.1<br/>
OS: Windows 10 or later versions
                      </p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-xl font-bold text-md mb-6">PC Recommended Requirements</h3>
                    <p className="text-sm">
                    CPU: 10th Gen Intel Core i7<br/>
RAM: 8 GB<br/>
VIDEO CARD: Nvidia GeForce GTX 1660<br/>
DEDICATED VIDEO RAM: 6144 MB<br/>
PIXEL SHADER: 5.1<br/>
VERTEX SHADER: 5.1<br/>
OS: Windows 10 or later versions<br/>
                       </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-xl font-bold text-md mb-6">Andriod Recommended Requirements</h3>
                    <p className="text-sm">
                    Andriod 11 or more<br/>
                    Snapdragon 8888GB RAMKirin 990/ Dimensity 1200<br/>
                    Snapdragon 8 Gen 18GB RAMKirin 9000/ Dimensity 8200<br/>
                    15 GB
                     </p>
                </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
                <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-xl font-bold text-md mb-6">iOS Recommended Requirements</h3>
                    <p className="text-sm">
                    iOS 14 or more<br/>
                    iPhone XS; iPad A124GB RAM; Mac (Currently Unsupported)<br/>
                    iPhone 11Pro; iPad (A13 chip)4GB RAM; Mac (Currently Unsupported)<br/>
                    17 GB
                      </p>
                </div>
            </div>


        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}
