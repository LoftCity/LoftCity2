<template>
  <div>

      <b-form-group label= "Выберите количество комнат:">
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="flavour-3a"
      >
        {{ option.text }}

        
      </b-form-checkbox>
      <br>
      <b-button @click="Choice">Применить</b-button>
    </b-form-group>


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
  
          <b-button v-show="prev" @click="prevPage">&lsaquo;</b-button>
        </b-button-group>
      
        <b-button-group class="mx-1">
          <b-button v-show="next" @click="nextPage">&rsaquo;</b-button>

        </b-button-group>
      </b-button-toolbar>
</div>
  </div>
</template>

<script>
import kv from "../components/One_apartment";
import fake_data from "../js/fake_data";

export default {
  name: 'apartments',
  components: {
     kv
   },
  data() {
    return {
      prev:1,
      next:1,
      page:1,
      data: [],
      count:Number,
      errors: [],
      selected: [1,2,3], 
      options: [
        { text: '1-комнатная', value: '1' },
        { text: '2-комнатная', value: '2' },
        { text: '3-комнатная', value: '3' }
      ]
    }
  },



  methods: {
    async prevPage(){
      if(this.page>1)
        this.page--
      else
       this.prev = 0
      this.next = 1
         try{
        this.$router.push(`/apartments?page=${this.page}&filter=${this.selected}`)
        this.data =  await fake_data.getkv("page="+this.page+"&filter="+this.selected)
    }
    catch(err){
      this.errors = err
    }
    },

  





    async nextPage(){
      if(this.page <4)
         this.page++
      else
        this.next = 0
      this.prev = 1
         try{
        this.$router.push(`/apartments?page=${this.page}&filter=${this.selected}`)
        this.data =  await fake_data.getkv("page="+this.page+"&filter="+this.selected)
       
    }
    catch(err){
      this.errors = err
    }
    },






   async Choice(){
      try{
        this.$router.push(`/apartments?page=${this.page}&filter=${this.selected}`)
        this.data =  await fake_data.getkv("page="+this.page+"&filter="+this.selected)
    }
    catch(err){
      this.errors = err
    }
  }
  },







  async mounted () {
   
    try{
        if(this.$route.query.filters != null){
        this.selected = this.$route.query.filters.split(",")
      }
        if(this.$route.query.page != null){
        this.page = this.$route.query.page
      }
      
        this.data =  await fake_data.getkv("page="+this.page+"&filter="+this.selected)
    }
    catch(err){
      this.errors = err
    }
     this.$router.push(`/apartments?page=${this.page}&filter=${this.selected}`)
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