import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user';
import { useState,useEffect } from 'react';

const TimmerBar = () => {
    const { user, error, isLoading } = useUser();
    const myFname = user.name.split(" ")
    const [hour,setHour]=useState(0)
    const [min,setMin]=useState(0)
    const [dayNum,setDayNum]=useState(0)
    const [day,setDay]=useState("")
    const [date,setDate]=useState(0)
    const [year,setYear]=useState(0)
    const [good,setGood]=useState("")
    const [monthName,setMonthName]=useState("");
    const [ampm,setAmpm]=useState("")
    const [showHour,setShowHour]=useState()
    
    useEffect(()=>{
        manageTime();
    },[])
    
    const manageTime=()=>{
        const d = new Date();
        setHour(d.getHours());
        setMin(d.getMinutes());
        setDayNum(d.getDay());
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        setMonthName(month[d.getMonth()]);
        switch(d.getDay()){
            case 0:setDay("sunday")
            break;

            case 1:setDay("Monday")
            break;

            case 2:setDay("Tuesday")
            break;
            
            case 3:setDay("Wednesday")
            break;
            
            case 4:setDay("Thursday")
            break;
            
            case 5:setDay("Friday")
            break;
            
            case 6:setDay("Saturday")
            break;  
        }
        setDate(d.getDate())
        setYear(d.getFullYear())

        if(d.getHours()<12)
        {
            setGood("Morning")
        }
        else if(d.getHours() === 12)
        {
            setGood("Noon") 
        }
        else if(d.getHours()<16)
        {
            setGood("After Noon")   
        }
        else if(d.getHours() === 16)
        {
            setGood("After Noon") 
            if(min>0){
                setGood("Evening")   
            }
        }
        
        else if(d.getHours() < 20)
        {
            setGood("Evening") 
        }
        else if(d.getHours() >= 20)
        {
            setGood("Night")
        }     
        if(d.getHours()<12)
        {
            setAmpm("AM");
        }
        else{
            setAmpm("PM")
        }   

        if(d.getHours()>12)
        {
            setShowHour(d.getHours()-12)
        }
        else{
            setShowHour(d.getHours())
        }

        
    }

    setTimeout(manageTime, 60000)

  return (
    <>
    
    <div className="container mt-3 pt-2 pb-1 mb-3 position-fixed bg-dark text-white rounder-one-side time-con">
        <div className="mx-5 d-flex justify-content-between align-items-center">
            <div className="h1">Good <span>{good}</span>! <span className="text-muted ms-2">{myFname[0]}</span><span className="ms-2"><img src='https://bizio-meet-dev.thebizio.net/assets/images/handicon.png' /></span></div>
            <div className="text-end">
                <div className="h1">{showHour}<span className="timer-blink mx-1 ">:</span>{min} <span className="h4">{ampm}</span></div>
                <div className="text-muted h5"><span>{day}</span> , <span>{date}</span><span className="mx-2">{monthName}</span> <span>{year}</span></div>
            </div>
        </div>
    </div>
    <style jsx>{`
    .time-con{
        z-index:5;
    }
    .rounder-one-side{
        border-radius:0px 0px 30px 30px;  
    }

    @keyframes blink {
        50% {
          opacity: 0.0;
        }
      }
    .timer-blink{
        marginn-top:-10px;
        animation: blink 1.5s step-start 0s infinite;
    }
    `}</style>
    </>
  )
}

export default TimmerBar