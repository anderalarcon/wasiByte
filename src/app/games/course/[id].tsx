import React from 'react'
import { useRouter } from 'next/router'

const DefailCoursePage = ({ product }) => {
  console.log('product', product)
  const router = useRouter()

  return <div>DefailCoursePage</div>
}

// This function runs on the server-side for every request to this route
export async function getServerSideProps(context: any) {
  const { id } = context.params

  // For demonstration, let's mock some data fetching
  const productData = {
    1: { name: 'Product 1', description: 'This is product 1', price: 10.99 },
    2: { name: 'Product 2', description: 'This is product 2', price: 12.99 }
    // ... add more mock products as needed
  }

  return {
    props: { product: productData[id] || null }
  }
}

export default DefailCoursePage
