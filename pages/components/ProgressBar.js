import React from 'react'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 10,
      paddingTop: "100px",
      position: "absolute",
      top: "20vh",
      backgroundColor: "red",

    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "green !important",
      borderRadius: 'inherit',
      textAlign: 'right',
      position: "absolute",
      top: "0",
      transition: "width 0.5s ease-in-out",

    }
    const textStyles = {
        position: "absolute",
        top: "2vh",
        left: "9vh",
        zIndex: "2",
    }
  
    const labelStyles = {
      color: 'white',
      fontWeight: 'bold',
      textAlign: "center",
      position: "relative",
      zIndex: "9",

    }
  
    return (
      <div style={containerStyles}>
          <p style={textStyles}>{`We're Loading 💅${completed}%`}</p>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;