import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Admin() {
  const [name, setName] = useState("");
  const [sub,setSub]=useState("");
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="bg-blue-500 h-auto w-[100vw] p-[1%]">
      <div className="">
        <h1 className="text-2xl text-white pb-[2%]">Add Faculty to database</h1>
        <div className="flex">
          <form
            className="h-[50vh] w-[50vw] flex flex-col gap-5 pl-[5%]"
            action=""
          >
            <div className="w-[100%]  flex items-center gap-5">
              <span className="text-white"> Faculty Name : </span>
              <input
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                className="bg-white h-[5vh] w-[20vw] rounded-full pl-[2%] outline-none"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-[100%]  flex items-center gap-5">
              <span className="text-white pl-[1%]"> Department : </span>
              <select className="bg-white w-[20vw] outline-none rounded-full pl-[15%] h-[5vh]">
                <option value="CSE">CSE</option>
                <option value="AI&ML">AI&ML</option>
                <option value="ISE">ISE</option>
                <option value="CIV">CIV</option>
                <option value="MEC">MEC</option>
                <option value="DSE">DSE</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
            <div className="w-[100%]  flex items-center gap-5">
              <span className="text-white pl-[3.5%]"> Semester : </span>
              <select className="bg-white w-[20vw] outline-none rounded-full pl-[17%] h-[5vh]">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="w-[100%]  flex items-center gap-5">
              <span className="text-white"> Subject Code : </span>
              <input onChange={(e) => {
                  setSub(e.currentTarget.value);
                }}
                className="bg-white h-[5vh] w-[20vw] rounded-full pl-[2%] outline-none"
                type="text"
                placeholder="Code"
              />
            </div>
            <div className="w-[100%]  flex items-center gap-5">
              <span className="text-white pl-[3%]"> Profile Pic : </span>
              <input
                className="bg-white h-[5vh] w-[20vw] rounded-full pl-[2%] outline-none"
                type="text"
                placeholder="URL"
              />
            </div>
            <div className="w-[70%] h-[5vh] flex justify-center ">
              <input className="bg-[gold] w-[40%] rounded-full" type="submit" />
            </div>
          </form>
          <div className="view  h-[50vh] w-[50vw] pl-[10%]">
            <h1 className="text-white">PROFILE :</h1>
            <div className="bg-[white] w-[20vw] flex flex-col items-center gap-1 rounded-[1cqw]">
              <div className="bg-blue-200 h-[25vh] w-[25vh] rounded-full mt-[3vh] mb-[2vh] outline"><img src="" alt="" /></div>
              <h1 className="text-xl">Name:{name}</h1>
              <h1 className="text-[#11111170] pb-[5vh]">Subject:{sub}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
