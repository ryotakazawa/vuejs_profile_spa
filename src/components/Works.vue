<template>
  <v-app class="pt-5">
    <v-container>
      <v-layout justify-center>
        <h1 data-aos="fade-up">Works</h1>
      </v-layout>
      <v-layout justify-center raw wrap>
        <v-flex 
          mt-9
          mb-3
          v-for="(item, i) in items"
          :key="i"
          >
          <v-card
          class="mx-auto"
          max-width="344px"
          data-aos="fade-up"
          data-aos-delay="150"
          >
            <v-img
              :src="item.pic"
              height="200px"
            ></v-img>
            <v-card-title>
              <h5>{{ item.title }}</h5>
            </v-card-title>
            <v-card-subtitle>
              {{ item.subtitle }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn 
                color="success"
                text
                target="_blank"
                :href="item.demo"
                >
                <v-fa icon="home" style="font-size:30px;" /> 
              </v-btn>
              <v-btn
                color="success"
                text
                target="_blank"
                :href="item.github"
              > 
                <v-fa :icon="['fab', 'github']" style="font-size:30px;" /> 
              </v-btn>
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
                  <p style="white-space:pre-wrap; word-wrap:break-word;">{{item.desc}}</p>
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
          pic: require('@/assets/bestmen.png'),
          title: 'BESTMEN-1番だけをシェアしよう-',
          subtitle: 'Ruby + Rails + AWS',
          desc: `BESTMENは、ユーザーが認める１番のラーメン屋を、各ジャンル1店舗のみシェア出来るアプリケーションです。
他のグルメ系アプリと異なり投稿できる店舗数が限られているので、ハイレベルなお店だけを探すことが出来ます。
テック系YouTuberとして著名な勝又健太氏によるレビューで、
”UI/UXが整っている”
”コードがしっかり綺麗に書かれている”
”細かい機能もきちんと作り込まれている”
”AWSのかなり難易度の高い技術もしっかり使いこなしている”
"当サロンで過去に公開されたポートフォリオの中でも非常に優れた作品”
とご評価頂きました。`,
          show: false,
          href:'#top',
          demo: 'https://thebestmen.net/',
          github: 'https://github.com/ryotakazawa/bestmen'},
        { id: "1",
          pic: require('@/assets/ryotakazawa_vuejs.png'),
          title: 'Profile',
          subtitle: 'Vue.js + Vuetify + Firebase',
          desc: `ご覧頂いているこちらのサイトです。
「バックエンドをRails or Laravelで製作し、フロントにはVue or Reactを用いる」という昨今のトレンドにキャッチアップする為、まずはVue学習の第一歩を踏み出すべく製作しました。
Firebaseでホスティングされており、functionを利用したメール送信機能も実装されております。
今回得た知見を元に、次回はRails+Vueのアプリケーションを製作する予定です。`,
          show: false,
          href:'#profile',
          demo: 'https://ryo-takazawa.firebaseapp.com/',
          github: 'https://github.com/ryotakazawa/vuejs_profile_spa'},        
      ],
  }),
};
</script>

