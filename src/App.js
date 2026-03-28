import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
 import Cards from "./component/Cards";
import {filterData,apiUrl} from "./component/Data";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const[courses,setCourses]=useState(null);
  useEffect( ()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        //save data in to variable
        console.log(output);
       setCourses(output.data);
      }
      catch(error){
         toast.error("someting went wrong");
      }
    }
    fetchData();
  },[])
   const notify = () => toast('Wow so easy !');
const[category,setCategory]=useState(filterData[0].title);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <Cards courses={courses} category={category}/>
    </div>
  );
};

export default App;