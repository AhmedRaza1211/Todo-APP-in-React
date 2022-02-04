import Paragraph from './component/para';
import {One, Three} from './component/moreComponents';
import JustOne from './component/oneComponent'
import Pass2 from './component/props'
import Todo from './component/todo';

function App() {
  return (
    <div>
      <h2> Ahmed Raza Attari </h2>
      <p> <Paragraph/> </p>
      <p> <One /> </p>
      <p> <Three /> </p>
      <p> <JustOne /> </p>

      <h1> Props </h1>
      <Pass2 />

      {/* TODO APP */}
      <Todo />



    </div>
  );
}

export default App;
