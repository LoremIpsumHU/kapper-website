<template>
    <div>
        <stappenplan></stappenplan>
        <personeel></personeel>
        <nextpage></nextpage>
        <back></back>
    </div>
</template>

<script>
import Stappenplan from './stappenplan.vue'
import Nextpage from './nextpage.vue'
import back from './back.vue'
import personeel from './personeel.vue'

export default {
    components: {
        'stappenplan': Stappenplan,
        'nextpage': Nextpage,
        'back': back,
        'personeel': personeel,
    },
    data() {
        return{
            
        }
    }
}
</script>

<style>
    
</style>