import axios from "axios"

class fake_data
{
   
 static getkv(){
  return new Promise((resolve,reject) =>{
     axios
     .get("http://localhost:5000/getKV")
     .then((res)=> {const data = res.data; 
        resolve( data.map(kv=> ({ ...kv, link:"/One_kv/"+kv.id })))
      })
      .catch((err)=>{
         reject(err);
     });
  })

 }



 static getOne(id){
   return new Promise((resolve,reject) =>{
      axios
      .get("http://localhost:5000/getOne/"+id)
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





  static getDoc(){
   return new Promise((resolve,reject) =>{
      axios
      .get("http://localhost:5000/getDocs/")
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