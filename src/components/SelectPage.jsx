import { useState } from "react";
import { useNavigate } from "react-router";

function SelectPage() {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/teachers", { state: { branch, semester } });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
      <div className="mb-5">
        <label htmlFor="branch" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select Branch
        </label>
        <select
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="">Choose a branch</option>
          <option value="CSE">CSE</option>
          <option value="CSE">ISE</option>
          <option value="CSE">ECE</option>
          <option value="CSE">EEE</option>
          <option value="CSE">CS-DS</option>
          <option value="ECE">CE</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select Semester
        </label>
        <select
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="">Choose a semester</option>
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

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Teachers
      </button>
    </form>
  );
}

export default SelectPage;