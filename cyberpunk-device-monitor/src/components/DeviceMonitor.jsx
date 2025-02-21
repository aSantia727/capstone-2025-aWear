import  { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Bluetooth, Wifi, AlertCircle, Power } from "lucide-react";

const Container = styled.div`
  background-color: #111;
  color: #0ff;
  font-family: "Courier New", monospace;
  padding: 0;
  height: calc(100vh - 110px);
  overflow-y: auto;
`;

const DeviceList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  padding-top: 60px;
`;

const DeviceItem = styled.li`
  background-color: rgba(51, 51, 51, 0.8);
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border: 1px solid #0ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    z-index: -1;
  }
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 5px #0f0;
  }
  50% {
    text-shadow: 0 0 10px #0f0;
  }
  100% {
    text-shadow: 0 0 5px #0f0;
  }
`;

const DeviceName = styled.h3`
  margin: 0;
  font-weight: normal;
  color: ${(props) => (props.connected? "#0f0": "#f00")};
  text-shadow: ${(props) => (props.connected? "0 0 5px #0f0": "none")};
  animation: ${(props) => (props.connected? glow: "none")} 2s ease-in-out infinite;
  font-size: 1.2em;
  letter-spacing: 1px;
`;

const DeviceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SignalBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #444;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`;

const SignalLevel = styled.div`
  height: 100%;
  background: linear-gradient(to right, #f00, #ff0, #0f0);
  width: ${(props) => props.signal}%;
  animation: ${(props) =>
    props.connected
    ? `signalAnimation ${props.signal / 10}s linear infinite`
    : "none"};
`;


const StatsBar = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #0ff;
  padding: 5px 10px;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 45px;
  left: 0;
  right: 0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    margin-right: 5px;
    font-size: 0.9em;
  }

  p {
    margin: 0;
    font-size: 0.9em;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 0;

  h2 {
    margin: 0;
    font-size: 1em;
  }
`;

const SettingsButton = styled.button`
  background-color: #0ff;
  color: #111;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DeviceMonitor = () => {
  const devices = useSelector((state) => state.devices.devices);
  const [updatedDevices, setUpdatedDevices] = useState(devices);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedDevices((prevDevices) =>
        prevDevices.map((device) => ({
        ...device,
          signal: Math.floor(Math.random() * 100),
          battery: Math.max(10, device.battery - Math.floor(Math.random() * 2)),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  },);

  const getDeviceStats = () => {
    const connected = updatedDevices.filter(
      (device) => device.connected
    ).length;
    const disconnected = updatedDevices.length - connected;
    const alerts = updatedDevices.filter((device) => device.signal < 30).length;
    return { connected, disconnected, alerts };
  };

  const { connected, alerts } = getDeviceStats();

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  return (
    <Container>
      <Header>
        <h2>Device Monitor</h2>
      </Header>
      <StatsBar>
        <StatItem>
          <Bluetooth color="#0ff" />
          <p>Total Devices: {updatedDevices.length}</p>
        </StatItem>
        <StatItem>
          <Wifi color="#0ff" />
          <p>Connected: {connected}</p>
        </StatItem>
        <StatItem>
          <AlertCircle color="#0ff" />
          <p>Alerts: {alerts}</p>
        </StatItem>
      </StatsBar>
      <DeviceList>
        {updatedDevices.map((device) => (
          <DeviceItem key={device.id}>
            <DeviceHeader>
              <DeviceName connected={device.connected}>
                {device.name}
              </DeviceName>
            </DeviceHeader>
            <p>Type: {device.type}</p>
            <SignalBar>
              <SignalLevel signal={device.signal} connected={device.connected} />
            </SignalBar>
            <p>Battery: {device.battery}</p>
            <p>IP Address: {device.ipAddress}</p>
            <p>MAC Address: {device.macAddress}</p>
            <p>Connection Type: {device.connectionType}</p>
            <Power color={device.connected? "#0ff": "#f00"} style={{ position: "absolute", top: "10px", right: "10px" }} />
          </DeviceItem>
        ))}
      </DeviceList>
      <SettingsButton onClick={handleSettingsClick}>
        Settings
      </SettingsButton>
    </Container>
  );
};

export default DeviceMonitor;