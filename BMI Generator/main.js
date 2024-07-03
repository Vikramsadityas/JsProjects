const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if(height===null || isNaN(height) || height==" ")
  {
    result.innerHTML="Please give a number value of height"
  }
  else if(weight===null || isNaN(weight) ||weight==" " )
  {
    result.innerHTML="Please give a number value of weight"
  }
  else
  {
    height=height/100
    const calculate=(weight/(height*height)).toFixed(2)
    result.innerHTML=`Your BMI Index is: ${calculate}`
  }
});
