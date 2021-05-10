import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      height: 32px;
      width: 32px;
      border-radius: 40px;
      background: #3b5dfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 15px;
  }
`;