<template>
    <div>
        <toolbar/>
        <v-container fluid>
            <p>Booking Id : {{this.bookingid}}</p>
            <p><b>Guest Name:{{this.name | capitalize}}</b></p>
            <p>Guest booked for a <span v-if="this.time == 1">Breakfast</span><span v-if="this.time == 2">Lunch</span><span v-if="this.time == 3">Evening Snacks</span><span v-if="this.time == 4">Dinner</span></p><br>
            <p>Guest prefered date {{this.date}}</p><br>
            <p>Guest strength {{this.strength}}</p><br>
            <p>Guest Table No {{this.table}}</p><br>
            <p v-if="orderno">The generated Order No is : {{this.orderno}}</p>
<v-flex xs12 v-if="response==false">
   <v-btn block color="primary" dark @click="confirm()">Confirm Guest</v-btn>
</v-flex>
<v-flex xs12 v-if="response==true">
   <v-btn block color="#ffa000" >Booking Confirmed</v-btn>
   <v-btn block color="yellow" :to="{name:'TakeOrder',params:{id:this.orderno}}">Make Order</v-btn>
</v-flex>
</v-container></div>
</template>

<script>
import toolbar from './../components/Toolbar.vue';  
export default {
components:{
    toolbar
},
data(){
    return{
        data:[],
        param:'',
        time:'',
        date:'',
        strength:'',
        table:'',
        name:'',
        bookingid:'',
        response:false,
        orderno:'',
        customer_id:'',
    }
},
mounted(){
    var currentUrl = window.location.pathname;
    this.param = currentUrl.split("/")[2];
     this.customer_id = localStorage.userid;
    axios.get('/api/getorder/'+this.param,{})
    .then((response)=>{
        this.data = response.data[0];
        this.time = response.data[0].time;
        this.date= this.data.date;
        this.strength = this.data.strength;
        this.table = this.data.table_no;
        this.bookingid = this.data.id;
        this.name = this.data.customer_name;
       
    }).catch((error)=>{
        console.log(error);
    })
}
, filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
  }
  },
  methods:{
      confirm(){
         axios.post('/api/createtoken',{
             name:this.name,
             bookingno:this.bookingid,
             tableno:this.table,
             members:this.strength,
             status:1,
             customer_id:this.customer_id,
         }).then((response)=>{
             if(response.data == 200){
                 this.response = true;
                 axios.get('/api/getorderno/'+this.bookingid,{})
                 .then((response)=>{
                    this.orderno = response.data.orderno;
                 }).catch((error)=>{
                     console.log(error);
                 });
             }
         }).catch((error)=>{
             console.log(error);
         })
         axios.get('/api/updatestat/'+this.bookingid,{})
         .then((response)=>{
             console.log(response.data);
         }).catch((error)=>{
             console.log(error);
         })
      }
  }
}
</script>

<style>

</style>
