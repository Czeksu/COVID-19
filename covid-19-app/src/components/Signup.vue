<template>
    <div class="row" style="margin:auto; width: 300px;">
      <form @submit.prevent="pressed">
                <h1 class="display-4" style="text-align:center; font-size: 45px;">COVID 19 APP</h1>
                <h1 class="display-4" style="text-align:center; font-size: 30px;">Coronavirus info in one place</h1>
                <hr>
                <h1 class="display-4" style="text-align:center;">Sign up</h1><br>
                <div class="form-group">
                <label for="exampleInputEmail2">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" v-model="email"  style="width: 300px;">
                </div>
                <div class="form-group">
                <label for="exampleInputPassword2">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" v-model="password" />
                 </div>
            <button type="submit" class="btn btn-primary">Submit</button><br><br>
            <div class="error" v-if="error">{{error.message}}</div>
      </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "login" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>