import './App.css';
import Student from './components/Student';
import Weather from './components/Weather';

function App() {
  const arr = [1,2,3,4,5];
  return (
    <>
      <Weather />
      
      {arr.map((value) => 
        <Student value={value} />
      )}
      
    </>
  );
}

export default App;
