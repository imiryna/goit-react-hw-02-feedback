import styled from '@emotion/styled';

export const ContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 40px;
`;
export const DescriptionCss = styled.p`
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 23px;
  font-weight: 800;
`;

export const BoxButtonCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ;
  gap: 10px;
`;

export const BtnCss = styled.button`
  background-color: rgb(105, 150, 227);
  border-radius: 4px;
  border-width: 0;
  color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  
  &:hover,
&:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

`;
export const TextCss = styled.span`
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
