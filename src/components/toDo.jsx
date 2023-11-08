import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ScrollContainer from 'react-indiana-drag-scroll'
import { addToDone, removeFromToDo, startStopTimer } from '../slice/toDoSlice'

const ToDo = () => {
  
  const toDoList = useSelector( state => state.toDo )

  const [value,setValue] = useState('')
  const [des,setDes] = useState('')

  const dispatch = useDispatch()
  const removeToDo = (e)=>{
    dispatch( removeFromToDo(e) )
  }
  const addToDoDone = (e)=>{
    dispatch( addToDone(e) )
  }

  const startStopT = (e)=>{
    console.log('l')
    dispatch(startStopTimer(e))
  }

  return (

    <div className="frame3">
      <div className="title2">Task {toDoList.length}</div>
        <ScrollContainer className="scroll-container">
      <div className="frame2">
        <div style={{minWidth:'40px'}}></div>
        {toDoList.map((e)=>(
          <div className='card' key={e.id}>
            <div className="date">
              <div className="month">{e.month}</div>
              <div className="date-val">{e.date}</div>
            </div>
            <div className="body">
              <div className="title">
                <input className='value' type="text" value={e.title} onChange={(e)=>{setValue(e.target.value)}} name="" id="" placeholder='Task Title'/>
                <div className='time'>{e.time}</div>
              </div>
            <div className="desc">
              <textarea className='des-field' data-gramm="false" type="text" value={e.des} onChange={(e)=>{setDes(e.target.value)}} name="" id="" placeholder='Description' />
            </div>
            <div className="action">
              <div className="btn" onClick={()=>{removeToDo(e)}}>Remove</div>
              <div className="btn" onClick={()=>{addToDoDone(e)}}>Done</div>
          </div>
          </div>
        </div>
      ))}

    </div>
    </ScrollContainer>
    </div>


    // <div className="container" style={{overflowY:'scroll'}}>
    //   <div>{toDoList.map((e)=>(
    //     <div className='container'style={{margin:'10px 0px', flexDirection:'row', justifyContent:'space-between' }} key={e.id}>
    //       <div> {e.todo} </div>
    //       <div> {e.time} </div>
    //       <button onClick={()=>{removeToDo(e)}} >remove</button>
    //       <button onClick={()=>{addToDoDone(e)}} >done</button>
    //       {/* <button onClick={()=>{startStopT(e)}} >time</button> */}
    //     </div>
    //   ))}</div>
    // </div>
  )
}

export default ToDo
