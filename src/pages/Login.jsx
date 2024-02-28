import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FoodMenuService from "../services/FoodMenuService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  let navigate = useNavigate()
  let [foodMenu,setFoodMenu]= useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodMenu({ ...foodMenu, [name]: value });
  };
  const saveFoodMenu = (e) =>{
    e.preventDefault();
    console.log(foodMenu)
    FoodMenuService.create(foodMenu)
      .then((res)=>{
        swal({
          icon: "success",
          text: "Insert complete",
          title: "Result"
        });
        navigate("/Login");
      })
      .catch((e)=>console.log(e));
    }
  return (
    <MainLayout>
      <h1 className="mt-3">LogIn</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={setFoodMenu}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                E-mail
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Password
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="Adress"
                  id="Adress"
                  placeholder="Adresse"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                เบอร์โทร
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="Tel"
                  id="Tel"
                  placeholder="Tel"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
export default Login;