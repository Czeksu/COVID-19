<template>
    <div>
        <div id="basicinfo">
            <h2>Basic protective measures against the new coronavirus</h2>
            <p>Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:</p>
        </div>
        <div id="maskinstruction">
        </div>
        <div id="mythbusters">
          <h2>Myth busters:</h2><br>
        </div><br>
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
    },
    created() {
            // Your web app's Firebase configuration
      var firebaseConfig = {
    apiKey: "AIzaSyClkwCZ-EnLPpSdGqXK4hRQg717-l2Nb-4",
    authDomain: "covid19app-f3bc5.firebaseapp.com",
    databaseURL: "https://covid19app-f3bc5.firebaseio.com",
    projectId: "covid19app-f3bc5",
    storageBucket: "covid19app-f3bc5.appspot.com",
    messagingSenderId: "657218952223",
    appId: "1:657218952223:web:55f456ad9d7651d808492a",
    measurementId: "G-LXHTGGJ7WP"
  };
      // Initialize Firebase
      if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      };
      const db = firebase.firestore();

      db.collection("news")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
        function renderElements(doc) {
        let title = doc.data().title;
        let content = doc.data().content;

        document.getElementById('basicinfo').innerHTML +=
          title +
          content +
          "<br>";
      }
            renderElements(doc);
          });
        });

        db.collection("maskinstruction")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
        function renderElements(doc) {
        let title = doc.data().title;
        let instruction = doc.data().instruction;

        document.getElementById('maskinstruction').innerHTML +=
          title + 
          instruction +
          "<br>";
      }
            renderElements(doc);
          });
        });

        db.collection("mythbusters")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
        function renderElements(doc) {
        let title = doc.data().title;
        let content = doc.data().content;

        document.getElementById('mythbusters').innerHTML +=
          title  + 
          content +
          "<br>";
      }
            renderElements(doc);
          });
        });
    }
  };
</script>
