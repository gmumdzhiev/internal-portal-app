export const useAuth = () => {
  let isAuthenticated = false;
  const loggedInUser = localStorage.getItem('user');
  if (loggedInUser) isAuthenticated = true;
  return { isAuthenticated };
};
