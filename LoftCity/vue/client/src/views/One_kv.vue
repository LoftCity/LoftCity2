<template>
<div>
  <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid :src= data.img alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src= data.img2 alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid :src= data.img3 alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
<b-card-text>
    {{data.description}}
</b-card-text>
<b-card-text>
    {{data.address}}
</b-card-text>
<b-card-text>
    {{data.email}}
</b-card-text>
<span>
  <b-button><router-link to= '/apartments'>Назад</router-link></b-button>
  <b-button><router-link to= '/documents'>Документы для заполнения</router-link></b-button>
</span>
</div>
</template>

<script>
import fake_data from "../js/fake_data"
export default {

  props: ['id'], 

  data() {
    return {
      data: [],
      errors: []
    }
  },

  async mounted () {
    try{
      console.log(this.id);
        this.data =  await fake_data.one(this.id)
    }
    catch(err){
      this.errors = err
    }
  }

}
</script>


<style>
div{
  padding-top: 10px;
}
span {
  display: flex;
  justify-content: space-between;
  padding-top: 35px ;
}
</style>
