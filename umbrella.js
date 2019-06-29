let umbrella = {
  color: 'Pink',
  open: true,
  openUmbrella: () => {
    if (!umbrella.open) {
      umbrella.open = true;
      console.log('Opening umbrella');
    } else {
      console.log('The umbrella is already opened');
    }
  },
  closeUmbrella:() => {
    if(!umbrella.open){
      console.log('The umbrella is already closed');
    }else{
      umbrella.open = false;
      console.log('Closing umbrella');
    }
  }

}

