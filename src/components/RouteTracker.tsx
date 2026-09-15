import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/pixel";

/** Dispara o PageView do Meta Pixel a cada troca de rota (SPA). */
const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);
  return <Outlet />;
};

export default RouteTracker;
