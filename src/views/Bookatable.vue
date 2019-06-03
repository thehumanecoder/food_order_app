<template>
<div>
  <toolbar/>
  <v-container fluid v-if="entry">

    <v-layout row wrap>
     
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Pick A Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
    
<v-layout row wrap text-center>
    <v-radio-group v-model="time" row>
      <v-radio label="Breakfast" value="1"></v-radio>
      <v-radio label="Lunch" value="2"></v-radio>
      <v-radio label="Snacks" value="3"></v-radio>
      <v-radio label="Dinner" value="4"></v-radio>
    </v-radio-group>
</v-layout>


  <v-layout v-if="time">
            <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Number of meambers"
          outline
          attach
          v-model="strength"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap  v-if="strength">
      Pick a table
      <div v-if="strength <= 4">
        <v-radio-group v-model="table" row>
      <v-radio color="red darken-3" label="A-1" value="A-1"></v-radio>
      
      <v-radio color="red darken-3" label="A-2" value="A-2"></v-radio>
      
      <v-radio color="red darken-3" label="A-3" value="A-3"></v-radio>
      
      <v-radio color="red darken-3" label="A-4" value="A-4"></v-radio>
      
      <v-radio color="red darken-3" label="A-5" value="A-5"></v-radio>
      
      <v-radio color="red darken-3" label="A-6" value="A-6"></v-radio>
      
      <v-radio color="red darken-3" label="A-7" value="A-7"></v-radio>
      
      <v-radio color="red darken-3" label="A-8" value="A-8"></v-radio>
      
      <v-radio color="red darken-3" label="B-1" value="B-1"></v-radio>
      
      <v-radio color="red darken-3" label="B-2" value="B-2"></v-radio>
      
      <v-radio color="red darken-3" label="B-3" value="B-3"></v-radio>
      
      <v-radio color="red darken-3" label="B-4" value="B-4"></v-radio>
      
      <v-radio color="red darken-3" label="B-5" value="B-5"></v-radio>

      <v-radio color="red darken-3" label="B-6" value="B-6"></v-radio>
      
      <v-radio color="red darken-3" label="B-7" value="B-7"></v-radio>
      
      <v-radio color="red darken-3" label="B-8" value="B-8"></v-radio>
    </v-radio-group>
      </div>
      <div v-else>
               <v-radio-group v-model="table" row>
      <v-radio color="red darken-3" label="C-1" value="C-1"></v-radio>
      
      <v-radio color="red darken-3" label="C-2" value="C-2"></v-radio>
      
      <v-radio color="red darken-3" label="C-3" value="C-3"></v-radio>
      
      <v-radio color="red darken-3" label="C-4" value="C-4"></v-radio>
      
      <v-radio color="red darken-3" label="C-5" value="C-5"></v-radio>
      
      <v-radio color="red darken-3" label="C-6" value="C-6"></v-radio>
      
      <v-radio color="red darken-3" label="C-7" value="C-7"></v-radio>
      
      <v-radio color="red darken-3" label="C-8" value="C-8"></v-radio>
      
      <v-radio color="red darken-3" label="D-1" value="D-1"></v-radio>
      
      <v-radio color="red darken-3" label="D-2" value="D-2"></v-radio>
      
      <v-radio color="red darken-3" label="D-3" value="D-3"></v-radio>
      
      <v-radio color="red darken-3" label="D-4" value="D-4"></v-radio>
      
      <v-radio color="red darken-3" label="D-5" value="D-5"></v-radio>

      <v-radio color="red darken-3" label="D-6" value="D-6"></v-radio>
      
      <v-radio color="red darken-3" label="D-7" value="D-7"></v-radio>
      
      <v-radio color="red darken-3" label="D-8" value="D-8"></v-radio>
    </v-radio-group>
    </div>
      <v-flex xs12>
        <v-btn block color="primary" dark @click="getDetails()">Book Table</v-btn>
      </v-flex>
      </v-layout>
  </v-container>
<v-container v-if="!entry">
Your booking for a <span v-if="this.time == 1">Breakfast</span><span v-if="this.time == 2">Lunch</span><span v-if="this.time == 3">Evening Snacks</span><span v-if="this.time == 4">Dinner</span><br>
Your prefered date {{this.date}}<br>
Your strength {{this.strength}}<br>
Your Table No {{this.table}}<br>
<v-flex xs12 v-if="response==false">
   <v-btn block color="primary" dark @click="bookTable()">Confirm & Book Table</v-btn>
</v-flex>
<v-flex xs12 v-if="response==true">
   <v-btn block color="#ffa000"  @click="bookTable()">Booking Confirmed</v-btn>
   <v-btn block color="yellow"  href="/main">Return Home</v-btn>
</v-flex>
</v-container>
</div>
</template>
<script>
import toolbar from './../components/Toolbar.vue'
export default{
components:{
    toolbar
},
 data: () => ({
       time:'',
       items: ['2','3','4','5','6','6+'],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      strength:'',
      table:'',
      entry:true,
      id:'',
      name:'',
      response:false,
    }),
    mounted(){
       this.user = localStorage.user;
       this.id= localStorage.userid;
    },
    methods:{
        getDetails(){
          this.entry=false;
        },
        bookTable(){
          axios.post('/api/booktable',{
            customerid:this.id,
            customername:this.user,
            table:this.table,
            date:this.date,
            strength:this.strength,
            time:this.time,
          }).then((response)=>{
            if(response.data == true){
                this.response = true;
            }
          }).catch((error)=>{
            console.log(error);
          })
        }
    }
}
</script>
<style>

</style>