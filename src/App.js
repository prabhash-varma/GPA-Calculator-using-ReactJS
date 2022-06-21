import React,{useState,useEffect,useRef} from "react";
import logo from './logo.svg';
import './App.css';
import GPA from './Components/gpa'


function App() {

  const [courseName,setcourseName]=useState('');
  const [credits,setcredits]=useState(0);
  const [grade,setgrade]=useState(10);
  const [gradeslist,setgradeslist]=useState([]);
  const [finalgpa,setfinalgpa]=useState(null);

  const addToList = ()=>{
    setgradeslist([...gradeslist,{courseName:courseName,credits:credits,grade:grade}]);
  }


  const calc_gpa = ()=>{

    var sumOfCredits=0;
    var numSum=0;
    var total=0;
    // for(let i=0;i<gradeslist.length;i++){
    //   numSum = numSum + ((gradeslist[i].credits)*(gradeslist[i].grade));
    //   sumOfCredits= sumOfCredits + gradeslist[i].credits;
    // }

    gradeslist.map((obj)=>{
      numSum = numSum + ((obj.credits)*(obj.grade));
      sumOfCredits = sumOfCredits+ ((obj.credits) * (1));
      console.log("Sum of Credits: "+sumOfCredits);
      console.log("Num Sum : "+numSum);
    })

    total = numSum / sumOfCredits;
    
    setfinalgpa(total)
  }



  const clearAll= ()=>{
    setgradeslist([]);
    setfinalgpa(null);
  }

  return (
    <div className="App">
      <h1>GPA Calculator</h1>

      <label htmlFor="coursename">Course Name:  </label>
      <input type="text" id="coursename" onChange={(event)=>{
        if(event !== null){
          setcourseName(event.target.value);
        }else{
          alert("Please Enter Valid Course Name")
        
        }
      }}></input>
      <br></br>
      <label htmlFor="credits">Credits:  </label>
      <input type="text" id="credits" onChange={(event)=>{
        if(event !== null){
          setcredits(event.target.value);
          
        }else{
          alert("Please Enter Credits")
        }
      }}></input>

<br></br>
<label htmlFor="grades">Grade:</label>

<select name="grades" id="grades" onChange={(event)=>{
  
  setgrade(event.target.value);
  
}}>
  <option value="10" >O</option>
  <option value="9">A</option>
  <option value="8">B</option>
  <option value="7">C</option>
  <option value="6">D</option>
  <option value="5">P</option>
</select> 


<br></br>
<button onClick={addToList}>Add GPA</button>
<button onClick={calc_gpa}>Calculate GPA</button>
<button onClick={clearAll}>Clear All</button>

<br></br>
<h3>Final GPA:{finalgpa}</h3>
<hr></hr>



{gradeslist.map((obj)=>{
  return <GPA courseName={obj.courseName} credits={obj.credits} grade={obj.grade}/>
})}







</div>
  );
}

export default App;
