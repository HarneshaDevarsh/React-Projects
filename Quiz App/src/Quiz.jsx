import React, { useState } from 'react';

function Quiz() {
  const questionsData = [
    {
      subject: 'Science',
      questions: [
        { question: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'H2'], answer: 'H2O' },
        { question: 'What planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], answer: 'Mars' },
        { question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'], answer: 'Carbon Dioxide' },
        { question: 'Which part of the plant conducts photosynthesis?', options: ['Root', 'Leaf', 'Stem', 'Flower'], answer: 'Leaf' },
        { question: 'How many planets are in our Solar System?', options: ['7', '8', '9', '10'], answer: '8' },
        { question: 'What force keeps us on the ground?', options: ['Magnetism', 'Friction', 'Gravity', 'Electricity'], answer: 'Gravity' },
        { question: 'What is the boiling point of water at sea level?', options: ['90°C', '100°C', '120°C', '80°C'], answer: '100°C' },
        { question: 'Which organ in the human body pumps blood?', options: ['Brain', 'Lungs', 'Heart', 'Kidney'], answer: 'Heart' },
        { question: 'What is Earth’s only natural satellite?', options: ['Sun', 'Mars', 'Moon', 'Venus'], answer: 'Moon' },
        { question: 'What part of the atom has a positive charge?', options: ['Electron', 'Neutron', 'Proton', 'Photon'], answer: 'Proton' }
      ],
    },
    {
      subject: 'History',
      questions: [
        { question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], answer: 'George Washington' },
        { question: 'What year did World War II end?', options: ['1945', '1940', '1939', '1955'], answer: '1945' },
        { question: 'Who discovered America?', options: ['Vasco da Gama', 'Christopher Columbus', 'Magellan', 'Marco Polo'], answer: 'Christopher Columbus' },
        { question: 'Which country built the Great Wall?', options: ['Japan', 'China', 'India', 'Russia'], answer: 'China' },
        { question: 'Who was the first man to walk on the moon?', options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'], answer: 'Neil Armstrong' },
        { question: 'What was the name of the ship that sank in 1912?', options: ['Olympic', 'Titanic', 'Britannic', 'Enterprise'], answer: 'Titanic' },
        { question: 'Which country gave the Statue of Liberty to the USA?', options: ['France', 'England', 'Germany', 'Italy'], answer: 'France' },
        { question: 'Who was the first Prime Minister of India?', options: ['Mahatma Gandhi', 'Sardar Patel', 'Jawaharlal Nehru', 'Rajendra Prasad'], answer: 'Jawaharlal Nehru' },
        { question: 'What is the name of the famous Indian freedom movement led by Gandhi?', options: ['Non-Cooperation Movement', 'Quit India Movement', 'Salt March', 'All of them'], answer: 'All of them' },
        { question: 'What did people use before money was invented?', options: ['Gold', 'Shells', 'Barter system', 'Coins'], answer: 'Barter system' }
      ]
    },
    {
      subject: 'Geography',
      questions: [
        { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
        { question: 'Which continent is Egypt in?', options: ['Asia', 'Africa', 'Europe', 'Australia'], answer: 'Africa' },
        { question: 'Which ocean is the largest?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 'Pacific' },
        { question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], answer: 'Tokyo' },
        { question: 'Which country has the most population?', options: ['USA', 'India', 'China', 'Russia'], answer: 'India' },
        { question: 'Mount Everest is in which mountain range?', options: ['Andes', 'Alps', 'Himalayas', 'Rockies'], answer: 'Himalayas' },
        { question: 'Which river is the longest in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 'Nile' },
        { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], answer: 'Canberra' },
        { question: 'Which desert is the largest in the world?', options: ['Gobi', 'Sahara', 'Kalahari', 'Arabian'], answer: 'Sahara' },
        { question: 'Which country is famous for tulips and windmills?', options: ['Denmark', 'Netherlands', 'Belgium', 'Switzerland'], answer: 'Netherlands' }
      ]
    },
  ];

  // 🧠 Required State
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer('');
  };


  const handleNextQuestion = () => {
    const currentQuestion = currentSubjectData.questions[currentQuestionIndex];

    setAnswers(prev => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: selectedAnswer,
        correct: currentQuestion.answer,
        isCorrect: selectedAnswer === currentQuestion.answer
      }
    ]);


    if (selectedAnswer === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex(prev => prev + 1);
  };
  
  const currentSubjectData = questionsData.find(data => data.subject === selectedSubject);

  return (
    <>
      {!selectedSubject ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200">
          <div className='p-5 text-center items-center justify-center mx-auto w-sm rounded-xl bg-white border border-gray-400 shadow-2xl'>
            <h1 className="font-semibold text-xl mb-6">Select your subject for weekly test</h1>
            {questionsData.map((data) => (
              <button
                key={data.subject}
                className="block mx-auto py-2 font-semibold w-full bg-gray-100 rounded-xl m-[10px] hover:bg-gray-300 cursor-pointer"
                onClick={() => handleSubjectSelect(data.subject)}
              >
                {data.subject}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200">
          <div className='p-5 text-center items-center justify-center mx-auto w-sm rounded-xl bg-white border border-gray-400 shadow-2xl'>
            <div className="textbox w-full bg-white items-center m-auto p-4 rounded-xl text-center font-bold text-black max-w-sm flex-col">

              <h1 className="mb-2 font-bold text-2xl">TEST</h1>
              <h2 className='mt-2 mb-4 bg-gray-600 py-2 w-full rounded-xl text-white text-lg'>Subject : {selectedSubject}</h2>

              {currentSubjectData && currentQuestionIndex < currentSubjectData.questions.length ? (
                <>
                  <div className="question">
                    <h3 className='mb-4 font-semibold text-gray-600 text-2xl underline'>
                      Question {currentQuestionIndex + 1} of {currentSubjectData.questions.length}
                    </h3>
                    <p className='font-semibold'>
                      {currentSubjectData.questions[currentQuestionIndex].question}</p>
                  </div>
                  <div className="options mt-3 flex ms-3 flex-col gap-2 font-normal">
                    {currentSubjectData.questions[currentQuestionIndex].options.map((option, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                          checked={selectedAnswer === option}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  <button
                    className="mt-10 bg-gray-600 font-semibold text-xl py-2 px-4 text-white rounded-md cursor-pointer hover:bg-gray-700"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                  >
                    Next
                  </button>

                  <button
                    className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-800"
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.reload(); // Forces re-evaluation in App.js
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div>
                  <h2 className='mb-3 font-bold text-2xl'>Test Completed!</h2>
                  <h3 className='mb-13 font-semibold text-lg'>Your Score: {score}/{currentSubjectData.questions.length}</h3>
                  <button
                    className="bg-gray-600 font-semibold text-xl py-2 px-4 text-white rounded-md cursor-pointer hover:bg-gray-700"
                    onClick={() => setSelectedSubject(null)}
                  >
                    Restart
                  </button>
                </div>
              )}


            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
