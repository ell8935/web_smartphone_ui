import styled from "styled-components";

const BottomNavStyled = styled.div`
  height: 10%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: red;
  border-radius: 0 0 3px 3px;
  display: flex;
  justify-content: space-around;

  .tab {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .tab:focus {
    border-top: 3px solid white;
  }
`;

export default BottomNavStyled;
