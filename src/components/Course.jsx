import React from "react";
import "./Course.css";
import LearningObjectives from "./LearningObjectives";
import CourseOverview from "./CourseOverview";
import Instructor from "./Instructor";
import TargetAudienceAndPrerequisites from "./PreReq";
import CourseFormat from "./CourseFormat";
import CourseDescription from "./CourseDescription";
import Footer from "./Footer";
import FixedContainer from "./FixedContainer";

const Course = () => {
  return (
    <div className="page">
      <CourseOverview />
      <FixedContainer/>
      <div className="container p-5">
        <LearningObjectives />
        <CourseDescription/>
        <Instructor />
        <TargetAudienceAndPrerequisites/>
        <CourseFormat/>
      </div>
        <Footer/>
    </div>
  );
};

export default Course;
