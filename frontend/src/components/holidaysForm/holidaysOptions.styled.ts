import styled from "styled-components/macro";

export const HolidayForm = styled.div`
  max-width: 700px;
  margin-top: 1em;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  border: 1px solid white;
  padding: 1em;
`;

export const HolidayWrapper = styled.form`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HolidayLabel = styled.p`
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
`;

export const HolidayFlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1em;
`;

export const HolidayDayMonthYear = styled.input`
  width: 25%;
  border: 1px solid black;
  outline: none;
  text-align: center;
  padding: 0.3em;
`;

export const HolidayFormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 1em;
  padding: 0.3em;
`;

export const HolidayFormSubmit = styled.button`
  width: 100%;
  padding: 0.5em;
  cursor: pointer;
  background: lightseagreen;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;
