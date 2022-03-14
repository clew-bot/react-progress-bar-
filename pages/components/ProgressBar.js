import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const ProgressBar = (props) => {
    const { bgcolor, completed, loaded } = props;
  
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
      <AnimatePresence>
      {loaded &&     <motion.div
        key="progressBar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      <div style={containerStyles}>
          <p style={textStyles}>{`Loading ${completed}%`}</p>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div> </motion.div> }
      </AnimatePresence>
    );
  };
  
  export default ProgressBar;