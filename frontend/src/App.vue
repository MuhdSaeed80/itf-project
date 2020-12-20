<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|

      <!-- NEW - add a route to the profile page -->
      <router-link v-if="onSubmit" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#login {
  margin-top: 10%;
  padding-top: 10%;
  text-align: center;
}
#input-group-1 {
  width: 25%;
  margin-left: 38%;
}
#input-1 {
  border-width: 2px;
  border-style: inset;
}
#input-group-2 {
  width: 25%;
  margin-left: 38%;
}
#input-2 {
  border-width: 2px;
  border-style: inset;
}
</style>
