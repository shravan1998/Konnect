<template>

    
  <v-app id="inspire">
 



        <v-sheet
    height="100%"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-card
      color="dark"
      flat
      height="200px"
      floating
      tile
    >
      <v-toolbar dark
      class="hidden-sm-and-down"
      color="#000033"
      >
        <v-app-bar-nav-icon
        @click.stop="drawer = !drawer">

        </v-app-bar-nav-icon>
  
        <v-toolbar-title>
          <img src="../assets/Konnect.png" width="60px" height="60px">
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
  
    <input type="text" class="form-control" id="inputPassword2" placeholder="Search">
  </div>
  <button type="submit" class="btn clr mb-2">Search</button>
        </form>
  
      </v-toolbar>
    </v-card>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      
      floating
      temporary
      dark
      color="#000033"
    >
      <v-list-item>
      

        <v-list-item-content>
          <!--v-list-item-title>{{name}}</v-list-item-title-->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
        

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.url" style="color:white">
              {{ item.title }}
              </router-link>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-sheet>
      </v-app>


    
</template>

<script>
export default {
    name:'Navbar',
   
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home' ,url:"/home"},
          { title: 'Notifications',url:"/notification"},
          {title:'Messages',url:"/messages"},
          {title:'Profile',url:"/profile"},
          {title:'Logout',url:"/login"},

        ],
       // name:this.$localStorage.get("name")
      }
    },
  
}
</script>

<style scoped>
.clr{
    background-color: #ffd11a;
}
</style>