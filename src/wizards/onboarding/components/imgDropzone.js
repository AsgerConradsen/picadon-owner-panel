import React, { useState } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import Image from 'react-graceful-image'
import formApiClient from '../../../http-form-data'
import { XIcon } from '@heroicons/react/solid'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'


export default function ImgDropzone(props) {
    const [url, setUrl] = useState("")
    const [image, setImage] = useState({})

    async function handleDrop(acceptedFiles, fileRejections) {
        if (fileRejections.length !== 0) {
            alert("Invalid image format. Please make sure to upload a png, jpg, or jpeg")
            return
        }
        setImage(acceptedFiles[0]);
        let res = await axios.get("https://picadon-server-1.herokuapp.com/presigned-upload-link");
        if (res.status != 200) {
            //todo handle
        }
        setUrl(res.data)
        mutate();
        const imageUrl1 = res.data.split('?')[0]
        props.setValue(props.name, imageUrl1)
    }

    function chooseNew() {
        props.setValue(props.name, "")
    }

    //TODO something on success/failure
    const { isLoading: isLoadingPut, isSuccess, isError: isErrorPut, data: dataPut, error: errorPut, mutate } = useMutation(
        async () => { return await formApiClient.put(url, image); });


    return (
        <div className='my-4'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {props.label}
            </label>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg">
                {props.watch ?
                    <div>
                        <Image className="w-full h-full object-center object-cover border-2 border-dashed border-gray-300 rounded-lg" noLazyLoad  src={props.watch} retry={{ count: 10, delay: 1 }} customPlaceholder={ ref => <div className="border-2 border-dashed border-gray-300 rounded-lg grid place-items-center h-full">Loading...</div> } />
                        {/* <button className="w-8 h-8 absolute top-0 bg-red-600 rounded-full">X</button> */}
                        <button
                            onClick={() => chooseNew()}
                            type="button"
                            className="absolute -top-1 -left-1 le inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <XIcon className="h-3 w-3" aria-hidden="true" />
                        </button>
                    </div>
                    :
                    <Dropzone accept={'image/jpeg, image/png'} onDrop={(acceptedFiles, fileRejections) => handleDrop(acceptedFiles, fileRejections)}>
                        {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps()} className="w-full h-full justify-center px-6 pt-12 pb-28 border-2 border-gray-300 border-dashed rounded-lg">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <input {...getInputProps()} />
                                    <p className='text-md text-gray-500' >Drag and drop, or click to select an image</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                }
            </div>

        </div>

    )
}
