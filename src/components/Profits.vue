<template>
    
   <div>
     <div class=" text-gray-600">
        <div class="bg-red-50 px-4 py-5">
            <div class=" flex items-center gap-4">
                <nav class="inline mr-2">Selling Stats</nav>
                <Simpledropdown :Data="['2020','2021','2022']" class=" max-w-min  border-red-200 bg-red-50" @selectValue="handeleSelect"/>
                <Simpledropdown :Data="['Monthly','Weekly','Daily']" class=" max-w-min  border-red-200 bg-red-50" @selectValue="handeleSelect"/>
                <Simpledropdown :Data="['Monday','tuesday','Wednesday']" class=" max-w-min  border-red-200 bg-red-50" @selectValue="handeleSelect"/>
                 
            </div>
            

        </div>
       <div class="flex ">
         <Statsdataitem Day="January" AmountYield="205556" class=" my-2 mx-2" />
         <Statsdataitem Day="February" AmountYield="502256"  class=" my-2 mx-2" />
         <Statsdataitem Day="March" AmountYield="600556" class=" my-2 mx-2" />
         <Statsdataitem Day="April" AmountYield="35056" class=" my-2 mx-2" />
       </div>

    </div>

    <div class="flex  mt-4 border-2">
        <Chartview class=""/>
    </div>
   </div>
    
</template>

<script setup>
import Chartview from './Chartview.vue';
import { defineComponent ,ref} from 'vue';
import Simpledropdown from './Simpledropdown.vue';
import Statsdataitem from './Statsdataitem.vue';


defineComponent(["Chatview","Simpledropdown","Statsdataitem"]);

let currentStatsView = ref('Monthly')



function  handeleSelect(value){
  
  
}



</script>