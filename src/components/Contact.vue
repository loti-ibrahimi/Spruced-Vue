<template>
  <div class="header">
    <h3 class="contact-title">{{messagetitle}}</h3>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>  </i></b>
          <p><i class="fa fa-envelope-square"></i> Email: info@spruced.com </p>
          <p><i class="fa fa-phone"></i> Tel: 0531256824 </p>
          <p><i class="fa fa-facebook-square"></i> Spruced </p>
          <p><i class="fa fa-instagram"></i> Spruced </p>
          <p><i class="fa fa-twitter"></i> Spruced </p>
          <p> </p>
        </td>
        <td>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      messagetitle: ' FEEL FREE TO CONTACT US '
    }
  }
}
</script>

<style scoped>
  .contact-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
