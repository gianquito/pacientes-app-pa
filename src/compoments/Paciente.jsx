export default function Paciente({ nombre, apellido, telefono, fecha, sintomas }) {
    return (
        <div className='shadow-md rounded-lg py-10 px-5 flex-shrink-0'>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Telefono: {telefono}</p>
            <p>Fecha: {fecha}</p>
            <p>Sintomas: {sintomas}</p>
        </div>
    )
}
