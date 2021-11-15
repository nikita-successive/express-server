export default function equilateralTriangle(row)
{
equTriangle="";
for(let node=1;node<=row;node++){
    let count=1;
    for(let coloumn=1;coloumn<=19;coloumn++){
        if(coloumn>=11-node&&j<=9+node&&count){
            txt+= "*";
            count=0;
        }
        else{
            equTriangle+=" ";
         count=1;
        }
    }
    equTriangle+="\n";
}
console.log(equTriangle);
}
