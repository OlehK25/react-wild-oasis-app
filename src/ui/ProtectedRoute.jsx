import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";

const FullPageSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // If the user is not authenticated, redirect to the login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // While loading, show a spinner
  if (isLoading) {
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );
  }

  // If the user is authenticated, show the protected content
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
