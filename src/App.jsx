import { useState } from 'react'
import './styles/App.css'
import { UserInfo, ResumePreview, UserHistory } from './components/resumePreview';

function App() {
  const [userData, setUser] = useState({firstName: "Olivia", lastName: "Bennett", phoneNumber: "(702) 456-7890", email: "exampleemail@sbcglobal.net", location: "89 Birch Lane, Las Vegas, NV",
    title: "Student", summary: "A recent graduate with a degree in Computer Science, passionate about leveraging software capabilities to create impactful solutions in business and personal life. Skilled in JavaScript, React, and Node.js, with hands-on experience through projects and internships. I am known for adaptability, quick learning, and strong work ethic.",
    
   });

  //handler function
  const userPropHandler = (value, propType) => {

    const changeUser = {...userData, [propType]:value};

    setUser(changeUser);
  }

  return (
    <>
      <div id="editorContainer">
        <div id="logoContainer">
          <p id="title">Resume Remedy.</p>
        </div>
        <UserInfo userPropHandler={userPropHandler} userData={userData}/>
        <UserHistory userPropHandler={userPropHandler} userData={userData}/>
      </div>
      <div id="resumeContainer">
        <div id="controlsContainer"></div>
        <ResumePreview userData={userData}/>
      </div>
    </>
  )
}

export default App
