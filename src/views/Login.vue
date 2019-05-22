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
      <v-flex xs12>
        <h3 class="display-1  mb-3">
          Login 
        </h3>
      </v-flex>
    <v-flex class="tuesday-form" xs12>
        <v-text-field
            label="Email Id"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn block color="secondary" dark>Block Button</v-btn>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
