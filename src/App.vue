<template>
  <header>
    <Logo/>
    <Menu/>
  </header>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script>
  import Menu from './Components/Menu'
  import Logo from './Components/Logo'
  import Footer from './Components/Footer'

  export default {
    name: 'App',
    components: {
      Menu,
      Logo,
      Footer
    }
  }
</script>