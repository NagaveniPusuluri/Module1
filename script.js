function display(val){
    document.getElementById('result').innerHTML +=val;
    return val;
}
function solve(){
    let x = document.getElementById('result').innerHTML;
    let y = eval(x);
    document.getElementById('result').innerHTML = y;
    return y;
}
function reset(){
    document.getElementById('result').innerHTML="";
}
function del(){
  let p = document.getElementById("result").innerHTML;   
    p = p.slice(0, -1); 
    document.getElementById("result").innerHTML = p; 
}  
console.log(del());