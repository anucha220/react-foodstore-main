import React , {useState,useEffect} from "react";
import MainLayout from '../layouts/MainLayout';
import FoodMenuService from "../services/FoodMenuService";

const Contact = () => {
    const [foodmenus, setFoodMenus] =useState([]);

    const fetchFoodMenus = () => {
      FoodMenuService.getAll()
        .then((res)=>{
          console.log(res.data.data)
          setFoodMenus(res.data.data)
        })
        .catch((e)=>{
          console.log(e);
        });
    }
    useEffect(()=>{
      fetchFoodMenus()
    },[]);
  
    return (
      <MainLayout>
        <h1 className="mt-3">Contact</h1>
        <hr />
        <div className="row">
        <div>
            
      <h3>NAKHON PATHOM VOCATIONAL COLLEGE</h3>
      <h5><b>Adress:</b>90 Tesa Rd.,Mueang,Nakhon Pathom 73000</h5>
      <h5><b>Tel:</b>034-252790</h5>
      <h5><b>E-mail:</b>admin@trainingconter.com</h5>
      <img src="Screenshot (12).png" width={900}/>
    </div>
        </div>
      </MainLayout>
    );
  };
  
export default Contact
