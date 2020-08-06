const express = require('express');
const cors  = require('cors');
const body_parser  = require('body-parser');
const faker = require('faker');
const jsf = require('json-schema-faker');
const app = express();
app.use(body_parser.json())
app.use(cors())



var kv = [   {
  "id":0,
  "img": faker.image.avatar(),
  "img2": faker.image.avatar(),
  "img3": faker.image.avatar(),
  "description": faker.lorem.paragraph(),
  "address": faker.address.streetAddress() ,
  "email":faker.internet.email()
},
{
  "id":1,
  "img": faker.image.avatar(),
  "img2": faker.image.avatar(),
  "img3": faker.image.avatar(),
  "description": faker.lorem.paragraph(),
  "address": faker.address.streetAddress() ,
  "email":faker.internet.email()
},
{
  "id":2,
  "img": faker.image.avatar(),
  "img2": faker.image.avatar(),
  "img3": faker.image.avatar(),
  "description": faker.lorem.paragraph(),
  "address": faker.address.streetAddress() ,
  "email":faker.internet.email()
},
{
  "id":3,
  "img": faker.image.avatar(),
  "img2": faker.image.avatar(),
  "img3": faker.image.avatar(),
  "description": faker.lorem.paragraph(),
  "address": faker.address.streetAddress() ,
  "email":faker.internet.email()
},
];





  app.get('/getOne/:app', async (req,res)=>{ 

     param = req.params.app; 
     var onekv = kv[param];
     res.json(onekv);
    })




// An api endpoint that returns a short list of items
app.get('/getList', (req,res) => {
    var list = [faker.name.prefix(), faker.name.prefix(), faker.name.prefix()];
    res.json(list);
    console.log('Sent list of items');
});



app.get('/getOne', (req,res) => {
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
app.get('/getKV', (req,res) => {
    res.json(kv);
    console.log('Sent list of items (kv)');
    
});


// An api endpoint that returns a short list of items
app.get('/getDocs', (req,res) => {
    var docs = [   {
                    "id":1,
                    "doc":"Kвитанции об оплате коммунальных услуг",
                    "text": faker.lorem.paragraph(),
                    "word":faker.random.word()
                },
                {
                    "id":2,
                    "doc": "Документ о ежемесячной оплате аренды",
                    "text": faker.lorem.paragraph(), 
                    "word":faker.random.word()
                },
                {
                    "id":3,
                    "doc": "Документ о временной регистрации",
                    "text": faker.lorem.paragraph(),
                    "word":faker.random.word()
                },
                {
                    "id":4,
                    "doc": "Договор о заверенной доверенности",
                    "text": faker.lorem.paragraph(),
                    "word":faker.random.word()
                },
        ];
    res.json(docs);
    console.log('Sent list of items (docs)');
});




// // An api endpoint that returns a short list of items
// app.get('/:appid', (req,res) => {

//     var onekv = [  
//             {
//             "city": faker.image.city(),
//             "text": faker.lorem.paragraph(),
//             "address": faker.address.streetAddress() ,
//             "email":faker.internet.email(),
//             "number" : faker.phone.phoneNumber()
//              }
//         ];
//     res.json(onekv);
//     res.send('The view of appartment' + res.params.appid)
//     console.log('Sent list of items(One)');
// });




// Handles any requests that don't match the ones above




const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log('App is listening on port ' + port);
});


