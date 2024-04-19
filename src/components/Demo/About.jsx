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
    flexDirection: 'row',
  };

  const personContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '25px', 
  };

  return (
    <div>
      <br></br>
      <p>About US</p>
      <p>jfhqefkjqwvudjq fjcwcdfcawbdvjkawbvbwjbcdjfbcfejbefcjkewfbdefjcbewjkbcbdjkwbckjbewkcf
        cwehckwevkfcbfweukbfbcawdsckhuvb
      </p>
      <br></br>
      <br></br>
      <p>Faculty Coordinator</p>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 1" style={{ ...circleImageStyle, width: '125px', height: '125px' }}/>
          <p>Name 1</p>
          <p>Position 1</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <p>Presidence Council</p>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={{ ...circleImageStyle, width: '115px', height: '115px' }} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <p>Department Leads</p>
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
    </div>
  );
};
