<template>
        <div>
           <h1 class="display-4" style="text-align:center; font-size: 45px;">Current country data all around the world!</h1>
           <h2 class="display-4" style="text-align:center; font-size: 25px;">Click on country name to see specified data for each country.</h2><br><br>
        <table id="tab" class="display">
            <thead>
                <tr scope="row">
                    <th scope="col">Country</th>
                    <th scope="col">Total confirmed</th>
                    <th scope="col">New confirmed</th>
                    <th scope="col">Total deaths</th>
                    <th scope="col">New deaths</th>
                    <th scope="col">Total recovered</th>
                    <th scope="col">New recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr scope="row" v-for="(country, index) in countries.Countries" :key=index>
                    <td scope="col">
                      <img class="img" v-bind:src="'https://www.countryflags.io/' + countries.Countries[index].CountryCode + '/flat/24.png'"> 
                      <router-link v-bind:to="'/CountryInfo/' + countries.Countries[index].CountryCode">{{countries.Countries[index].Country}}</router-link>
                    </td>
                    <td scope="col">{{countries.Countries[index].TotalConfirmed}}</td>
                    <td scope="col">{{countries.Countries[index].NewConfirmed}}</td>
                    <td scope="col">{{countries.Countries[index].TotalDeaths}}</td>
                    <td scope="col">{{countries.Countries[index].NewDeaths}}</td>
                    <td scope="col">{{countries.Countries[index].TotalRecovered}}</td>
                    <td scope="col">{{countries.Countries[index].NewRecovered}}</td>
                </tr>
            </tbody>
        </table>
        <p></p>
    </div>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime";
export default {
  data () {
    return {
      countries: []
    };
  },
    async created() {
      fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((data) =>{
        this.countries = data;
      })
    },
     async updated () {
        $(document).ready(function(){
            $('#tab').DataTable({
                "order": [[ 1, "desc" ]],
                "scrollX": true,
                "pageLength": 25
            });
        });
     }
     }
</script>