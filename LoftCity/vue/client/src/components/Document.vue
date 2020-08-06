<template>
<div>
<b-card bg-variant="dark" text-variant="white" :title= doc >
  <b-card-text>
    {{text}}
  </b-card-text>
   <b-card-text>
      Cтатус: {{word}}
  </b-card-text>
  <b-button href="#" variant="primary">Подробнее</b-button>
</b-card>
</div>
</template>




<script>
export default {
 props:{
    text: String,
    id: Number,
    word:String,
    doc: String,
  }
}
</script>




<style >
div{
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>