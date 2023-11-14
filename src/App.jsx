import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])
  async function getProducts() {
    let { data: products, error } = await supabase.from('products').select('*')
    setProducts(products)
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} -- {product.price}
        </li>
      ))}
    </ul>
  )
}

export default App
