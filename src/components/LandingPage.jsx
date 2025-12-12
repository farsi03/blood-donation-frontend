import React from 'react'

const LandingPage = () => {
  return (
    <div style={{padding:"20px"}}>
      <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px",
      }}
      >
        <div style={{flex:1}}>
        <h1 className-="fade-text  " style={{color:"#c20000",textDecoration:"underline", textAlign:"left"  }}>
            Welcome to the Blood Bank Donation System</h1>
        <p className="fade-text delay" style={{
      fontSize: "18px",
      lineHeight: "1.6",
      color:"#444",
      maxWidth: "500px",
      textAlign: "left",
      
  }}>
    Blood donation is a simple act of kindness that can save lives. 
    Every donation helps patients undergoing surgeries, cancer treatments, 
    and emergency situations. Your contribution ensures a continuous and 
    safe blood supply for those in need.
  </p>
  </div>
  <div style={{flex:1, textAlign:"right"}}>
  <img src="https://ssbhealthcare.com/wp-content/uploads/2023/06/close-up-patient-with-tubes-her-arm-squeezing-ball-her-hand-while-donating-blood_1200x800.jpg" alt="Blood Donation"  
  className="fade-image"
  style={{width:"90%",maxWidth:"450 px", borderRadius:"10px"}}/>
    </div>
    </div>
    </div>
  )
}

export default LandingPage