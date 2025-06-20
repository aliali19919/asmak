<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from"/src/components/MainComponents/Header"
import Footer from "/src/components/MainComponents/Footer"
export default{
components:{Header,Footer},

}
</script>
<style>

</style>
