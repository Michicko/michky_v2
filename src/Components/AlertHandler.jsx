/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function AlertHandler({ type, message }) {
  return (
    <Wrapper className={type}>
      <p>{message}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 65rem;
  
  &.success {
    background: #cbf3cb;
    p {
      color: var(--success);
    }
  }

  &.error {
    background: #f7dddc;
    p {
      color: var(--danger);
    }
  }

  p {
    font-size: var(--base-text);
    font-weight: 400;
  }
`;
