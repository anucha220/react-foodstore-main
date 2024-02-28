import React , {useState,useEffect} from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink, useNavigate } from "react-router-dom";
import FoodMenuService from "../services/FoodMenuService";
import logo from "../assets/react.svg";

const Product = () => {
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
      <h1 className="mt-3">สินค้า</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            เพิ่มสินค้า
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
       {
       foodmenus.map((menu)=>(
        <FoodMenuCard menu={menu}/>
          ))
       }
      </div>
    </MainLayout>
  );
};
const FoodMenuCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
        <img src={props.menu.category} alt=""/>    
         <div className="card-body">
          {/* <div class="text-center">
              <img src={props.menu.category} alt=""  width={100} height={100}/>
              </div> */}
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              {/* <img src="Show.gif" width={1300} /> */}
              <p>
              ลูกค้าท่านใดสนใจขนมสามารถมาเลือกซื้อและเลือกชมสินค้าได้ที่ ร้านบานบุรีเบเกอรี่ ในโรงอาหารของวิทยาลัยครับ ของเราทำสดใหม่ วันต่อวันครับ
              </p>
              <h5>${props.menu.price}</h5>
              
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "}
              <NavLink
                to={"/product/edit/" + props.menu._id}
                className="btn btn-warning"
              >
                Edit
              </NavLink>{" "}
              <NavLink
                to={"/product/delete/" + props.menu._id}
                className="btn btn-danger"
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};
export default Product;
