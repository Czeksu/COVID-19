<template>
    <div>
      <div class="row">
            <div class="col-md-6" id="firstColumnHome">
                <h4 class="dataText">Total confirmed:</h4>
                <p class="data">{{countries.Global.TotalConfirmed}} <img class="img" src="https://www.zovirax.pl/images/el1.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">Total deaths:</h4>
                <p class="data">{{countries.Global.TotalDeaths}} <img class="img" src="https://pngimage.net/wp-content/uploads/2018/05/christian-cross-png-6.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">Total recovered:</h4>
                <p class="data">{{countries.Global.TotalRecovered}} <img class="img" src="https://data3.cupsell.pl/upload/generator/183511/640x420/2915072_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" width="40px" height="40px" style="margin-bottom:10px;"></p>
            </div>
            <div class="col-md-6">
                <h4 class="dataText">New confirmed:</h4>
                <p class="data">{{countries.Global.NewConfirmed}} <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Green-Up-Arrow.svg/807px-Green-Up-Arrow.svg.png" width="40px" height="35px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">New deaths:</h4>
                <p class="data">{{countries.Global.NewDeaths}} <img class="img" src="https://cdn.pixabay.com/photo/2016/12/18/11/05/black-1915459_960_720.png" width="40px" height="35px" style="margin-bottom:10px;"></p>
                <h4 class="dataText">New recovered:</h4>
                <p class="data">{{countries.Global.NewRecovered}} <img class="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/1024px-Recycling_symbol2.svg.png" width="40px" height="40px" style="margin-bottom:10px;"></p>
            </div>
            <div class="col-md-6" id="firstColumnHome">
              <h4 style="text-align: center">European popular countries</h4>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/ES/flat/24.png'">
              <router-link v-bind:to="'/CountryInfo/ES'">Spain</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/GB/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/GB'">United Kingdom</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/IT/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/IT'">Italy</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/DE/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/DE'">Germany</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/PL/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/PL'">Poland</router-link></p>
            </div>
            <div class="col-md-6" id="firstColumnHome">
              <h4 style="text-align: center">Other popular countries</h4>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/US/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/US'">United States</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/BR/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/BR'">Brazil</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/IN/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/IN'">India</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/RU/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/RU'">Russian Federation</router-link></p>
              <p class="countrylink"><img class="img" v-bind:src="'https://www.countryflags.io/CN/flat/24.png'"> 
              <router-link v-bind:to="'/CountryInfo/CN'">China</router-link></p>
            </div>
      </div>
      <div class="row">
      </div>
    </div>
</template>

<script>
import regeneratorRuntime from 'regenerator-runtime';
export default {
  data () {
    return {
      countries: [],
    }
  },
    async created () {
      fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((data) =>{
        this.countries = data;
      })
    }
  };
</script>