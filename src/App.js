import './App.css';
import Student from './components/Student';
import Search from './components/search';

function App() {
  const arr = [1,2,3,4,5];
  return (
    <>
      <Search />
      
      {arr.map((value) => 
        <Student value={value} />
      )}
      
      {/* <Student value={2} />
      <Student value={3} />
      <Student value={4} />
      <Student value={5} /> */}
    </>
  );
}

export default App;
