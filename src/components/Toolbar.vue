<template>
<div>
    <v-toolbar class="hulk" color="#1f4d7b">
          <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          class="mirage"
          ></v-toolbar-side-icon>
          <v-toolbar-title>Chancellor Grand</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
         <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-0 hercules">
        <v-list-tile avatar>
          

          <v-list-tile-content class="atlas">
            <v-list-tile-title>Welcome {{this.user | capitalize }} !!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense v-if="this.role == 3">
        <v-divider></v-divider>

        <v-list-tile v-for="item in cmenus" :key="item.id" class="sabrina" :href="item.url">
      
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content
          
          >
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      
        <v-list-tile class="sabrina" @click="logout()">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      
      </v-list>
      <v-list class="pt-0" dense v-if="this.role == 4">
        <v-divider></v-divider>

        <v-list-tile v-for="item in smenu" :key="item.id" class="sabrina" :href="item.url">
      
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content
          
          >
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      
        <v-list-tile class="sabrina" @click="logout()">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      
      </v-list>
      <v-layout app row wrap class="gudby">
      <p>	&copy;  Chancellor Grand - 2019</p>
      <p>D&D By :Arch Technologies & Media</p>
      </v-layout>
    </v-navigation-drawer>
</div>   
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
            cmenus:[
              {name:"Home",icon:"home",url:"/main"},
              {name:"Book A Table" ,icon:"book",url:"/bookatable"},
              {name:"Order Food",icon:"fastfood",url:"/addorder"},
              {name:"Menu",icon:"dashboard",url:"/menu"},
              {name:"Request Bill",icon:"receipt",url:"/printbill"},
              {name:"Booking History",icon:"history",url:""},
              {name:"Support",icon:"call",url:""},
              {name:"Settings",icon:"settings",url:""},
              {name:"Privacy Policy",icon:"pageview",url:"/privacypolicy"},
              {name:"Terms & Conditions",icon:"indeterminate_check_box",url:"/tnc"}
            ],
            smenu:[
              {name:"Home",icon:"home",url:"/main"},
              {name:"Confirm Customer" ,icon:"book",url:"/confirmcostumer"},
              {name:"Order Food",icon:"fastfood",url:"/addorder"},
              {name:"Settings",icon:"settings",url:"/settings"},
              {name:"Privacy Policy",icon:"pageview",url:"/privacypolicy"},
              {name:"Terms & Conditions",icon:"indeterminate_check_box",url:"/tnc"}
            ],
            user:'',
            userid:'',
            role:''
        }
    },
   mounted(){
          this.user = localStorage.user;
          this.role = localStorage.role;
   },
   methods:{
      logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userid');
        this.$router.push('/')
      }
   },
   filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script|Titillium+Web');
@import url('https://fonts.googleapis.com/css?family=Courgette');
html{
  font-family: 'Titillium Web', sans-serif;
}
.hulk{
  color:white !important;
}
.hercules{
  background:#1f4d7b !important;
  color:white !important;
}
.atlas{
  font-size:18px;
  font-family: 'Courgette', cursive;
}
.mirage{
  color:white !important;
}
.gudby{
  position:absolute;
  bottom:0;
}
.sabrina:active{
  background:#1f4d7b !important;
  color:white;  
}
</style>
