document.getElementById('form').onsubmit=function(){
window.alert(document.getElementById('form').word.value);
}

for(var i=1; i<100; i++){
  if(var i% 3 === 0 && i%5 !==0){
  console.log('Fizz');
  }else if(i%3 !==0 && i%5 ===0){
  console.log('Buzz');
  }else if(i%3 ===0 && i%5 ===0){
  console.log('FizzBuzz');
  }else{
  console.log(i);
  }
var li=document.createElement('li');
  li.textContent=i+'回目';
document.getElementById('list').appendChild(li);
}


