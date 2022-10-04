import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  background-color: #fff;
  border-radius: 6px;
  width: 260px;
  height: 72px;
  align-items: center;
`;
export const Span = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#56AB56' : '#E54C65')};
  margin-left: 14px;
  margin-right: 14px;
`;
export const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 8px;
`;
export const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: calc(21 / 18);

  letter-spacing: 0.01em;

  color: #1f3349;
`;
