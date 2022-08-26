/* This example requires Tailwind CSS v2.0+ */
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import MarketplaceNav from './marketplace-nav'
import { validateToken } from '../TokenValidation';
import { useQuery } from 'react-query';
import axios from 'axios';
import appConfig from '../appConfig.json'
import { useState } from 'react';

const stats = [
    { name: 'Marketplace Visits', stat: 'N/A' },
    { name: 'Visit Rate', stat: 'N/A' },
    { name: 'Purchases', stat: 'N/A' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let { marketplaceId } = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    const [marketPlace, setMarketplace] = useState({});

    const { isLoading: isLoadingTutorials } = useQuery(
        "get items",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");
            
            validateToken(navigate, token, user_id)
    
            // return await  apiClient.get(`/sellers/${localStorage.getItem("user_id")}/products`);
            return axios.get(`${appConfig.SERVER_URL}/marketplaces/${marketplaceId}`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data) => {
                console.log(data.data)
                setMarketplace(data.data)
                // setTenantData(data.data)
                // setGiftItems(data.data)
                // setMarketplaces(data.data)
            },
            onError: (err) => {
                // setGetResult(fortmatResponse(err.response?.data || err));
            //    setIsError(true) 
            },
            retry: false,
        },

    );



    return (
        <>
            <div>
                <div className="mt-4 mb-8 sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-3xl font-semibold text-gray-900">{marketPlace.Name}</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Her finder du alt information og funktionalitet til din markedsplads for {marketPlace.Name}.
                        </p>
                    </div>
                </div>
                <dl className="mt-1 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <MarketplaceNav />

            <div className='h-screen mt-7 bg-slate-100 px-5 py-5 rounded-lg'>
                <div className="h-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">

                    <iframe className="w-full h-full object-center object-cover" src={`https://picadon-marketplace.herokuapp.com/${marketPlace.WebAddress}`}></iframe>
                </div>
            </div>

        </>

    )
}
