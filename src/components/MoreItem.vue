<template>
      <div>
          <nav class="item-list-item flex items-center justify-center  bg-gray-200 p-1 rounded-lg">
            <input v-model="current_items.category" type="text" name="" id="" placeholder="category" class="mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
            <input v-model="current_items.items_name" type="text" name="" id="" placeholder="item name" class="mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
            <input  type="number"  min="1" name="" id="" v-model="current_items.quantity" placeholder="quantity"  class=" mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300  py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-1/2">
            <input @input="increaseIndex()" v-model="current_items.unit_price" min="0" type="number" name="price" placeholder="unit price" class="p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
              <nav class="absolute -right-4 " v-if="current_items.unit_price"  @click="$emit('removeItem',index)" ><font-awesome-icon class="  text-red-200 " icon="trash"/></nav> 
         </nav>
         
                <hr class="my-2">
      </div>
</template>

<script setup>
import {defineProps,defineEmits, ref, watch, reactive} from "vue"
let props = defineProps(["index", "currentListIndex","getAllData","reset"])
let emit = defineEmits(['increaseIndex','removeItem','getCurrentItems'])

let current_items = ref({
        // quantity: 1
})



let increaseIndex = () =>{
        props.index == props.currentListIndex && emit("increaseIndex")

}

let getCurrentItems=()=>{

        emit('getCurrentItems',current_items.value)

}

watch(()=>props.getAllData,()=>{

         current_items.value.unit_price && emit('getCurrentItems',current_items.value)   

})

watch(()=>props.reset,()=>{

        current_items.value = {}
         

})



</script>





<style  scoped>

.item-list-item{
    position: relative;

}

.item-list-item::before{
    content:" ";
    position: absolute;
    background-color: #9ca3af6b;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 10px;
    width: 10px;
    z-index: 50;
    inset: 40% auto;
    /* top: 0; */
    left: -13px;
    border-radius: 50%;
}




</style>