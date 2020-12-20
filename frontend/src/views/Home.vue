<template>
  <div class="mt-5 " id="login">
    <b-form v-if="onSubmit" @submit="onSubmit">
      <img alt="Itf logo" src="../assets/itf_log.png">
      <b-form-group id="input-group-1" label="Username:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="email"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          type="password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Login</b-button>
    </b-form>
    <!-- show logout when authenticated -->
    <!-- <button v-if="$auth.isAuthenticated" @click="logout">Log out</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        token: null,
      }
    };
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/auth', {
       username: this.username,
       password: this.password
        })
      .then(resp => {
        this.token = resp.data.token;
        console.log(this.token)
        localStorage.setItem('user-token', resp.dat.token)
      })
      .catch(err => {
        localStorage.removeitem('user-token')
      })
    }
  },
  router.beforeEach((about,home,home) => {
  if (to.about !== 'Login' && !isAuthenticated) next({ name: 'home' })
  else next(home)
})
};
</script>
