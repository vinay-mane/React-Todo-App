import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../slice/toDoSlice'

const AddToDo = () => {

  const [timeEmo,setTimeEmo] = useState({})



  useEffect(() => {
    // Function to update the current time
    const getCurrentTime = () => {
      var currentDate = new Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var amOrPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // If hours is 0, set it to 12
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var formattedTime = hours + ':' + minutes + ' ' + amOrPm;
      var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = currentDate.getDate();
      var monthIndex = currentDate.getMonth();
      var month = monthNames[monthIndex];
      var result = {date:date, month:month, time:formattedTime};

      return result;
    
      // return formattedTime;
    }
    const updateCurrentTime = () => {
      setTimeEmo(getCurrentTime())
    };

    // Update the current time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const [value,setValue] = useState('')
  const [des,setDes] = useState('')
  const dispatch = useDispatch()

  const addToDoDis = () => {
    dispatch(addToDo({'title':value,'des':des}))
    setValue('')
    setDes('')
  }

  return (

    <div className ="frame1">
      <div className='card'>
      <div className="date">
        <div className="month">{timeEmo.month}</div>
        <div className="date-val">{timeEmo.date}</div>
      </div>
      <div className="body">
        <div className="title">
          <input className='value' type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} name="" id="" placeholder='Task Title'/>
          <div className='time'>{timeEmo.time}</div>
        </div>
        <div className="desc">
          <textarea className='des-field' type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} name="" id="" placeholder='Description' />
        </div>
        <div className="action">
          <div className="btn" onClick={()=>{setValue(''); setDes('')}}>Clear</div>
          <div className="btn" onClick={addToDoDis} >Add</div>
        </div>
      </div>
    </div>
    </div>

    // <div className='container' style={{width:'40vw', flexDirection:'row', gap:'10px'}}>
    //   <input style={{width:'90%'}} className="button-2" type="text" name="" id="" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
    //   <button onClick={addToDoDis} className="button-2">+</button>
    // </div>
  )
}

export default AddToDo
