import React,{useState} from 'react'
import Logo from '../assests/logo.jpg'
import Image from 'next/image'

const LeftBar = (props) => {

  const [viewHover,setViewHover]=useState(true)
  const [addHover,setAddHover]=useState(false)

const viewClickHandler=()=>{
props.onClickedWhat("view");
setViewHover(true)
setAddHover(false)
}

const addClickHandler=()=>{
props.onClickedWhat("add");
setViewHover(false)
setAddHover(true)
}


  return (
    <>
      <div className="d-flex flex-column justify-content-around left-main">

        <div className="d-flex justify-content-around mt-5"><div><Image src={Logo} alt="todo logo" width={100}
          height={110} className="todo-logo" /></div></div>

        <div className="d-flex justify-content-around mt-5">
          <div className={"bg-change "+ (viewHover? 'hover-ef':'')} onClick={viewClickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="90" fill="blue" className="bi bi-list-task" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
            <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
          </svg>
          </div>
        </div>


        <div className="d-flex justify-content-around mt-5">
          <div className={"bg-change "+ (addHover? 'hover-ef':'')} onClick={addClickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="blue" className="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        </div>
        </div>

      </div>

      <style jsx>{`
        .left-main{
            height:55%;
        }
        .todo-logo{
          height:20px;
          width:20px;
        }
        .bg-change{
          border-radius:20px;
          padding:20px;
          cursor:pointer;
          box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        }

        .bg-change:hover{
          background-color:#E5E4F7;
        }
        
        .hover-ef{
          background-color:#C7C4EF;
        }
        .hover-ef:hover{
          background-color:#C7C4EF;

        }


    `}</style>

    </>
  )
}



export default LeftBar