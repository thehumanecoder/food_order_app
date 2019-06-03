<template>
<div>
 <v-radio-group v-model="category" row>
      <v-radio label="All" value="1" color="indigo" default></v-radio>
      <v-radio label="Veg Only" value="2" color="green"></v-radio>
      <v-radio label="Non Veg Only" value="3" color="red"></v-radio>
    </v-radio-group>
<v-layout row wrap>
    <v-flex xs12 class="mcgee" v-for="n in 2" :key="n" @click="addItem()">
        <v-layout row wrap>
            <v-flex xs5 class="iname">Mutton Kabab Biriyani</v-flex>
            <v-flex xs3 class="iprice">Rs 140.00</v-flex>
            <v-flex xs4 class="iops">
            
             </v-flex>
        </v-layout>
    </v-flex>
</v-layout>       
</div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {name:"Rice"},
                {name:"Dal"},
                {name:"Pudding"},
                {name:"Sabji"},
                {name:"mutton biriyani"},
            ],
            value:'',
            category:1,
        }
    },
    methods:{
        addItem(){
            alert('Item Added');
        }
    }
    ,mounted(){
        // alert('Click on the item to add in the menu & Click on the reduct to remove extra..')
    }
}
</script>

<style>
.mcgee{
    height:30px;
    width:90%;
    margin-bottom:5px;
    font-size:15px;
}
.iname{
    color:teal;
    margin-right:10px;
    font-style: italic;
    font-weight:bold;
}
.iprice{
    color:green;
}
</style>

