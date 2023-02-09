import { useState, useEffect } from 'react'
import './App.css';
import Buttons from './Buttons';
import Display from './Display';



function App() {
  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([])
  const value = ['users', 'posts', 'comments'];

  const reqUrl = 'https://jsonplaceholder.typicode.com/'
  const API_URL = `${reqUrl}${resourceType}`

  useEffect(() => {

    const request = async () => {
      try {
        const response = await fetch(API_URL)
        const result = await response.json()
        setItems(result)
  
      } catch (err) {
        console.log(err)
      }
    }
    request()
  }, [resourceType])
  return (
    <div className="App">
      <Buttons
        setResourceType={setResourceType}
        value={value}
      />
      <Display
        items={items}
      />
    </div>
  );
}

export default App;
