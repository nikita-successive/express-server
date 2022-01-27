const mongoose=require('mongoose');
class Database{
    open(url){
        let flag ;
        flag = mongoose.connect(url)
        .then(()=>{
            console.log("connection successful")
            return true;
        })
        .catch((err)=>{
            console.log(err)
            return false;
        })  
        return flag     
}
disconnect(url){
  

}
}

export default new Database();
