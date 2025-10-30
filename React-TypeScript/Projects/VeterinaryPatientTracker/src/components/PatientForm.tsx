import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { toast } from "react-toastify"
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store/store";

export default function PatientForm() {


    const { addPatient, updatePatient, activeId, patients } = usePatientStore()
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPatient>()

    useEffect(() => {
        if(activeId){
            const activePatient = patients.filter(patient => patient.id = activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])

    const registerPatient = (data : DraftPatient) => {
        if(activeId){
            updatePatient(data)
            toast.success('Patient updated successfully')
        } else {
            addPatient(data)
            toast.success('Patient added successfully')
        }
        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Patient follow-up</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">manage them easily</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Pet Name 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Enter the pet's name" 
                        {...register('name', {
                            required: 'Pet name is required'
                        })}
                    />
                    {errors.name && (
                        <Error>{errors.name.message}</Error>
                    )}

                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Owner Name 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Enter the owner’s name"
                        {...register('caretaker', {
                            required: 'Owner name is required'
                        })}
                    />
                    {errors.caretaker && (
                        <Error>{errors.caretaker.message}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="Enter the owner’s email" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })} 
                    />
                    {errors.email && (
                        <Error>{errors.email.message}</Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Admission Date 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date" 
                        {...register('date', {
                            required: 'Admission date is required'
                        })}
                    />
                    {errors.date && (
                        <Error>{errors.date.message}</Error>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Symptoms
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Describe the pet’s symptoms" 
                        {...register('symptoms', {
                            required: 'Symptoms are required'
                        })}
                    />
                    {errors.symptoms && (
                        <Error>{errors.symptoms.message}</Error>
                    )}
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={activeId ? 'Update Patient' : 'Add Patient'}
                />
            </form> 
        </div>
    )
}