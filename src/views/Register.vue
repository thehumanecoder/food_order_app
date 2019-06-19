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
            v-model = "name"
            required
          ></v-text-field>
       <v-text-field
            label="Email Id"
            v-model ="email"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model = "password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="confpassword"
            label="Confirm Password"
            required
          ></v-text-field>
          <v-btn block color="secondary" dark class="btn-signup" @click="registerUser">Register</v-btn>
    </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
export default {
  data(){
    return {
      name:'',
      email:'',
      password:'',
      confpassword:'',
       reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods:{
      registerUser(){
        //checking if email is valid or not 
        if(this.reg.test(this.email)){
          //match the both passwords
          if (this.password == this.confpassword){
            //post request to register the user
            axios.post('/api/cregister',{
                name:this.name,
                email:this.email,
                password:this.password
            }).then((response)=>{
              //post request to recieve the token 
                if(response.data==200){
                  axios.post('/oauth/token',{
                      grant_type:'password',
                      client_id:2,
                      client_secret:'mFewdGRrpFMvDIw1H1elAhgeJD4qRHBz94fXGGo',
                      username:this.email,
                      password:this.password
                  }).then((response)=>{
                      console.log(response);
                      //setting the toke to localstorage
                      let accessToken = response.data.access_token;
                      localStorage.setItem('token',accessToken);
                      
                      //setting the user tokens to axios header
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
                  });
                  
                }else{
                  console.log("There is some error . Please contact the administrator");
                }
            }).catch((error)=>{
              console.log(error)
            });
         }else{
           alert('Password do not match');
        }
        }else{
          alert('Enter a valid email');
        }
       }
  }
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
