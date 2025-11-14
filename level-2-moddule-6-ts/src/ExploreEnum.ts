// set of fixed string leteral ek jaigai rakhe 

// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';

// const canEdit = (role:UserRoles)=>{
//     if(role ==='Admin'|| role==='Editor'){
//         return true
//     }
//     else return false;
// }
// console.log(canEdit('Admin'))







enum UserRoles {
    Admin='Admin',
    Editor='Editor',
    Viewer='Viewr'
}



// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';

const canEdit = (role:UserRoles)=>{
    if(role ===UserRoles.Admin|| role===UserRoles.Editor){
        return true
    }
    else return false;
}
console.log(canEdit(UserRoles.Admin))