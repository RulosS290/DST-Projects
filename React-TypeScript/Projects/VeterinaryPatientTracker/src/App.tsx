import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PatienForm from "./components/PatientForm"
import PatienList from "./components/PatientList"

function App() {

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Veterinary Patient
          <span className="text-indigo-700"> Tracker</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatienForm />
          <PatienList />
        </div>
      </div>

      <ToastContainer/>
    </>
  )
}

export default App
