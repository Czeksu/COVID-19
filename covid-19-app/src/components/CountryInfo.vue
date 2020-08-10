<template>
    <div class="container">
        <div class="row mt-5" style="margin-top:0 !important;">
            <div class="col-md-6">
                <h1 class="text-center">{{countries[1].Country}}</h1>
                <img src ="" id="flag" class="rounded mx-auto d-block" width="100px" style="margin-bottom:40px;">
            </div>
            <div class="col-md-6">
                <h4 class="dataText">Total confirmed:</h4>
                <p class="data">{{countries[(countries.length)-1].Confirmed}} <img class="img" src="https://www.zovirax.pl/images/el1.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">Total deaths:</h4>
                <p class="data">{{countries[(countries.length)-1].Deaths}} <img class="img" src="https://pngimage.net/wp-content/uploads/2018/05/christian-cross-png-6.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">Total recovered:</h4>
                <p class="data">{{countries[(countries.length)-1].Recovered}} <img class="img" src="https://data3.cupsell.pl/upload/generator/183511/640x420/2915072_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" width="40px" height="40px" style="margin-bottom:10px;"></p>
            </div>
        </div>
        <!-- CONFIRMED-->
        <div class="row mt-5" v-if="arrConfirmed.length > 0">
            <div class="col">
                <h2 class="text-center">Confirmed cases</h2>
                <line-chart
                :chartData="arrConfirmed"
                :options="chartOptions"
                :chartColors="confirmedChartColors"
                label="Confirmed"
                />
            </div>
        </div>

        <!-- DEATHS-->
        <div class="row mt-5" v-if="arrDeaths.length > 0">
            <div class="col">
                <h2 class="text-center">Deaths</h2>
                <line-chart
                  :chartData="arrDeaths"
                  :options="chartOptions"
                  :chartColors="deathsChartColors"
                  label="Deaths"
                />
            </div>
        </div>

        <!-- RECOVERED-->
        <div class="row mt-5" v-if="arrRecovered.length > 0">
            <div class="col">
                <h2 class="text-center">Recovered</h2>
                <line-chart
                  :chartData="arrRecovered"
                  :options="chartOptions"
                  :chartColors="recoveredChartColors"
                  label="Recovered"
                />
            </div>
        </div>
  </div>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";
import moment from "moment";
import LineChart from "./LineChart";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      cc: this.$route.params.CountryCode,
      countries: [],
      arrConfirmed: [],
      confirmedChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
      arrRecovered: [],
      recoveredChartColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981"
      },
      arrDeaths: [],
      deathsChartColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C"
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  async created() {
    const { data } = await axios.get("https://api.covid19api.com/total/country/" + this.cc);
    data.forEach(d => {
      const Date = moment(d.Date, "").format("MM/DD");
      const {
        Confirmed,
        Deaths,
        Recovered
      } = d;
      this.arrConfirmed.push({ Date, Country: Confirmed });
      this.arrRecovered.push({ Date, Country: Recovered });
      this.arrDeaths.push({ Date, Country: Deaths });
    })
  },
  mounted: function() {
      fetch("https://api.covid19api.com/total/country/" + this.cc)
      .then(response => response.json())
      .then((data) =>{
        this.countries = data;
      })
    },
  updated: function() {
      document.getElementById('flag').src = "https://www.countryflags.io/" + this.cc + "/flat/64.png";
      document.getElementById('signup').hidden = true;
      document.getElementById('signin').hidden = true;
    }
};
</script>
