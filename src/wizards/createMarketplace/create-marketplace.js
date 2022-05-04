import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import PropertyInfo from './property-info'
import Financing from './financing'
import MarketplaceType from './marketplace-type'
import TenantInfo from './tenant-info'
import ProductPreview from './product-preview'
import GiftConfig from './gift-config'
import OVerview from './overview'
import WelcomeGift from './welcome-gift'
import appConfig from '../../appConfig.json'
import { tenantsSchema } from './tenansSchema';
import "yup-phone";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required("Property name is a required field"),
    tenants: tenantsSchema,
    // cvr: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(8, 'Must be exactly 8 digits').max(8, 'Must be exactly 8 digits').required(),
    // email: yup.string().email().required(),
    // phoneNumber: yup.string().phone("DK", true).required(),
    // password: yup.string().matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ).required(),
    // header: yup.string().min(5, 'Header must be at least 5 characters').max(50, 'Header must be max 50 characters').required(),
    // subHeader: yup.string().min(5, 'Sub Header must be at least 5 characters').max(50, 'Sub Header must be max 50 characters').required(),
    // text1: yup.string().min(150).max(300).required(),
    // text2: yup.string().min(150).max(300).required(),
})

// This is the master component for the create marketplace wizard
export default function Createmarketplace() {
    const { mutate } = useMutation(formData => {
        return axios.post(`${appConfig.SERVER_URL}/marketplaces`, formData, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
    },
        {
            onError: (err, variables, context) => {
                if (err.response.status === 409) {
                    alert("An account with this email already exists.")
                }
                else {
                    alert("An unexpected error happened. Please check your inputs or reach out to Picadon support.")
                }
            },
            onSuccess: (data, variables, context) => {
                // setModalOpen(true)
                // setIsSubmitted(true)
            },
        }
    );

    const { getValues, setValue, register, handleSubmit, watch, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });



    // const onSubmit = data => { console.log(data); console.log(errors); }
    const onSubmit = data => mutate(data);
    // const onSubmit = data => console.log(data);

    console.log(watch("test"));
    console.log(errors);



    return (
        <Routes>
            <Route path="/property-info" element={<PropertyInfo errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />} />
            <Route path="/type" element={<MarketplaceType handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />} />
            <Route path="/tenant-info" element={<TenantInfo errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} watch={watch} setValue={setValue} />} />
            <Route path="/financing" element={<Financing handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/welcome-gift" element={<WelcomeGift handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/product-preview" element={<ProductPreview handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/gift-config" element={<GiftConfig handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/overview" element={<OVerview handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />

        </Routes>
    )
}
