<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ryo takazawa</span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Top/>
      <Profile user-name="Ryo Takazawa" />
      <Skills/>
      <Works/>
      <Contact/>
    </v-content>
  </v-app>
</template>
<script>
import Top from './components/Top';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

export default {
  name: 'App',
  components: {
    Top,
    Profile,
    Skills,
    Works,
    Contact
  },
  data: () => ({
    //
  }),
};
</script>
