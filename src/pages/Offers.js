import { useState } from "react"

export default function Offers() {
  const [items] = useState([
    { title: 'Quality Hoodie', price: 21.99 },
    { title: 'Quality Sneakers', price: 34.99 },
    { title: 'Quality Tee', price: 12.99 }
  ])

  return (
    <div>
      <h3>Latest Offers</h3>
      <div className="offers">
        {items.map(item => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="Product Image" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}