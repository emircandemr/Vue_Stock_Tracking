<script>
import Button from "../Shared/Button.vue"
import { filter24hrTicker } from "../../services/data.js"
import Footer from "../Footer/Footer.vue"
  export default {
    components :{
    Button,
    Footer
},
    data() {
      return {
        buttonData : [
          {
            text : "Add Stock",
            handler : this.modalChange,
          },
          {
            text : "Refresh",
            handler : this.refreshHandler,
            // clickable : false
          }
        ]
      }
    },
    methods:{
      modalChange(){
        this.$store.commit('modalChangeStatu')
        this.$store.commit('loadingChangeStatu',true)
      },
      refreshHandler(){
        this.$store.dispatch('refreshStock')
      }
    },
  }
</script>

<template>
  <div class="header">
    <div class="header__btn">
      <Button v-for="button in buttonData" :text="button.text" :handler="button.handler" :clickable="button.clickable" ></Button>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;

    &__btn{
      width: 350px;
      height: 100%;
      gap: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }


  @media only screen and (min-device-width : 320px) and (max-device-width : 768px){
    .header{
      padding: 0.8rem 1rem;

      &__btn{
        width: 100%;
        gap: 1rem;

    }
  }

  }


</style>
