// Exercice

/*
1. Define a constant variable called attackValue and initialize it to 10.
2. Define a constant variable called monsterAttackValue and initialize it to 14.
2. Define a variable called chosenMaxLife and initialize it to 100.
3. Define a variable called currentMonsterHealth and initialize it to chosenMaxLife.
4. Define a variable called currentPlayerHealth and initialize it to chosenMaxLife.
3. Call the function adjustHealthBars (located in vendor.js file) and pass chosenMaxLife as a parameter.
4. Create a function called attackHandler
5. Add a click event lister to the attackBtn (located in vendor.js file )  and  bind it to the attackHandler function 
   e.g button.addEventListener('click', function)
6. Within the body of your attackHandler function:   
   a. Call the function dealMonsterDamage (located in vendor.js file) and store its return value 
      in a constant variable called monsterDamage
   b. Subtract the monsterDamage from the currentMonsterHealth and store the result in the currentMonsterHealth variable.
   c. Call the function dealPlayerDamage (located in vendor.js file) and store its return value 
      in a constant variable called playerDamage
   d. Subtract the playerDamage from the currentPlayerHealth and store the result in the currentPlayerHealth variable.
   c. Check if the currentMonsterHealth is less than or equal to 0 (currentMonsterHealth <= 0) and 
      currentPlayerHealth is greater than 0 (currentPlayerHealth > 0) then alert('You won').
      else if the currentPlayerHealth is less than or equal to 0 (currentPlayerHealth <= 0) and 
      currentMonsterHelth is greater than 0 (currentMonsterHealth > 0) then alert('You lost') 
      else if the currentPlayerHealth is less than or equal to 0 (currentPlayerHealth <= 0) and 
      currentMonsterHelth is less than or equal to 0 (currentMonsterHealth <= 0) then alert('Its a draw') 

*/


//  Solutions

const attackValue = 10;
const monsterAttackValue = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


adjustHealthBars(chosenMaxLife)

function attackHandler(chosenMaxLife){
   const monsterDamage = dealMonsterDamage(10);
   console.log(monsterDamage);
   currentMonsterHealth = currentMonsterHealth - monsterDamage ; 
   //return currentMonsterHealth;
   // currentMonsterHealth -= monsterDamage
   const playerDamage = dealPlayerDamage(14);
   currentPlayerHealth = currentPlayerHealth - playerDamage;
   //return currentPlayerHealth;

   if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
      alert('You Won');
   }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
      alert('Tou Lost')
   }else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
      alert('Its a draw');
   }

}
  attackBtn .addEventListener("click", attackHandler);
console.log(currentMonsterHealth)
