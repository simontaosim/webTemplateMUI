import {
    userReg
}
from './GunOpera.js'

export const EXPECT_USER_REG = "EXPECT_USER_REG";
export const USER_REG_FAIL="USER_REG_FAIL";
export const USER_REG_SUCCESS="USER_REG_SUCCESS";
export const OPEN_USER_REG_WIN="OPEN_USER_REG_WIN";

export function expectUserReg(){
    return {
        type: EXPECT_USER_REG
    }
}
export function openUserRegWin(){
    return {
        type: OPEN_USER_REG_WIN,
    }
}
export function loadUserReg(username, password){
    return dispatch => {
        dispatch(expectUserReg());
        userReg(username, password, function(ack){
            //success
            dispatch(userRegSuccess(ack.pub));
        }, function(reason){
            //fail
            dispatch(userRegFail(reason));
        })
    }
}
export function userRegFail(reason){
    return {
        type: USER_REG_FAIL,
        reason
    }
}
export function userRegSuccess(userId){
    return {
        type: USER_REG_SUCCESS,
        userId,
    }
}