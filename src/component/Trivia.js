import { useState, useEffect } from "react";
import useSound from "use-sound";
import Timers from "../assets/kbcTimer.mp3";
import Answer from "../assets/KbcAnswerSound.mp3";
import Wrong from "../assets/kbcwrong.mp3";

export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber
}){


    const [question,setQuestion] = useState(null);
    const [selectedAnswer,setSelectedAnswer] = useState(null);
    const [className , setClassName] = useState('answer');
    const [timer] = useSound(Timers);
    const [correctAnswer] = useSound(Answer);
    const [wrongAnswer] = useSound(Wrong);

    // useEffect( ()=>{
    //     timer();
    // },[timer]);
    
   

    useEffect( ()=>{
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber]);

    const delay = (duration ,callback) =>{
          setTimeout( ()=>{
            callback()
          },duration)
    }

    const handleClick = (a)=>{
       
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, ()=>{
            setClassName(a.correct ? "answer correct":"answer wrong"); 
        });

        delay(5000, ()=>{

            if(a.correct){
                correctAnswer();
                delay(1000, ()=>{
                    setQuestionNumber( (prev)=> prev +1);
                    setSelectedAnswer(null);
                });
            }else{
                wrongAnswer();
                delay(1000, ()=>{
                    setStop(true);
                })
                
            }
            setClassName(a.correct ? "answer correct":"answer wrong"); 
        });

       
    }

    return (
        <div className="trivia">
            <div className="question">{ question?.question } </div>
            <div className="answers">
               {question?.answers.map((a) =>(
                  <div className={ selectedAnswer === a ? className :"answer"} onClick={ ()=> handleClick(a)}>{ a.text }</div>
               ))}
                
               
            </div>
        </div>
    )
}