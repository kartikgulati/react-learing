import React from "react";
import { useEffect, useState } from "react";


function Github() {
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/kartikgulati')
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setDate(data);
      });
  }, [])


  return (
    <div className="text-center bg-gray-400 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url}/>
    </div>
  );
}

export default Github;
