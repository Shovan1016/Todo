import React,{useState,useEffect} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {completeTodoData} from '../redux/completeTodoSlice'
import { sagaActions } from '../saga/sagaActions';
import toast, { Toaster } from 'react-hot-toast';
import {deleteData} from '../redux/deleteSlice'

const TodoItem = (props) => {

  const notifyCom = () => toast.success('congratulation You completed your task successfully');
  const notifyDel = () => toast.error('the task deleted successfully');

  const dispatch=useDispatch()
  const completedHandler=()=>{
    const d=new Date()
    const dd={
      "title": props.title,
      "desc": props.desc,
      "date": d,
      "status": 'completed',
      "id": props.id
    }
    dispatch(completeTodoData(dd))
    notifyCom();
    dispatch({type:sagaActions.PUT_COMPLETE_DATA_SAGA})
    // dispatch({type:sagaActions.FETCH_TODO_SAGA}) 
    props.onComplete(props.id)
  }

  const deleteHandler=()=>{
    notifyDel();
  dispatch(deleteData(props.id))
  dispatch({type:sagaActions.DELETE_DATA_SAGA})
  props.onComplete(props.id+400)
  }
  // --------------------------------------------------------


  
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


  const manageTime=()=>{
    const d = new Date(props.date);
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
useEffect(()=>{
  manageTime();
})






  // -----------------------------------------------------------



  return (
    <>
    <div><Toaster/></div>
    <div className="d-flex">
    <div className="accor-item">
  <Accordion.Item eventKey={props.id}>
    <Accordion.Header ><div className="d-flex justify-content-between accor-item fw-bold"><div className="me-5 pe-5">{props.title}</div><div className="me-5 fw-bold"><span className="me-2">{day},</span><span className="me-2">{date}</span><span className="me-2">{monthName}</span><span className="me-2">{year}</span><span className="me-3">at</span><span className="">{showHour}:{min}{ampm}</span></div></div></Accordion.Header>
    <Accordion.Body>
      {props.desc}
    </Accordion.Body>
  </Accordion.Item>
  </div>
  <div className="d-flex justify-content-around btn-grp"><div><Button variant="success" onClick={completedHandler}>Completed</Button></div><div><Button variant="danger" onClick={deleteHandler}>Delete</Button></div></div>
  </div>
  <style jsx>{`
    .heading{
        background-color:#55c1db;
    }
    .accor-item{
        width:67vw;
    }
    .btn-grp{
        width:16vw;
        margin-top:10px;
    }
    `}</style>
  </>
  )
}

export default TodoItem