import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const RepoDetails = () => {
    const { name } = useParams();
    const [singlerepo, setSingleRepo] = useState(null);

    useEffect(() => {
        const fetchSingleRepo = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/arisekola177/${name}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repo');
                }
                const data = await response.json();
                setSingleRepo(data);
            }   catch (error) {
                console.log(error);
            }
        };
        fetchSingleRepo() 
    }, [name]);


    return (
        <div className="w-full">
            <div className="w-10/12 mx-auto flex justify-center items-center py-8">
               {
                singlerepo && <div className="flex flex-col gap-4 items-center">
                   <h2 className="text-3xl font-bold text-red-500"> {singlerepo.name}</h2>
                   <p>created: {formatDistanceToNow(new Date(singlerepo.created_at), {addSuffix: true})}</p>
                </div>
               }
            </div>
        </div>
    );
}

export default RepoDetails;



