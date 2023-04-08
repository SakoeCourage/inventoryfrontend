<template>
    
<div>
    

    <div class="py-8">
        <nav class="flex justify-end pr-2">
            <Buttonprimary @clicked="showNewsupplierModal=true"/>
        </nav>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
            <div class="inline-block min-w-full shadow rounded-lg ">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Name
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Contact
                            </th>
                          
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Items
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                      Action      </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(x,i) in 8" :key="i">
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                    
                                    <div class="ml-3">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            Jean marc
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    2055665455
                                </p>
                            </td>
                            
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class=" inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <Suppliersitems :products="[' shoe','books','basket']" class=" "/>

                                </span>
                            </td>
                               <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-blue-400 leading-tight">
                                  Edit
                                </span>
                            </td>
                        </tr>
                               </tbody>
                </table>
            </div>
        </div>
    </div>

    <Backdrop  v-show="showNewsupplierModal">
        <Modal accept="Add" title="Add Supplier" @modal-accept="addNewSupplier"  @close-modal ="showNewsupplierModal = false" >
            <div class="p-5">

            <Forminput :reset="reset" caption="Supplier name" name="suppliername" class="mb-4" @suppliername="setSupplierName" />
            <Forminput :reset="reset" caption="Supplier Contact" type="number" name="suppliercontact" @suppliercontact="setSupplierContact"/>
            <hr class="mt-3">
            <div class="text-gray-400 grid grid-cols-3 pt-2">
                <span class="text-sm text-center ">Suppliers items</span>
                <span class="  col-span-2 border-2 px-1 min-h-[8rem]   flex  py-1 gap-2 flex-wrap">
                    <div v-for="(item,i) in getSupplieritems" :key="i" class=" shadow-md min-h-min leading-tight flex items-center bg-blue-50 text-gray-400 p-1 px-3 rounded-md h-min text-sm relative">{{ item }}
                        <font-awesome-icon @click="removeSupplieritem(i)" icon="close" class=" pl-1 cursor-pointer text-red-200 p-1  ml-1 hover:text-red-300" size="sm"/>
                    </div>

                        <div v-if="getSupplieritems.length == 0" class="  text-xs opacity-50 w-full h-full flex items-center justify-center">Enter Item name and Add to List</div>

                </span>
                <span></span>
                <span class="col-span-2">
                    <div>
                        <input @keypress.enter="addSupplieritem" v-model="currentSupplierItem" type="text" class=" border-2 w-full mt-1 p-1 text-sm placeholder:opacity-50 " placeholder="item name"></div>
                    <Buttonsecondary text="Add to List" class="mt-1" @clicked="addSupplieritem"/>
                </span>

            </div>
            </div>

        </Modal>

    </Backdrop>




</div>

</template>

<script setup>
import Suppliersitems from './Suppliersitems.vue';

 import { defineComponent, onMounted, reactive, ref} from 'vue';
import Buttonprimary from './Buttonprimary.vue';
import Backdrop from './Backdrop.vue';
import Forminput from './Forminput.vue';
import Modal from './Modal.vue';
import Buttonsecondary from './Buttonsecondary.vue';
 
 
defineComponent(["Suppliersitems","Buttonprimary","Backdrop","Modal","Forminput","Buttonsecondary"])



let getSupplieritems = ref([])
let supplierName = ref(null)
let supplierContact = ref(null)
let currentSupplierItem = ref()
let showNewsupplierModal = ref(false)
let reset = ref(false)


let resestData = ()=>{

     getSupplieritems.value = []
     reset.value = !reset.value

}


let setSupplierName=(data)=>{
     
        supplierName.value = data
}
let setSupplierContact=(data)=>{
        supplierContact.value = data
}

let addSupplieritem = () =>{
    if(currentSupplierItem.value){
        getSupplieritems.value.push(currentSupplierItem.value)  
        currentSupplierItem.value = ""  

    }
     

}

let removeSupplieritem =(index)=>{
    let newItems =  getSupplieritems.value.filter((item,i)=>{
        return i !=index


    })
    getSupplieritems.value = newItems


}


// to send all items to api

let addNewSupplier = ()=>{
    if(!supplierContact.value || !supplierName.value){
        alert("some items are missing")
    }else{
    let newSupplierData = {
    supplierName: supplierName.value,
    supplierContact: supplierContact.value,
    supplierItemm:getSupplieritems.value
    


}

        console.log(newSupplierData)
       
        resestData()
        showNewsupplierModal.value = false
         alert("done")


    }

} 








</script>