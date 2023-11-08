import { createSlice, nanoid } from "@reduxjs/toolkit"

const state = {
  toDo : [],
  doneToDo : []
}

const getCurrentTime = () => {
  // Get the current date and time
  var currentDate = new Date();

  // Get hours and minutes
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();

  // Determine AM or PM
  var amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, set it to 12

  // Format minutes with leading zero if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Construct the formatted time string
  var formattedTime = hours + ':' + minutes + ' ' + amOrPm;

  return formattedTime;
}

const getCurrentDateAndMonth = () => {
  var currentDate = new Date();

  // Define an array of month names
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Extract the date and month
  var date = currentDate.getDate();
  var monthIndex = currentDate.getMonth();
  var month = monthNames[monthIndex];

  // Construct the result array
  var result = {date:date, month:month};

  return result;
}

const addToDo_ = (state,action)=>{
  state.toDo.unshift({ id:nanoid(), title:action.payload.title, des:action.payload.des, time:getCurrentTime(), date:getCurrentDateAndMonth().date, month:getCurrentDateAndMonth().month })
}


const removeFromToDo_ = (state,action)=>{
  // console.log(action.payload)
  state.toDo=state.toDo.filter(e=>e.id!==action.payload.id)
}

const addToDone_ = (state,action)=>{
  console.log(action.payload)
  console.log(action)
  state.doneToDo.push(action.payload)
  removeFromToDo_(state,action)
}

const removeFormDone_ = (state,action)=>{
  state.doneToDo = state.doneToDo.filter(i=>i.id!==action.payload.id)
}

const startStopTimer_ = (state,action)=>{
  let i = state.toDo.find(i=> i.id === action.payload.id)
  i.time = new Date()
}

const toDoSlice = createSlice({
  name:'todo',
  initialState:state,
  reducers:{
    addToDo:addToDo_,
    removeFromToDo:removeFromToDo_,
    addToDone:addToDone_,
    removeFormDone:removeFormDone_,
    startStopTimer:startStopTimer_
  }
})

export const {addToDo, removeFromToDo, addToDone, removeFormDone, startStopTimer} = toDoSlice.actions
export default toDoSlice.reducer