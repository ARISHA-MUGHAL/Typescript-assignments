let guest_list : string[] = ['Tayyab ur rehman' , 'aqib ur rehman' , 'badar'];

// for(let i=0; i<guest_list.length; i++ ){ 
//     console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
// }
let absent_guest : string = 'badar';
let new_guestlist : string= 'saqib ur rehman';
guest_list[2] =new_guestlist ;

// for(let i=0; i<guest_list.length; i++ ){ 
//     console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
// }



console.log(` Ms . ${absent_guest} is not coming for dinner due to some issue`) ;

console.log('Exiting news!! we have secured a large table to accommodate three additional guests');


guest_list.unshift('rahila babar'); //unshift = add a new element to the beginning of array
guest_list.splice(2,0,'Mohammad babar'); //splice = add or remove element at a specific index
guest_list.push('zunairah'); // push= add element to the end of array


for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
}

console.log('\n\n\nApologies, we wont be able to arrange a larger table; only two people will be invited')

while(guest_list.length > 2){let remove_guest = guest_list.pop(); // pop= remove the last elements 
console.log(`Regretabbly, mr ${remove_guest}, you wont be joining us for dinner\n\n`);
}
for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are still welcome to a dinner party at my place \n\nThankyou!!\n\n')
}
guest_list.splice(0,2);

console.log(guest_list);
