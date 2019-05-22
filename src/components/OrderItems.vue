<template>
 
        <v-layout row wrap>
            <v-flex xs4 v-for="item in items" :key="item.id">
                <div class="menucard">
                 <p>{{item.name}}</p> 
                </div>
            </v-flex>
            
        </v-layout>

</template>

<script>
export default {
    data(){
        return{
            items:[
                {name:"Rice"},
                {name:"Dal"},
                {name:"Pudding"},
                {name:"Sabji"},
                {name:"mutton biriyani"},
            ]
        }
    }
}
</script>

<style>
.menucard{
    border:3px solid white;
    height:100px;
    width:100px;
    border-radius: 20%;
    background:#0F5257;
    align-content: center !important;
    color:white;
    font-size:20px;
    position:relative;
}
.menucard p {
     margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: 50%;
    transform: translate(-50%, -50%)
}
</style>

