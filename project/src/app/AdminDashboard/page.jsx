import React from 'react'
import Adminnavbar from '../components/navbaradmin'
import { Gendershow } from '../components/gender'
import { Rankshow } from '../components/rankchart'
import { Bangboosshow } from '../components/bangbooschart'

export default function page() {
  return (
    <div>
      <Adminnavbar 
      content=
      <div>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">

        <div class="bg-white rounded m-2 lg:col-span-1 shadow-md">
        <h2 class="text-xl p-2">Gender Chart</h2>
<Gendershow />
        </div>

        <div class="bg-white rounded m-2 lg:col-span-1 shadow-md ">
    <h2 class="text-xl p-2">Rank Chart</h2>
    <Rankshow/>
</div>

<div class="bg-white rounded m-2 lg:col-span-1 shadow-md">
    <h2 class="text-xl p-2">Bangboo Chart</h2>
    
    <Bangboosshow />
</div>

      </div>
      </div>
      />
    </div>
  )
}
