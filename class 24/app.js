// alert("HELLO CLASS....");

// var userCity = prompt("ENTER CITY").toUpperCase();
// console.log(userCity);

// if (userCity === "KARACHI") {
//   alert("WELCOME");
// } else if (userCity == "lahore") {
//   alert("WELCOME");
// } else {
//   alert("CITY NOT FOUND!");
// }

// var cities = ["ISLAMABAD" , "multan" , "karachi" , "lahore"]


// var userCity = prompt("enter your city name: ").toLowerCase().trim();


// var isMatch = "no"
// for(var i = 0 ; i < cities.length ; i++ ){

//     if(userCity  ===  cities[i] ){
//         isMatch = "yes"
//         alert("WELCOME")
//         break;
        
//     }



// }
// if(isMatch === "no"){
//     alert("CITY IS NOT FOUND...")
// }


                ////string////


// var myName = "Jaffar Aman"

// console.log(myName[6]);


        ////Capialize word//

// var userFirstName = prompt("ENTER FIRST NAme")

// // var firstChar = userFirstName[0].toUpperCase()
// // var otherChar = userFirstName.slice(1).toLowerCase()
// // var capWord = firstChar + otherChar

// userFirstName = userFirstName[0].toUpperCase() + userFirstName.slice(1).toLowerCase() 



// console.log(userFirstName)




// var monthName = prompt("ENTER MONTH NAME")

// console.log(monthName)
// monthName = monthName[0].toUpperCase() + monthName.slice(1, 3).toLowerCase()
// console.log(monthName)




// var num1 = +prompt("enter num1")
// var num2 = +prompt("enter num2")

// if(num1 > num2){
//      alert("NUMBER 1 IS GREATER" + num1)
// }else if(num1 < num2 ){
//         alert("NUMBER 2 IS GREATER" + num2)

// }else if(num1 === num2){
//         alert("equal values" + num2)

// }
// var num1 = +prompt("enter num1")
// // var num2 = +prompt("enter num2")

// if(num1 > 0){
//      alert("NUMBER 1 IS GREATER" + num1)
// }else if(num1 < 0 ){
//         alert("NUMBER 1 IS less")

// }else if(num1 === 0){
//         alert("equal values" )

// }






// var num1 = prompt("enter number")

// if(isNaN(num1)){

// }

// if(num1 % 2 === 0){
//         alert("even number")
// }else if(num1 % 2 ==  1){
//         alert("odd number")

// }
// else{
//                 alert("enter correct num")
// }



var arr = ["bscs" , "bba" ,"bcom"];

for(var i = 0 ; i <arr.length ; i++)
{
        document.write( i+1 + " " + arr[i] + "<br>" )
}

var arrObj = new Array(5);





// var name = prompt(
//         "first name"
// )

// document.write(name)


// var name2 = prompt(
//         "first name"
// )


var numArr = [20,80,98,10,5]

var largestNum  = numArr[0]

for(var i = 0 ; i < numArr.length ; i++)
{

        if(numArr[i] <  largestNum){
                largestNum = numArr[i]
        }

}

alert(largestNum)