import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollContainer from 'react-indiana-drag-scroll'
import { removeFormDone } from '../slice/toDoSlice'

const Done = () => {
  const dispatch = useDispatch()
  const doneList = useSelector(state=>state.doneToDo)
  const [value,setValue] = useState('')
  const [des,setDes] = useState('')
  const removeDone = (e)=>{
    dispatch( removeFormDone(e) )
  }
  return (
    <div className="frame3">
      <div className="title2">Completed {doneList.length}</div>
        <ScrollContainer className="scroll-container">
      <div className="frame2">
        <div style={{minWidth:'40px'}}></div>
        {doneList.map((e)=>(
          <div className='card' key={e.id}>
            <div className="date">
            <div className="month">{e.month}</div>
              <div className="date-val">{e.date}</div>
            </div>
            <div className="body">
              <div className="title">
                <input className='value' type="text" value={e.title} onChange={(e)=>{setValue(e.target.value)}} name="" id="" placeholder='Task Title'/>
                <div className='time'>8:30 PM</div>
              </div>
            <div className="desc">
              <textarea className='des-field' type="text" value={e.des} onChange={(e)=>{setDes(e.target.value)}} name="" id="" placeholder='Description' />
            </div>
            <div className="action">
              {/* <div className="btn" onClick={()=>{setValue(''); setDes('')}}>Clear</div> */}
              <div className="btn" onClick={()=>{removeDone(e)}} >Remove</div>
          </div>
          </div>
        </div>
      ))}

    </div>
    </ScrollContainer>
    </div>
    // <div className="container" style={{overflowY:'scroll'}}>
    //   <div>{doneList.map((e)=>(
    //     <div className='container'style={{margin:'10px 0px', flexDirection:'row', justifyContent:'space-between' }} key={e.id}>
    //       <div> {e.todo} </div>
    //       <button onClick={()=>{removeDone(e)}} >remove</button>
    //       {/* <button onClick={()=>{addToDoDone(e)}} >done</button> */}
    //     </div>
    //   ))}</div>
    // </div>
  )
}

export default Done
