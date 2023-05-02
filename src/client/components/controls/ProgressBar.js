import React from 'react';

const ProgressBar = ({bgcolor,progress,height}) => {
     
  const parentdiv = {
      height: height,
      width: '100%',
      backgroundColor: 'whitesmoke',
      borderRadius: 40,
      margin: 50
    }
    
    const childdiv = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
     borderRadius:40,
      textAlign: 'right'
    }
    
    const progresstext = {
      padding: 10,
      color: 'black',
      fontWeight: 900
    }
      
  return (
  <div style={parentdiv}>
    <div style={childdiv}>
      <span style={progresstext}>{`${progress}%`}</span>
    </div>
  </div>
  )
}

export default ProgressBar;