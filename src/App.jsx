import { useState } from "react";
import styled from "styled-components";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import StudentList from "./Components/StudentList";
import StudentDetails from "./Components/StudentDetails";
import About from "./Components/About";

import studentsData from "./Data/Student";

const AppContainer = styled.div`
  min-height: 100vh;

  display: flex;

  flex-direction: column;

  background: #f6f8fc;

  color: #101d38;
`;

const Main = styled.main`
  flex: 1;
`;

const ContactSection = styled.section`
  max-width: 1000px;

  margin: auto;

  padding: 80px 30px;

  text-align: center;

  h1 {
    font-size: 35px;

    margin-bottom: 15px;
  }

  p {
    color: #59667b;
  }
`;

function App() {

  const [students] = useState(studentsData);

  const [currentPage, setCurrentPage] =
    useState("home");

  const [sortOrder, setSortOrder] =
    useState("none");

  const [selectedStudent, setSelectedStudent] =
    useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);

    setCurrentPage("details");
  };

  const renderPage = () => {

    if (
      currentPage === "home" ||
      currentPage === "students"
    ) {
      return (
        <StudentList
          students={students}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onSelect={handleSelectStudent}
        />
      );
    }

    if (currentPage === "details") {
      return (
        <StudentDetails
          student={selectedStudent}
          goBack={() =>
            setCurrentPage("students")
          }
        />
      );
    }

    if (currentPage === "about") {
      return <About />;
    }

    if (currentPage === "contact") {
      return (
        <ContactSection>

          <h1>
            Contact Us
          </h1>

          <p>
            For any queries regarding student
            information, please contact the
            administration.
          </p>

        </ContactSection>
      );
    }

    return null;
  };

  return (
    <AppContainer>

      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Main>
        {renderPage()}
      </Main>

      <Footer />

    </AppContainer>
  );
}

export default App;




// import { useState } from 'react'
// import './App.css'
// 
// function App() {
  // const [count, setCount] = useState(0)
// 
  // return (
    // <>
{/*        */}
    {/* </> */}
  // )
// }
// 
// export default App


