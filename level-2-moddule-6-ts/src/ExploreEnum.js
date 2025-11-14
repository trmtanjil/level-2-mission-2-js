// set of fixed string leteral ek jaigai rakhe 
// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';
// const canEdit = (role:UserRoles)=>{
//     if(role ==='Admin'|| role==='Editor'){
//         return true
//     }
//     else return false;
// }
// console.log(canEdit('Admin'))
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewr";
})(UserRoles || (UserRoles = {}));
// type UserRoles  = 'Admin'| 'Editor'| 'Viewer';
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
console.log(canEdit(UserRoles.Admin));
