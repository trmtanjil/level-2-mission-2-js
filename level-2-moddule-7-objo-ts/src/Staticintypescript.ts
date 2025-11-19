// Satatic 

class Counter {
   static count:number = 0;
     
   static increement(){
        return (Counter.count = Counter.count + 1)
    }

   static decrement(){
        return (Counter.count = Counter.count - 1)
    }
}

// const instanc1 = new Counter()
// console.log(instanc1.increement())
// console.log(instanc1.increement())
// console.log(instanc1.increement())
// console.log(instanc1.increement())
// console.log(instanc1.decrement())


// const instance2 = new Counter()

// console.log(instance2.increement())

console.log(Counter.increement())
console.log(Counter.decrement())