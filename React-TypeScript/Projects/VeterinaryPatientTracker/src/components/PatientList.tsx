import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"

export default function PatienList() {

    const { patients } = usePatientStore()

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-scroll">
            {patients.length 
                ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patient List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage your {''}
                        <span className="text-indigo-600 font-bold">Patients and Appointments</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>) 
                : (
                <>
                    <h2 className="font-black text-3xl text-center">No Patients Yet</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Start by adding patients {''}
                        <span className="text-indigo-600 font-bold">and they will appear here</span>
                    </p>
                </>) 
            }
        </div>
    )
}
