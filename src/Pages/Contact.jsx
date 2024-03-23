import styled from "styled-components";
import Container from "../Components/Container";
import Heading from "../Components/Heading";
import InputLabel from "../Components/InputLabel";
import Input from "../Components/Input";
import FormGroup from "../Components/FormGroup";
import Button from "../Components/Button";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AlertHandler from "../Components/AlertHandler";

export default function Contact() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
    message: "",
    status: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const clearForm = () => {
    setFormDetails({
      name: "",
      email: "",
      message: "",
    });
  };

  const reset = () => {
    setStatus({
      isLoading: false,
      isError: false,
      isSuccess: false,
      error: null,
      message: "",
      status: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formDetails;
    try {
      setStatus({ ...status, isLoading: true });
      const templateParams = {
        from_name: name,
        reply_to: email,
        message,
      };

      const res = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      if (res.status === 200) {
        setStatus({
          ...status,
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: null,
          status: "success",
          message: "Message sent successfully. I'll get back to you shortly",
        });
        clearForm();
      }
    } catch (error) {
      console.log(error);
      setStatus({
        ...status,
        isLoading: false,
        isSuccess: false,
        isError: true,
        status: "error",
        message: "Uh oh. Something went wrong.",
        error,
      });
    }
  };

  const timer = useRef(null);

  const timerFunc = (fn) => {
    timer.current = setTimeout(() => {
      fn();
    }, 5000)
  }

  useEffect(() => {
    if(status.isSuccess || status.isError){
      timerFunc(reset);
    }

    return () => {
      clearTimeout(timer.current);
    }
  }, [status.isError, status.isSuccess])


  return (
    <>
      <Header>
        <Container>
          <div className="heading-container">
            <Heading type={"secondary"}>Get in touch</Heading>
          </div>
        </Container>
      </Header>
      <Wrapper>
        <Container>
          {(status.isError || status.isSuccess) && (
            <AlertHandler type={status.status} message={status.message} />
          )}
          <form onSubmit={handleSubmit}>
            <FormGroup mb={1.5}>
              <InputLabel required={true} mb={1} htmlFor={"name"}>
                Your name
              </InputLabel>
              <Input
                type={"text"}
                name={"name"}
                value={formDetails.name}
                id={"name"}
                disabled={status.isLoading}
                handleOnchange={handleOnchange}
              />
            </FormGroup>
            <FormGroup mb={1.5}>
              <InputLabel required={true} mb={1} htmlFor={"email"}>
                email
              </InputLabel>
              <Input
                type={"email"}
                name={"email"}
                id={"email"}
                value={formDetails.email}
                disabled={status.isLoading}
                handleOnchange={handleOnchange}
              />
            </FormGroup>
            <FormGroup mb={1.5}>
              <InputLabel required={true} mb={1} htmlFor={"message"}>
                message
              </InputLabel>
              <Input
                type={"textarea"}
                name={"message"}
                id={"message"}
                value={formDetails.message}
                disabled={status.isLoading}
                handleOnchange={handleOnchange}
              />
            </FormGroup>
            <Button>
              {status.isLoading ? "Sending message..." : "Send message"}
            </Button>
          </form>
        </Container>
      </Wrapper>
    </>
  );
}

const Header = styled.div`
  margin-top: 8rem;
  .icon {
    margin-right: 1rem;
  }

  .heading-container {
    display: flex;
    align-items: center;
    margin-top: -2rem;
  }
`;

const Wrapper = styled.main`
  margin-top: -8rem;

  form {
    max-width: 65rem;
  }
`;
