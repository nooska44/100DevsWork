// //Factory Function
// function createCircle(radius){              //  factory 

//     return {                                // don't need to declare a const just return an object
//                                             //instead of hardcoding the radius it will be set here. So add it to the parameter when declaring the constructor
//     radius,                                 //In js6 to reduce noise in the code if both the key and the value are the same you can remove the value.   
//         draw: function(){
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)              //called with a radius of 1

// Constructor Function 

function Circle(radius) {                   // Constructor needs a capital 
    // console.log('this', this)            // demonstrates global versus factory object
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    } 
}                           
const another = new Circle(1) 