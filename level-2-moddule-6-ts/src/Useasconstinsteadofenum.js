// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';
// enum UserRoles {
//     Admin='Admin',
//     Editor='Editor',
//     Viewer='Viewr'
// }
var UserRoless = {
    Admin: 'ADMIN',
    Editor: 'EDITOR',
    Viewer: 'VIEWER'
};
// as const read only     Admin='Admin',
//  as const read only    Editor='Editor',
// as const read only     Viewer='Viewr'
// !1. typof operator
// !2.keyof operator
// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';
// const canEditt = (role:UserRoles)=>{
//     if(role ===UserRoles.Admin|| role===UserRoles.Editor){
//         return true
//     }
//     else return false;
// }
var canEditt = function (role) {
    if (role === UserRoless.Admin || role === UserRoless.Editor) {
        return true;
    }
    else
        return false;
};
console.log(canEditt(UserRoless.Admin));
