import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import PrentComponet from './components/PrentComponet';
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
       <PrentComponet/>
      </header>
    </div>
  );
}

export default App;
