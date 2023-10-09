import Paciente from './Paciente'

export const ListadoPacientes = ({ pacientes }) => {
    return (
        <div className='w-1/2 lg:w-3/5'>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <div className='flex gap-4 flex-wrap'>
                {pacientes.map((paciente, idx) => (
                    <Paciente key={idx} {...paciente} />
                ))}
            </div>
        </div>
    )
}
