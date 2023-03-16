import styled from '@emotion/styled';

export const FirstSectionBackground = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  background: linear-gradient(-45deg, #d3836a, #d6a2b6, #66a1b6, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const IntroduceMySelfContainer = styled.div`
  width: 85%;
`;

export const MyNameIs = styled.div`
  text-align: left;
  font-size: 35px;
  font-weight: bold;

  color: #ffffff;
`;
