import React from 'react'

async function github(){
    const URL = 'https://api.github.com/users/zaimeali/repos?per_page=100';
    const fetchData = await fetch(URL);
    const result = await fetchData.json();
    console.log(result);
}

export default function Github() {
    github();
    return (
        <div>
            
        </div>
    )
}
