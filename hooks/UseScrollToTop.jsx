/* eslint-disable react/prop-types */
import { useEffect } from "react";
import withRouter from "../src/Components/withRouter";

const UseScrollToTop = ({ children, router }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [router.location.pathname]);

  return children || null;
};

export default withRouter(UseScrollToTop);
