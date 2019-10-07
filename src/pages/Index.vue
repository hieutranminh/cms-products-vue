<template>
  <div id="wrapper">
    <!--Side bar-->
    <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!--Header navbar-->
        <Header/>
        <!--Page content-->
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <!--Footer-->
      <Footer/>
    </div>
  </div>
</template>

<script>
  import SideBar from '../layouts/SideBar'
  import Header from '../layouts/Header'
  import Footer from '../layouts/Footer'

  export default {
    name: 'Index',
    components: {Header, Footer, SideBar},
  }
</script>
