

function fiboSeries(int){
  let a= 0;
  let b=1
  let fabo
  if(int === 0) return 0;
  if(int === 0) return 1;
  for(let i=2; i<=int; i++){
     fabo = a+b;
    a=b;
    b=fabo
  }
  return b;
}

console.log(fiboSeries(5));

