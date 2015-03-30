//Daniel davis, scope, deminstrates javascript scope //

var ice cream = 'rockyRoad'; // global variable ice cream

for(var i=0, i < 7, i++) { // i make local variable i
  ice cream = 'zombie flavored' // let's change the flavor for the shits and giggles
} // end of for loop
  
  print(ice cream); // prints out ice cream flavor
  print(i); // will not print because i is local variable and does not exist outsied of the forloop
  
} // end of while loop
