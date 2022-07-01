import React, { useState } from 'react'
import { QuizData } from './QuizData';
import "./Quiz.css";
const Quiz = () => {
    const [number, setNumber] = useState(0);
    const [disable, setDisable] = useState(false);
    const [result,setResult] =useState(0);
	const [checkedState, setCheckedState] = useState(
		new Array(QuizData[number].length).fill(false)
	);
    const changeQue = () => {
        let num = number;
		console.log("ji");
        if (num < 4) {
			let val=QuizData[number].answer.reduce((final,value,index)=>{
					if(value!==checkedState[index])
						return (final && false);
					else
						return(final && true);
				},true);
				if(val)
				setResult(result+1);
				setCheckedState(new Array(QuizData[number].length).fill(false));
            setNumber(num + 1);
			}
        else 
            setDisable(true);
    }
    const handleCheck=(index)=>{
		 let val=!checkedState[index];
		setCheckedState({...checkedState,val});
    }
    const resetNow=()=>{
        setDisable(false)
        setNumber(0)
        setResult(0)
    }
    return (
    <> 
	<div className="quiz">
	<div class="container mt-sm-5 my-1">
	{  !disable ?( 
		<>
		<div class="question ml-sm-5 pl-sm-5 pt-2">                    
        <div class="py-2 h5">
			Questions &nbsp; {(number+1)} /5
			<b><h4>{QuizData[number].question}</h4></b></div>
        <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">{
		QuizData[number].answer.map((val,ind)=>{
			return (
            <label class="options"key={ind}>{val.ans}
                <input type="checkbox" name="checkbox"checked={checkedState[ind]}onChange={()=>handleCheck(ind)}/>
                <span class="checkmark"></span>
            </label>
          );
		})
	}
        </div>
    </div>
    <div class="d-flex align-items-center pt-3">
        <div class="ml-auto mr-sm-5">
            <button class="btn btn-success"onClick={()=>changeQue()}>Next</button>
        </div>
    </div>
	</>
    ) : (
	<>
		<div className="box">
			<h1>Thank You</h1>
			<h3>Your Scores {result}</h3>
			<button className="btn btn-success" onClick={resetNow}>Restart</button>
		</div>
	</>
)
}
    </div> 
	</div>      
	</>
    )
}
export default Quiz
