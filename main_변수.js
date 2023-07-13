//  변수 유효범위( Variable Scopr)
// var, let, const

function scope(){
  if(true){
    const a = 123
    console.log(a)
  }
  
}
scope()