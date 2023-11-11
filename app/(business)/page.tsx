import ProductComponent from './Products/components/ProductComponent'

export default function Home() {
  const products = {
    data: [
      {
        id: 1,
        title: 'Title 1',
        description: 'This is a description',
        url: 'https://picsum.photos/id/7/800/800',
        price: 9899,
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'This is a description',
        url: 'https://picsum.photos/id/71/800/800',
        price: 9699,
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'This is a description',
        url: 'https://picsum.photos/id/72/800/800',
        price: 9969,
      },
      {
        id: 4,
        title: 'Title 4',
        description: 'This is a description',
        url: 'https://picsum.photos/id/73/800/800',
        price: 29999,
      },
      {
        id: 5,
        title: 'Title 5',
        description: 'This is a description',
        url: 'https://picsum.photos/id/74/800/800',
        price: 9699,
      },
      {
        id: 6,
        title: 'Title 6',
        description: 'This is a description',
        url: 'https://picsum.photos/id/75/800/800',
        price: 94999,
      },
      {
        id: 7,
        title: 'Title 7',
        description: 'This is a description',
        url: 'https://picsum.photos/id/76/800/800',
        price: 39999,
      },
      {
        id: 8,
        title: 'Title 8',
        description: 'This is a description',
        url: 'https://picsum.photos/id/77/800/800',
        price: 93999,
      },
      {
        id: 9,
        title: 'Title 9',
        description: 'This is a description',
        url: 'https://picsum.photos/id/78/800/800',
        price: 99599,
      },
      {
        id: 10,
        title: 'Title 10',
        description: 'This is a description',
        url: 'https://picsum.photos/id/79/800/800',
        price: 69999,
      },
    ],
  }

  return (
    <div className="mx-auto mt-4 max-w-[1200px] px-2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.data.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
