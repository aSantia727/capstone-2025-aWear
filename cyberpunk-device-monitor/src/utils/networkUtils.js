export const checkServerStatus = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/health', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      return response.ok;
    } catch (error) {
      console.error('Server health check failed:', error);
      return false;
    }
  };