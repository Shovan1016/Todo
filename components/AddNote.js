// import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useDispatch } from 'react-redux';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {todoData} from '../redux/todoSlice.js'
import {sagaActions} from '../saga/sagaActions'
import toast, { Toaster } from 'react-hot-toast';

const AddNote = () => {
  const dispatch=useDispatch()
  const d = new Date();
  const notify = () => toast.success('New Task added successfully');

    const [value, setValue] = React.useState(dayjs('2022-12-11'));
    
    // console.log(JSON.stringify(d))
    // console.log(JSON.stringify(value.$d))

    const [titleVal,setTitleVal]=React.useState("")
    const [descVal,setDescVal]=React.useState("")
    const [dateVal,setDateVal]=React.useState("")

    const [titleValid,setTitleValid]=React.useState('null')
    const [descValid,setDescValid]=React.useState('null')
    const [dateValid,setDateValid]=React.useState('null')

    


    const titleChangeHandler=(event)=>{
        setTitleVal(event.target.value)
        if(titleVal.length > 3)
        {
            setTitleValid(true) 
        }
        else{
            setTitleValid(false) 
        }
    }

    const titleFocusHandler=()=>{
        if(titleVal.length > 3)
        {
            setTitleValid(true) 
        }
        else{
            setTitleValid(false) 
        }
    }


    const descChangeHandler=(event)=>{
        setDescVal(event.target.value)
        if(descVal.length > 10)
        {
            setDescValid(true) 
        }
        else{
            setDescValid(false) 
        }
    }

    const descFocusHandler=()=>{
        if(descVal.length > 10)
        {
            setDescValid(true) 
        }
        else{
            setDescValid(false) 
        }
    }

    const dateChangeHandler=(event)=>{
        if(JSON.stringify(d)<JSON.stringify(value.$d))
        {
          setDateValid(true)
        }
        else{
          setDateValid(false)
        }
    }

    const submitHandler=()=>{

      if(titleValid & descValid & dateValid)
      {
      const data={
        'title':titleVal,
        'desc':descVal,
        'date':value.$d,
        'status':"not completed"
      }
      console.log(data)
      dispatch(todoData(data))
      notify();
      dispatch({ type: sagaActions.POST_TODO_SAGA })
      setTitleVal("");
      setDescVal("");
    }
    }
    


  return (
    <>
    <div><Toaster/></div>
    <div className="add-main">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={titleValid ? "":"text-danger"}>Enter Note Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" className={titleValid ? "":"is-invalid"} onChange={titleChangeHandler} onBlur={titleFocusHandler} value={titleVal}/>  {/* is-invalid */}
        <Form.Text className="text-muted">
          add your tittle and never miss your Importent work
        </Form.Text>
      </Form.Group>

      

      <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={descValid ? "":"text-danger"}>Enter Your note description</Form.Label>
        <Form.Control as="textarea" rows={5} onChange={descChangeHandler} onBlur={descFocusHandler} className={descValid ? "":"is-invalid"} value={descVal}/>
      </Form.Group>

      
    </Form>
<div className="d-flex justify-content-around mt-5">
    <div>
      <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Schdule your Task"
        value={value}
        onChange={(newValue) => {
          dateChangeHandler();
          setValue(newValue);   
        }}
        minTime={dayjs(JSON.stringify(d))}
        className="text-danger"
      />
    </LocalizationProvider>
    </div>
    {!dateValid &&
    <div className="text-danger">
      Please Enter a proper Date
    </div>}
    
    </div>
    <div>

    <Button variant="success" size="lg" onClick={submitHandler}>
        Save You Note and i remind your work at the right time
      </Button>

    </div>
</div>


    </div>


  <style jsx>{`
  .add-main{
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    padding:40px;
    border-radius:20px;
    height:70vh;

  }
  
  `}</style>


  </>
  )
}

export default AddNote



