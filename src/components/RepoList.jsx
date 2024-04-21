
import  { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Link } from 'react-router-dom';
import {FaTrash, FaPencilAlt} from 'react-icons/fa'

const RepoList = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 10;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

 

  return (
    <div >
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
       {currentRepos.map(repo => (
       
        <div className='bg-slate-100 shadow-lg rounded-lg text-center py-8 flex flex-col gap-4 hover:transition hover:scale-95 duration-300' key={repo.id}>
          <Link to={`/repos/${repo.name}`}>
          <h2 className=''>{repo.name}</h2>
          <p>created: {formatDistanceToNow(new Date(repo.created_at), {addSuffix: true})}</p>
          </Link>
          <div className='flex gap-6 justify-center px-6 items-center cursor-pointer py-4'>
          <FaPencilAlt />
          <FaTrash  />
          </div>
          
         
          </div>
       
      ))}
      </div>
    
      {/* Pagination controls */}
      <div className='py-8 flex justify-center items-center gap-6'>
        <button className='bg-slate-800 py-2 px-3 rounded-lg text-white cursor-pointer hover:scale-95 duration-300' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button className='bg-slate-800 py-2 px-3 rounded-lg text-white cursor-pointer hover:scale-95 duration-300' onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRepo >= repos.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RepoList;
