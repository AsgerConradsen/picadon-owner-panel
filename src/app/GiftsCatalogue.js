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
        name: 'Tasting Pack - 250g x 4',
        href: '#',
        price: 'Damn good coffee company',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0363/3853/2397/products/2_d1da1b42-9f31-4064-a408-870f27655e35_540x.jpg?v=1641896605',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Gold Medals 6 x 25 g',
        href: '#',
        price: 'Friisholm Chokolade',
        imageSrc: 'https://static.wixstatic.com/media/5a6319_26bab14ef456437996dbdd5882917916~mv2.png/v1/fill/w_426,h_420,al_c,q_90,usm_0.66_1.00_0.01/5a6319_26bab14ef456437996dbdd5882917916~mv2.webp',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Rosé smagekasse (3 flasker)',
        href: '#',
        price: 'Kjær og Sommerfeldt',
        imageSrc: 'https://cdn.kjaersommerfeldt.dk/products/1021859/Smagekasse%20-%20Ros%20(3%20flasker)%20-%201021859.png?width=0&height=600&rxy=&quality=70&format=png&rmode=Crop',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },

    // More products...
]

export default function GiftsCatalogue(props) {
    return (
        <div className="bg-white">
            <div className="ml-8 mt-4 sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Gaver</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Et overblik over de gaver du har mulighed for at give dine lejere.
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
