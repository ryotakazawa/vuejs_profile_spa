<template>
  <v-app>
    <Header id="header" />
    <v-content justify-center>
      <Top id="top" />
      <Profile id="profile" />
      <Works  id="works" />
      <Skills  id="skills" />
      <Contact  id="contact" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Top from './components/Top';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Top,
    Profile,
    Skills,
    Works,
    Contact,
    Footer
  },
  data: () => ({
    navbar: null,
    toTop: '#top',
    items: [
        { title: 'Top', href:'#top' },
        { title: 'Profile', href:'#profile' },
        { title: 'Works', href:'#works' },
        { title: 'Skills', href:'#skills' },
        { title: 'Contact', href:'#contact' },
      ],
  }),
};
</script>

<style scoped>
</style>