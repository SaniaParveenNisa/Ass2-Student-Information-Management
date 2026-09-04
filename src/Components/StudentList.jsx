import styled from "styled-components";
import StudentCard from "./StudentCard";

const Section = styled.section`
  max-width: 1400px;

  margin: auto;

  padding: 50px 45px;

  @media (max-width: 768px) {
    padding: 35px 20px;
  }
`;

const SectionTop = styled.div`
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  margin-bottom: 30px;

  @media (max-width: 768px) {
    align-items: flex-start;

    flex-direction: column;

    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;

  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #506078;

  font-size: 15px;
`;

const SortBox = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;

    justify-content: space-between;
  }
`;

const SortLabel = styled.label`
  font-size: 14px;

  font-weight: 600;
`;

const Select = styled.select`
  border: 1px solid #d6dce6;

  background: white;

  padding: 11px 15px;

  border-radius: 7px;

  min-width: 150px;

  outline: none;

  cursor: pointer;
`;

const StudentGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 22px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function StudentList({
  students,
  sortOrder,
  setSortOrder,
  onSelect
}) {
  const sortedStudents = [...students].sort(
    (a, b) => {
      if (sortOrder === "high") {
        return b.cgpa - a.cgpa;
      }

      if (sortOrder === "low") {
        return a.cgpa - b.cgpa;
      }

      return 0;
    }
  );

  return (
    <Section>
      <SectionTop>

        <div>
          <Title>
            Our Students
          </Title>

          <Description>
            Browse and explore student information
          </Description>
        </div>

        <SortBox>

          <SortLabel>
            Sort by CGPA:
          </SortLabel>

          <Select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
          >
            <option value="none">
              Default
            </option>

            <option value="high">
              High to Low
            </option>

            <option value="low">
              Low to High
            </option>
          </Select>

        </SortBox>

      </SectionTop>

      <StudentGrid>

        {sortedStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onSelect={onSelect}
          />
        ))}

      </StudentGrid>
    </Section>
  );
}

export default StudentList;