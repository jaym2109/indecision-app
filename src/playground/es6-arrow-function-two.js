// argumments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); 
    return a + b; 
}

console.log(add(55, 1)); 

// this keyword - no longer bound


const user = {
    name: 'Jason', 
    cities: ['London', 'St. Thomas', 'Vancouver'],
    printPlacesLived(){
        const cityMessages = this.cities.map((city) =>{
            return this.name + ' has lived in ' + city; 
        }); 
        return cityMessages; 
    }
}; 

console.log(user.printPlacesLived()); 


const multiplier = {
    numbers: [5, 3, 4], 
    multiplyBy: 2, 
    multiply(){
        const multiples = this.numbers.map((multiple)=>{
            return multiple * this.multiplyBy; 
        }); 

        return multiples; 
    } 
}; 

console.log(multiplier.multiply());   