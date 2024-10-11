import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;