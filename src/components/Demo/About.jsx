import React from 'react';

export const About = () => {
  const sectionHeadingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#F5A623', // Yellow color for headings
    textAlign: 'center',
    marginBottom: '25px',
  };

  const descriptionStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
  };

  const circleImageStyle = {
    borderRadius: '50%',
    width: '125px',
    height: '125px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const personCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    margin: '15px',
    transition: 'transform 0.3s ease',
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Align images and text to the center
    cursor: 'pointer',
  };

  const personNameStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#333',
    marginTop: '10px',
  };

  const roleStyle = {
    color: '#777',
    fontSize: '16px',
  };

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #fff 30%, #fff6b3 100%)', // White and light yellow gradient
    padding: '50px 0',
    minHeight: '100vh',
  };

  const handleHover = (event) => {
    event.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleHoverOut = (event) => {
    event.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <p style={sectionHeadingStyle}>ABOUT US</p>
        <p style={descriptionStyle}>
          Fraternity of Leaders is a dynamic and vibrant college club dedicated to cultivating leadership qualities among students. Founded on the principles of empowerment, growth, and community, our club provides a supportive environment where students can develop and enhance their leadership skills while fostering meaningful connections with like-minded peers.
        </p>
        <p style={descriptionStyle}>
          Our club is more than just a series of events and meetings; it's a close-knit community where members support and inspire each other to reach their full potential.
        </p>
      </div>
      
      <br />
      
      <p style={sectionHeadingStyle}>Faculty Coordinator</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={personCardStyle} onMouseOver={handleHover} onMouseOut={handleHoverOut}>
          <img src="profile.jpg" alt="Faculty Coordinator" style={circleImageStyle} />
          <p style={personNameStyle}>Name 1</p>
          <p style={roleStyle}>Position 1</p>
        </div>
      </div>

      <br />
      
      <p style={sectionHeadingStyle}>Presidence Council</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { img: "public\\Screenshot 2024-08-05 100729.png", name: "Chetan Chaudhary" },
          { img: "public\\Screenshot 2024-08-05 100848.png", name: "Rithvik Rao" },
          { img: "public\\WhatsApp Image 2024-04-09 at 23.25.29_d9444a4b.jpg", name: "Saniya Gupta" },
          { img: "public\\Screenshot 2024-06-21 223056.png", name: "Vasu Kakkar" },
        ].map((person, index) => (
          <div key={index} style={personCardStyle} onMouseOver={handleHover} onMouseOut={handleHoverOut}>
            <img src={person.img} alt={person.name} style={circleImageStyle} />
            <p style={personNameStyle}><b>{person.name}</b></p>
          </div>
        ))}
      </div>

      <br />
      
      <p style={sectionHeadingStyle}>Department Leads</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { img: "public\\WhatsApp Image 2024-04-14 at 10.26.24_91a5fce2.jpg", name: "Faiza Reza", role: "Content Creation & Publication Lead" },
          { img: "public\\Screenshot 2024-06-21 221926.png", name: "Manav Agarwal", role: "Design Lead" },
          { img: "public\\IMG-20240310-WA0226.jpg", name: "Naman Goel", role: "Event Execution Lead" },
          { img: "public\\WhatsApp Image 2024-04-14 at 13.29.15_76c831da.jpg", name: "Amartya Anayachala", role: "Membership & Networking Lead" },
        ].map((person, index) => (
          <div key={index} style={personCardStyle} onMouseOver={handleHover} onMouseOut={handleHoverOut}>
            <img src={person.img} alt={person.name} style={circleImageStyle} />
            <p style={personNameStyle}><b>{person.name}</b></p>
            <p style={roleStyle}>{person.role}</p>
          </div>
        ))}
      </div>

      <br />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { img: "public\\IMG_20240127_204358_114 (1).jpg", name: "Rohan G", role: "Personal Growth & Career Dev. Lead" },
          { img: "public\\Screenshot 2024-08-05 102952.png", name: "Aryan Tambekar", role: "Tech & Digital Infra Lead" },
          { img: "public\\WhatsApp Image 2024-04-14 at 22.55.41_7f283d8a.jpg", name: "Avni Jain", role: "Sponsorship & Partnerships Lead" },
        ].map((person, index) => (
          <div key={index} style={personCardStyle} onMouseOver={handleHover} onMouseOut={handleHoverOut}>
            <img src={person.img} alt={person.name} style={circleImageStyle} />
            <p style={personNameStyle}><b>{person.name}</b></p>
            <p style={roleStyle}>{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
