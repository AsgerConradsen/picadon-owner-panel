/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Street food',
        href: '#',
        price: '100DKK / lejer',
        imageSrc: 'https://images.unsplash.com/photo-1617449646575-43d681d3cba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Udendørs yoga hold',
        href: '#',
        price: '50DKK / lejer',
        imageSrc: 'https://images.unsplash.com/photo-1608405059861-b21a68ae76a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Keramik kursus',
        href: '#',
        price: '300DKK / lejer',
        imageSrc: 'https://images.unsplash.com/photo-1612058060757-aa8f7f66e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Mini golf turnering',
        href: '#',
        price: '100DKK / lejer',
        imageSrc: 'https://images.unsplash.com/photo-1567019001814-57350903e2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function EventsCatalogue() {
    return (
        <div className="bg-white">
            <div className="ml-8 mt-4 sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Events</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Et overblik over de event du kan købe til dine lejere.
                        </p>
                    </div>
                </div>
            <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 ">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
