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
      <router-link to="/">Top</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/contact">Contact</router-link>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view
                user-name='Ryo Takazawa'
        ></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

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