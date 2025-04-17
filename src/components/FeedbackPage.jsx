import { useLocation } from "react-router";
import { useState } from "react";
import { feedbackQuestions } from "../data/questions";

function FeedbackPage() {
  const { state } = useLocation();
  const teacher = state?.teacher;
  const [ratings, setRatings] = useState(Array(feedbackQuestions.length).fill(0));
  const [activeQuestion, setActiveQuestion] = useState(0);

  const ratingLabels = ["Bad", "Satisfactory", "Good", "Very Good", "Excellent"];

  const handleRating = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const onClickNext = () => {
    if (activeQuestion !== feedbackQuestions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onClickPrev = () => {
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log(`Feedback for ${teacher.name}:`, ratings);
    alert("Feedback submitted!");
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="mx-auto mt-[100px] max-w-3xl rounded-md border border-[#444444] bg-[#1e293b] px-[60px] py-[30px]">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-4xl font-medium text-[#38bdf8]">
            {addLeadingZero(activeQuestion + 1)}
          </span>
          <span className="text-[22px] font-medium text-[#817a8e]">
            /{addLeadingZero(feedbackQuestions.length)}
          </span>
        </div>
      </div>
      
      <h3 className="my-4 text-2xl font-medium text-white">
        {feedbackQuestions[activeQuestion]}
      </h3>
      
      <div className="space-y-4">
        {ratingLabels.map((label, index) => {
          const value = index + 1; // Values from 1 to 5
          return (
            <div 
              key={value}
              onClick={() => handleRating(activeQuestion, value)}
              className={`p-4 rounded-md cursor-pointer transition-colors ${
                ratings[activeQuestion] === value 
                  ? 'bg-[#38bdf8] text-white'
                  : 'bg-[#334155] text-white hover:bg-[#475569]'
              }`}
            >
              {label}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={onClickPrev}
          disabled={activeQuestion === 0}
          className="min-w-[150px] transform cursor-pointer rounded-lg border border-[#38bdf8] px-5 py-1.5 text-lg font-semibold text-[#38bdf8] outline-none transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1d4ed8] hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 disabled:hover:scale-100 disabled:hover:bg-transparent"
        >
          Previous
        </button>
        
        {activeQuestion === feedbackQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={ratings[activeQuestion] === 0}
            className="min-w-[150px] transform cursor-pointer rounded-lg border border-[#38bdf8] bg-[#38bdf8] px-5 py-1.5 text-lg font-semibold text-white outline-none transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1d4ed8] active:scale-95 active:bg-[#1e40af] disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-800 disabled:text-gray-500 disabled:hover:scale-100"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={onClickNext}
            disabled={ratings[activeQuestion] === 0}
            className="min-w-[150px] transform cursor-pointer rounded-lg border border-[#38bdf8] bg-[#38bdf8] px-5 py-1.5 text-lg font-semibold text-white outline-none transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1d4ed8] active:scale-95 active:bg-[#1e40af] disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-800 disabled:text-gray-500 disabled:hover:scale-100"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default FeedbackPage;