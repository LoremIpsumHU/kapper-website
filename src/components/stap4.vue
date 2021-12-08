<template>
    <div>
        <stappenplan></stappenplan>
        <nextpage></nextpage>
        <back></back>
    </div>
</template>

<script>
import Stappenplan from './stappenplan.vue'
import Nextpage from './nextpage.vue'
import back from './back.vue'

export default {
    components: {
        'stappenplan': Stappenplan,
        'nextpage': Nextpage,
        'back': back,
    },
    data() {
        return{
            
        }
    }
}
</script>

<style>
    
</style>