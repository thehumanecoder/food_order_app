<template>
    <div>
<toolbar/>
<v-container >
    <v-layout row wrap v-if="searchclick == false">
    <v-flex xs5>
        Mr Biswas Sampad
    </v-flex>
    <v-flex xs4>
        Table No 21
    </v-flex>
    <v-flex xs3
    @click="showsearch()"
    >
         <v-icon >search</v-icon>
    </v-flex>
</v-layout>
<v-layout v-if="searchclick==true">
    <v-flex xs12 sm6 md3>
          <v-text-field
            label="Solo"
            placeholder="Search Item...."
            solo
          >
           </v-text-field>
          
        </v-flex>
</v-layout>
<v-layout>
    <orderitem/>
</v-layout>
</v-container>
</div>
</template>

<script>
import toolbar from './../components/Toolbar.vue'
import orderitem from './../components/OrderItems'
export default {
components:{
    toolbar,orderitem
},
data(){
    return {
        searchclick:false,
    }
},
methods:{
    showsearch(){
        this.searchclick=true;
    },
    removesearch(){
        this.searchclick=false;
    }
}
}
</script>

<style>

</style>
