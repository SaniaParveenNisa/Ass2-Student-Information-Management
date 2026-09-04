import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 70px;
  background: #071b3a;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 45px;

  @media (max-width: 768px) {
    height: auto;
    padding: 18px 20px;
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 18px;
  font-weight: 700;
`;

const LogoIcon = styled.span`
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  }
`;

const NavButton = styled.button`
  position: relative;

  border: none;
  background: transparent;

  color: white;

  cursor: pointer;

  font-size: 14px;

  padding: 24px 0;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 15px;

    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 3px;

    background: #4da3ff;

    transition: 0.3s;
  }

  &:hover {
    color: #bcdcff;
  }

  @media (max-width: 768px) {
    padding: 5px 0;

    &::after {
      bottom: -5px;
    }
  }
`;

function Header({ currentPage, setCurrentPage }) {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon>🎓</LogoIcon>
        Student Information Portal
      </Logo>

      <Nav>
        <NavButton
          $active={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </NavButton>

        <NavButton
          $active={currentPage === "students"}
          onClick={() => setCurrentPage("students")}
        >
          Students
        </NavButton>

        <NavButton
          $active={currentPage === "about"}
          onClick={() => setCurrentPage("about")}
        >
          About
        </NavButton>

        <NavButton
          $active={currentPage === "contact"}
          onClick={() => setCurrentPage("contact")}
        >
          Contact
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;