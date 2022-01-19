"use strict"

export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "Loud Noise") {
        console.log(sound);
    }

    static return10() {
        return 10;
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
}

/*
export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
}
*/

export class Cat extends Animal {
    makeNoise(sound = "Wuff") {
        console.log(sound);
    }
}

/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 08

/*
    Create a class Player with the following:

    - Add a Name and Country properties
    - Add a function that when it runs should print into the console ("Messi was born in Argentina");
    - Make sure to adapt this function to receive dynamic Names and Clubs.

    Create a Subclass called TennisPlayer that extends from the class Player

    - Add a new property Age.
    - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
    - Make sure the Name and Age are dynamic.
*/

//by emanuel
export class Player1 {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    footballText(name = "someone", country = "somewhere") {
        return `${name} was born in ${country}`
    }
}

export class TennisPlayer1 extends Player1 {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    tennisText(name = "someone", age = "unknown") {
        console.log(`${name} is ${age} years old and knows how to play Tennis`);
    }
}

//by scrimba
export class Player2 {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

export class TennisPlayer2 extends Player2 {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
    }
}