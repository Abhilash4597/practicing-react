import './App.css';
import React,{useEffect, useState} from 'react'

export default function App() {
  const [data, setData] = useState([]);

  let api = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    fetchData(api);
  },)

  async function fetchData() {
    let data = await fetch(api);
    let mainData = await data.json();
    setData(mainData);
  }
  // console.log(data)

  // let render = data.map((datas) => {
  //   return <h1 key={datas.id}>{datas.title}</h1>;
  // })

  return (
    <div>
      {data.map(datas => {
        return <h1 key={datas.id}>{datas.title}</h1>;
      })}
    </div>
  );
}

