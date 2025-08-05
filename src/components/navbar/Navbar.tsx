import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-black text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">ViteFarma</Link>

                    <div className='flex gap-10'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar