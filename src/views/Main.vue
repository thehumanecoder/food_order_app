<template>
<div>
  
<toolbar/>
 <v-container fluid class="param-container">
   <v-layout class="param">
     <v-flex>
        <v-carousel hide-delimiters class="params">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="params-item"
    ></v-carousel-item>
  </v-carousel>
     </v-flex>
   </v-layout>
   
  <v-layout class="options">
    <v-flex xs4 class="option-main">
      <v-flex xs12>
       <v-icon class="om-icon" color="#3949ab">book</v-icon>
       </v-flex>
      <span class="menu-itexts">Book a table</span>
    </v-flex>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#2e7d32">fastfood</v-icon>
       </v-flex>
      <span class="menu-itexts">Order Food</span>
    </v-flex>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#ff1744">receipt</v-icon>
       </v-flex>
      <span class="menu-itexts">Print Bill</span>
          </v-flex>
  </v-layout>
  
  <v-layout>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#2196f3">dashboard</v-icon>
       </v-flex>
      <span class="menu-itexts">Menu</span>
    </v-flex>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#009688">loyalty</v-icon>
       </v-flex> 
      <span class="menu-itexts">Offers</span>
    </v-flex>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#ff9800">call</v-icon>
       </v-flex>
     <span class="menu-itexts">Call Resturant</span>
    </v-flex>
  </v-layout>
  
  <v-layout>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#795548">contact_support</v-icon>
       </v-flex>
      <span class="menu-itexts">Support</span>
    </v-flex>
    <v-flex xs4 class="option-main">
       <v-flex xs12>
       <v-icon class="om-icon" color="#e65100">event</v-icon>
       </v-flex>
      <span class="menu-itexts">Cancel Booking</span>
    </v-flex>
    
  </v-layout>
 </v-container>
</div>
</template>

<script>
import toolbar from './../components/Toolbar.vue';
 export default {
   components:{
     toolbar
   },
   data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');
.param-container{
  padding:0;
}
.params{
  height:300px !important;
  margin:0;
  padding:0;
}
.params-item{
  height:300px !important;
}
.option-main{
  height:100px;
  text-align: center;
  align-content: center;  
  padding:15px;
}
.om-icon{
  font-size:50px;
  align-content: center;
  color:#2e7d32;
  
}
.menu-itexts{
  font-family: 'Rubik', sans-serif;
  font-size:17px;
}
.options{
  margin-top:10px;
}
</style>