<script>
import Button from "../Shared/Button.vue"
import { filter24hrTicker } from "../../services/data.js"
  export default {
    components :{
      Button
    },
    data() {
      return {
        buttonData : [
          {
            text : "Add Stock",
            handler : this.modalChange
          },
          {
            text : "Refresh"
          }
        ]
      }
    },
    methods:{
      modalChange(){
        this.$store.commit('modalChangeStatu')
      }
    }
  }
</script>

<template>
  <div class="header">
    <div>
      <Button v-for="button in buttonData" :text="button.text" :handler="button.handler" ></Button>
    </div>
    <h1>Emircan</h1>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


</style>
