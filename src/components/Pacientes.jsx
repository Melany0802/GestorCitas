function Pacientes({paciente, setPaciente}){
    
    return(
        <div className="bg-white rounded-md mx-5 my-10 px-5 py-10 shadow-md">
                <p className="text-gray-700 uppercase font-bold mb-3">
                    Nombre: {""}
                    <span className="font-normal normal-case">{paciente.nombre}</span>
                </p>

                <p className="text-gray-700 uppercase font-bold mb-3">
                    Propietario: {""}
                    <span className="font-normal normal-case">{paciente.propietario}</span>
                </p>

                <p className="text-gray-700 uppercase font-bold mb-3">
                    Email: {""}
                    <span className="font-normal normal-case">{paciente.email}</span>
                </p>

                <p className="text-gray-700 uppercase font-bold mb-3">
                    Fecha Alta: {""}
                    <span className="font-normal normal-case">{paciente.fecha}</span>
                </p>

                <p className="text-gray-700 uppercase font-bold mb-3">
                    Síntomas: {""}
                    <span className="font-normal normal-case">{paciente.sintomas}</span>
                </p>




                <div className="flex justify-between mt-10">
                    <button 
                        type="button" 
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={() => setPaciente(paciente)}> Editar
                    </button>
                    <button 
                        type="button" 
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        > Eliminar
                    </button>
                </div>
        </div>

    )
}

export default Pacientes