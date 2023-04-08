import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'
// import router from "./router"
import { faHome, faCheck, faChevronDown, faTrash, faArrowDown, faClose, faArrowTrendDown, faTag, faFileInvoice, faCircleDot, faCircle, faChevronCircleDown, faGear, faPowerOff, faPlus } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
    faHome, faCheck, faChevronDown, faPlus, faTrash, faArrowTrendDown, faClose, faArrowDown, faTag, faFileInvoice, faCircleDot, faCircle, faChevronCircleDown, faGear, faPowerOff
)


const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')