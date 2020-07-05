import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  min-height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  border-top: 1px solid #eee;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
