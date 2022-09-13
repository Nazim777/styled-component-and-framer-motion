import './App.css';
import Home from './components/Pages/Home';
import Home2 from './components/Pages/Home2';
import Home3 from './components/Pages/Home3';
import Home4 from './components/Pages/Home4';
import { StyleGlobal } from './Styles/StyleGlobal';
import Box1 from './components/Box1/Box1';
import Box2 from './components/Box2/Box2';
import Box3 from './components/Box3/Box3';
import Box4 from './components/Box4/Box4';
import Box5 from './components/Box5/Box5';
import Box6 from './components/Box6/Box6';
import Box7 from './components/Box7/Box7';


function App() {
  return (

    <div>
      <StyleGlobal/>
      
    <Home/>
    <h1>Home2</h1>
    <Home2/>
    <h1>Home3</h1>
    <Home3/>
    <h1>Home4</h1>
    <Home4/>
    <h1>framer motion</h1>
    <Box1/>
    <Box2/>
    <Box3/>
    <Box4/>
    <Box5/>
    <Box6/>
    <Box7/>
    </div>
  );
}

export default App;
