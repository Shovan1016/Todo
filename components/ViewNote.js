import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { sagaActions } from '../saga/sagaActions';
import UpComming from './UpComming';
import Completed from './completed';


const ViewNote = () => {

  const [reload,setReload]=useState(null)

  const upcomming=[];
  const completed=[];
  useEffect(()=>{
    dispatch({type:sagaActions.FETCH_TODO_SAGA})   
  },[reload])

  const dispatch=useDispatch();
  const selector=useSelector(state=>state.todoList)
  // console.log(selector.Items[0])
  const reloadHndler=(r)=>{
    setReload(r)
  }



  for(let i=0;i<selector.Items.length;i++)
  {
    if(selector.Items[i].status==='completed')
    {
      completed.push(selector.Items[i])
    }
    if(selector.Items[i].status==='not completed')
    {
      upcomming.push(selector.Items[i])
    }

  }


  
  return (
    <div>
      <UpComming data={upcomming} onReload={reloadHndler}/>
      
      <Completed data={completed} onReload={reloadHndler}/>
      
    </div>
  )
}

export default ViewNote