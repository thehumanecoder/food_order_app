<template>
        <div>
<toolbar/>
    <v-container>
        <v-layout row wrap v-if="response==false">
            <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          v-if="!image"
          height="200px"
          :src="require('../assets/no-preview.png')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
           <v-img
          class="white--text"
          v-if="image"
          height="200px"
          :src="image"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text" v-if="category==1">Veg</span><span class="grey--text" v-else>Non Veg</span><br>
            <span>Price : {{price}}</span><br>
            <span v-if="description">{{description}}</span>
            <span v-if="!description">Oops Sorry !! No Item description found..</span><br>
            <span>You can add this item for your current order No <b>{{orderno}}</b></span>
          </div>
        </v-card-title>
        <v-card-actions>
            <v-layout row wrap clas="deni">
              <v-flex xs4 class="modak" v-if="orderedAmount">Your current item  :</v-flex>
            <v-flex xs4 class="modak" v-if="!orderedAmount">Add Order Amount</v-flex>
            <v-flex xs3 class="modak " v-if="!orderedAmount">
               <input type="text" class="palu"  v-model="qnty" placeholder="0" @keyup="count()">
            </v-flex>
             <v-flex xs3 class="modak " v-if="orderedAmount" @click="changeOrder()">
               {{orderedAmount}}
            </v-flex>
            <v-flex xs4 class="modak" @click="addItem()" v-if="prema==false">
                <v-btn color="green" dark>Add To &nbsp;<i class="material-icons">
playlist_add_check
</i></v-btn>
                </v-flex>      
                
            <v-flex xs4 class="modak" @click="addItem()" v-if="prema==true">
              <span color="green"> <b> Item Added </b></span>
                </v-flex>      
            </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-layout row wrap >
      <v-flex xs12 class="bravo" v-if="prema==true">
        <v-btn  block color="yellow" :to="{name:'Items',params:{id:orderno}}">View Orders</v-btn>
        <v-btn dark block color="green">Back To Menu</v-btn>
      </v-flex>
</v-layout>
        </v-layout>
    </v-container>
        </div>
</template>

<script>
import toolbar from './../components/Toolbar.vue'
export default {
components:{
    toolbar
},
data(){
    return {
        itemno:'',
        name:'',
        price:'',
        description:'',
        image:'',
        category:'',
        orderno:'',
        qnty:'',
        amount:'',
        response:false,
        prema:false,
        orderedAmount : '',
    }
},
mounted(){
    var currentUrl = window.location.pathname;
    var param = currentUrl.split("/")[2];
    var userId = localStorage.userid;
    axios.get('/api/getitemdet/'+param,{})
    .then((response)=>{
        var pro = response.data[0];
        this.itemno = pro.id,
        this.name= pro.name;
        this.image = pro.image;
        this.price = pro.price;
        this.category = pro.category;
        this.description = pro.description;
    })
    axios.get('/api/getids/'+userId,{})
    .then((response)=>{
        this.orderno= response.data.orderno;
         axios.get('/api/itemstatus/'+this.orderno +'/'+this.itemno,{})
         .then((response)=>{
           this.orderedAmount = response.data.itemqnty;
         }).catch((error)=>{
           console.log(error);
         })
    })

   
},
methods:{
    count(){
        this.amount = parseInt(this.price) * this.qnty;
    },
    addItem(){
        if(this.qnty){
            axios.post('/api/addtoorder/'+this.orderno,{
            orderid :this.orderno,
            itemid:this.itemno,
            itemname:this.name,
            itemqnty:this.qnty,
            amount:this.amount,
        }).then((response)=>{
          console.log(response.data);
            if(response.data == true){
              this.prema = true;
            }
        }).catch((error)=>{
            console.log(error);
        })
    
        }else{
            alert('Enter a quantity to add to item to order');
        }
        },
        changeOrder(){
          this.orderedAmount = false;
        }
}
}
</script>

<style>
.modak{
    margin:3px;
}
.palu{
    height:20px !important;
    padding:0;
    margin-bottom:1px solid black !important;
}
.deni{
    height:20px;
}
.bravo{
  height:100px;
  margin-top:10px;
  border-radius:10px;
  padding:10px;
}
</style>
