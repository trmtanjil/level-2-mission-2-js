// Rest & Spread Operator

const friends = ['jinto','minto','joga','khchori']

const scholFriends = ['smart','over smart','big smart']

friends.push(...scholFriends)

console.log(friends)

// sprad in object 

// const info = {
//     name:'tanjil',
//     Homtown:'Narsingdi',
// }
// const contact={
//     number:110293,
//     Email:'talssj@a.com'
// }
// const userInfo = {...info, ...contact}
// console.log(userInfo)

// const friendss = (friend1:string, friend2:string,friend3:string)=>{
//     console.log(friend1)
//         console.log(friend2)

//             console.log(friend3)

// }
// friendss('jonto', 'konto','monto')

const friendds =(...friend: string[])=>{
    friend.forEach((friend:string)=>
    console.log(`send envitation ${friend}`)
    );
}
 friendds('smart','over smart','big smart')