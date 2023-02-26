import './App.css';
import Counter from './components/counter';
import Student from './components/Student';
import Weather from './components/Weather';

function App() {
  const arr = [1,2,3,4,5];
  return (
    <>
      <Weather />
      <Counter/>
      
      {arr.map((value) => 
        <Student value={value} />
      )}
      
    </>
  );
}

export default App;
