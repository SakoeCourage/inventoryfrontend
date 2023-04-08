<template>
    <div class=" p-5 ">
     
     <Forminput class="my-5" caption="item name" name="itemname"  @itemname=setItemnamevalue />
     <Forminput class="my-5" caption="category type" name="categoryname"  @categoryname=setCategoryvalue />
     <Forminput class="my-5" type="number" caption="quantity" name="quantity"  @quantity=setQuantityvalue />
     <Forminput class="my-5" type="number" caption="unit price" name="unitprice"  @unitprice=setUnitpricevalue />
     <Forminput class="my-5" type="number" caption="box price" name="boxprice"  @boxprice=setBoxpricevalue />
      
        
    </div>
</template>

<script setup>
import Forminput from "./Forminput.vue"
import {ref,defineProps, watch,defineEmits} from "vue"

let newItemData =ref({
    Itemname: '',
    Category: '',
    Quantity: '',
    Unitprice: '',
    Boxprice: ''

})
let props = defineProps(["getData"])
const emit = defineEmits(["get-data"])



function setItemnamevalue(value){
     newItemData.value.Itemname=value
     


}
function setCategoryvalue(value){
     newItemData.value.Category=value
    


}
function setQuantityvalue(value){
     newItemData.value.Quantity=value
    


}
function setUnitpricevalue(value){
     newItemData.value.Unitprice=value
    


}
function setBoxpricevalue(value){
     newItemData.value.Boxprice=value
     


}


watch(()=>props.getData,()=>{
     
    let values = Object.values(newItemData.value)
    if(values.some((x)=> x =="")){
        alert("some items are missing")
    }else{

        emit("get-data",newItemData.value)
    }
    

    

    


})







</script>


<style>

.inputitem{
    overflow: visible;
}




</style>

