import React from 'react'
import { useState, useEffect } from 'react';


function Repositories() {
  // Setting up variables that would hold the repositories
  const [activeRepo, setActiveRepo] = useState([]);
  const [allRepos, setAllRepos] = useState([]);

 
  // Fetching all repositories
 const getAllRepos = async () => {
     try {
         // Replace "your-username" with your GitHub username
         // Replace "your-token" with your GitHub personal access token
         const response = await fetch('https://api.github.com/users/ehxdie/repos');
        if (response.ok) {
             const data = await response.json();
             setAllRepos(data);
             getLatestRepo(data);
         } else {
            console.error('Failed to fetch repositories');
         }
     } 

    catch (error) 

    {
         console.error('Error fetching repositories:', error);
     }
 }

  
  // Getting only the last worked on Repositories
const getLatestRepo = async (dataArray) => {
        
        if (!dataArray || dataArray.length === 0) {
            return null;
        }

        // Sort the array based on the 'time' property in descending order
        const sortedArray = dataArray.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        // Return the first element (with the latest time) in the sorted array
        setActiveRepo(sortedArray[0]);

    }


console.log(activeRepo);

  

useEffect(() => {
    getAllRepos();

  }, []);



    //full_name
    //html_url

  return (

    <div className='repository-container'>
        <div className='active-repo'>
              <div className='underline'>
                  Active repository: 
              </div>
              
              <div className='active-repo-info'>
                  Name:{activeRepo.full_name}
                  <a href={activeRepo.html_url}>{activeRepo.html_url}</a> 
              </div>
        </div>
    </div>

  )
}

export default Repositories