import React from "react";
import { useSearchParams } from "react-router-dom";
import useOAuthCallback from "../../hooks/useOAuthCallback";

const OauthSuccess = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");
  
  useOAuthCallback(key);
  
  return <></>;
};

export default OauthSuccess;