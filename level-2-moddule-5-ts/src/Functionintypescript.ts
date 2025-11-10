// normal fungtion arrow function 

function addNormal(num1:number, num2:number
):number{
    return num1 + num2;
}
// let add =addNormal(10,'20')
let add =addNormal(10,20)


console.log(add)

const arrowFunc = (num1:number, num2:number):number =>{
    return num1+num2;
}

console.log(arrowFunc(2,2))

const richUser = {
    ballanch : 0,
    addBalanch(value:number) : number {
        const totalBalanch = this.ballanch+value;
        return totalBalanch;
    },
};
console.log(richUser.addBalanch(10000))


const arr :number[]=[2,2,3];
const sqrnumber = arr.map((elem:number):number=>elem*elem)

console.log(sqrnumber)