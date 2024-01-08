import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { ERO, REQUEST, SUC } from './action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './asyncaction/userAsyncActions';

function App() {

  const dis = useDispatch();

  const data= useSelector(y=>y.user);

  console.log(data);

  useEffect(()=>{

    
    dis(getUserList(1))
  

  },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
