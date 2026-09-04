import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 55px;

  background: #071b3a;

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;

  @media (max-width: 480px) {
    text-align: center;
    padding: 0 15px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      © 2026 Student Information Portal. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;