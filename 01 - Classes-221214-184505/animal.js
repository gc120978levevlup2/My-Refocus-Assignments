class Animal{
    constructor(name="", sound="", onEatingCallback){
            this.name = name;
            this.sound = sound;
            this.onEatingCallback = onEatingCallback;
    }
    eat(){
        let capsname = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        let message = `${capsname} is currently eating...`
        this.onEatingCallback(message);
    }
    speak(){
        let capssound = this.sound.charAt(0).toUpperCase() + this.sound.slice(1);
        let message = `${capssound}! I am a ${this.name}.`;
        console.log(message);
    }
}

class Animals{
    constructor(){
        this.animalList = [];
    }
    add(animal){
        this.animalList.push(animal);
    }
    speak(){
        for(let animal of this.animalList){
            animal.speak();
        }
    }
    eat(){
        for(let animal of this.animalList){
            animal.eat();
        }
    }
}

let animals = new Animals();
animals.add(new Animal("cat",   "meow",  (message) => {console.log(message)}));
animals.add(new Animal("dog",   "arf",   (message) => {console.log(message)}));
animals.add(new Animal("bird",  "tweet", (message) => {console.log(message)}));
animals.add(new Animal("tiger", "rawr",  (message) => {console.log(message)}));
animals.speak();
animals.eat();