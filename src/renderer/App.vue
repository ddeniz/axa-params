<template>
  <div id="app">
      <v-app light>       
    <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app dark  class="lighten-3">
 <v-list>
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/vuetfiy">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Vuetify Example</v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/vuex">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Vuex Example</v-list-tile-title>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>      
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>      
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
  
  </div>
</template>

<script>


export default {
  name: "axa-params",
  data() {
    return {
      drawer: false,
      clipped: false,
      items: [
        {
          action: "local_activity",
          title: "Home",
          path: "/",
          items: []
        },
        {
          action: "restaurant",
          title: "Vuetify Example",
          path: "/Vuetify",
          items: []
        },
        {
          action: "local_activity",
          title: "Vuex Example",
          path: "/Vuex",
          items: []
        },
      ]
    };
  }
};
</script>

<style>
/* CSS */
</style>
