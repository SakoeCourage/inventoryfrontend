<template>
    <div>

        <div class="text-gray-500">customer details</div>
                <hr class="border-gray-300 mb-2">

                    <div class="flex items-center">
                        <input  v-model="customerData.customername" type="text" name="" id="" placeholder="customer name" class="inputEl mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                        <input v-model="customerData.customercontact" type="number" min="0" name="" id="" placeholder="contact number" class="inputEl mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">

                    </div>

    </div></template>


<script setup>
    import {reactive, ref, watch, defineEmits, defineProps, computed} from "vue"
    let emit =defineEmits(["getcustomerData"])
    let props =defineProps(["reset"])

    let customerData = ref({

    })
    
   

    watch(()=>customerData.value ,()=>{
    
            emit("getcustomerData",customerData.value)
           
           

    }, {deep:true})



   



watch(()=>props.reset,()=>{

        customerData.value = { }
         

})









</script>