<template>
<div>
    <toolbar/>
    <v-container fluid>
        <v-layout>
            <v-flex xs12 sm6 md4>
                <v-dialog
                     ref="dialog"
                     v-model="modal"
                     :return-value.sync="date"
                    persistent
                    lazy
                    full-width
                    width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable onchange="console.log('changed!')">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
        </v-layout>
    </v-container>

    
    <v-container fluid>
        <v-layout row wrap>
           <div class="micro" v-for="item in list" :key="item.id">
               <router-link :to="{name:'Confirm',params:{id:item.id}}" v-if="item.date == date">
               <h3>{{item.customer_name | capitalize }}</h3>
               <v-layout row wrap>
                    <v-flex xs12>
                        <span>Booked For a <span v-if="item.time == 1">Breakfast</span><span v-if="item.time == 2">Lunch</span><span v-if="item.time == 3">Evening Snacks</span><span v-if="item.time == 4">Dinner</span></span><br>
                        <span>Date :{{item.date}}</span>&nbsp;<span>Table No :{{item.table_no}}</span>
                        <br>
                        <span>No of Members : {{item.strength}}</span>
                    </v-flex>
               </v-layout>
               </router-link>
           </div>
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
data(){
    return{
        list:[],
        date: new Date().toISOString().substr(0, 10),
        modal:false,
    }
},
mounted(){

    axios.get('/api/bookedtables/'+this.date,{})
    .then((response)=>{
        this.list = response.data;
    }).catch((error)=>{
        console.log(error);
    })
},
filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
  }
  },
}
</script>

<style> 
.micro{
    border:1px solid black;
    height:100px;
    width:100%;
    padding:5px;
    align-content: center;
    text-align: center;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
margin-bottom:10px;
}
.micro:active{
    background:deeppink;
    color:white;
}

</style>
