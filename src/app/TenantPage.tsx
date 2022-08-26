
import React, { useState } from 'react'
// import { TenantTable } from './TenantTable';
import TenantTable from './TenantTable';
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from 'axios';
import { validateToken } from '../TokenValidation';
import appConfig from '../appConfig.json'
import { NotFoundErrorPage } from './errorPages/NotFoundErrorPage';

//Tenant page 
/*
/marketplaces 

When visiting this page:
    1. Get tenants for |||  let {marketplaceName} = useParams();  |||
        - If access denied.. show 401
        - If marketplace doesn't exist show 404
        - If other error.. then ???
        - Else proceed

    2. Render the tenants in table





*/

interface Props {
}

export const TenantPage: React.FC<Props> = (props) => {
    const [tenantData, setTenantData] = useState([])


    let location = useLocation();
    let {marketplaceId} = useParams();
    let navigate = useNavigate();

    const [isError, setIsError] = useState(false)

    const { isLoading: isLoadingTutorials } = useQuery(
        "get tenants",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");
            
            validateToken(navigate, token, user_id)
    
            // return await  apiClient.get(`/sellers/${localStorage.getItem("user_id")}/products`);
            return axios.get(`${appConfig.SERVER_URL}/marketplaces/${marketplaceId}/tenants`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data) => {
                console.log(data.data)
                setTenantData(data.data)
                // setGiftItems(data.data)
                // setMarketplaces(data.data)
            },
            onError: (err) => {
                // setGetResult(fortmatResponse(err.response?.data || err));
               setIsError(true) 
            },
            retry: false,
        },

    );


    if (isError) {
        return (<NotFoundErrorPage link={"/"} />)
    }

  return (
      <TenantTable data={tenantData}/>
  )
}
