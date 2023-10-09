import { useState } from 'react'
import Swal from 'sweetalert2'

export const Formulario = ({ setPacientes }) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando formulario')
        /// validacion de formulario
        if ([nombre, apellido, telefono, fecha, sintomas].includes('')) {
            console.log('hay campos vacios')
            setError(true)
        } else {
            console.log('formulario correcto')
            setError(false)
            setPacientes((prevPacientes) => [
                ...prevPacientes,
                {
                    nombre,
                    apellido,
                    telefono,
                    fecha,
                    sintomas,
                },
            ])
            Swal.fire({
                icon: 'success',
                title: 'Paciente agregado   ',
                showConfirmButton: false,
                timer: 1500,
            })
        }
    }

    return (
        <div className='w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimientos Pacientes</h2>

            <p className='text-center'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5'>
                {error && (
                    <p
                        className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                        role='alert'
                    >
                        {' '}
                        Todos los campos son obligatorios
                    </p>
                )}
                <div>
                    <label className='block text-gray-700 uppercase font-bold'>Nombre Paciente:</label>
                    <input
                        id='nombre'
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400'
                        type='text'
                        placeholder='Nombre Paciente'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label className='block text-gray-700 uppercase font-bold'>Apellido Paciente:</label>
                    <input
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400'
                        type='text'
                        placeholder='Apellido Paciente'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div>
                    <label className='block text-gray-700 uppercase font-bold'>Telefono Paciente:</label>
                    <input
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400'
                        type='text'
                        placeholder='Telefono Paciente'
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div>
                    <label className='block text-gray-700 uppercase font-bold'>Fecha:</label>
                    <input
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400'
                        type='date'
                        placeholder='Fecha'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div>
                    <label className='block text-gray-700 uppercase font-bold'>Sintomas:</label>
                    <textarea
                        className=' border-2 w-full p-2 mt-2 placeholder-gray-400'
                        type='text'
                        placeholder='Sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <button
                    type='submit'
                    className='bg-indigo-600 w-full mt-5 p-2 uppercase text-white font-bold hover:bg-indigo-700'
                >
                    Agregar Paciente
                </button>
            </form>
        </div>
    )
}
