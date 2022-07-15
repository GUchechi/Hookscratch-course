import React, { useState } from 'react'


const productsList = [
    {id: 'id1', name: 'product 10'},
    {id: 'id2', name: 'product 12'},
    {id: 'id3', name: 'product 1'}
]
const Practice = () => {
    const [products, setProducts] = useState(productsList)
    const addProduct = () => {
        const newProduct = {
            id: new Date().getTime().toString(),
            name: `product ${new Date().getTime()}`
        }
        setProducts(newProduct)
    }
  return (
    <div>
        <ul>
        {productsList.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
        </ul>
        <button onClick={addProduct} className="btn">Add Product</button> <hr/>
        <button className="btn">Change product 1 name</button>
    </div>
  )
}

export default Practice