<template>
  <div>
    <h1>ciao questa e la mia home</h1>

    <nav>
      <router-link to="/">Post</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>



    <router-view></router-view>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav{
  display: flex;
  gap: 10px;
  justify-content: center;
}

</style>
