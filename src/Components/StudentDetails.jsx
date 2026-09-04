import styled from "styled-components";

const Section = styled.section`
  max-width: 1100px;

  margin: auto;

  padding: 50px 30px;

  @media (max-width: 768px) {
    padding: 35px 20px;
  }
`;

const BackButton = styled.button`
  background: none;

  border: none;

  color: #1675df;

  cursor: pointer;

  font-size: 14px;

  margin-bottom: 25px;
`;

const DetailsCard = styled.div`
  background: white;

  border-radius: 12px;

  padding: 30px;

  display: flex;

  gap: 35px;

  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.07);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailsPhoto = styled.img`
  width: 300px;

  height: 350px;

  object-fit: cover;

  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;

    height: 350px;
  }
`;

const DetailsInfo = styled.div`
  flex: 1;

  padding-top: 10px;
`;

const Name = styled.h1`
  font-size: 30px;

  margin-bottom: 30px;
`;

const DetailRow = styled.div`
  display: flex;

  gap: 20px;

  margin-bottom: 18px;

  font-size: 15px;

  strong {
    min-width: 170px;
  }

  @media (max-width: 480px) {
    gap: 10px;

    flex-direction: column;

    strong {
      min-width: auto;
    }
  }
`;

const CGPA = styled.span`
  color: #16843c;

  font-weight: 700;
`;

const AboutTitle = styled.h3`
  margin-top: 35px;

  margin-bottom: 10px;
`;

const AboutText = styled.p`
  line-height: 1.7;

  color: #59667b;
`;

function StudentDetails({ student, goBack }) {
  if (!student) {
    return null;
  }

  return (
    <Section>

      <BackButton onClick={goBack}>
        ← Back to Students
      </BackButton>

      <DetailsCard>

        <DetailsPhoto
          src={student.photo}
          alt={student.name}
        />

        <DetailsInfo>

          <Name>
            {student.name}
          </Name>

          <DetailRow>
            <strong>
              ▣ Roll Number:
            </strong>

            <span>
              {student.rollNumber}
            </span>
          </DetailRow>

          <DetailRow>
            <strong>
              ♜ Department:
            </strong>

            <span>
              {student.department}
            </span>
          </DetailRow>

          <DetailRow>
            <strong>
              ▤ Semester:
            </strong>

            <span>
              {student.semester}
            </span>
          </DetailRow>

          <DetailRow>
            <strong>
              ☆ CGPA:
            </strong>

            <CGPA>
              {student.cgpa}
            </CGPA>
          </DetailRow>

          <AboutTitle>
            About
          </AboutTitle>

          <AboutText>
            A dedicated and passionate student with
            an interest in software development,
            technology and building innovative
            applications.
          </AboutText>

        </DetailsInfo>

      </DetailsCard>

    </Section>
  );
}

export default StudentDetails;