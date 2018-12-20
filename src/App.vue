<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/Spruced-icon.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/"> Spruced </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/cuts"><i class="fa fa-scissors" style="padding: 5px"> View Cuts </i></b-nav-item>
          <b-nav-item to="/barbers"><i class="fa fa-users" style="padding: 5px"> View Barbers </i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us </i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-phone" style="padding: 5px"> Contact Us </i></b-nav-item>
          <i class="fa fa-globe fa-2x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app1 {
  width: 80%;
  margin: 40px auto;
  text-align: center;
}
</style>
