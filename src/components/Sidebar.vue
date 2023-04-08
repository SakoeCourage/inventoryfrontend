<template>
  <div  class="sidebar bg-primaryBlue text-gray-200 min-w-max  p-5 pt-16 sticky ">
    <ul class="">
      <li class="mt-3"><Sidebaritem caption="Dashboard" name="Dashboard"  icon="home"  /></li>
      <li class="mt-3"><Sidebaritem :showdrop="true" caption="Stock Management" name="StockManagement" icon="arrow-trend-down" :subcontents="[{caption:'In Stock',route:'stock'},{caption:'Sold',route:'sold'},{caption:'Suppliers',route:'suppliers'}]"  /></li>
      <li class="mt-3"><Sidebaritem :showdrop="true" caption="Sales Management" name="SalesManagement"  icon="tag"  
      :subcontents="[{caption:'Profits', route:'Profits'},{caption:'Shortage', route:'Shortage'}]"/>
      </li>

      <li class="mt-3">
        <Sidebaritem :showdrop="true" caption="Accounting" name="Accounting" 
         icon="file-invoice" :subcontents="[{caption: 'Cash Book',route: 'Cashbook'},{caption: 'Income Statement',route: 'incomestatement'},{caption: 'Cash Report',route: 'cashreport'},{caption: 'petty cash',route: 'pettycash'}]"  />
      </li>
      
    </ul>
  </div>
</template>


<script setup>
import { defineComponent, watch, defineEmits } from "@vue/runtime-dom";
import { onMounted, ref } from "vue";
import Sidebaritem from "./Sidebaritem.vue";


defineComponent([Sidebaritem]);

</script>

<style  >

.sidebar:hover ul li div nav nav.content{
 display: inline;
}

.sidebar{
  transition: width 2s linear;
}

</style>