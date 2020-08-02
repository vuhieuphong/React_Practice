import React,{useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from './components/HookCounterFive';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import DataFetchingTwo from './components/DataFetchingTwo';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';
import ParentComp from './components/ParentComp';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import UserForm from './components/UserForm';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

export const CountContext=React.createContext()

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count,dispatch]=useReducer(reducer,initialState)

  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}

      {/* <HookCounterTwo></HookCounterTwo> */}

      {/* <HookCounterThree></HookCounterThree> */}

      {/* <HookCounterFour></HookCounterFour> */}

      {/* <HookCounterFive></HookCounterFive> */}
      
      {/* <HookMouse></HookMouse> */}

      {/* <MouseContainer></MouseContainer> */}

      {/* <IntervalHookCounter></IntervalHookCounter> */}
      
      {/* <DataFetching></DataFetching> */}

      {/* <DataFetchingTwo></DataFetchingTwo> */}
      
      {/* <UserContext.Provider value='Phong'>
        <ChannelContext.Provider value='CodeEvolution'>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne></CounterOne> */}

      {/* <CounterTwo></CounterTwo> */}

      {/* <CounterThree></CounterThree> */}

      {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        <div>
          Count: {count}
        <CompA></CompA>
        <CompB></CompB>
        <CompC></CompC>
        </div>
      </CountContext.Provider> */}

      {/* <DataFetching1></DataFetching1> */}

      {/* <DataFetching2></DataFetching2> */}

      {/* <ParentComp></ParentComp> */}

      {/* <Counter></Counter> */}

      {/* <FocusInput></FocusInput> */}
      
      {/* <ClassTimer></ClassTimer>
      <HookTimer></HookTimer> */}

      {/* <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo> */}
      
      {/* <Counter1></Counter1>
      <Counter2></Counter2> */}

      <UserForm></UserForm>
    </div>
  );
}

export default App;
