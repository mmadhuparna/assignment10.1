//creating class
class Rectangle {
  constructor(length, breadth){
    this.length = length;
    this.breadth = breadth;
  }
  //defining method
  calculateArea(){
    return this.length*this.breadth;
  }
}  
  //creating object         
var x = new Rectangle(30, 20);
//callin method in console
console.log("Area of Rectangle:"+ " " + x.calculateArea());