<template>
  <div >
       <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="2">
        <b-card-img :src=img alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="10">
        <b-card-body :title= address>
          <b-card-text>
            {{description}}
            <hr> 
            <router-link :to= "{name: 'kv', params: {id: id }}" >Подробнее</router-link> 
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
    </b-card>
    <br>
  </div>
</template>


<script>
export default {
 props:{
    img:String,
    description: String,
    link:String,
    address: String,
    id: Number
  }
}
</script>

<style>
div{
  padding-top: 10px;
}
</style>
