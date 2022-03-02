import styled from "styled-components"

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgb(240, 240, 240);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  width: 850px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  padding: 3em
`;

export const HeaderText = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.24;
  color: #000;
  z-index: 10;
`;

export const SubHeaderText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.24;
  color: #000;
  z-index: 10;
`;

export const SubText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.24;
  color: #000;
  z-index: 10;
  margin-top: 25px;
`;

export const BoldSubText = styled(SubText)`
font-weight: 700;
`;


export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 4px 2%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(255, 17, 44);
  
  &:hover {
    filter: brightness(.85);
  }
`;
