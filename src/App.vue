<template>
  <Logo/>
  <Menu/>
  <main>
    <router-view/>
  </main>
</template>

<script>
  import Menu from './Components/Menu'
  import Logo from './Components/Logo'

  export default {
    name: 'App',
    components: {
      Menu,
      Logo
    }
  }
</script>