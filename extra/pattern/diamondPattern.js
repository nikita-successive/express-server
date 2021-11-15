export default function diamond(row){
    let diamond= "";
    for (let node= 1; node<=row; node++) {
      for (let  coloumn= row;  coloumn> i; coloumn--) {
        diamond += " ";
      }
      for (let star = 0; star < i; star++) {
        diamond += "* ";
      }
      diamond+= "\n";
    }
    for (let node = 0; node<= row-1 ; node++) {
      for (let coloumn = 0; coloumn< node; coloumn++) {
        diamond+= " ";
      }
      for (let star = (row- node); star> 0; star--) {
        diamond += "* ";
      }
      diamond+= "\n";
    }
    console.log(diamond);
  }
