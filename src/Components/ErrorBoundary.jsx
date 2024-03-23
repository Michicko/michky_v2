/* eslint-disable react/prop-types */
import { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_error) {
    return {
      hasError: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.router.location.pathname !== this.props.router.location.pathname
    ) {
      this.setState({ hasError: false });
    }
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <h3>Oops! Something went wrong</h3>
          <p>
            This page didn&apos;t load correctly. Reload page or{" "}
            <Link to={"/"} className="link">
              Go back to homepage
            </Link>
          </p>
          <button onClick={this.reloadPage} className="btn">
            Reload page
          </button>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40rem;
  background: var(--light);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--font-body);

  .link {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 2.5rem;
    font-family: inherit;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--gray-dark);
    font-family: inherit;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--gray-dark);
    margin-bottom: 2.5rem;
    font-family: inherit;
  }

  .btn {
    height: 4.5rem;
    min-width: 12rem;
    padding: 0 2rem;
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--light);
    background: var(--primary);
    border: none;
    outline: none;
    font-family: inherit;
  }
`;
