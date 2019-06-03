<template>
<div>
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
          Stewart Login 
        </h3>
      </v-flex>
    <v-flex class="tuesday-form" xs12>
        <v-text-field
            label="User Id"
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
          <p>Wrong place ,if customer <a href="/login">Login</a> here</p>
    </v-flex>
    </v-layout>
    </v-container>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      email:'',
      password:'',
     host:'@xyz.com'
    }
  },
  methods:{
    loginUser(){
            axios.post('/api/slogin',{
              email:this.email + this.host,
              password:this.password
            }).then((response)=>{
              console.log(response);
              if(response.data==200){
                  axios.post('/oauth/token',{
                      grant_type:'password',
                      client_id:2,
                      client_secret:'GcBsChOS31qq6x7LWhEnCPtS7BMEDm5Z5Zp2xZLW',
                      username:this.email + this.host,
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
                        localStorage.setItem('role',response.data.role);
                        window.isSignedIn= true;
                        this.$router.push('/main');
                      }).catch((error)=>{
                        console.log(error);
                      })
                  })
              }
            })
        }
    }
  }
</script>

<style>

</style>
