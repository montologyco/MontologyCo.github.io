import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

function AuthChecker({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentSession(); // Check if there's an active session
        setAuthenticated(true);
      } catch (error) {
        console.error('User not authenticated', error);
        navigate('/login'); // Redirect to login if not authenticated
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Loading state while checking auth
  }

  if (!authenticated) {
    return null; // Optionally show nothing or a loading spinner if not authenticated
  }

  return <>{children}</>; // Render children if authenticated
}

export default AuthChecker;