import PropTypes from 'prop-types';
import styled from "styled-components";

const Frame = styled.div`
  width: 400px;
  height: 800px;
  border: 10px solid #333;
  border-radius: 40px;
  position: relative;
  margin: 50px auto;
  background-color: #111;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Notch = styled.div`
  width: 150px;
  height: 30px;
  background-color: #111;
  border-radius: 0 0 20px 20px;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px;
  background-size: cover;
`;

const PhoneFrame = ({ children }) => {
  return (
    <Frame>
      <Notch />
      <Content>{children}</Content>
    </Frame>
  );
};

PhoneFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhoneFrame;
