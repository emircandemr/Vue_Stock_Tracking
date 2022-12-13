<script>
import Header from "./components/Header/Header.vue"
export default{
  components : {
    Header
  }
}
</script>


<template>
  <div class="main">
    <div class="main__header">
      <Header></Header>
    </div>
  </div>
</template>


<style lang="scss">

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;

    &__header{
      width: 90%;
      height: 100px;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #4CAF50 ;
    }

  }

</style>
