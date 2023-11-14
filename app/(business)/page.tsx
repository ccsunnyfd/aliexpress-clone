import getAllProducts from '../third-party-requests/prisma/get-all-products'
import ProductComponent from './Products/components/ProductComponent'

export default async function Home() {
  const products = await getAllProducts()

  return (
    <div className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
