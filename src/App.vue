<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$vuetify.goTo(toProfile)">
        <span>ryo takazawa</span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text 
        @click="$vuetify.goTo(toProfile)">
        <span class="mr-2">Profile</span>
      </v-btn>
      <v-btn
        text 
        @click="$vuetify.goTo(toSkills)">
        <span class="mr-2">Skills</span>
      </v-btn>
      <v-btn
        text 
        @click="$vuetify.goTo(toWorks)">
        <span class="mr-2">Works</span>
      </v-btn>
      <v-btn
        text 
        @click="$vuetify.goTo(toContact)">
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <Top id="top" />
      <Profile user-name='Ryo Takazawa' style='height: 500px;' id="profile" />
      <Skills style='height: 500px;' id="skills" />
      <Works style='height: 500px;' id="works" />
      <Contact style='height: 500px;' id="contact" />
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
    toTop: '#top',
    toProfile: '#profile',
    toSkills: '#skills',
    toWorks: '#works',
    toContact: '#contact'
  }),
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

</style>