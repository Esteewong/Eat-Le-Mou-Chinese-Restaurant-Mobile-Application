import io from 'socket.io-client';

const SOCKET_URL = 'http://127.0.0.1:5000/notifications';

class WebSocketService {
  socket: SocketIOClient.Socket | undefined;

  connect = (c_id?: string) => {
    this.socket = io(SOCKET_URL);

    if (this.socket) {
      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server');
        if (c_id) {
          this.identify(c_id);
        }
      });

      this.socket.on('notification', (message: string) => {
        console.log('Received notification:', message);
        this.handleNotification(message);
      });

      this.socket.on('identified', (data) => {
        console.log('Identification response:', data);
      });

      this.socket.on('identification_error', (data) => {
        console.error('Identification error:', data);
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server');
      });
    } else {
      console.error('Failed to initialize WebSocket connection');
    }
  };

  identify = (c_id: string) => {
    if (this.socket) {
      this.socket.emit('identify', { c_id });
    } else {
      console.error('WebSocket connection not established');
    }
  };

  handleNotification = (message: string) => {
    console.log('Received message:', message); // Log raw message
    try {
      const notification: Notification = JSON.parse(message);
      console.log('Parsed notification:', notification); // Log parsed notification
      switch (notification.type) {
        case 'booking_confirmation':
          this.handleBookingConfirmation(notification);
          break;
        default:
          console.warn('Unknown notification type:', notification.type);
      }
    } catch (error) {
      console.error('Error handling notification:', error);
    }
  };

  handleBookingConfirmation = (notification: Notification) => {
    console.log('Booking Confirmation:', notification.message);
    // Ensure this function is doing something visible, like updating state or triggering a UI update
  };

  disconnect = () => {
    if (this.socket) {
      this.socket.disconnect();
    } else {
      console.error('WebSocket connection not established');
    }
  };

  getSocket = () => {
    return this.socket;
  };
}

export default new WebSocketService();
