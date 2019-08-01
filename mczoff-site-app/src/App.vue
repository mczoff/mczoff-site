<template>
  <v-app>
    <v-navigation-drawer
      v-scroll="onScroll"
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
    <v-slide-y-transition>
        <v-btn v-show="offsetTop > 500"
           class="hidden-sm-and-down md-5 mr-4 elevation-21"
           dark
           fab
           right
           bottom
           big
           color="blue-grey darken-4"
           fixed
           @click="top"
        >
          <v-icon dark>keyboard_arrow_up</v-icon>
        </v-btn>
      </v-slide-y-transition>
      <v-slide-y-transition>
      <v-btn v-show="offsetTop > 500"
          class="hidden-md-and-up md-5 mr-1 elevation-21"
           transition="fade-transition"
          dark
          fab
          right
          bottom
          small
          color="blue-grey darken-4"
          fixed
          @click="top"
    >
        <v-icon dark>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-slide-y-transition>
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
    offsetTop: 0,
    headerLinks: [
      { title: 'Projects', url: '/#projects' },
      { title: 'Experience', url: '/#experience' },
      { title: 'Research', url: '/#research' },
      { title: 'Languages', url: '/#languages' },
      { title: 'Interests', url: '/#interests' },
      { title: 'Contacts', url: '/#contacts' },
    ]
  }),
  methods:{
    top () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>
