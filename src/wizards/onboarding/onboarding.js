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
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

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
        defaultValues: {
            toggle: false,
        }
    });
    const onSubmit = data => mutate(data);

    if (isSubmitted) {
        return <Navigate to='/' />
    } 

    return (
        <Routes>
            <Route path="/account-info" element={<AccountInfo register={register} next="/register/theme" />} />
            <Route path="/theme" element={<Theme setValue={setValue} register={register} control={control} next="/register/overview" />} />
            <Route path="/overview" element={<Overview handleSubmit={handleSubmit} onSubmit={onSubmit} isSubmitted={isSubmitted} />} />
        </Routes>
    )
}
