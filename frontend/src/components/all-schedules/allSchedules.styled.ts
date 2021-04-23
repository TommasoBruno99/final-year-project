import styled from "styled-components/macro";

export const SchedulesWrapper = styled.div`
  width: 90%;
  margin: 1em auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  padding: 1em;
  background: white;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ScheduleDates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ScheduleDate = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin-left: 0.2em;
`;
