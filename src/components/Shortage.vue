<template>
    <div>
           <div class=" w-full">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead class="bg-gray-200">
                        <tr>
                            <th scope="col" class="px-3 py-3 flex items-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        
                            last updated
                            </th>
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               item name
                            </th>
                          
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                             Status
                            </th>
                            
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                             Action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(element,i) in 9 " :key="i">
                            <td class="  py-4 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                  
                                    <div class="ml-3 flex items-center">
                                       
                                        <p class="text-gray-900  whitespace-no-wrap">
                                           20-December-2015
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm relative  ">
                                <p class="text-gray-900 whitespace-no-wrap absolute w-full  top-[20%]">
                                  Bag
                                </p>
                            </td>
                          
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-gray-700 leading-tight min-w-[5rem] text-center">
                                     <span aria-hidden="true" class="absolute inset-0 bg-orange-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="">
                                    {{ generateRandomItemNumber() }} items left
                                  
                                    </span>
                                </span>
                            </td>
                              <td class=" px-5 border-b border-gray-200 bg-white text-sm relative  ">
                                <button @click="showModal=true" class="text-gray-400 rounded-md border-2 px-2 py-1 hover:border-none hover:bg-orange-500/30 hover:text-white">

                                <p class=" whitespace-no-wrap inline   top-[20%]">
                                  Update Stock 
                                </p>
                                <font-awesome-icon icon="arrow-down" class="  transform -rotate-90" />
                                </button>
                            </td>
                          
                        </tr>
                 </tbody>
                </table>
                
            </div>
        </div>
    </div>
</div>
    <Backdrop v-if="showModal">
        <Modal title="update item" accept="done" @modal-accept="getData = !getData" @modal-decline="showModal = false" @close-modal="showModal = false">
         <Addnewstock @get-data="getNewstockData"  :getData="getData"/>
        </Modal>

    </Backdrop>


    </div>
</template>

<script setup>
import { onMounted,defineComponent,ref } from "vue"

import Backdrop from "./Backdrop.vue";
import Modal from "./Modal.vue";
import Addnewstock from "./Addnewstock.vue"
defineComponent(["Modal","Backdrop","Addnewstock"])

let getData = ref(false)
let showModal = ref(false)

let generateRandomItemNumber =()=>{

    return (Math.random() * 15 ).toFixed(0)

}



function getNewstockData(data){
       console.log(data)
}

onMounted(()=>{

})


</script>