import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import AccountInfo from './account-info'
import Theme from './theme'
import Overview from './overview'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import apiClient from "../../http-common"
import formApiClient from "../../http-form-data"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const schema = yup.object().shape({
    companyName: yup.string().required("Company name is a required field"),
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


// This is the master component for the onboarding wizard
export default function Onboarding() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { isLoading: isLoadingPut, isSuccess, isError: isErrorPut, data: dataPut, error: errorPut, mutate } = useMutation(formData => { return apiClient.post("/owners", formData); },
    {
                onError: (error, variables, context) => {
                    // An error happened!
                    console.log(`rolling back optimistic update with id ${context.id}`)
                },
                onSuccess: (data, variables, context) => {
                    setIsSubmitted(true)
                },
            }
    );


    const { setValue, register, handleSubmit, watch, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        // defaultValues: {
        //     toggle: false,
        // }
    });


  
    const onSubmit = data => mutate(data);

    if (isSubmitted) {
        return <Navigate to='/' />
    } 

    return (
        <Routes>
            <Route path="/account-info" element={<AccountInfo watch={watch} errors={errors} register={register} next="/register/theme" />} />
            <Route path="/theme" element={<Theme watch={watch} setValue={setValue} register={register} control={control} next="/register/overview" />} />
            <Route path="/overview" element={<Overview handleSubmit={handleSubmit} onSubmit={onSubmit} watch={watch} errors={errors} isSubmitted={isSubmitted} />} />
        </Routes>
    )
}
