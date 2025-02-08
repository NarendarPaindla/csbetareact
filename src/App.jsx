import Header from './components/Header';
import './App.css'
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MouseEventDemo from './components/MoueEventsDemo';
import KeyboardEventsDemo from './components/KeyboardEventsDemo';

function App(){
  const name="iotalpha";
  const course="react";
  const items=['item1','item2', 'item3','item4'];
  
return(
<>
{/* <Greetings/>
<Header name={name} />
<h1>Welcome</h1>
<p>Here {name} is learning {course}</p>
<ul>
  {items.map(item=><li key={item}>{item}</li>)} 
</ul>
<Counter/> */}
<MouseEventDemo/>
<KeyboardEventsDemo/>
</>
);
}

export default App;