export const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  if (!token) {
    return false;
  }
  return true;
};
