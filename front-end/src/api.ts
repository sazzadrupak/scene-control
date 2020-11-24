import socketIOClient from "socket.io-client";

const socket = socketIOClient('https://api.mountkelvin.com', {
  reconnectionDelay: 1000,
  reconnectionDelayMax: 3000,
  transports: ['websocket'],
});

export default socket;