import React,{useState} from 'react'

function 
App() {
const [task , setTask]= useState([]);
const [newtask , setNew] = useState("");

function handleinput(e){
 setNew(e.target.value);

}
function add(){
  
  setTask(t=>[...t,newtask])
  setNew("");
  
}
function deletetask(index){
  const updatedelete= task.filter((_,i)=> i!=index);
  setTask(updatedelete);
}

  return (
    <div className='main-container'>
      <h1> Todo list</h1>
  <input type='text' value={newtask} onChange={handleinput}></input>
  <button className='btn' onClick={add}> ADD</button>
  <h3>Priorities</h3>
  <ol>
    {task.map((taskk,index)=><li key={index}>{taskk}
    <button className='btn-t' onClick={d=>deletetask(index)}>Delete</button>
    </li>)}
    
  </ol>
    </div>
  );
}
export default App;