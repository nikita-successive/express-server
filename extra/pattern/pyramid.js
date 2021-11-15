export default function pyramid(row,type){
    if(type=="half_pyramid"){
        let halfPyramid="";
        for(var node=1;node<=row;node++){
            for(var coloumn=1;coloumn<=row;coloumn++){
                if(coloumn<=node){
                    halfPyramid+=coloumn;
                    halfPyramid+=" ";
                }
                else
                    halfPyramid+=" ";   
        }
        halfPyramid+= "\n";
    }
        console.log(halfPyramid);
}
else if(type=="differpyramid"){
    let differpyramid="";
    for(let node=1;node<=row;node++){
    
         for(coloumn=1;coloumn<=17;coloumn++){
        
            if(coloumn>=10-node&& coloumn<=8+node && coloumn%2==0 && node%2==0) 
         {
            differpyramid+=i;
         }
         else if(coloumn>=10-node&&coloumn<=8+node && coloumn%2!=0 && node%2!=0)
            {
            differpyramid+=i;
            }
       else{
            differpyramid+="*"; 
       }  
    }
        differpyramid+="\n";
}
    console.log(differpyramid);
}
else if(type == 'fullpyramid'){
    let fullpyramid_pattern = "";
    for (let node = 1;  node<= row; node++) {
        for (let column = 1; column <= row- node; column++) {
            fullpyramid_pattern += "  ";
        }
        let odd_half = node;
        let even_half = 2*node-2;
        for (let column = 1; column <= 2 * node- 1; column++) {
            if(column<=node){
                fullpyramid_pattern += `${odd_half} `;
                odd_half+=1;
            }
            else{
                fullpyramid_pattern+=`${even_half} `;
                even_half = even_half-1;
            }
        }
        fullpyramid_pattern += "\n";
    }
    console.log(fullpyramid_pattern);
    }
}
