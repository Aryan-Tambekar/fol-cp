import React from 'react';

export const About = () => {
  const circleImageStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  };

  const centerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center', 
  };

  const personContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '25px', 
  };

  const sectionHeadingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '15px', 
    color: '#333', 
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)'; 
  };

  const handleHoverOut = (event) => {
    event.target.style.transform = 'scale(1)'; 
  };

  return (
    <div>
      <br></br>
      <p style={sectionHeadingStyle}>ABOUT US</p>
      <p>jfhqefkjqwvudjq fjcwcdfcawbdvjkawbvbwjbcdjfbcfejbefcjkewfbdefjcbewjkbcbdjkwbckjbewkcf
        cwehckwevkfcbfweukbfbcawdsckhuvb
      </p>
      <br></br>
      <br></br>
      <p style={sectionHeadingStyle}>Faculty Coordinator</p>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 1" style={{ ...circleImageStyle, width: '125px', height: '125px' }} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 1</p>
          <p>Position 1</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <p style={sectionHeadingStyle}>Presidence Council</p>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={{ ...circleImageStyle, width: '115px', height: '115px' }} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut} />
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={{ ...circleImageStyle, width: '115px', height: '115px' }} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <p style={sectionHeadingStyle}>Department Leads</p>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut} />
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
      <div className="container" style={centerContainerStyle}>
        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 2" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 2</p>
          <p>Position 2</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>

        <div style={personContainerStyle}>
          <img src="profile.jpg" alt="Person 3" style={circleImageStyle} onMouseOver={handleHover} 
            onMouseOut={handleHoverOut}/>
          <p>Name 3</p>
          <p>Position 3</p>
        </div>
      </div>
    </div>
  );
};
