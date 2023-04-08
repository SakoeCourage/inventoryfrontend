<template>
    <div class="bg-gray-50 relative cursor-pointer pr-2" :class="DropDown && 'bg-gray-100  shadow-md shadow-gray-300  rounded-md z-30'">
        <nav class="absolute top-0 right-1 transform   rounded-full" @click="ToggleList()">
            <font-awesome-icon icon="arrow-down" size="xs" class="transform object-cover transition-all ease-linear duration-150  " :class="DropDown ? '-rotate-180':'-rotate-90 ' "/>
        </nav>
        <ul class="" v-for="(item,i) in props.items" :key="i" >
         <li  v-show="i < currentListIndex" class=" pl-2 my-1" :class="DropDown && 'border-b-2 sale-list-item'" @click="ToggleList()"><div class="flex justify-between pr-2"><nav class="inline">{{ item.name  }}</nav>  <nav class="inline">${{ item.price  }}</nav></div></li>
                                    
     </ul></div>
</template>


<script setup>
import { ref,defineProps,onMounted ,watch} from 'vue';


    let currentListIndex = ref(1)
    let DropDown = ref(false) 
    let props  = defineProps(['items','check'])


let ToggleList = ()=>{
       
        switch (currentListIndex.value) {
            case 1:
                currentListIndex.value = (props.items).length
                DropDown.value = true
                break;

            case (props.items).length:
                currentListIndex.value = 1
                DropDown.value = false
                break;    
        
            default:
                break;
        }

}


// watch(()=>props.check,()=>{
//         console.log(props.check)

// })


</script>


<style scoped>

.sale-list-item{
    position: relative;

}

.sale-list-item::before{
    content:" ";
    position: absolute;
    background-color: #a3e635;
    height: 100%;
    width: 1px;
    z-index: 50;
    top: 0;
    left: 0;
}

</style>