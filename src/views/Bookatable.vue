<template>
<div>
  <toolbar/>
  <v-container>
    
<datepicker/>
<timepicker/>
<tablepicker/>
<v-layout row wrap>
    <div class="table six"></div>
    <span>Table for six persons</span>
    <div class="table four"></div>
    <span>Table for four persons</span>
</v-layout>
<v-layout>
   <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Number of meambers"
          outline
          attach
        ></v-select>
      </v-flex>
</v-layout>
<v-layout>
    <v-btn block color="primary" dark>Book Table</v-btn>
</v-layout>
  </v-container>

</div>
</template>
<script>
import toolbar from './../components/Toolbar.vue'
import datepicker from './../components/DatePicker.vue'
import timepicker from './../components/Timepicker.vue'
import tablepicker from './../components/TablePicker.vue'
export default{
components:{
    toolbar,datepicker,timepicker,tablepicker
},
 data: () => ({
      items: ['2','3','4','5','6','6+']
    })
}
</script>
<style>

</style>