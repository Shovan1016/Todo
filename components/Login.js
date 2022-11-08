import React from 'react'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const router = useRouter()

    const loginReloadHandler = (event) => {
        router.push("/api/auth/login")
    }
    
    return (


        <div className="container d-flex flex-column justify-content-around main-div" >
            <div className="d-flex justify-content-around"><button className="custom-btn btn-5" onClick={loginReloadHandler}>Login</button></div>
            <style jsx>{`
          .main-div {
           height: 100vh;
          }
          .custom-btn {
            width: 260px;
            height: 80px;
            color: #fff;
            border-radius: 5px;
            padding: 10px 25px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
             box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
             7px 7px 20px 0px rgba(0,0,0,.1),
             4px 4px 5px 0px rgba(0,0,0,.1);
            outline: none;
          }
          .btn-5 {
            width: 260px;
            height: 60px;
            line-height: 42px;
            padding: 0;
            border: none;
            background: rgb(255,27,0);
          background: linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%);
          }
          .btn-5:hover {
            color: #f0094a;
            background: transparent;
             box-shadow:none;
          }
          .btn-5:before,
          .btn-5:after{
            content:'';
            position:absolute;
            top:0;
            right:0;
            height:2px;
            width:0;
            background: #f0094a;
            box-shadow:
             -1px -1px 5px 0px #fff,
             7px 7px 20px 0px #0003,
             4px 4px 5px 0px #0002;
            transition:400ms ease all;
          }
          .btn-5:after{
            right:inherit;
            top:inherit;
            left:0;
            bottom:0;
          }
          .btn-5:hover:before,
          .btn-5:hover:after{
            width:100%;
            transition:800ms ease all;
          }
          
            `}
            </style>
        </div>

    )
}

export default Login