<template>
    <div>
<toolbar/>
<v-container >
<v-layout row wrap>
    <v-flex xs6>
        <p>{{this.name}}</p>
    </v-flex>
    <v-flex xs6>
        <p>{{}}</p>
    </v-flex>
    <v-flex xs12>
        <p><b>Ordering :: Item Name</b></p>
    </v-flex>
</v-layout>
<v-layout >
    
</v-layout>
</v-container>
</div>
</template>

<script>
import toolbar from './../components/Toolbar.vue'

export default {
components:{
    toolbar,
},
data(){
    return{
        name:'',
        id:'',
        menu:'',
        category:'',
    }
},
mounted(){

},
methods:{
    
}
}
</script>

<style>

</style>
