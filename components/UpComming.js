import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import TodoItem from './TodoItem'

const UpComming = (props) => {
    

const onComplete=(r)=>{
    props.onReload(r)
}
    

  return (
    <>


    <div className="heading pt-2 pb-2 rounded-2 border border-warning"><span className="ms-5 h3">Your Up Comming Task</span></div>
    {
        props.data.length>0 ?
    <Accordion>
        {props.data.map((y)=>{
            return <TodoItem onComplete={onComplete} key={y.id} title={y.title} desc={y.desc} date={y.date} id={y.id}/>
        })}
    </Accordion>:<div className="text-primary text-center h5">No Task are generated, Please add task</div>}

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

export default UpComming