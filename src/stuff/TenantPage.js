
import React from 'react'
import TenantTable from './TenantTable'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from 'axios';
import { validateToken } from '../TokenValidation';
import appConfig from '../appConfig.json'

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





export default function TenantPage() {
    let location = useLocation();
    let {marketplaceName} = useParams();
    let navigate = useNavigate();

    const { isLoading: isLoadingTutorials } = useQuery(
        "get items",
        async () => {
            const token = localStorage.getItem("token");
            const user_id = localStorage.getItem("user_id");
            
            validateToken(navigate, token, user_id)
    
            // return await  apiClient.get(`/sellers/${localStorage.getItem("user_id")}/products`);
            return axios.get(`${appConfig.SERVER_URL}/marketplaces/${marketplaceName}/tenants`, {
                headers: {
                    "Content-type": "application/json",
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
        },
        {
            onSuccess: (data, variables, context) => {
                console.log(data.data)
                // setGiftItems(data.data)
                // setMarketplaces(data.data)
            },
            onError: (err) => {
                // setGetResult(fortmatResponse(err.response?.data || err));
            },
        }
    );



  return (
      <TenantTable/>
  )
}
