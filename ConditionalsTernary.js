// conditionals and  ternary
// declaring variables
let age = 18;
let name  = "uzair";

// simple conditionals
if(age == '18') {
    name  = 'uzair';
}else {
    name = 'ali';
}

// ternary operators to make conditionals

 let Name  = age == 16 && "uzair";

 let Namee = age == 18 ? "uzair" : "Ali";
 
 
//  ternary in react js 
const Component = () => {
    return age > 10 ? <div>Ali</div> : <div>Uzair</div>; 
}