import React, { useState, useEffect } from "react";
import './EditRubric.css'
import { searchParticularRubric } from "../../action/auth";
import { ToastContainer, toast } from "react-toastify";
import SubcriteriaTables from "./SubcriteriaTables";
import CriteriaTable from "./CriteriaTable";

const EditRubric = () => {
  const [loading, setLoading] = useState(false);
  const [schoolLevel, setSchoolLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [assessment, setAssessment] = useState("");
  const [assessmentTypes, setAssessmentType] = useState([]);
  const [subjectTypes, setSubjectType] = useState([]);
  const [rubricData, setRubricData] = useState({});
  const [isPrimary, setIsPrimary] = useState(false);
  const [isEnglishWLS, setIsEnglishWLS] = useState(false);

  const handleSchoolChange = (e) =>{
    const selectedSchool = e.target.value;
    setSchoolLevel(selectedSchool);
    const subjectForSchoolLevel = getSubjectTypes(selectedSchool)
    setSubjectType(subjectForSchoolLevel);

  }

  const getSubjectTypes = (selectedSchool) => {
    const subjectTypes = {
      Primary: ["English", "ICT", "Science","Social_Studies"],
      Lower: ["English", "Geography", "History", "ICT","Science"],
      Middle: ["Biology","Chemistry", "Economics", "English", "Geography","History","Physics"],
      Higher: ["Accountancy", "Business", "English", "Media_Studies","Physics"],
    }
    return subjectTypes[selectedSchool] || [];
  }


  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
    const assessmentTypeforSubject = getAssessmentTypes(selectedSubject);
    setAssessmentType(assessmentTypeforSubject);
  }

  const handleSearchRubric = async () => {
    setLoading(true);
    const query = { "classLevel": schoolLevel, "subject": subject, "assessment": assessment }
    setIsPrimary(schoolLevel === "Primary");
    console.log("query is:",query)

    try {
      const response = await searchParticularRubric(query);
      console.log("response", response.data.data);
      setRubricData(response.data.data)
      setIsEnglishWLS((subject === 'English') && (assessment === 'Writing' || assessment === "Listening and Speaking"));
    } catch (err) {
      console.log("Getting error retrieving specific rubric")
      toast.error("No rubric found for this assessment. Choose your search key appropriately");
    } finally {
      setLoading(false);
      setSchoolLevel("");
      setSubject("");
      setAssessment("");
    }
  }

  const getAssessmentTypes = (selectedSubject) => {
    const PassessmentTypes = {
      English: ["Reading", "Writing", "Listening and Speaking"],
      ICT: ["Project Work", "Classwork", "Homework", "Critical Thinking"],
      Mathematics: ["Classwork", "Homework", "Project Work", "Group Presentation"],
      Social_Studies: ["Homework", "Classwork", "Classroom Participation", "Project Work"],
      Science: ["Classwork", "Project Work", "Presentation", "Homework", "Scrapbook"]
    }
    const LassessmentTypes = {
      English:["Listening and Speaking","Writing","Reading Portfolio[Book Talk]"],
      Geography:["Project Work","Debate","Homework","Field Work","Group Work"],
      History:["Historical Inquiry Skills","Project Work","Brochure"],
      ICT:["Computer Programming","Project","Creative Coding","Python Mini Project"],
      Science: ["ICT Integration", "Project Work", "Presentation", "Debate"]

    }

    const MassessmentTypes = {
      Biology:["Project Work","Learners Information Management","Exibition","Case Study","Practical Work"],
      Chemistry:["Presentation"],
      Economics:["Debate","Project Work","Group Work","Case Study"],
      English:["Listening and Speaking","Reading[Articulating Personal Experiences]","Writing"],
      Geography:["Reflection Paper","Journal","Report Writing"],
      History:["Historical Inquiry Skills","Project Work","Brochure"],
      Physics:["Project Work","Presentation","Group Discussion","Practical Work"]
    }

    const HassessmentTypes = {
      Accountancy:["Field Trip","Reflective Writing","Computer Practical (MS Excel)","Case Study","Project Work"],
      Business:["Assignment and Homework","Case Study","Project Work"],
      Media_Studies:["Debate","Critical Thinking","Digital Media Project"],
      English:["Listening and Speaking","Reading and Literature","Writing Portfolio","Book Talk"],
      Physics:["Project Work","Practical Work"]
    }
    if (schoolLevel === "Primary"){
      return PassessmentTypes[selectedSubject] || []
    }
    else if(schoolLevel === "Lower")
    {
      return LassessmentTypes[selectedSubject] || []
    }
    else if(schoolLevel == "Middle"){
      return MassessmentTypes[selectedSubject] || []
    }
    else{
      return HassessmentTypes[selectedSubject] || [];

    }
    
  }

  return (
    <main className="editrubric-main-container">
      <div className="editrubric-header">
        <div className="main-title">
          <p className="font-weight-bold">EXPORT RUBRIC BY ASSESSMENT</p>
        </div>
      </div>
      <hr />
      <div className="editrubric-body-container">
        <p>Search for Rubric by Class Level, Subject and Assessment type</p>
        <hr className="inner-hr" />
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
            <select id="field2" className="select-container" onChange={handleSubjectChange} value={subject}>
              <option value="option">Select subject from here</option>
              {console.log(schoolLevel)}
                <>
                  {subjectTypes.length > 0 && subjectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </>
            </select>
          </div>
          <div className="label-container">
            <label htmlFor="field3">Assessment Type</label>
            <select id="field3" className="select-container" value={assessment} onChange={(e) => setAssessment(e.target.value)}>
              <option value="option1">Select Assessment type from here</option>
              
                <>
                  {assessmentTypes.length > 0 && assessmentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </>
            </select>
          </div>
        </div>

        <div className="submit-row">
          <button className="search-rubric" onClick={handleSearchRubric}>Search Rubric</button>
        </div>

      </div>

      <div className="result-container">
        <p>Rubric Result</p>
        <hr className="inner-hr" />
        
          {isEnglishWLS ? <SubcriteriaTables rubricData={rubricData} /> : <CriteriaTable rubricData={rubricData} />}
          
        
      </div>
      <ToastContainer />
    </main>
  );
};

export default EditRubric;
