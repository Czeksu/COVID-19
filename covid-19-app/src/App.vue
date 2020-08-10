<template>
  <div class="container" style=" width: 100%;">

    <header class="header">
    
        <img class="img" @click="$router.push('/home').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu"> 
           <li> 
            <a @click="$router.push('/home').catch(err =>{})" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'">Home</a>
          </li>
          <li> 
            <a @click="$router.push('/countries').catch(err =>{})" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'">Countries</a>
          </li>
          <li> 
            <a @click="$router.push('/info').catch(err =>{})" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'">Info</a>
          </li>
          <li> 
            <a @click="$router.push('/news').catch(err =>{})" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'">News</a>
          </li>
          <li> 
            <a @click="$router.push('/authors').catch(err =>{})" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'">Authors</a>
          </li>
          <li> 
            <a @click="$router.push('/').catch(err =>{})" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo/x' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'" id="signin">Sign in</a>
          </li>
          <li> 
            <a @click="$router.push('/signup').catch(err =>{})" style="border-right: 0;" v-if="this.$route.path !== '/countries' && this.$route.path !== '/info' && this.$route.path !== '/countryinfo' && this.$route.path !== '/news' && this.$route.path !== '/authors' && this.$route.path !== '/home'" id="signup">Sign up</a>
          </li>
          <li> 
            <a @click="$router.push('/').catch(err =>{})" style="border-right: 0;" v-if="this.$route.path !== '/' && this.$route.path !== '/signup'"><logout></logout></a>
          </li>
        </ul>
        </header>

    <router-view></router-view>
  </div>
</template>

<script>

import Logout from './components/Logout';
export default {
        components: {'logout': Logout}
}
</script>
