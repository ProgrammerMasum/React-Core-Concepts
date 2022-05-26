import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Practiced component</p>

      <Person></Person>
      <Person></Person>
      <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  const personStyle = {
    border: '5px dotted lightgray', 
    margin: '15px', 
    borderRadius:'5px', 
    padding: '10px',
  }
  return(
  <div style={personStyle}>
    <h1>Name: Rakib Al Hasan</h1>
    <h3>Hero Of the Year</h3>
  </div>
  )
}

export default App;
