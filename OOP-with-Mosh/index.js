// // //Factory Function
// // function createCircle(radius){              //  factory 

// //     return {                                // don't need to declare a const just return an object
// //                                             //instead of hardcoding the radius it will be set here. So add it to the parameter when declaring the constructor
// //     radius,                                 //In js6 to reduce noise in the code if both the key and the value are the same you can remove the value.   
// //         draw: function(){
// //             console.log('draw')
// //         }
// //     }
// // // }
// // // const circle = createCircle(1)              //called with a radius of 1

// // Constructor Function 

// function Circle(radius) {                   // Constructor needs a capital 
//     // console.log('this', this)            // demonstrates global versus factory object
//     this.radius = radius
//     this.draw = function() {
//         console.log('draw')
//     } 
// }                           
// const another = new Circle(1) 



 


// How to understand how primitives and reference objects behave

//primitive type

//let x = 10
//let y = x     // logs y as 10

//x = 20        // logs x as 20

//reference type

// let x = {value: 10}   
// let y = x   

// x.value = 20         //logs y & x as 20

//primitive type

// let number = 10                     //primitives we are dealing with 

// function increase(number) {         // 2 different copies
//     number++
//     console.log(number) // logs 11
// }

// increase(number)
// console.log(number)  //logs 10 

// passed by reference - 2 variables pointing to the same object 

// let obj = { value: 10}

// function increase(obj){
//     obj.value++
// }

// increase(obj)
// console.log(obj)

// demonstrate adding new propertier

// function Circle(radius) {
//     this.radis = radius
//     this.draw = function () {
//         console.log('draw')
//     }
// }

// const circle = new Circle(10)

// circle.location = {x: 1}

// const propertyName = 'location'
// circle['propertyName'] = {x: 1}

//iterate for in loop

// function Circle(radius) {
//         this.radis = radius
//         this.draw = function () {
//             console.log('draw')
//         }
//     }
    
//     const circle = new Circle(10)

//     for (let key in circle) {
//         if (typeof circle[key] !== 'function')
//         console.log(key, circle[key])
//     }
    

//     // another way to get all the keys - with this approach we can't seperate property from methods

//     const keys = Object.keys(circle)                 // will return all of the keys in an array - save them as a variable for neatness
//     console.log(keys)

//     if ('radius' in circle)                          // check if properties and methods have been used by using the in operator
//         console.log('Circle has a radius.')          //

//Abstraction

function Circle(radius) {
    this.radius = radius
    let defaultLocation = {x: 0, y: 0}                  //call it a local variable to hide it
    let computOptimumLocation = function(){            //want to hide this complexity to avoid mess ups

    }

    this.draw = function() {
        computOptimumLocation()

        console.log('draw')
    }
}

const circle = new Circle(10)
circle.draw()