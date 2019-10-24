<template>
  <v-app>
    <v-container>
      <v-layout
        text-center
        wrap
      >
        <v-flex xs12>
          <v-app-bar 
            fixed
            flat
            color="transparent"
            class="mt-3"
            app>
            <v-toolbar-title
              class="headline"
              @click="$vuetify.goTo(toTop)"
              >
              <v-img
                :src="require('./assets/RyoTakazawaRed.png')"
                class="mt-1.5"
                width="60"         
                height="60" 
              ></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              text
              v-for="(item, i) in items" 
              :key="i"  
              @click="$vuetify.goTo(item.href)"
              class="hidden-sm-and-down"
              >
              <span class="mr-2">{{item.title}}</span>
            </v-btn>
            <v-menu
              transition="slide-y-transition"
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  text
                  class="hidden-sm-and-up"
                >
                  Menu
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="$vuetify.goTo(item.href)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </v-flex>
      </v-layout>
    </v-container>
    <v-content justify-center>
      <Top id="top" class="mb-10" />
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
    navbar: null,
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