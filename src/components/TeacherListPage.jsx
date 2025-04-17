import { useLocation, useNavigate } from "react-router";
import { teacherData } from "../data/teachers";

function TeacherListPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const teachers = teacherData[state.branch]?.[state.semester] || [];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Teachers for {state.branch} - Sem {state.semester}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teachers.map((teacher) => (
          <div 
            key={teacher.id}
            onClick={() => navigate(`/feedback/${teacher.id}`, { state: { teacher } })}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow"
          >
            {/* <a href="#"> */}
              <img className="rounded-t-lg w-full h-48 object-cover" src={teacher.img} alt={teacher.name} />
            {/* </a> */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {teacher.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {teacher.subject}
              </p>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Give Feedback
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherListPage;