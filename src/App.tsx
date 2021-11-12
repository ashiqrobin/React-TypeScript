import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Child from './components/Child'
import {Container} from './components/Container'
import Ls from './components/Ls'

function App() {
  return (
    <div className="App">
      <Hello name={"1"}/>
      <Child children={1}/>
      
      <Container> foo</Container>
      <Ls items={['Jake','Sadie','Oso']} render={(item:string)=><div>
        {item.toLowerCase()}
      </div>}></Ls>
    </div>
  );
}

export default App;
