import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ChildComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}

     {/* <Greet name="Bruce" heroName="Batman">
       <p>This is children props</p>
       <button>Action</button>
     </Greet> */}

     {/* <Welcome name="Diana" heroName="Wonderwoman"></Welcome>
     <Welcome name="Clark" heroName="Superman"></Welcome>
     <Hello name="Phong"></Hello> */}

     {/* <Message></Message> */}

     {/* <FunctionClick></FunctionClick>
     <ClassClick></ClassClick> */}

     {/* <EventBind></EventBind> */}

    {/* <ParentComponent></ParentComponent> */}

    {/* <UserGreeting></UserGreeting> */}

    {/* <NameList></NameList> */}

    {/* <Stylesheet primary={true}></Stylesheet>
    <Inline></Inline>
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}

    {/* <Form></Form> */}

    {/* <LifeCycleA></LifeCycleA> */}

    {/* <FragmentDemo></FragmentDemo>
    <Table></Table> */}

    {/* <ParentComp></ParentComp> */}

    {/* <RefsDemo></RefsDemo> */}

    {/* <FocusInput></FocusInput> */}

    {/* <FRParentInput></FRParentInput> */}

    {/* <PortalDemo></PortalDemo> */}

    {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>  
      <Hero heroName="Superman"></Hero>
    </ErrorBoundary>
    <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
    </ErrorBoundary> */}

    {/* <ClickCounter name="Phong"></ClickCounter>
    <HoverCounter></HoverCounter> */}

    {/* <ClickCounterTwo></ClickCounterTwo>
    <HoverCounterTwo></HoverCounterTwo>
    <User render={(isLoggedIn)=>isLoggedIn?'Phong':'Guest'}></User> */}

    {/* <Counter2 render={(count,incrementCount)=>
      <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
    }></Counter2>
    <Counter2 render={(count,incrementCount)=>
      <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>
    }></Counter2> */}

    {/* <Counter2> 
      {(count,incrementCount)=>
        <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
      }
      </Counter2>
      <Counter2> 
      {(count,incrementCount)=>
        <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>
      }
      </Counter2> */}
      
    {/* <UserProvider value="Phong"> */}
      {/* <ComponentC></ComponentC>   */}
    {/* </UserProvider> */}

    {/* <PostList></PostList> */}
    <PostForm></PostForm>

    </div>
  );
}

export default App;
