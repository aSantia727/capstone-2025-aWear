import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import styled from "styled-components";

const Container = styled.div`
  background-color: #111;
  color: #0ff;
  font-family: "Courier New", monospace;
  padding: 20px;
  height: calc(100vh - 110px);
  overflow-y: auto;
  background-size: 100% 5px;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 4px,
    rgba(0, 255, 255, 0.1) 4px,
    rgba(0, 255, 255, 0.1) 5px
  );
`;

const SettingItem = styled.div`
  margin-bottom: 10px;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #0ff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const Button = styled.button`
  background-color: #0ff;
  color: #111;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SystemInfoTable = styled.table`
    width: 100%;
    center: 0;
  border-collapse: collapse;
  color: #0ff;
  font-size: 0.9em;

  th, td {
    border: 2px solid #0ff;
    padding: 5px;
    text-align: left;
  }

  th {
    background-color: rgba(0, 255, 255, 0.2);
  }
`;

const Label = styled.label`
  color: #0f0;
  margin-bottom: 5px;
  display: block;
`;

const SettingsScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notificationSound, setNotificationSound] = useState("beep");
  const [language, setLanguage] = useState("English");
  const [displayBrightness, setDisplayBrightness] = useState(50);
  const [soundVolume, setSoundVolume] = useState(75);
  const [networkMode, setNetworkMode] = useState("public");
  const [autoLockTime, setAutoLockTime] = useState(5);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [dataSaverMode, setDataSaverMode] = useState(false);
  const [hologramTheme, setHologramTheme] = useState("classic");
  const [neuralInterface, setNeuralInterface] = useState(false);
  const [cyberneticAugmentation, setCyberneticAugmentation] = useState("none");

  const handleNotificationSoundChange = (event) => {
    setNotificationSound(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDisplayBrightnessChange = (event) => {
    setDisplayBrightness(parseInt(event.target.value, 10));
  };

  const handleSoundVolumeChange = (event) => {
    setSoundVolume(parseInt(event.target.value, 10));
  };

  const handleNetworkModeChange = (event) => {
    setNetworkMode(event.target.value);
  };

  const handleAutoLockTimeChange = (event) => {
    setAutoLockTime(parseInt(event.target.value, 10));
  };

  const handleHapticFeedbackChange = (event) => {
    setHapticFeedback(event.target.checked);
  };

  const handleDataSaverModeChange = (event) => {
    setDataSaverMode(event.target.checked);
  };

  const handleHologramThemeChange = (event) => {
    setHologramTheme(event.target.value);
  };

  const handleNeuralInterfaceChange = (event) => {
    setNeuralInterface(event.target.checked);
  };

  const handleCyberneticAugmentationChange = (event) => {
    setCyberneticAugmentation(event.target.value);
  };

  const handleBluetoothScan = () => {
    // Simulate Bluetooth scanning here
    console.log("Scanning for Bluetooth devices...");
  };

  const handleBack = () => {
    navigate("/monitor");
  };

  const handleTerminateSession = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      <ButtonContainer style={{ marginTop: "20px" }}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleTerminateSession}>Terminate Session</Button>
      </ButtonContainer>

      <h1>Settings</h1>
      <SettingItem>
        <h2>System Information</h2>
        <SystemInfoTable>
          <tbody>
            <tr>
              <th>OS:</th>
              <td>CyberOS v2.5</td>
              </tr><tr>
              <th>Device ID:</th>
              <td>0x123456789abcdef</td>
            </tr>
            <tr>
              <th>Network:</th>
              <td>Connected</td>
              </tr><tr>
              <th>CPU Usage:</th>
              <td>35%</td>
            </tr>
            <tr>
              <th>Memory Usage:</th>
              <td>60%</td>
              </tr><tr>
              <th>Storage Usage:</th>
              <td>80%</td>
            </tr>
            <tr>
              <th>Firewall:</th>
              <td>Active</td>
              </tr><tr>
              <th>Encryption:</th>
              <td>High</td>
            </tr>
            <tr>
              <th>Implants:</th>
              <td>2</td>
              </tr><tr>
              <th>Neural Net:</th>
              <td>Stable</td>
            </tr>
            <tr>
              <th>Augmentation:</th>
              <td>3</td>
              </tr><tr>
              <th>HoloRes:</th>
              <td>4K</td>
            </tr>
            <tr>
              <th>Cyberdeck:</th>
              <td>Online</td>
              </tr><tr>
              <th>RAM:</th>
              <td>16GB</td>
            </tr>
            <tr>
              <th>VR:</th>
              <td>Enabled</td>
              </tr><tr>
              <th>Bionics:</th>
              <td>Active</td>
            </tr>
            <tr>
              <th>Net Protocol:</th>
              <td>TCP/IP</td>
              </tr><tr>
              <th>Threat Level:</th>
              <td>Low</td>
            </tr>
          </tbody>
        </SystemInfoTable>
      </SettingItem>
      <SettingItem>
        <h2>System Configuration</h2>
        <div>
          <Label htmlFor="notification-sound">Notification Sound:</Label>
          <select
            id="notification-sound"
            value={notificationSound}
            onChange={handleNotificationSoundChange}
          >
            <option value="beep">Beep</option>
            <option value="buzz">Buzz</option>
            <option value="chime">Chime</option>
          </select>
        </div>
        <div>
          <Label htmlFor="language">Language:</Label>
          <select id="language" value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Japanese">Japanese</option>
          </select>
        </div>
        <div>
          <Label htmlFor="display-brightness">Display Brightness:</Label>
          <input
            type="range"
            id="display-brightness"
            min="0"
            max="100"
            value={displayBrightness}
            onChange={handleDisplayBrightnessChange}
          />
        </div>
        <div>
          <Label htmlFor="sound-volume">Sound Volume:</Label>
          <input
            type="range"
            id="sound-volume"
            min="0"
            max="100"
            value={soundVolume}
            onChange={handleSoundVolumeChange}
          />
        </div>
        <div>
          <Label htmlFor="network-mode">Network Mode:</Label>
          <select
            id="network-mode"
            value={networkMode}
            onChange={handleNetworkModeChange}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div>
          <Label htmlFor="auto-lock-time">Auto-Lock Time (minutes):</Label>
          <select
            id="auto-lock-time"
            value={autoLockTime}
            onChange={handleAutoLockTimeChange}
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="30">30</option>
          </select>
        </div>
        <div>
          <Label htmlFor="haptic-feedback">Haptic Feedback:</Label>
          <input
            type="checkbox"
            id="haptic-feedback"
            checked={hapticFeedback}
            onChange={handleHapticFeedbackChange}
          />
        </div>
        <div>
          <Label htmlFor="data-saver-mode">Data Saver Mode:</Label>
          <input
            type="checkbox"
            id="data-saver-mode"
            checked={dataSaverMode}
            onChange={handleDataSaverModeChange}
          />
        </div>
        <div>
          <Label htmlFor="hologram-theme">Hologram Theme:</Label>
          <select
            id="hologram-theme"
            value={hologramTheme}
            onChange={handleHologramThemeChange}
          >
            <option value="classic">Classic</option>
            <option value="neon">Neon</option>
            <option value="matrix">Matrix</option>
          </select>
        </div>
        <div>
          <Label htmlFor="neural-interface">Neural Interface:</Label>
          <input
            type="checkbox"
            id="neural-interface"
            checked={neuralInterface}
            onChange={handleNeuralInterfaceChange}
          />
        </div>
        <div>
          <Label htmlFor="cybernetic-augmentation">
            Cybernetic Augmentation:
          </Label>
          <select
            id="cybernetic-augmentation"
            value={cyberneticAugmentation}
            onChange={handleCyberneticAugmentationChange}
          >
            <option value="none">None</option>
            <option value="eye">Cybernetic Eye</option>
            <option value="arm">Cybernetic Arm</option>
            <option value="legs">Cybernetic Legs</option>
          </select>
        </div>
      </SettingItem>
      <SettingItem>
        <Button onClick={handleBluetoothScan}>Scan for Bluetooth Devices</Button>
      </SettingItem>
    </Container>
  );
};

export default SettingsScreen;