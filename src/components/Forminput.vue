<template>
 
       <nav class="text-sm  mb-2 relative ">
         <label v-text="caption"   @click="getfocus()" :class="['text-gray-500  mb-1 mr-3 absolute  transition-all duration-200 bg-white  max-h-min cursor-text ', transit ? '-top-2 left-2 text-xs text-gray-500/60 bg-opacity-100 ':'inset-y-[25%] left-4 mr-2 opacity-70 ']"> </label> 
       <input v-bind:type="type??'text'" min="1"  @click="transit=true"  ref="inputItem"  @input="$emit(emitablevalue,data)" v-model="data" @focusout="focussed=false" @focus="focussed=true" @focusin="focussed = true" class="inputitem mr-2 p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-500 text-sm placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
 
       </nav>
       
      
        
 
</template>

<script setup>
import {defineProps,ref,watch,defineEmits} from "vue"
let props = defineProps(["name","caption","type","reset"])
let focussed = ref(false)
let transit = ref(false)
let data = ref()
let inputItem = ref()


let emitablevalue = String(props.name)







function getfocus(){
   
    transit.value=true
    inputItem.value.focus()
    
}


function checktransit(){
   
    
    data.value ? transit.value=true : transit.value=false

}

watch(()=>data.value,()=>{
    
    checktransit()
   
    
   
})

watch(()=>props.reset,()=>{

    data.value = ""
})




</script>


<style>

.inputitem{
    overflow: visible;
}



</style>

