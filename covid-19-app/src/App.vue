<template>
  <div class="container" style=" width: 100%;">
    <header class="header">
        <img class="img" @click="$router.push('/').catch(err =>{})" src="https://img.icons8.com/nolan/64/coronavirus.png">
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
           <li>
            <a @click="$router.push('/').catch(err =>{})">Home</a>
          </li>
          <li>
            <a @click="$router.push('/countries').catch(err =>{})">Countries</a>
          </li>
          <li>
            <a @click="$router.push('/info').catch(err =>{})">Info</a>
          </li>
          <li>
            <a @click="$router.push('/news').catch(err =>{})">News</a>
          </li>
        </ul>
        </header>
    <router-view></router-view>
  </div>
</template>
