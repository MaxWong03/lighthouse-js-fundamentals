const packingList = ['Mac', 'Wallet', 'Clothes', 'Headphones', 'Gloves'];
console.log('Stuff to pack:');
packingList.forEach(e => console.log(e));

console.log('Stuff to pack (using While loop:');
let i = 0;
while (i < packingList.length){
  console.log(packingList[i]);
  i++;
} 

//