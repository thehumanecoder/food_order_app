<template>
    <v-container class="monday">
        <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
       <v-img
          :src="require('../assets/front-one.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
      <v-flex mb-4>
        <h3 class="display-1  mb-3">
          Chancellor Grand 
        </h3>

      </v-flex>
    <v-flex class="monday-buttons">
        <v-btn block  class="monday-button-login" >Login</v-btn>
        <v-btn block  class="monday-button-signup">Sign Up</v-btn>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.monday{
    background-color:#FEFEFA;
}
.monday-buttons{
    margin-top:100px;
    margin-bottom:100px;
}
.monday-button-login{
    font-size:18px;
    background-color:#536dfe !important;
    color:white !important;
}
.monday-button-signup{
    font-size:18px;
    background-color:#ffd54f !important;
}

</style>
