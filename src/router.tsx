import RouteTracker from "./components/RouteTracker";
import Offer from "./pages/Offer";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";

export const routers = [
  {
    path: "/",
    name: "layout",
    element: <RouteTracker />,
    children: [
      { index: true, name: "home", element: <Offer /> },
      { path: "politicas", name: "politicas", element: <LegalPage page="privacy" /> },
      { path: "terminos", name: "terminos", element: <LegalPage page="terms" /> },
      { path: "devoluciones", name: "devoluciones", element: <LegalPage page="returns" /> },
      /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
      { path: "*", name: "404", element: <NotFound /> },
    ],
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
