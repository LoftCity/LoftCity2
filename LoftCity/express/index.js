const express = require('express');
const cors  = require('cors');
const body_parser  = require('body-parser');
const faker = require('faker');
const jsf = require('json-schema-faker');
const app = express();
app.use(body_parser.json())
app.use(cors())


var kv = Array();
for (let i=0; i<10; i++){
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




app.get('/one', (req,res) => {
  var onekv = [  
          {
          "city": faker.image.avatar(),
          "text": faker.lorem.paragraph(),
          "address": faker.address.streetAddress() ,
          "email":faker.internet.email(),
          "number" : faker.phone.phoneNumber()
           }
      ];
  res.json(onekv);
  console.log('Sent list of items(One)');
});




// An api endpoint that returns a short list of items
app.get('/apartments/:filter', (req,res) => {
  let result = Array();
  let count=0;
  for(let i= 0;i <  req.params.filter.length;i++){
    for (let j= 0; j< kv.length; j++){
         if(kv[j].numroom == req.params.filter[i])
         result[count++]=kv[j]
    }
  }
    res.json(result);
    console.log('Sent list of items (kv)');
    
});


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


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log('App is listening on port ' + port);
});


