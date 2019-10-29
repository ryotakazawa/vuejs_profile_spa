<template>
  <v-app>
    <v-container>
      <v-layout justify-center>
        <v-card-title class="font-weight-bold">
          <h1 data-aos="fade-up">Works</h1>
        </v-card-title>
      </v-layout>
      <v-layout justify-center align-center raw wrap>
        <v-flex 
          mt-9
          mb-3
          v-for="(item, i) in items"
          :key="i"
          >
          <v-card
          class="mx-auto"
          max-width="344"
          data-aos="fade-up"
          data-aos-delay="150"
          >
            <v-img
              :src="item.pic"
              height="200px"
            ></v-img>
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="green"
                text
                target="_blank"
                :href="item.github"
              > 
                <v-fa :icon="['fab', 'github']" style="font-size:30px;" /> 
              </v-btn>
              <v-btn 
                color="green"
                text
                target="_blank"
                :href="item.demo"
                >DEMO</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="item.show = !item.show"
              >
                <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="item.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{item.desc}}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
        { id: "1",
          pic: require('@/assets/bestmen_top.png'),
          title: 'BESTMEN-1番だけをシェアしよう-',
          subtitle: 'Ruby + Rails + AWS',
          desc: 'BESTMENは、ユーザーが認める１番のラーメン屋を、各ジャンル1店舗のみシェア出来るアプリケーションです。他のグルメ系アプリと異なり投稿できる店舗数が限られているので、ハイレベルなお店だけを探すことが出来ます。',
          show: false,
          href:'#top',
          demo: 'https://thebestmen.net/',
          github: 'https://github.com/ryotakazawa/bestmen'},
        { id: "1",
          pic: require('@/assets/vue_portfolio.png'),
          title: 'Profile',
          subtitle: 'Vue.js',
          desc: 'bbbbbb',
          show: false,
          href:'#profile',
          demo: 'https://thebestmen.net/',
          github: 'https://github.com/ryotakazawa/vuejs_profile_spa'},        
      ],
  }),
};
</script>

