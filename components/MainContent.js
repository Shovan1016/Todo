import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftBar from './LeftBar';
import TimmerBar from './TimmerBar';
import ViewNote from './ViewNote';
import AddNote from './AddNote';


const MainContent = () => {


const [whatShow,setWhatShow]=useState(true)
const [click,setClick]=useState("view")

  const whatClicked=(click)=>{
    setClick(click)
    if(click==="view")
    {
      setWhatShow(true)
    }
    else{
      setWhatShow(false)
    }
  }
  


  return (
    <>
    
    <div className="sidenav"><LeftBar onClickedWhat={whatClicked}/></div>
    <div className="main">
      <TimmerBar/>
      <div className="content-start">
        {whatShow && <ViewNote/>}
        {!whatShow && <AddNote/>}
      </div>  
      </div>
    

<style jsx>{`
.sidenav {
  height: 100%; 
  width: 150px; 
  position: fixed; 
  z-index: 5;
  top:63px;
  left: 0;
  background-color: #ff; 
  overflow-x: hidden; 
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}


.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}


.sidenav a:hover {
  color: #f1f1f1;
}


.main {
  margin-left: 151px; 
  padding: 0px 40px;
  
  margin-top: 46px;
}
.content-start{
  padding-top: 155px;
}


@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}



`}</style>

</>




  )
}

export default MainContent


