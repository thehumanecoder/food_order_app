<template>
<div>
<toolbar/>
 <v-container fluid>
     <div  v-for="item in data" :key="item.id">
         <div v-if="item.status == 1" class="bestl">
            <p>Your Booking Id : {{item.id}}</p>
            <p>You booked for a <span v-if="item.time == 1">Breakfast</span><span v-if="item.time == 2">Lunch</span><span v-if="item.time == 3">Evening Snacks</span><span v-if="item.time == 4">Dinner</span></p><br>
            <p>Guest prefered date {{item.date}}</p><br>
            <p>Guest strength {{item.strength}}</p><br>
            <p>Guest Table No {{item.table_no}}</p><br>
            <p>Status: <span class="success">Activated</span></p>
             <v-btn block color="green" dark :to="{name:'PlaceOrder',params:{id:item.id}}">Place Order</v-btn>
         </div>
          <div v-if="item.status == 0" class="besty">
            <p>Your Booking Id : {{item.id}}</p>
            <p>You booked for a <span v-if="item.time == 1">Breakfast</span><span v-if="item.time == 2">Lunch</span><span v-if="item.time == 3">Evening Snacks</span><span v-if="item.time == 4">Dinner</span></p><br>
            <p>Guest prefered date {{item.date}}</p><br>
            <p>Guest strength {{item.strength}}</p><br>
            <p>Guest Table No {{item.table_no}}</p><br>
            <p>Status:<span class="danger">Not-activated</span></p>
            <h4>Booking is not activated yet . Kindly Contact the restaurant to activate it .</h4>
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
   return{
     
        id:'',
        data:[]
   }
},
mounted(){
    this.id = localStorage.userid;
    axios.get('/api/guon/'+this.id,{})
    .then((response)=>{
        this.data = response.data;
        }).catch((error)=>{
            console.log(error)
            });
}
}
</script>

<style>
.bestl{
    border:1px solid black;
    padding:10px !important;
    margin:5px;
    border-radius:10px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(89,124,230,1);
-moz-box-shadow: 2px 2px 5px 0px rgba(89,124,230,1);
box-shadow: 2px 2px 5px 0px rgba(89,124,230,1);
}
.besty{
    border:1px solid black;
    padding:10px !important;
    margin:5px;
    border-radius:10px;
}
.success{
    color:green;
}
.danger{
    color:firebrick;
}
</style>
