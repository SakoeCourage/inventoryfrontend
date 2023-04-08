<template>
    <main class="relative text-gray-500 bg-white" >
            <button v-click-away @click="showDrop=!showDrop"  id="simple-drop-down" class=" rounded-md border-2 border-inherit px-3 flex items-center justify-between "><span class=" mr-2">{{ currentlySelectedItem }} </span><font-awesome-icon icon="chevron-down"/> </button>
            <section class="absolute inset-x-0 bg-white px-3 py-1 z-20 " v-if="showDrop">
            <ul > 
            <li  v-for="(item,i) in Data" :key="i"  @click="changeIndex(item)" class="cursor-pointer">
             <nav class=" flex items-center justify-between mb-1"> <span>{{ item }} </span>
            <font-awesome-icon icon="check" class="text-red-200" v-if="item == currentlySelectedItem"/>  
             </nav>  

            </li>
           
            </ul>
            </section>

    </main>

</template>


<script setup>
import  UseClickAway  from "./composables/ClickAway.js"
import {ref, onMounted,defineProps,computed,watch,defineEmits} from "vue"

 let props = defineProps(["Data"])
 let emit = defineEmits(['selectValue'])


let Data = ref(null)  
let currentlySelectedItem = ref("none")
let showDrop = ref(false)


let changeIndex=(caption)=>{
      Data.value.includes(caption) && (currentlySelectedItem.value = caption)
      showDrop.value = false
}


watch(() => Data.value ,()=>{
    currentlySelectedItem.value = Data.value[0]

})

watch(() => currentlySelectedItem.value ,()=>{
    emit('selectValue',currentlySelectedItem.value)

})


let {vClickAway,clickedAway} = UseClickAway()

watch(()=>clickedAway.value ,()=>{
    showDrop.value = false

})






onMounted(()=>{
    Data.value = props.Data
   
})




</script>