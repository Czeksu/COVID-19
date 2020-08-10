<template>
    <div>
        <h1>General informations about COVID-19</h1>
        <mdb-carousel :interval="6000" controlls indicators slide :items="items"></mdb-carousel><br>
    </div>
</template>
<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/safe-greetings.png?sfvrsn=2e97004e_2"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/handshaking.png?sfvrsn=4aed53c5_2"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/wearing-gloves.png?sfvrsn=ec69b46a_2"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(19).tmb-1920v.png"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(13).tmb-1920v.png"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(23).tmb-1920v.png"
          },
          {
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(30).tmb-1920v.png"
          },{
            img: true,
            src:"https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(33).tmb-1920v.png"
          }
        ]
      };
    }
  }
</script>
