<template>
<div>
  <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    :title= doc
  >
  </b-card>

<span>
  <b-button><router-link to= '/documents'><a>Назад</a></router-link></b-button>
  <b-button><router-link to= '/apartments'><a>Все квартиры</a></router-link></b-button>
</span>



</div>

  
</template>


<script>
import fake_data from "../js/fake_data"

export default {
    props: ['doc', 'id'], 
  data() {
    return {
      data: [],
      errors: []
    }
  },

    async mounted () {
    try{
      console.log(this.id);
        this.data =  await fake_data.onedoc(this.id)
    }
    catch(err){
      this.errors = err
    }
  }
}
</script>


<style>
span {
  display: flex;
  justify-content: space-between;
  padding-top: 35px ;
}
a{
  color:rgb(161, 238, 238)
}
a:hover{
  color: bisque;
}
</style>
