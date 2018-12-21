<template>
  <div class="header">
    <h3 class="about-title">{{messagetitle}}</h3>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i> </i></b>
          <p> We're Spruced, a creative platform that allows different barbers to showcase their skills. </p>
          <p> This is a dedicated portfolio platform for new and old barbers to gain some recognition. </p>
          <p> Although in a starting phase, the main goal is to have a multifunctional space, with your very own barber
            profiles & personal albums of uploaded cuts. </p>
          <p> <img src="../assets/neat.gif" alt="description here" /> </p>
        </td>
        <td>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      messagetitle: ' Welcome! '
    }
  }
}
</script>

<style scoped>
  .about-title {
    margin-top: 40px;
    text-align: center;
    font-size: 30pt;
    font-weight: 800;
    margin-bottom: 10px;
    color: khaki;
  }
  .header {
   color: white;
  }
</style>
