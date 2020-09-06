<template>
  <div>
    
    <doc v-for="res in data" 
    :key = res.id
    v-bind:text= res.text 
    v-bind:word= res.word 
    v-bind:doc= res.doc 
    />


 

<div class = "justify">
      <b-button-toolbar class="justify" key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button>&laquo;</b-button>
          <b-button>&lsaquo;</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button>1</b-button>
          <b-button>2</b-button>
          <b-button>3</b-button>
          <b-button>4</b-button>
          <b-button>5</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group>
      </b-button-toolbar>
</div>

  </div>
</template>

<script>
import doc from "../components/Document";
import fake_data from "../js/fake_data"

export default {
  components: {
     doc
   },
  data() {
    return {
      data: [],
      errors: []
    }
  },



  async mounted () {
    try{
        this.data =  await fake_data.doc()
    }
    catch(err){
      this.errors = err
    }
  }
}
</script>
 





<style scoped>
.justify{
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}


</style>