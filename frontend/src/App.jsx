import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./pages/GoogleLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="49744647807-2i1v7usruvpvmphfj54umsj43c7tcnqk.apps.googleusercontent.com">
        <GoogleLogin></GoogleLogin>
      </GoogleOAuthProvider>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<GoogleAuthWrapper />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
