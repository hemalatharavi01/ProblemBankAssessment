import React, { useState, useEffect } from "react";
import questions from "./Data";
import Editor from "./Editor"
import ProgressBar from "./controls/ProgressBar";
import { useHistory } from "react-router-dom";


function Assessment() {
    const history = useHistory();
    const [showFinalResults, setFinalResults] = useState(false);
    const [responseFromApi, setResponseFromApi] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const submitClicked = () => {
        setFinalResults(true);
    };

    //restartAssessment
    const restartAssessment = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
        setSelectedOptions([]);
        history.push("/");
    };

    useEffect(() => {
        responseFromApi && responseFromApi.map((res)=> {
            if (res.isCorrect) {
                setScore(score + 1);
            }
        })
    }, [responseFromApi]);

    

    return (
        <div className="container h-100 d-flex justify-content-center">


            <div className="row p-3">
            {showFinalResults ? (
                <div className="final-results">
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" />
                <h2> You have successfully submitted the assignment </h2>
                <p> <b>Question asked :</b> {questions.length}</p>
                <p> <b>Question correct :</b> {score}</p>
                <p> <b>Your Score : </b>{(score / questions.length).toFixed(2) * 100} %</p>
                <button className="text-light btn btn-info p-3" onClick={() => restartAssessment()}> Restart Assessment again </button>
                </div>
            ) : (
                <div className="col-md-6 question-card p-3">
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <div className="button-section text-right mb-3">

                            {/* Previous Button  */}
                            {/*{currentQuestion > 0 && (
                                <button
                                    className="text-light btn btn-info  me-md-4"
                                    onClick={() => {setCurrentQuestion(currentQuestion - 1);}}
                                >
                                    Previous Question
                                </button>
                            )}*/}

                            {/* Next Button  */}
                            {currentQuestion < questions.length - 1 && (
                                <button
                                    className="text-light btn btn-info p-3"
                                    onClick={() => {setCurrentQuestion(currentQuestion + 1);}}
                                >
                                    Next Question
                                </button>
                            )}
                        </div>
                    </div>
                    <ProgressBar bgcolor="#99ccff" progress={(currentQuestion+1 ).toFixed(2) * 20}  height={20}/>
                    <h3> Question :  {currentQuestion + 1} out of {questions.length} </h3>
                    <h4 className="question-text p-3">
                        Q. {currentQuestion + 1}. {questions[currentQuestion].text}
                    </h4>
                    <ul>
                        <div className="justify-content-md-end">
                            <Editor responseFromApi={responseFromApi} setResponseFromApi={setResponseFromApi} currentQuestion={currentQuestion} correctAnswer={questions[currentQuestion].answer}/>
                        </div>

                    </ul>

                    {/* Submit Button */}
                    {currentQuestion === questions.length - 1 && (
                        <button
                            className="ms-md-4 d-flex text-light btn btn-success"
                            onClick={() => submitClicked()}
                        >
                            Submit
                        </button>
                    )}
                </div>
                )}
            </div>
           
        </div>
    );
}

export default Assessment;