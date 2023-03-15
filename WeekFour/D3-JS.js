// Anonymous functions 

// const add = funciton() {};
// function() {}
// () => {}

let students = [
    { name: "Horatio", score: 60 },
    { name: "Reginald", score: 80 },
    { name: "Hortense", score: 75 },
    { name: "Xavier", score: 100 },
    { name: "Oslo", score: 90 },
    { name: "Jennifer", score: 87 },
    { name: "Robert", score: 90 },
    { name: "Stephen", score: 50 },
    { name: "Richard", score: 10 },
    { name: "William", score: 67 },
  ];

students.sort((a, b) => {
    return b.score - a.score;
})

console.log(students);

      //! Go through all numbers 1-100. Create three arrays and add numbers to
      //! them based off the following criteria:
      //!   - Array One should have all numbers divisible by 2
      //!   - Array Two should have all numbers between 16 and 25 (inclusive)
      //!   - Array Three should have all numbers divisible by 4 AND 3
let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];
for(let i = 1; i <= 100; i++){
      if(i%3 == 0 && i%4 == 0){
            arrayThree.push(i);
      }
      else if(i > 15 && i < 26){
            arrayTwo.push(i);
      }
      else if(i%2 == 0){
            arrayOne.push(i);
      }
      
}
      // -----------------------------------------------------------------
      //! Create an array with all numbers from 1-10.
      //! Copy the array and then using a prototypical function,
      //! replace all the numbers in the new array with the number multiplied by 3.
      //! eg: `[1,2,3,4,5] --> [3,6,9,12,15]`
//  for 1-10
//  makes orginalArray
//  copyArray = orginalArray.split()
//  for copyArray.length (i * 3);
      
//!-- Create a simple website with 4 divs with no styling. -->
 //! Use javascript to select all 4 of them into an array
 //! Shuffle the array into a random order
 //! Going through the array one element at a time have the following happen:
 //!   1. Have the active div change color (to a color of your choice) for 2 seconds.
 //!   2. Reset the color of the active div to it's starting color
 //!   3. After half a second, repeat these steps for the remaining divs.
 //! Take the above code and find a way to have the cycle keep going.

//  arraymaking method from yesterday
//  divArray = querySelectorAll(the divs)
 
//   set i background color blue
//   clearInterval(2000)
//   let colorChange = setInterval{
//     change color for i
//   }


//  function color changer
//  {
//   wait 500
//   for divArray.length (
//     set i background color blue
//     clearInterval(2000)
//     let colorChange = setInterval{
//       change color for i
//     }
//    )
//  }