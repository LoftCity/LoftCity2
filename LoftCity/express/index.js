const express = require('express');
const cors  = require('cors');
const body_parser  = require('body-parser');
const faker = require('faker');
const jsf = require('json-schema-faker');
const app = express();
app.use(body_parser.json())
app.use(cors())


var kv = Array();
for (let i=0; i<500; i++){
    kv[i]={
      "id":i,
      "img": faker.image.avatar(),
      "img2": faker.image.avatar(),
      "img3": faker.image.avatar(),
      "description": faker.lorem.paragraph(),
      "address": faker.address.streetAddress() ,
      "email":faker.internet.email(),
      "numroom":faker.random.number({
        'min': 1,
        'max': 3
    })
    }
}


  app.get('/one/:app', async (req,res)=>{ 

     param = req.params.app; 
     var onekv = kv[param];
     res.json(onekv);
    })

   app.get('/apartments/page=:page&filter=:filter', async (req,res) => {
    let all = Array();
    let onPage = Array();
    let LIMIT_PAGE = 5;
    let count = 0;
    let f = req.params.filter.split(',')
    for(let i= 0;i < f.length;i++){
      for (let j= 0; j< kv.length; j++){
           if(kv[j].numroom == req.params.filter[i]){
              all[count++]=kv[j]       
           }
      }
    }
  
    for(let i = LIMIT_PAGE*(req.params.page-1);all.length > i && i < LIMIT_PAGE*(req.params.page); i++){
      onPage.push(all[i])
    }
    res.json(onPage);
   })


// An api endpoint that returns a short list of items
var doc = Array();
var docs=["Kвитанции об оплате коммунальных услуг", "Документ о ежемесячной оплате аренды", "Документ о временной регистрации", "Договор о заверенной доверенности"]
for (let i=0; i<4; i++){
    doc[i]={
      "id":i,
      "doc": docs[i],
      "text": faker.lorem.paragraph(),
      "word":faker.random.word()
    }
}

app.get('/docs', (req,res) => {
    res.json(doc);
    console.log('Sent list of items (docs)');
});


app.get('/doc/:id', async (req,res) => {
    param = req.params.id; 
    var onedoc = doc[param];
    res.json(onedoc);
    console.log('Sent list of items (docs) with id');
});


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log('App is listening on port ' + port);
});


