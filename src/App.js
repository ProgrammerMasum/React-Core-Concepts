import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Masum Billah",
    job:"Player"
  }
  var person2 = {
    name: "Nishat",
    job:"Dancer"
  }
  var person3 = {
    name: "Dolon",
    job:"Heroine"
  }
var style = {
  color:'black',
  backgroundColor: 'lightgray',
  border: '3px solid green',
  
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3 className='' style={style}>My heading: {person.name +" "+ person.job} </h3>
        <h4 style={{backgroundColor: 'cyan', color:'white', border: '2px solid lightgray'}}>Dancer: {person2.name + " "+ person2.job}</h4>
        <h5>Heroine: {person3.name + " "+ person3.job}</h5>
        <p>My first React Paragraph</p>
      </header>
    </div>
  );
}

export default App;
