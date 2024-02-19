import { useState, useEffect } from "react";


function Formulario (){
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log("Enviando Formulario")
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}

                <span className="text-indigo-600 font-bold">
                    Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md px-5 py-10 mb-10 mx-5">
                <div className="mb-5">    
                    <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">
                        Nombre Mascota</label>

                    <input 
                        id="mascota"
                        type="text" 
                        placeholder="Nombre de la mascota"
                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>    

                <div className="mb-5">    
                    <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">
                        Nombre Propietario</label>

                    <input 
                        id="propietario"
                        type="text" 
                        placeholder="Nombre del propietario"
                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>    

                <div className="mb-5">    
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">
                        Email</label>

                    <input 
                        id="email"
                        type="text" 
                        placeholder="Email de contacto"
                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>    

                <div className="mb-5">    
                    <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">
                        Alta</label>

                    <input 
                        id="alta"
                        type="date" 
                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>    

                <div className="mb-5">    
                    <label htmlFor="informacion" className="block text-gray-700 font-bold uppercase">
                        Síntomas</label>

                    <textarea 
                        id="informacion"
                        placeholder="Describe los síntomas"
                        className="placeholder-gray-400 rounded-md border-2 w-full p-2 mt-2"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>    

                <input
                    type="submit"
                    className="bg-indigo-600 uppercase text-white text-bold w-full p-3 hover:bg-indigo-700 
                    cursor-pointer transition-all"
                    value="Agregar Paciente"
                 />

            </form>



        </div>
        

    )
}

export default Formulario