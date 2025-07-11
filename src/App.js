import { useEffect, useState, useMemo } from 'react';
import './App.css';
import Trivia from './component/Trivia';
import Timer from './component/Timer';
import Start from './component/Start';

function App() {
  const [username, setUserName] = useState(null)
  const [questionNumber , setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" $ 0");


  const data = [
    {
      id :1 ,
      question : "Rolex is a company that specializes in what type of product ?",
      answers :[
        {
          text:"Phone",
          correct:false,
        },
        {
          text:"Watches",
          correct: true,
        },
        {
          text:"Food",
          correct: false,
        },
        {
          text:"cosmatic",
          correct: false,
        }
      ]
    },
    {
      id :2 ,
      question : "MS Dhoni last match played year ?",
      answers :[
        {
          text:"2020",
          correct:false,
        },
        {
          text:"2021",
          correct: false,
        },
        {
          text:"2022",
          correct: false,
        },
        {
          text:"2023",
          correct: true,
        }
      ]
    },
    {
      id :1 ,
      question : "What is the capital of Australia?",
      answers :[
        {
          text:"Sydney",
          correct:false,
        },
        {
          text:"Melbourne",
          correct: false,
        },
        {
          text:"Canberra",
          correct: true,
        },
        {
          text:"Brisbane",
          correct: false,
        }
      ]
    },
    {
      id :1 ,
      question : "Who painted the Mona Lisa?",
      answers :[
        {
          text:"Vincent van Gogh",
          correct:false,
        },
        {
          text:"MelboPablo Picassorne",
          correct: false,
        },
        {
          text:"Leonardo da Vinci",
          correct: true,
        },
        {
          text:"Michelangelo",
          correct: false,
        }
      ]
    },
    {
      id :1 ,
      question : "Which planet is known as the Red Planet?",
      answers :[
        {
          text:"Jupiter",
          correct:false,
        },
        {
          text:"Mars",
          correct: true,
        },
        {
          text:"Venus",
          correct: false,
        },
        {
          text:"Saturn",
          correct: false,
        }
      ]
    },
    {
      id :1 ,
      question : "What is the chemical symbol for gold?",
      answers :[
        {
          text:"Ag",
          correct:false,
        },
        {
          text:"Fe",
          correct: false,
        },
        {
          text:"Cu",
          correct: false,
        },
        {
          text:"Au",
          correct: true,
        }
      ]
    },
    {
      id :1 ,
      question : "In which year did World War II end?",
      answers :[
        {
          text:"1943",
          correct:false,
        },
        {
          text:"1945",
          correct: true,
        },
        {
          text:"1950",
          correct: false,
        },
        {
          text:"1939",
          correct: false,
        }
      ]
    }
  ]

  const moneyPyramid = useMemo( ()=>
[
     {id:1 ,amount:"$ 100"},
     {id:2 ,amount:"$ 200"},
     {id:3 ,amount:"$ 300"},
     {id:4 ,amount:"$ 500"},
     {id:5 ,amount:"$ 1000"},
     {id:6 ,amount:"$ 2000"},
     {id:7 ,amount:"$ 4000"},
     {id:8 ,amount:"$ 8000"},
     {id:9 ,amount:"$ 16000"},
     {id:10 ,amount:"$ 32000"},
     {id:11 ,amount:"$ 64000"},
     {id:12 ,amount:"$ 125000"},
     {id:13 ,amount:"$ 250000"},
     {id:14 ,amount:"$ 500000"},
     {id:15 ,amount:"$ 1000000"}
  ].reverse(),
[]);

  useEffect( ()=>{
    questionNumber>1 && setEarned( moneyPyramid.find( (m)=>m.id === questionNumber-1).amount);
  },[questionNumber])

  return (
    <div className="app">
      { username ? (
       <>
           <div className='main'>
          { stop ? <h1 className='endText'>You earned : { earned }</h1>: (
           <>
            <div className='top'>
            <div className='timer'>
              <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
          </div>
          <div className='bottom'>
            <Trivia 
            data={data}
            setStop ={setStop}
            questionNumber = {questionNumber}
            setQuestionNumber = {setQuestionNumber} />
          </div>
              
           </>
          )}
          
        </div>
        <div className='pyramid'>

          <ul className='moneyList'>
            {
              moneyPyramid.map( (m)=>(
                
                <li className={ questionNumber===m.id ? "moneyListItem active": "moneyListItem"}>
                   <span className='moneyListItemNumber'> {m.id} </span>
                   <span className='moneyListItemAmount'> { m.amount} </span>
                </li>
              ))
             }
           
          
          </ul>
        </div>
       
       </>

      ) : (<Start setUsername={setUserName}/>)}
       
    </div>
  );
}

export default App;
