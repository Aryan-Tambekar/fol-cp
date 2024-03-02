import React from 'react';

export const About = () => {
  const circleImageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  const centerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const personContainerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    marginLeft: '50px', 
  };

  return (
    <div>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 1" style={circleImageStyle} />
          <p>Name 1</p>
          <p>Position 1</p>
        </div>
      </div>
      <br></br>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={circleImageStyle} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
      <br></br>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={circleImageStyle} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={circleImageStyle} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
    </div>
  );
};
