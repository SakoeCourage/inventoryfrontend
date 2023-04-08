<template>
    

<div class=" w-full">
    
    <div class="py-8">
         <nav class="w-full  flex justify-end">
            <Buttonprimary class="  bg-red-400 mr-2 mb-1" @clicked="showModal = true"/>

        </nav>

        <hr>
       
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               Item Name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Category 
                                <br>
                                type
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              qty in stock
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               unit price
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              box price
                            </th>
                             <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(element,i) in 9 " :key="i">
                            <td class=" px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="block relative">
                                            <img alt="profil" src="images/profile.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                           Chalk
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    stationery
                                </p>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    5,000
                                </p>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                       $200
                                    </span>
                                </span>
                            </td>
                             <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                       $600
                                    </span>
                                </span>
                            </td>
                             <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0  opacity-50 rounded-full">
                                    </span>
                                     <span class="relative inline-block px-3 py-1 font-semibold text-green-400 leading-tight">
                                  Edit
                                </span>
                                </span>
                            </td>
                        </tr>
                                     </tbody>
                </table>
                
            </div>
        </div>
    </div>
    <Backdrop v-show="showModal" >
        <Modal title="New Item" accept="add" @modal-accept="getData = !getData" @modal-decline="showModal = false" @close-modal="showModal = false">

            <Addnewstock @get-data="getNewstockData"  :getData="getData"/>

        </Modal>

    </Backdrop>
</div>

</template>

<script setup>

import Modal from './Modal.vue';
import Backdrop from './Backdrop.vue';
import { defineComponent,ref } from 'vue';

import Buttonprimary from './Buttonprimary.vue';
import Addnewstock from './Addnewstock.vue';

let getData = ref(false)
let showModal = ref(false)


defineComponent(["Buttonprimary","Modal","Backdrop","Addnewstock"])


function getNewstockData(data){
       console.log(data)
}





</script>