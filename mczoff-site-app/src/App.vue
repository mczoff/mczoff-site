<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      flat
      right
      temporary
    >
      <v-list class="pa-0">
        <v-divider></v-divider>
        <v-list-tile
          active-class
          v-for="link of headerLinks"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-title class="subtitle-1">
        <v-layout align-center>
          <img src="./assets/logo-stroke.png" height="75" width="75"/>
          <span class="font-weight-light">mczoff</span>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in headerLinks"
          :key="link.title"
          :to="link.url"
          flat
          active-class
        >
          <span class="mr-2">{{link.title}}</span>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <Home/>
    </v-content>
    <v-footer
            height="auto"
            color="blue-grey darken-4"
    >
      <v-layout
          justify-center
          row
          wrap
      >
        <v-flex
            py-3
            text-xs-center
            white--text
            xs12
        >
          &copy; 2019 — <strong>Bogdan Alyabyev</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home,
  },
  data:  () => ({
    drawer: false,
    headerLinks: [
      { title: 'Projects', url: '/#projects' },
      { title: 'Experience', url: '/#experience' },
      { title: 'Research', url: '/#research' },
      { title: 'Languages', url: '/#languages' },
      { title: 'Interests', url: '/#interests' },
      { title: 'Contacts', url: '/#contacts' },
    ]
  })
}
</script>
