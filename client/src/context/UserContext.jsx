import React, { useState, useContext, Children, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../utils/url';
import {toast} from 'react-toastify';
export const UserContext=React.createContext();

export const UserProvider=({children})=>{
    const [user,setuser]=useState();
    const [hotels,setHotels]=useState();
    const [reviews,setReviews]=useState();
    const [searchHotels,setSearchHotels]=useState();
    const [token,settoken]=useState(localStorage.getItem('token') || null);
    const getUser=async()=>{
        try{ 
            if(token===null) return setuser(null);
            const res=await axios.get(`${URL}/auth`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            setuser(res.data);
        }   
        catch(err){
            toast.error(res.response.data.message);
        }
    }
    const getHotel=async()=>{
        try{
            const res=await axios.get(`${URL}/hotel`);
            setHotels(res.data);
        }
        catch(err){
            toast.error(err.response.data.message);
        }
    }
    const getReviews=async()=>{
        try{
            const res=await axios.get(`${URL}/review`);
            setReviews(res.data);
        }
        catch(err){
            toast.error(err.response.data.message);
        }
    }
    useEffect(()=>{
       getHotel();
       getReviews();
    },[])
    useEffect(()=>{
        getUser();
        if(!token) settoken(localStorage.getItem('token'));
    },[token])
    return (
        <UserContext.Provider value={{user,hotels,reviews,searchHotels,setSearchHotels}}>
            {children}
        </UserContext.Provider>
    )
}