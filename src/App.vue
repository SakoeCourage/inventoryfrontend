
<!-- Making main Page -->
<template>
  
  <Layout>
        <router-view class="h-[80%] overflow-scroll " />
  </Layout>


</template>


<script setup>
import { defineComponent, onMounted } from 'vue';
import Layout from "./components/Layout.vue"
defineComponent([Layout])







</script>

<style>
.hidescroll::-webkit-scrollbar {
  display: none;
}

.hidescroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
