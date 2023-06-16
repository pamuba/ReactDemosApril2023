import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import PrentComponet from './components/PrentComponet';
import Foms from './components/Foms';
import Refs from './components/Refs';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import HooksCounter from './hooksComponents/HooksCounter';
import HooksCounterOne from './hooksComponents/HooksCounterOne';
// require

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Greet heroName="Bruce" aka="Batman">
        <button>CLICK</button>
        <input type="text"></input>
       </Greet>
       <Greet heroName="Diana" aka="Wonder Women"/>
       <Greet heroName="Clark" aka="Superman"/>

       <Welcome heroName="Clark" aka="Superman"/> */}
       {/* <Message /> */}
       {/* <Counter/> */}
       {/* <ParentComponent/> */}
       {/* <UserGreeting/> */}
       {/* <NameList/> */}
       {/* <PrentComponet/> */}
       {/* <Foms></Foms> */}
       {/* <Refs></Refs> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Spiderman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <PostList/> */}
      {/* <HooksCounter/> */}
      <HooksCounterOne/>
      </header>
    </div>
  );
}

export default App;
