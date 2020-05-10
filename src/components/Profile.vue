<template>
  <v-app class="pt-5 mb-10 bg" style="background-color: #F2F2F2;">
    <v-container>
      <v-layout justify-center class="pb-4">
        <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">About me</h1>
      </v-layout>
      <v-layout>
        <v-flex xs1>
        </v-flex>
          <v-flex xs10>
            <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" class="profile-text font-weight-light">
              1990年生まれ。
            </h3>
            <p></p>
            <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" class="profile-text font-weight-light">
              青山学院大学経営学部出身。マーケティングを専攻し、特に広告表現がこころに与える効果について着目して研究していた。執筆論文が学内コンクールで入選。<br/>
              学生団体を立ち上げ、300人規模の交流会や東京湾クルージング等を企画。<br/>
              ニューヨークで英語力をバカにされた悔しさから猛特訓。ゼロから4ヶ月でTOEIC865点をマーク。<br/>
            </h3>
            <p></p>
            <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" class="profile-text font-weight-light">
              卒業後はテレビ局系イベント運営会社を経て、個人事業主として独立(アパレル)。<br/>
              海外ブランドの取り寄せサービスとヴィンテージ品販売をメインに、原宿でのポップアップ開催や業者向けの卸売など事業を拡大。<br/>
              個人として力を発揮することを追求する一方で、その限界も痛感。<br/>
              また、アパレル業界で常に前線に立ち続ける難しさもひしひしと感じていた。<br/>
            </h3>
            <p></p>
            <h3 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" class="profile-text font-weight-light">
              キャリアチェンジを模索する中で、以前から興味を抱いていたプログラミングを始める。<br/>
              3ヶ月、4ヶ月と継続する内に、自分の手で製作する快感にどハマり。プライベートの大半を捧げるようになる。<br/>
              スクール等には通わず、Web上の情報や書籍を手掛かりに独学でポートフォリオ2作を作り上げ、エンジニアに転職。<br/>
              現在Web系自社開発企業にてフルスタックエンジニアを志して勤務中。<br/>
              プライベートでも個人プロジェクトや業務用システムを開発、プログラミングに没頭する日々を送っている。
            </h3>
          </v-flex>
        <v-flex xs1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  props: ['userName'],
  data: () => ({
    
  }),
};
</script>

<style scoped>
  .profile-text{
    color: grey;
    line-height: 2rem;
  }

  .bg{
    box-shadow: 0 15px 15px -7px #F2F2F2,
                0 -15px 15px -7px #F2F2F2;
  }
</style>
