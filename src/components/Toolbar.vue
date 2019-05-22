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
            <v-list-tile-title>Welcome Biswas Sampad !!</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in menus" :key="item.id" class="sabrina">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
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
            menus:[
              {name:"Book A Table" ,icon:"book",url:"/bookatable"},
              {name:"Order Food",icon:"fastfood",url:"/addorder"},
              {name:"Menu",icon:"dashboard",url:"/menu"},
              {name:"Request Bill",icon:"receipt",url:"/printbill"},
              {name:"Booking History",icon:"history",url:""},
              {name:"Support",icon:"call",url:""},
              {name:"Settings",icon:"settings",url:""},
              {name:"Logout",icon:"power_settings_new",url:""},
              {name:"Privacy Policy",icon:"pageview",url:"/privacypolicy"},
              {name:"Terms & Conditions",icon:"indeterminate_check_box",url:"/tnc"}
            ]
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
