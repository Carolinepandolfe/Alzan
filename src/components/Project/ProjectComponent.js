import React from 'react';
import './Project.css';

function ProjectComponent(props) {
  return (
    <>
      <div className="project">
        <h2 className="project__name">{props.project}</h2>
      </div>

    </>
  );
}

export default ProjectComponent;
