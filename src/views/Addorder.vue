<template>
    <div>
<toolbar/>
<v-container fluid>
    <v-layout row wrap v-if="searchclick == false">
    <v-flex xs5>
       {{this.name}}
    </v-flex>
    <v-flex xs4>
        {{this.table}}
    </v-flex>
</v-layout>
<v-layout row wrap>
    <v-radio-group v-model="category" row>
      <v-radio label="Veg Only" value="1" color="indigo" default></v-radio>
      <v-radio label="Non Veg Only" value="2" color="green"></v-radio>
      <v-radio label="All" value="3" color="red"></v-radio>
    </v-radio-group>
</v-layout>

    <div v-for="item in menu" :key="item.id">
                <div v-if="category==1">
                 <div class="item1" v-if="item.category==1">
          <v-layout row wrap text-xs-center>
               <v-flex xs4 class="mitron">{{item.name}}</v-flex>
               <v-flex xs4 class="mitron">Rs {{item.price}}.00</v-flex>
               <v-flex xs2>
                    <v-btn   :to="{name:'Item',params:{id:item.id}}" class="baba">View</v-btn>
               </v-flex>
          </v-layout>
        </div>
                </div>
                <div v-if="category == 2">
         <div class="item2" v-if="item.category==3">
           <v-layout row wrap text-xs-center>
               <v-flex xs4 class="mitron">{{item.name}}</v-flex>
               <v-flex xs4 class="mitron">Rs {{item.price}}.00</v-flex>
               <v-flex xs2>
                    <v-btn   :to="{name:'Item',params:{id:item.id}}" class="baba">View</v-btn>
               </v-flex>
          </v-layout>
        </div>
                </div>
                 <div v-if="category == 3">
                     
         <div class="item1" v-if="item.category==1">
          <v-layout row wrap text-xs-center>
               <v-flex xs4 class="mitron">{{item.name}}</v-flex>
               <v-flex xs4 class="mitron">Rs {{item.price}}.00</v-flex>
               <v-flex xs2>
                    <v-btn   :to="{name:'Item',params:{id:item.id}}" class="baba">View</v-btn>
               </v-flex>
          </v-layout>
        </div>
         <div class="item2" v-if="item.category==3">
          <v-layout row wrap text-xs-center>
               <v-flex xs4 class="mitron">{{item.name}}</v-flex>
               <v-flex xs4 class="mitron">Rs {{item.price}}.00</v-flex>
               <v-flex xs2>
                    <v-btn   :to="{name:'Item',params:{id:item.id}}" class="baba">View</v-btn>
               </v-flex>
          </v-layout>
        </div>
                </div>
           
            </div>

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
        name:'',
        id:'',
        table:'',
        value:'',
        category:3,
        count:0,
        menu:[],
        orderno:'',
        amount:'',
        Item:'/item',
         
      
    }
},
methods:{
    showsearch(){
        this.searchclick=true;
    },
    removesearch(){
        this.searchclick=false;
    },
    addItem($id){
        this.amount = this.price + this.price;
        //  axios.post('/api/additem/'+this.order,{

        //  })
    },
    subItem(){
        if(this.count >0){
           this.count - 1 ;
        }
    }
},
mounted(){
    var currentUrl = window.location.pathname;
    var param = currentUrl.split("/")[2];
    this.name =  localStorage.user;
    this.id = localStorage.userid;
    axios.get('/api/tableofuser/'+this.id,{})
    .then((response)=>{
        this.table = response.data.table_no
    })

    axios.get('/api/getmenu',{})
    .then((response)=>{
        this.menu=response.data;
    })

    
}
}
</script>

<style>
.mcgee{
    width:90%;
    margin-bottom:100px;
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
    margin-right:10px;
}
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
        -webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
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
.baba{
        border:none;
        background:transparent !important;
        font-size:20px;
        margin-top:-5px;
        box-shadow: none !important;
        color:white !important;
         text-transform: capitalize !important;
}
</style>
