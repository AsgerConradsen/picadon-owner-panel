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
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';




// This is the master component for the create marketplace wizard
export default function Createmarketplace() {
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            toggle: false,
        }
    });
    const onSubmit = data => console.log(data);

    console.log(watch("test"));


    return (
        <Routes>
            <Route path="/property-info" element={<PropertyInfo handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />} />
            <Route path="/type" element={<MarketplaceType handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />} />
            <Route path="/tenant-info" element={<TenantInfo handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />} />
            <Route path="/financing" element={<Financing handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/welcome-gift" element={<WelcomeGift handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/product-preview" element={<ProductPreview handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/gift-config" element={<GiftConfig handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />
            <Route path="/overview" element={<OVerview handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />} />

        </Routes>
    )
}
