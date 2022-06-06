function scuberGreetingForFeet(distance){
  if (distance < 400){
    return 'This one is on me!'
  }
  else if (distance < 2000){
    return "That will be twenty bucks."
  }
  else if (distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else
  return 'No can do.'
}

function ternaryCheckCity(city){
  const check = city;
  const checkCity = check == 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return checkCity
}

function switchOnCharmFromTip(tip){
  let message;
  switch(tip){
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.'
      break;
    default:
      message = 'Bye.'
      break;
  }
return message
}