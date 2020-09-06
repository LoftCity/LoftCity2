import axios from "axios"

class fake_data
{
   
 static getkv(filters){
  return new Promise((resolve,reject) =>{
     axios
     .get("http://localhost:5000/apartments/"+filters)
     .then((res)=> {const data = res.data; 
        resolve( data.map(kv=> ({ ...kv, link:"/kv/"+kv.id})))
      })
      .catch((err)=>{
         reject(err);
     });
  })

 }



 static one(id){
   return new Promise((resolve,reject) =>{
      axios
      .get("http://localhost:5000/one/"+id)
      .then((res)=> {
         const data = res.data; 
         console.log(data);
         resolve(
            data
            )
       })
       .catch((err)=>{
          reject(err);
        
 
      });
   })
  }





  static doc(){
   return new Promise((resolve,reject) =>{
      axios
      .get("http://localhost:5000/docs/")
      .then((res)=> {
         const data = res.data; 
         console.log(data);
         resolve(
            data
            )
       })
       .catch((err)=>{
          reject(err);
        
 
      });
   })
  }




}
export default  fake_data;