  const raining = true;
  const cold = false;
  if (raining) console.log('Don\'t forget your umbrella ');
  if (cold){
    console.log ('make sure you pick out a scarf');
  }else{
    console.log('short sleeve is fine');
  }
  
  console.log('now you are ready to go outside');

  const temp = 12;

  if (temp < 0){
    console.log('its snowing');
  }else if (0 < temp < 15){
    console.log('wear a jacket');
  }else{
    console.log('wear whatever you want');
  }

  const isCitizen = true;
  const age = 26;
  
  if(isCitizen && age > 18){
    console.log('you are eligible to vote.');
  }

  if (temp > 40 || temp < -40){
    console.log('It isn\'t a good idea to go outside');
  }

  if(!raining){
    console.log('you dont need your umbrella');
  }

  