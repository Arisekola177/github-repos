import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full py-4 bg-slate-700">
         <div className="w-10/12 mx-auto text-white flex justify-between items-center">
             <div>
                <Link to='/' className="text-2xl font-semibold cursor-pointer hover:underline underline-offset-8 hover:scale-105 duration-300">Arisekola</Link>
             </div>
             <div className="flex items-center gap-5">
                <Link to='/create'>Create</Link>
                <Link className="text-sm border-[1px] py-2 px-3 rounded-lg hover:text-slate-800 hover:bg-white  duration-300"  to='https://resume-topaz-beta.vercel.app/' target="blank">Resume</Link>
             </div>
        </div>
    </div>
  )
}

export default Navbar