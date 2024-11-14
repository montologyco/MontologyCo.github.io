const LoggedIn = (setUserLoggedIn, setUsername) => {
  const userLoggedIn = localStorage.getItem('loggedIn');
  const username = localStorage.getItem('username');
  setUserLoggedIn(userLoggedIn);
  setUsername(username);
};

export default LoggedIn;