import { useEffect } from "react"
import { useState } from "react"
import RepoList from '../src/components/RepoList'

const Home = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepos = async () => {
          const response = await fetch('https://api.github.com/users/arisekola177/repos')
          const json = await response.json()
          if(response.ok){
            console.log(json)
            setRepos(json)
          }
        }
        fetchRepos()
      },[])
  return (
    <div className="w-full">
        <div className="w-10/12 mx-auto ">
             <h1 className="text-xl py-4 font-semibold text-center">My Github repo</h1>
              <RepoList repos={repos} />
        </div>
    </div>
  )
}

export default Home