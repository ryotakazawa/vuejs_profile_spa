<template>
  <v-app>
    <v-app-bar 
      flat
      color="transparent"
      class="mt-3"
      app>
      <v-toolbar-title
        class="headline"
        @click="$vuetify.goTo(toTop)"
        >
        <v-img
          :src="require('./assets/RyoTakazawa.png')"
          class="my-3"
          width="60"         
          height="60" 
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(mn, i) in items" 
        :key="i"  
        @click="$vuetify.goTo(mn.href)"
        class="hidden-sm-and-down"
        >
        <span class="mr-2">{{mn.title}}</span>
      </v-btn>

    </v-app-bar>
    <v-content>
      <Top id="top" class="mb-9" />
      <Profile user-name='Ryo Takazawa' style='height: 700px;' id="profile" />
      <Skills style='height: 700px;' id="skills" />
      <Works style='height: 700px;' id="works" />
      <Contact style='height: 700px;' id="contact" />
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
    items: [
        { title: 'Top', icon: 'dashboard', href:'#top' },
        { title: 'Profile', icon: 'question_answer', href:'#profile' },
        { title: 'Skills', icon: 'question_answer', href:'#skills' },
        { title: 'Works', icon: 'question_answer', href:'#works' },
        { title: 'Contact', icon: 'question_answer', href:'#contact' },        
      ],
  }),
};
</script>

<style scoped>
.headline{
  cursor: pointer;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

</style>