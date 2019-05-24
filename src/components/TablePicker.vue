<template>
<v-container fluid>
  
      
            <!-- First half begins-->
            <v-flex xs6>
              <v-layout  row wrap class="chairs">
                  <div class="table six">1</div><v-spacer></v-spacer><div class="table four">8</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">2</div><v-spacer></v-spacer><div class="table four">9</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">3</div><v-spacer></v-spacer><div class="table four">10</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">4</div><v-spacer></v-spacer><div class="table four">11</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">5</div><v-spacer></v-spacer><div class="table four">12</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">6</div><v-spacer></v-spacer><div class="table four">13</div>
              </v-layout>
               <v-layout  row wrap class="chairs">
                  <div class="table six">7</div><v-spacer></v-spacer><div class="table four">14</div>
              </v-layout>
            </v-flex>
        <!-- Firsr  half ends-->
        <!-- Second half begins -->
            <v-flex xs6>
            <v-layout  row wrap class="chairs">
                  <div class="table six">15</div><v-spacer></v-spacer><div class="table four">22</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">16</div><v-spacer></v-spacer><div class="table four">23</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">17</div><v-spacer></v-spacer><div class="table four">24</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">18</div><v-spacer></v-spacer><div class="table four">25</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">19</div><v-spacer></v-spacer><div class="table four">26</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">20</div><v-spacer></v-spacer><div class="table four">27</div>
              </v-layout>
              <v-layout  row wrap class="chairs">
                  <div class="table six">21</div><v-spacer></v-spacer><div class="table four">28</div>
              </v-layout>
            </v-flex>
            <!-- Second half ends -->
        </v-layout>
</v-container>
</template>
<script>
export default{
    data(){
        return {
             table:false,
             strength:'',
        }
    }
}
</script>
<style>
.chairs{
    padding:5px;
}
.table{
    border:1px solid #eee;
    margin-left:10px;
    margin-right:20px;
    padding:5px;
    border-radius:20%;
    cursor:pointer;
}
.four{
    border:1px solid red;
}
.six{
  border:1px solid blue;
}

.table:active{
    background:green;
    color:white !important;
}
.table:target{
    background:green;
}
</style>