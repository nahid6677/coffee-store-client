
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  const [allCoffee, setCoffee] = useState(coffees);

  return (
    <div className='m-20'>

      <h1 className='text-6xl'>Coffee Collection {allCoffee.length}</h1>
      <div className="grid md:grid-cols-2 my-5 gap-4">
        {
          allCoffee.map(coffee => <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
