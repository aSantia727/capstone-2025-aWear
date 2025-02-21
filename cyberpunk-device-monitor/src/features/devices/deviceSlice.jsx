import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    devices: [
      {
        id: 1,
        name: "NETRUNNER-13",
        type: "Mobile Interface",
        connected: true,
        signal: 85,
        battery: 92,
        ipAddress: "192.168.1.101",
        macAddress: "00:1B:44:11:3A:B7",
        connectionType: "Wireless",
      },
      {
        id: 2,
        name: "AUDIO-SYNC PRO",
        type: "Audio Peripheral",
        connected: false,
        signal: 20,
        battery: 15,
        ipAddress: "192.168.1.102",
        macAddress: "00:1B:44:11:3A:B8",
        connectionType: "Bluetooth",
      },
      {
        id: 3,
        name: "PULSE SPEAKER",
        type: "Sound Receptor",
        connected: true,
        signal: 95,
        battery: 67,
        ipAddress: "192.168.1.103",
        macAddress: "00:1B:44:11:3A:B9",
        connectionType: "Wireless",
      },
      {
        id: 4,
        name: "CYBER EYE",
        type: "Visual Interface",
        connected: true,
        signal: 75,
        battery: 54,
        ipAddress: "192.168.1.104",
        macAddress: "00:1B:44:11:3A:BA",
        connectionType: "Wired",
      },
      {
        id: 5,
        name: "NEURAL LINK",
        type: "Brain Interface",
        connected: false,
        signal: 5,
        battery: 2,
        ipAddress: "192.168.1.105",
        macAddress: "00:1B:44:11:3A:BB",
        connectionType: "Neural",
      },
      {
        id: 6,
        name: "HYPER MIC",
        type: "Audio Input",
        connected: true,
        signal: 80,
        battery: 43,
        ipAddress: "192.168.1.106",
        macAddress: "00:1B:44:11:3A:BC",
        connectionType: "Wireless",
      },
      {
        id: 7,
        name: "DATA CORE",
        type: "Storage Device",
        connected: true,
        signal: 60,
        battery: 78,
        ipAddress: "192.168.1.107",
        macAddress: "00:1B:44:11:3A:BD",
        connectionType: "Wired",
      },
    ],
  };

const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    toggleConnection: (state, action) => {
      const device = state.devices.find((d) => d.id === action.payload);
      if (device) {
        device.connected =!device.connected;
      }
    },
  },
});

export const { toggleConnection } = deviceSlice.actions;
export default deviceSlice.reducer;