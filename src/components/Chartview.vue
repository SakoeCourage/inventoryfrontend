<template>
    <div>
        
             <canvas id="myChart" width="500" height="400"></canvas>

    </div>    
</template>

<script setup >

import { onMounted, reactive } from '@vue/runtime-dom';
import { Chart,registerables } from 'chart.js';


let data  = reactive({
    labels : ['January', 'February', 'March', 'April', 'March ', 'May', 'June','July','August'],
    datasets:[{
      label: 'price',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#075985',
              
            ],
            fill: true,
            borderColor: [
                '#075985',
            
            ],
            tension: 0.1,
            borderWidth: 1,
    }]
})

let setChart = () =>{
  const ctx = document.getElementById('myChart').getContext('2d')
  Chart.register(...registerables);


  
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:data.labels,
        datasets:data.datasets
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});





}


onMounted(()=>{
  
  setChart()

})

</script>