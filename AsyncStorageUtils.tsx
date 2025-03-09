import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store notifications
export const storeNotification = async (c_id, notification) => {
    try {
      const storedNotifications = await AsyncStorage.getItem(`notifications_${c_id}`);
      const notifications = storedNotifications ? JSON.parse(storedNotifications) : [];
  
      // Ensure notification is stored as an object with a message property
      const formattedNotification = typeof notification === 'string' ? { 
        message: notification,
        timestamp: new Date().toISOString() // Add timestamp
      } : { 
        ...notification, 
        timestamp: new Date().toISOString() // Add timestamp
      };
  
      notifications.push(formattedNotification);
      await AsyncStorage.setItem(`notifications_${c_id}`, JSON.stringify(notifications));
    } catch (error) {
      console.error('Error storing notification:', error);
    }
  };
  
// Function to retrieve all notifications
export const getStoredNotifications = async (c_id) => {
  try {
    const storedNotifications = await AsyncStorage.getItem(`notifications_${c_id}`);
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  } catch (error) {
    console.error('Error retrieving notifications:', error);
    return [];
  }
};

// Function to clear notifications
export const clearNotifications = async (c_id) => {
  try {
    await AsyncStorage.removeItem(`notifications_${c_id}`);
  } catch (error) {
    console.error('Error clearing notifications:', error);
  }
};
