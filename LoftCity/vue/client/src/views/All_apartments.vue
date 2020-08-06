<template>
  <div>
    
    <kv v-for="res in data" 
    :key="res.img" 
    v-bind:img= res.img 
    v-bind:description= res.description 
    v-bind:address= res.address 
    v-bind:link= res.link 
    v-bind:id= res.id 
    />

<div class = "justify">
      <b-button-toolbar class="justify" key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1" >
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
import kv from "../components/One_apartment";
import fake_data from "../js/fake_data"

export default {
  components: {
     kv
   },
  data() {
    return {
      data: [],
      result:[],
      errors: []
    }
  },

  async mounted () {
    try{
        this.data =  await fake_data.getkv()
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