import React, { useState } from "react";

export default function StressQuestionnaire(){
  const questions = [
    "I feel overwhelmed or stressed out",
    "I find it hard to manage time and prioritize tasks",
    "I experience physical symptoms, like headaches or stomachaches",
    "I struggle to relax or unwind",
    "I feel irritable or short-tempered",
    "I find myself worrying excessively about different aspects of life",
    "I have trouble sleeping due to stress",
    "I feel tense or anxious in most situations",
    "I tend to avoid stressful situations even if they’re necessary",
    "I find it difficult to focus or concentrate on tasks"
  ];

  const options = [
    { label: "Not at all", value: 0 },
    { label: "Several days", value: 1 },
    { label: "More than half the days", value: 2 },
    { label: "Nearly every day", value: 3 }
  ];

  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex, value) => {
    const updatedResponses = { ...responses, [questionIndex]: value };
    setResponses(updatedResponses);
    calculateScore(updatedResponses);
  };

  const calculateScore = (responses) => {
    const totalScore = Object.values(responses).reduce((sum, value) => sum + value, 0);
    setScore(totalScore);
  };

  return (
    <div className="min-h-screen bg-skin p-6 flex items-center w-full flex-col">
      <h2 className="text-2xl font-bold text-[#008080] mb-6">Stress Assessment</h2>
      
      <form className="w-full w-full bg-skin p-6 space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p className="text-lg font-medium text-gray-700 mb-3">
              {index + 1}. {question}
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`cursor-pointer flex-1 p-3 bg-[#FFFFF0] text-#B0B0B0 min-w-[15%] max-w-[20%] min-h-[60px] text-center rounded-lg border ${
                    responses[index] === option.value
                      ? "bg-[#20B2A6] text-#B0B0B0 border-blue-500"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.value}
                    checked={responses[index] === option.value}
                    onChange={() => handleOptionChange(index, option.value)}
                    className="hidden"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
      

      <div className="mt-6 w-full max-w-xl bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">Total Score: {score}</h3>
        <p className="text-gray-600 mt-2">Your score is based on your selected responses.</p>
      </div>
    </div>
  );
};

