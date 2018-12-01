import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="cardz-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores quibusdam autem, laudantium nam, iste obcaecati quas consectetur delectus sunt nihil nobis reiciendis. Numquam enim natus illo, iste praesentium beatae!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Darryl Mendonez</div>
          <div>December 1st 6:51pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
