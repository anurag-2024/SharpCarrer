import React, { useState, useContext, Children, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../utils/url';
export const UserContext=React.createContext();

export const UserProvider=({children})=>{
    const [user,setuser]=useState();
    const [token,settoken]=useState(localStorage.getItem('token') || null);
    const getUser=async()=>{
        try{ 
            if(token===null) return setuser(null);
            console.log(token);
            const res=await axios.get(`${URL}/auth`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            setuser(res.data);
        }   
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getUser();
        if(!token) settoken(localStorage.getItem('token'));
    },[token])
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}