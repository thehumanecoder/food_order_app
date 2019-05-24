<template>
    <div>
        <toolbar/>
        <v-container fluid>
           <v-radio-group v-model="category" row>
                <v-radio
                     label="All"
                    value="3"
                    ></v-radio>
                <v-radio
                     label="Veg"
                    value="1"
                    ></v-radio>
                    <v-radio
                     label="Non Veg"
                    value="2"
                    ></v-radio>
                   
                    </v-radio-group>
            <div v-for="item in menu" :key="item.id">
                <div v-if="category==1">
                 <div class="item1" v-if="item.category==1">
          <v-layout row wrap text-xs-center>
               <v-flex xs6 class="mitron">{{item.name}}</v-flex>
               <v-flex xs6 class="mitron">Rs {{item.price}}.00</v-flex>
          </v-layout>
        </div>
                </div>
                <div v-if="category == 2">
         <div class="item2" v-if="item.category==3">
          <v-layout row wrap text-xs-center>
               <v-flex xs6 class="mitron">{{item.name}}</v-flex>
               <v-flex xs6 class="mitron">Rs {{item.price}}.00</v-flex>
          </v-layout>
        </div>
                </div>
                 <div v-if="category == 3">
                     
         <div class="item1" v-if="item.category==1">
          <v-layout row wrap text-xs-center>
               <v-flex xs6 class="mitron">{{item.name}}</v-flex>
               <v-flex xs6 class="mitron">Rs {{item.price}}.00</v-flex>
          </v-layout>
        </div>
         <div class="item2" v-if="item.category==3">
          <v-layout row wrap text-xs-center>
               <v-flex xs6 class="mitron">{{item.name}}</v-flex>
               <v-flex xs6 class="mitron">Rs {{item.price}}.00</v-flex>
          </v-layout>
        </div>
                </div>
           
            </div>
        </v-container>
        </div>
</template>

<script>
import toolbar from './../components/Toolbar.vue';
 export default {
   components:{
     toolbar
   },
   data(){
       return {
           menu:[],
           category:3,
       }
   },
   mounted(){
       axios.get('/api/getmenu',{})
       .then((response)=>{
           this.menu = response.data;
       }).catch((error)=>{
           console.log(error);
       })
   }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Stylish&display=swap');
.item1{
    height:60px;
    width:98%;
     position: relative;
      padding: 1em 1.5em;
     margin: 2em auto;
    color: #fff;
    background: #97C02F;
    overflow: hidden;
    -webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
}
.item1:before{
    content: "";
     position: absolute;
    top: 0;
    right: 0;
    border-width: 0 20px 20px 0;
    border-style: solid;
    border-color: #fff #fff #658E15 #658E15;
    background: #658E15;
    -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0  0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
    box-shadow: 0  0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
  /* Firefox 3.0 damage limitation */
  display: block; 
  width: 0;
}

.item2{
    height:60px;
    width:98%;
    margin:5px;
     position: relative;
      padding: 1em 1.5em;
     margin: 2em auto;
    color: #fff;
    background: #ff6348;
    overflow: hidden;
}
.item2:before{
    content: "";
     position: absolute;
    top: 0;
    right: 0;
    border-width: 0 20px 20px 0;
    border-style: solid;
    border-color: #fff #fff #ff4757 #ff4757;
    background: #ff4757;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
    box-shadow: 0 1px 1px rgba(0,0,0,0.3), -1px 1px 1px rgba(0,0,0,0.2);
  /* Firefox 3.0 damage limitation */
  display: block; 
  width: 0;
}
.mitron{
    font-size:20px;
    font-family: 'Stylish', sans-serif;
}
</style>
