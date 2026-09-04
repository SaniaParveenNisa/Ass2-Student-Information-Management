import styled from "styled-components";

const Section = styled.section`
  max-width: 1200px;

  margin: auto;

  padding: 50px 30px;
`;

const Title = styled.h1`
  font-size: 32px;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const Line = styled.div`
  width: 38px;

  height: 3px;

  background: #1685e8;

  margin-top: 12px;

  margin-bottom: 45px;
`;

const Content = styled.div`
  display: flex;

  align-items: center;

  gap: 70px;

  @media (max-width: 768px) {
    flex-direction: column;

    gap: 30px;
  }
`;

const ImageBox = styled.div`
  width: 480px;

  height: 300px;

  background: #e8f3ff;

  border-radius: 15px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 100px;

  @media (max-width: 768px) {
    width: 100%;

    height: 250px;
  }
`;

const Text = styled.div`
  flex: 1;
`;

const Description = styled.p`
  line-height: 1.7;

  margin-bottom: 30px;

  color: #536177;
`;

const Feature = styled.div`
  display: flex;

  gap: 15px;

  margin-bottom: 22px;
`;

const Icon = styled.span`
  width: 35px;

  height: 35px;

  border-radius: 8px;

  background: #edf6ff;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #1675df;

  flex-shrink: 0;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;

  margin-bottom: 5px;
`;

const FeatureText = styled.p`
  font-size: 13px;

  color: #657187;
`;

function About() {
  return (
    <Section>

      <Title>
        About Student Information Portal
      </Title>

      <Line />

      <Content>

        <ImageBox>
          🎓
        </ImageBox>

        <Text>

          <Description>
            The Student Information Portal is a
            React-based application designed to
            display and manage student information
            in a clean and organized way.
          </Description>

          <Feature>
            <Icon>▣</Icon>

            <div>
              <FeatureTitle>
                View Students
              </FeatureTitle>

              <FeatureText>
                Browse all student information
                in a clean card layout.
              </FeatureText>
            </div>
          </Feature>

          <Feature>
            <Icon>↕</Icon>

            <div>
              <FeatureTitle>
                Sort by CGPA
              </FeatureTitle>

              <FeatureText>
                Easily sort students by CGPA
                from high to low or low to high.
              </FeatureText>
            </div>
          </Feature>

          <Feature>
            <Icon>⚛</Icon>

            <div>
              <FeatureTitle>
                Component Based
              </FeatureTitle>

              <FeatureText>
                Built using reusable React
                components and Props.
              </FeatureText>
            </div>
          </Feature>

        </Text>

      </Content>

    </Section>
  );
}

export default About;