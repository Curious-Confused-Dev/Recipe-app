export class Ingredient {
    
    //Conventional method to define properties
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }

//Shorthand property of Typescript for above code
    constructor(public name: string, public amount: number) {}
}