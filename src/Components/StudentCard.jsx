import styled from "styled-components";

const Card = styled.div`
  background: white;

  border: 1px solid #e5e9ef;

  border-radius: 12px;

  padding: 15px;

  display: flex;

  gap: 15px;

  min-height: 220px;

  box-shadow: 0 3px 12px rgba(20, 40, 80, 0.06);

  transition: 0.25s;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 10px 25px rgba(20, 40, 80, 0.12);
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StudentPhoto = styled.img`
  width: 105px;
  height: 135px;

  object-fit: cover;

  border-radius: 9px;

  background: #e8edf5;

  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
`;

const StudentInfo = styled.div`
  flex: 1;
`;

const StudentName = styled.h2`
  font-size: 18px;

  margin: 5px 0 14px;
`;

const InfoRow = styled.div`
  display: flex;

  align-items: flex-start;

  gap: 6px;

  font-size: 12px;

  margin-bottom: 9px;

  color: #435067;
`;

const Label = styled.strong`
  color: #17243d;
`;

const CGPA = styled.span`
  color: #16843c;

  font-weight: 700;
`;

const ViewButton = styled.button`
  margin-top: 6px;

  border: none;

  background: #071b3a;

  color: white;

  padding: 8px 12px;

  border-radius: 6px;

  cursor: pointer;

  font-size: 12px;

  &:hover {
    background: #12376c;
  }
`;

function StudentCard({ student, onSelect }) {
  return (
    <Card>
      <StudentPhoto
        src={student.photo}
        alt={student.name}
      />

      <StudentInfo>
        <StudentName>
          {student.name}
        </StudentName>

        <InfoRow>
          <span>▣</span>
          <Label>Roll No:</Label>
          <span>{student.rollNumber}</span>
        </InfoRow>

        <InfoRow>
          <span>♜</span>
          <Label>Department:</Label>
          <span>{student.department}</span>
        </InfoRow>

        <InfoRow>
          <span>▤</span>
          <Label>Semester:</Label>
          <span>{student.semester}</span>
        </InfoRow>

        <InfoRow>
          <span>☆</span>
          <Label>CGPA:</Label>
          <CGPA>{student.cgpa}</CGPA>
        </InfoRow>

        <ViewButton
          onClick={() => onSelect(student)}
        >
          View Details
        </ViewButton>
      </StudentInfo>
    </Card>
  );
}

export default StudentCard;