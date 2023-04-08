<template>


  
<div class="bg-white  shadow overflow-hidden sm:rounded-lg">
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ currentCustomerData.customername ?? "Not recorded" }}
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                   Contact
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {{ currentCustomerData.customercontact ?? "Not recorded" }}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                   items
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <nav class="grid grid-cols-2">
                        <nav class="text-gray-500">name </nav>
                        <nav class="text-gray-500 mb-3">Amount to</nav>
              
                        
                        </nav>
                        <nav class="grid grid-cols-2" v-for="(item,i) in currentSaleItems" :key="i">
                        <nav class="text-gray-900" >{{ item.items_name }} </nav>    
                        <nav class="text-gray-900" >${{ new Intl.NumberFormat().format((item.unit_price * (item.quantity ?? 1) ).toFixed(2))}} </nav>    
                        </nav>

                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Total Amount
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${{ TotalAmount }}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Actions
                </dt>
                <dd class="mt-1 text-sm grid grid-cols-2 text-gray-900 sm:mt-0 sm:col-span-2">
                   <nav class="flex items-center justify-start gap-1"> <input type="checkbox" name="" id=""> <span>fufilled</span></nav>
                   <nav class="flex items-center justify-start gap-1"> <input type="checkbox" name="" id=""> <span>print receipt</span></nav>
                </dd>
            </div>
            
        </dl>
    </div>
</div>




</template>


<script setup>

    import { defineProps, onMounted } from 'vue'; "vue"

    let props = defineProps(["currentSaleItems","currentCustomerData","TotalAmount"])


onMounted(()=>{

    // console.log(props.currentCustomerData)
})


</script>


<style scoped>

</style>