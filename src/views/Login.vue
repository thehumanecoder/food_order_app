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
            v-model="email"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            required
            v-model = "password"
          ></v-text-field>
          <v-btn block color="secondary" dark @click="loginUser()">Login</v-btn>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
  data(){
    return{
      email:'',
      password:'',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods:{
    loginUser(){
        if(this.reg.test(this.email)){
            axios.post('/api/clogin',{
              email:this.email,
              password:this.password
            }).then((response)=>{
              console.log(response);
              if(response.data==200){
                  axios.post('/oauth/token',{
                      grant_type:'password',
                      client_id:2,
                      client_secret:'GcBsChOS31qq6x7LWhEnCPtS7BMEDm5Z5Zp2xZLW',
                      username:this.email,
                      password:this.password
                  }).then((response)=>{
                      console.log(response);
                      //setting the toke to localstorage
                      let accessToken = response.data.access_token;
                      localStorage.setItem('token',accessToken);
                    //set user header  
                      window.token = localStorage.getItem('token');
                      axios.defaults.headers.common['Authorization']= "Bearer "+token;
                      axios.defaults.headers.post['Content-Type'] = 'application/json';
                      //get request to get user details
                    
                      axios.get('/api/user',{})
                      .then((response)=>{
                        console.log(response.data);
                        //setting the user details to local storage
                        localStorage.setItem('user',response.data.name);
                        localStorage.setItem('userid',response.data.id);
                        window.isSignedIn= true;
                        this.$router.push('/main');
                      }).catch((error)=>{
                        console.log(error);
                      })
                  })
              }
            })
        }else{
          alert('Enter a valid email');
        }
    }
  }
}
</script>

<style>

</style>
