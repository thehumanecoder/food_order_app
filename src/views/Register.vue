<template>
    <v-container class="monday">
        <v-layout
      text-xs-center
      wrap
    >
    <v-flex xs12>
        <h3 class="display-1  mb-3">
         Sign Up 
        </h3>
      </v-flex>
      <v-flex xs12 class="tuesday-rock">
       <v-text-field
            label="Name"
            required
          ></v-text-field>
       <v-text-field
            label="Email Id"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            label="Confirm Password"
            required
          ></v-text-field>
          <v-btn block color="secondary" dark class="btn-signup">Block Button</v-btn>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.tuesday-rock{
  margin-top:100px;
}
.btn-signup{
  margin-top:30px;
}
</style>
