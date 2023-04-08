<template>
    
<div class="relative">

<div class=" flex justify-between border-2 items-center py-3 px-2">

    <SalesFilter/>
<nav>
    
    <Buttonprimary @click="showModal=true"/>
</nav>



</div>
        
    <div class=" w-full">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead class="bg-gray-200">
                        <tr>
                            <th scope="col" class="px-3 py-3 flex items-center  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              <input type="checkbox" name="" id="" class="mr-2" v-model="checkAllItems">
                              Date
                            </th>
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               items
                            </th>
                            <th scope="col" class="px-5 py-3 pl-10  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Customer Name
                            </th>
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                             Status
                            </th>
                            <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              Invoice
                            </th>
                             <th scope="col" class="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                              Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(element,i) in 9 " :key="i">
                            <td class="  py-4 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                  
                                    <div class="ml-3 flex items-center">
                                        <input v-model="checkAllItems" type="checkbox" name="" id="" class="mr-2">
                                        <p class="text-gray-900  whitespace-no-wrap">
                                           20-December-2015
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm relative  ">
                                <p class="text-gray-900 whitespace-no-wrap absolute w-full  top-[20%]">
                                   <SalseItemList :check="checkAllItems" :items="[{name:'shoe', price: '70'}, {name:'book', price: '60'},{name:'iron', price: '90'},{name:'bag', price: '100'}, {name:'boots', price: '60'}]"/>
                                </p>
                            </td>
                            <td class=" px-5 pl-10 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    Ama Kofi
                                </p>
                            </td>
                            <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-700 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span class="relative">
                                       fullfiled
                                    </span>
                                </span>
                            </td>
                             <td class=" px-5 border-b border-gray-200 bg-white text-sm">
                              <span class="relative inline-block px-3 py-1 font-semibold  leading-tight">
                                    
                                       <font-awesome-icon icon="circle" class="text-green-700"/>
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
                        </tr>
                                     </tbody>
                </table>
                
            </div>
        </div>
    </div>
</div>

    <Backdrop class=" flex justify-center items-center" v-show="showModal">
            <Modal @modal-accept="resetAndGetData()" @modal-decline="gotoPreviousMenu()" :accept="Step" :decline="ToCheckout ? 'Back' : 'reset'" full  title="New sale" class="max-h-[80vh] w-full" @close-modal="showModal=false" >
               <div v-show="!ToCheckout">
                <div class=" w-full p-5 h-full max-h-[50%]  "  >
                      <div class="text-gray-500">Items</div>
                <hr class="border-gray-300 mb-2">
                
                <div v-for="(x,i) in currentListIndex" :key="i"  >
                 <MoreItem ref="MoreListItem"  v-if="!remvovedItems.includes(i+1) " 
                  :class="i==currentListIndex && 'lastItem'" 
                  @increaseIndex= "increaseIndex()" 
                  :currentListIndex="currentListIndex" 
                  :index="i+1" 
                  @removeItem="removeItem"
                  @getCurrentItems='getCurrentSaleData'
                  :getAllData= "getAllData"
                  :reset = "reset"
                  
                  />
                  </div>
                 

                </div>

                <div class=" w-full p-5 h-full max-h-[50%]  "  >
                <Salecustomer @getcustomerData="getCurrentCustomerData" :reset="reset"/>
                

                </div>
            </div>
                    <Transition name="slide-fade">
                    <div v-if="ToCheckout">
                        <Currentsalesummary  :currentSaleItems="currentSaleItems" :currentCustomerData ="currentCustomerData" :TotalAmount="TotalOfItems"/>
                    </div>
                    </Transition>

            </Modal>
    </Backdrop>


</div>

</template>

<script setup >
import {defineComponent, ref,onMounted, watch, nextTick, computed} from "vue"
import SalesFilter from "./SalesFilter.vue";
import SalseItemList from "./SaleItemList.vue"
import Modal from "./Modal.vue"
import Backdrop from "./Backdrop.vue"
import MoreItem from "./MoreItem.vue"
import Salecustomer from "./Salecustomer.vue"
import Currentsalesummary from "./Currentsalesummary.vue"
import Buttonprimary from "./Buttonprimary.vue"


defineComponent([SalesFilter,SalseItemList,Modal,Backdrop,MoreItem,Salecustomer,Currentsalesummary,Buttonprimary])
 
let currentListIndex = ref(1)
let checkAllItems = ref(false)
let remvovedItems = ref([ ])
let MoreListItem = ref("")
let showModal = ref(false)
let currentSaleItems = ref([])
let currentCustomerData = ref({})
let getAllData = ref(false)
let TotalOfItems = ref(null)
let Step = ref("proceed")
let ToCheckout = ref(false)
let setAlert = ref(false)
let reset = ref(false)



let resetItems = ()=>{
    currentListIndex.value = 1
    remvovedItems.value = []
    currentSaleItems.value = []
    currentCustomerData.value = {}
    reset.value = !reset.value

    
        
}


function increaseIndex(){

    currentListIndex.value ++

   
}

function resetAndGetData(){
    currentSaleItems.value = []
    getAllData.value=!getAllData.value
  
   
    
}



function removeItem(index){
    remvovedItems.value.push(index)
  
    
}


function CalculateTotalAmount(){
        let items = currentSaleItems.value
        let total = 0 

        items.forEach(item=>{
            total = total + ((item.quantity ?? 1) * item.unit_price)

        })
        return new Intl.NumberFormat({ style: 'currency', currency: 'GHS' }).format(total.toFixed(2)) 

}


function getCurrentSaleData(data){
    if (!data.items_name || !data.unit_price){
      alert("some information are missing")
      return

    }else{
    currentSaleItems.value = [...currentSaleItems.value ,data]
    TotalOfItems.value = CalculateTotalAmount()
    Step.value = "finish"
    ToCheckout.value = true

    }
   
  
 
    

}


function getCurrentCustomerData(Data){
        
        currentCustomerData.value = Data
      
}



let gotoPreviousMenu = ()=>{
    if(!ToCheckout.value){
        resetItems()

    }else{
    ToCheckout.value = false
      Step.value = "proceed"
    }
     
   


}





























</script>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}



.slide-fade-enter-from
{
  transform: translateY(-20px);
  opacity: 0;
}


</style>