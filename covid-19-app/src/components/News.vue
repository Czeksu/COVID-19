<template>
<div>
        <div class="container">
          <div>
            <h2 style="text-align: center; margin-bottom: 20px;"><img style="width:70px; height:50px; align-item: center; border-radius: 10px;" src="https://upload.wikimedia.org/wikipedia/commons/4/45/US-CDC-Logo.png"> CDC Online Newsroom</h2>
            <div style="max-height: 340px; overflow: auto; padding: 20px;border-style: groove; border-radius: 20px 10px 10px 20px;">
              <div v-for="(item, index) in news.rss.channel[0].item" :key=index >  
                  <h4 style="text-align: center">{{news.rss.channel[0].item[index].title[0]}}</h4>
                  <p id="description" style="text-align: left">{{news.rss.channel[0].item[index].description[0]}}</p>
                  <p style="text-align: center">{{news.rss.channel[0].item[index].pubDate[0]}}</p>
                  <hr style="height:2px;">
              </div>
            </div>
          </div><br><br>
          <div>
            <h2 style="text-align: center; margin-bottom: 20px;"><img style="width:70px; height:50px; align-item: center; border-radius: 10px;"src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg"> UN News</h2>
            <div style="max-height: 340px; overflow: auto; padding: 20px;border-style: groove; border-radius: 20px 10px 10px 20px;">
              <div v-for="(item, index) in ednews.rss.channel[0].item" :key=index>  
                  <h4 style="text-align: center">{{ednews.rss.channel[0].item[index].title[0]}}</h4>
                  <p id="description" style="text-align: left">{{ednews.rss.channel[0].item[index].description[0]}}</p>
                  <p type="url" style="text-align: center">{{ednews.rss.channel[0].item[index].pubDate[0]}}</p>
                  <hr style="height:2px;">
              </div>
            </div><br>
          </div>
        </div>
</div>
</template>

<script>
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
var parseString = require('xml2js').parseString;
export default {
  data () {
    return {
      ednews: [],
      news:[]
    };
  },
    created: function() {
        axios.get('https://tools.cdc.gov/api/v2/resources/media/132608.rss')
        .then(response => {
            var self = this; 
            parseString(response.data, function (err, result) {
            self.news = result
            });        
        })
         axios.get('https://news.un.org/feed/subscribe/en/news/topic/health/feed/rss.xml')
        .then(response => {
            var t = this; 
            parseString(response.data, function (err, result) {
            t.ednews = result
            });        
        });
    }
  }
</script>