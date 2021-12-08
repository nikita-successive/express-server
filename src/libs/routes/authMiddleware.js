import{ hasPermission } from '../../../extra';
const authMiddleware = (module,hasPermission)=>(req,res,next)=>{
const token=req.headers['authorization'];
if(token!='undefined')
break;
else{
    res.json({message:"unauthorized"});
}
}




