import { useState } from 'react'
import { Formulario } from './compoments/Formulario'
import { Header } from './compoments/Header'
import { ListadoPacientes } from './compoments/ListadoPacientes'

function App() {
    const [pacientes, setPacientes] = useState([])

    return (
        <div className='container mx-auto mt-20'>
            <Header />

            <div className='mt-12 md:flex'>
                <Formulario setPacientes={setPacientes} />
                <ListadoPacientes pacientes={pacientes} />
            </div>
        </div>
    )
}

export default App
