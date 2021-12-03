const validationHandler = (config) => (req, res, next) =>{
     const errMessage = [];
     let flag = false;
     for (const key in config) {
        const dataPlace = config[key].in;
        let input = req[dataPlace][key];
        
    for (const keyProperty in config[key]) {
        
            switch (keyProperty) {

                case 'required':
                    if(key=='skip'){
                        if(req[dataPlace].skip!=undefined){
                            let regex= /^[0-9]+$/.test(req[dataPlace].skip);
                                if(regex==true){
                                    console.log(req[dataPlace].skip);
                                    break;
                                }
                                else{
                                    errMessage.push('Skip is required in number');
                                    flag = true;
                                    break;
                                }
                            }
                        else{
                            req[dataPlace].skip=0;
                            console.log(req[dataPlace].skip);
                        }
                        
                    }
                    else if(key == 'limit'){
                        if(req[dataPlace].limit!=undefined){
                            let regex= /^[0-9]+$/.test(req[dataPlace].limit);
                                if(regex==true){
                                    console.log(req[dataPlace].limit);
                                    break;
                                }
                                else{
                                    errMessage.push('limit is required in number');
                                    flag = true;
                                    break;
                                }
                            }
                        else{
                            req[dataPlace].limit=10;
                            console.log(req[dataPlace].limit);
                        }
                    }      
                                
                else{     
                            
                    if ((key in req[dataPlace]) && input !== null) {
                        break;
                    }
                    else {
                        errMessage.push(`${key} is required`);
                        flag = true;
                    }
                    break;
                }
                    
                case 'string':
                    const value = input;
                    if(typeof value != 'undefined') {
                    if((key in req[dataPlace] && typeof value === 'string')) {
                        
                        break;
                    }
                    else {
                        errMessage.push(`${key} should be in string`);
                        flag = true;
                        break;
                    }
                    
                }
                case 'regex':
                    let pattern = /^[a-zA-Z]+$/.test(input);
                    if(pattern==true)
                    break;
                    else {
                        errMessage.push(`${key} is not appropriate`);
                        flag = true;
                        break;
                    }
                    case 'custom':
                        if(input!== ""){
                            break;
                        }
                        else{
                            errMessage.push(`${key} should not be null`);
                            flag=true;
                            break;
                        }
                     case 'isObject':
                        console.log(typeof req[dataPlace].dataToUpdate);
                        if(typeof req[dataPlace].dataToUpdate =="object"){
                        
                
                         break;
                      }
                      else{
                        errMessage.push(`${key} not equal to  object`);
                        flag=true;
                        break; 
                      }  
                      
        
            }
            
        }
     }
if(flag == true){
    res.json(`Error:${errMessage}`);
}
else{
    next();
}   
}
export default validationHandler;     