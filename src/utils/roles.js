export const LEADER = 'leader';
export const EMPLOYEE = 'employee';
export const MANAGER = 'manager';
export const CLIENT = 'client';

export const checkRole = (roles_array , role) => {
    if(roles_array.includes(role)){
        return true;
    }
    return false;
}


