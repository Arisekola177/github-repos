import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 py-16">   
         <h2 className="text-3xl font-bold">Page Not Found !!!</h2>
        <Link className="text-blue-500 hover:underline underline-offset-4" to='/'>Go to Homepage</Link>
        </div>
    
    </div>
  )
}

export default NotFound