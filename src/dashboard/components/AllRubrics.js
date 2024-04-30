import React, { useEffect } from "react";

import './MainContainer.css'
import { useState } from "react";
import { allRubric } from "../../action/auth";
import Modal from "react-modal";
import AllCriteriaTable from "./AllCriteriaTable";
import AllSubcriteriaTables from "./AllSubcriteriaTables";

const AllRubrics = () => {
  const [rubrics,setRubrics] = useState({ data: { rubrics: [] } });

  const [showModal, setShowModal] = useState(false);
  const [detailedCriteria, setDetailedCriteria] = useState(null);

  const [currentSubject,setCurrentSubject] = useState("");
  const [currentAssessment,setCurrentAssessment] = useState("");




  const handleViewRubric = (criteria,assessment,subject) => {
    setDetailedCriteria(criteria);
    setCurrentAssessment(assessment);
    setCurrentSubject(subject)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  useEffect(()=>{
    const fetchRubrics = async()=>{
      try{
        const response = await allRubric();
        console.log(response)
        setRubrics(response.data);
        displayRubricHeader(response.data);
      }catch(error){
        console.log("Error fetching rubrics",error);
      }
    }
    fetchRubrics();
  },[])


const displayRubricHeader = (rubrics)=>{
  var allRubrics = rubrics.data.rubrics;
  console.log(allRubrics.length)



  return Object.entries(allRubrics).map(([key, rubric], index) => (
    <div key={index} className="body-container">
      <div className="column">
        <p className="assessment-view">Assessment: {rubric.assessment}</p>
        <span className="class-view">For {rubric.classLevel}</span>
      </div>
      <div className="column">
        <p className="subject-view">The subject is: {rubric.subject}</p>
        <span className="grade-view">Weightage of the assessment: {rubric.grade}%</span>
      </div>
      <div className="column">
        <button className="button-view" onClick={() => handleViewRubric(rubric.criteria,rubric.assessment,rubric.subject)}>View Criteria Details</button>
      </div>
    </div>
  ));
}
  return (
    <main className="dashboard-main-container">
      <div className="dashboard-header">
        <div className="main-title">
          <p className="font-weight-bold">ALL RUBRICS</p>
        </div>
      </div>
      <hr />
      
      {displayRubricHeader(rubrics)}

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Detailed Criteria Modal"
      >
        <h2>Detailed Criteria</h2>
        {currentSubject === 'English' && (currentAssessment === 'Writing' || currentAssessment === 'Listening and Speaking') ? (
          <AllSubcriteriaTables criteria={detailedCriteria} />
          
        ) : (
          <AllCriteriaTable rubricData={detailedCriteria} />
        )}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </main>
  );
};

export default AllRubrics;