<template>
    <div class="row" style="margin:auto; width: 300px;">
            <form @submit.prevent="pressed">
                <h1 class="display-4" style="text-align:center; font-size: 45px;">COVID 19 APP</h1>
                <h1 class="display-4" style="text-align:center; font-size: 30px;">Coronavirus info in one place</h1>
                <hr>
                <h1 class="display-4" style="text-align:center;">Sign in</h1><br>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email"  style="width: 300px;">
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
                 </div>
            <button type="submit" class="btn btn-primary">Submit</button><br><br>
            <div style="text-align:center;">
            <button type="button" class="btn btn-default" @click="signWithGoogle"><img src="https://i2.wp.com/admonkey.pl/wp-content/uploads/2016/12/google-logo-png.png" width="50px" height="50px"></button>
            </div>
            <div class="error" v-if="error">{{error.message}}</div>
            </form>
            
    </div>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data () {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
      methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "home" });
        })
        .catch(error => {
          this.error = error;
        });
    },
    signWithGoogle(){
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  }}
</script>