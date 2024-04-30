import React from "react";
import 'react-toastify/dist/ReactToastify.css';

import './RubricBySubject.css'
import { useState, useEffect} from "react";
import { searchRubricBySubject } from "../../action/auth";
import { ToastContainer,toast } from "react-toastify";
import SubjectTables from "./SubjectTables";
import CriteriaTable from "./CriteriaTable";

const RubricBySubject = () => {
    const [loading, setLoading] = useState(false);
    const [subjectTypes, setSubjectType] = useState([]);
    const [isHCBHG, setHCBHG] = useState(false)

  const [schoolLevel,setSchoolLevel] = useState(()=>{
    return "";
  }); 
  const [subject,setSubject] = useState(()=>{
    return "";
  }); 


//   to update rubric data based on current query
const [rubricData,setrubricData] = useState(()=>{
    return {};
})

const handleSchoolChange = (e) =>{
  const selectedSchool = e.target.value;
  setSchoolLevel(selectedSchool);
  const subjectForSchoolLevel = getSubjectTypes(selectedSchool)
  setSubjectType(subjectForSchoolLevel);
  


}

const getSubjectTypes = (selectedSchool) => {
  const subjectTypes = {
    Primary: ["ICT", "Science","Social_Studies"],
    Lower: ["Geography", "History", "ICT","Science"],
    Middle: ["Biology","Chemistry", "Economics", "Geography","History","Physics"],
    Higher: ["Accountancy", "Business", "Media_Studies","Physics","Chemistry","Biology","History","Geography"],
  }
  return subjectTypes[selectedSchool] || [];
}

// function to display coming soon message
const displayComingSoon = () =>{
  toast.success("Assessment coming soon");
  setLoading(false);
  setSchoolLevel("");
  setSubject("")
  setrubricData({});
}

// function to handle search rubric button
const handleSearchRubric = async() =>{
    setLoading(true);
    const query = {"classLevel":schoolLevel,"subject":subject}
    console.log("this is my query from frontend",query)

    try{
      
        const response = await searchRubricBySubject(query);
        console.log("response",response.data.data);
        setrubricData(response.data.data)
        
        

    }catch(err){
        console.log("Getting error retrieving specific rubric")
        toast.error("No rubric found for this assessment. Choose your search key appropriately");

    }finally{
        setLoading(false);
        setSchoolLevel("");
        setSubject("")
    }
}

  return (
    <main className="RubricBySubject-main-container">
      <div className="RubricBySubject-header">
        <div className="main-title">
          <p className="font-weight-bold">EXPORT RUBRIC BY PARTICULAR SUBJECT</p>
        </div>
      </div>
      <hr />
      <div className="RubricBySubject-body-container">
        <p>Search for Rubric by School Level and Subject</p>
        <hr className="inner-hr"/>
      <div className="form-row">
        <div className="label-container">
          <label htmlFor="field1">School Level</label>
          <select id="field1" className="select-container" value={schoolLevel} onChange={handleSchoolChange}>
              <option value="">Select School level from here</option>
              <option value="Primary">Primary</option>
              <option value="Lower">Lower</option>
              <option value="Middle">Middle</option>
              <option value="Higher">Higher</option>
            </select>
        </div>
        <div className="label-container">
          <label htmlFor="field2">Subject</label>
          <select id="field2" className="select-container" value={subject} onChange={(e)=>setSubject(e.target.value)}>
          <option value="option">Select subject from here</option>
                <>
                  {subjectTypes.length > 0 && subjectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </>


          </select>
        </div>
        <div className="submit-row">
        <button className="search-rubric" onClick={(schoolLevel === "Higher" && (subject === "History" || subject === "Geography" || subject === "Biology" || subject === "Chemistry")) ? displayComingSoon: handleSearchRubric}>Search Rubric</button>
      </div>
      </div>
   

      

      </div>

      <div className="result-container">
        <p>Rubric Result</p>
        <hr className="inner-hr"/>

        {<SubjectTables rubricData={rubricData.rubrics} subject={subject}/>}
        

      </div>
      <ToastContainer position="top-center" toastClassName="larger-toast-container"/>
      

    </main>
  );
};

export default RubricBySubject;