import { onMounted, onUnmounted, ref, nextTick } from "vue"


export default function UseClickAway() {
    let node;
    let randIds;
    let clickedAway = ref(false)
    let clickEvent = (e) => {
        let element = document.getElementById(randIds)
        e.target != element && (clickedAway.value = !clickedAway.value)


    }



    let GenerateRandomIds = () => {
        return (Math.random() * new Date().getTime()).toFixed(0)

    }




    const vClickAway = {
        mounted: (el, binding, vnode) => {
            node = el
            randIds = GenerateRandomIds()
            node.id = String(randIds)


            document.addEventListener('click', (e) => { clickEvent(e) }, true)
        },
        unmounted: () => {
            document.removeEventListener('click', (e) => { clickEvent(e) }, true)

        }
    }


    return ({ vClickAway, clickedAway })
}