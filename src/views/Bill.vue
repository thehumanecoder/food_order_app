<template>
    <div>
        <toolbar/>
        <v-container>
            <v-container fluid class="bill" v-if="total">
                <h2>Chancellor Grand</h2>
            <v-layout row wrap >
                <v-flex xs12>
                    <span>Your Order No :{{orderid}}</span><br>
                    <span>Your Table No :{{tableno}}</span>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="timru">
                <v-flex xs5 class="simba"><b>Item</b></v-flex>
                <v-flex xs2 class="simba"><b>Quantity</b></v-flex>
                <v-flex xs2 class="simba"><b>Amount</b></v-flex>
            </v-layout>
            <v-layout row wrap class="timrul" v-for="item in items" :key="item.id">
                <v-flex xs5 class="simba">{{item.itemname}}</v-flex>
                <v-flex xs2 class="simba">{{item.itemqnty}}</v-flex>
                <v-flex xs2 class="simba">{{item.amount}}</v-flex>
            </v-layout>
            <hr>
            <v-layout row wrap>
                <v-flex xs8>
                    Total
                    </v-flex>
                    <v-flex xs4>
                    {{sum}}
                    </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs4>
                   CGST
                    </v-flex>
                    <v-flex xs4>
                   2.5%
                    </v-flex>
                    
                    <v-flex xs4>
                    {{cgst}}
                    </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs4>
                   SGST
                    </v-flex>
                    <v-flex xs4>
                   2.5%
                    </v-flex>
                    
                    <v-flex xs4>
                    {{sgst}}
                    </v-flex>
            </v-layout>
            <hr>
             <v-layout row wrap>
                <v-flex xs8>
                    <b>Grand Total</b>
                    </v-flex>
                    <v-flex xs4>
                    <b>{{total}}</b>
                    </v-flex>
            </v-layout>
            
            <v-layout row wrap class="timru">
                <v-flex xs12>
                    <v-btn dark color="green" block Q@click="confirmPayment()">Submit</v-btn>
                </v-flex>
                </v-layout>
        </v-container>
        </v-container>
    </div>
</template>

<script>
import toolbar from './../components/Toolbar'
export default {
components:{
    toolbar
},data(){
    return {
        items:[],
        username:'',
        orderid:'',
        tableno:'',
        userid:'',
        amount:'',
        pricelist:[]
    }
},
mounted(){
  var currentUrl = window.location.pathname;
    var param = currentUrl.split("/")[2];
    var userid = localStorage.userid;

    axios.get('/api/getOrderItems/'+param,{})
    .then((response)=>{
        this.items = response.data;
       this.amount = this.items.length;
    }).catch((error)=>{
        console.log(error);
    })
    axios.get('/api/tableNo/'+param,{})
    .then((response)=>{
        this.orderid = response.data[0].orderno;
        this.tableno = response.data[0].tableno;
  }).catch((error)=>{
        console.log(error);
    })
},
methods:{
    genKot(){
        var currentUrl = window.location.pathname;
    var param = currentUrl.split("/")[2];
        axios.post('/api/genKot/'+param,{
            orderno:this.orderid,
            tableno:this.tableno,
            amount:this.amount,
        }).then((response)=>{
          axios.get('/api/tokenDet/'+param,{})
          .then((response)=>{
              if(this.amount == response.data[0].item_qnty){
                  alert('Kot has been generated already!!');
              }else{
                  axios.post('/api/updateKot/'+param,{
                      amount:this.amount,
                  }).then((response)=>{
                      alert('KOT has been Updated !!')
                  }).catch((error)=>{
                      console.log(error);
                  });
              }
          })
        }).catch((error)=>{
            console.log(error);
        });
    },
    confirmPayment(){
          var currentUrl = window.location.pathname;
    var param = currentUrl.split("/")[2];
        axios.post('/api/resetOrder'+param,{})
        .then((response)=>{
            console.log(response.data);
        })
    }
},
computed:{
    sum(){
        return this.items.reduce((acc, item) =>acc  + parseInt(item.amount), 0);
    },
      cgst(){
                return  this.sum * 25/1000; 
            },
            sgst(){
                return this.sum * 25/1000;
            },
            total(){
                return this.sum + this.cgst + this.sgst;
            }   
        
}
}
</script>

<style>
.timru{
    margin-top:30px;
}
.simba{
    margin-right:20px;
}
.timrul{
    margin-top:20px;
}
.bill{
    border:1px solid black;
    background:#eee;
}

</style>
