<script>
  import Button from "../Shared/Button.vue"
  import Footer from "../Footer/Footer.vue"
  import { mapGetters } from "vuex"

  export default {
    components :{
    Button,
    Footer
    },
    data() {
      return {
        buttonData : [
          {
            id : 1,
            text : "Add Stock",
            handler : this.modalChange,
          },
          {
            id :2,
            text : "Refresh",
            handler : this.refreshHandler,
            clickable : null
          }
        ]
      }
    },
    methods:{
      modalChange(){
        this.$store.commit('modalChangeStatu')
      },
      refreshHandler(){
        this.$store.dispatch('refreshStock')
      }
    },
    computed:{
      ...mapGetters({
        selectedStock : "getSelectedStock",
      }),
      isStockEmpty(){
        return this.selectedStock.length > 0
      }
    },
    watch : {
      isStockEmpty : {
        handler(){
          this.buttonData[1].clickable = this.isStockEmpty
        },
        immediate : true
      }
    }
  }
</script>

<template>
  <div class="header">
    <div class="header__btn">
      <Button v-for="button in buttonData"
      :key="button.id"
      :text="button.text"
      :handler="button.handler"
      :clickable="button.clickable">
      </Button>
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

  @media screen and (max-width: 1024px){
    .header{
      padding: 0.8rem 1rem;
      &__btn{
        width: 100%;
        gap: 1rem;
    }
  }
}
</style>
