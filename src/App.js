import { useState, useEffect } from 'react'
import './App.css';
import Buttons from './Buttons';
import Display from './Display';



function App() {
  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([])

  const reqUrl = 'https://jsonplaceholder.typicode.com/'
  const API_URL = `${reqUrl}${resourceType}`
  const request = async () => {
    try {
      const response = await fetch(API_URL)
      const result = await response.json()
      setItems(result)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    request()
  }, [resourceType])
  return (
    <div className="App">
      <Buttons
        setResourceType={setResourceType}
      />
      <Display
        items={items}
      />
    </div>
  );
}

export default App;
