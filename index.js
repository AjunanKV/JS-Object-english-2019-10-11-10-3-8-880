// Program and observe the following requirements:  
//   - Create a null object and set its variable name as user; 
//   - Add a name attribute and set its value as John; 
//   - Add a surname attribute and set its value as Mike; 
//   - Modify the value of name attribute as Peter; 
//   - Delete name attribute of user. 
  var user = {};
  user.name ="John";
  user.surname="Mike";
  user.name="Peter";
  delete user.name;
  console.log(user);


//Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
 var fruit = {
 apple: 20,
 pear: 20,
 peach: 10
 };

var keys = Object.values(fruit);
var getKeys = function(fruit){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
}
fruit.TotalFruit = function (){
    var output=0;
    for(let i=0; i<keys.length; i++)
{
    output+=keys[i];

}
return output;
}
//console.log(output);
console.log(fruit.TotalFruit());
