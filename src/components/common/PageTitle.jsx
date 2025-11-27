import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function PageTitle({ children }) {
  const { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(children);

    // Reset title on unmount (optional, but good practice if we want a default)
    // But here we might just let the next page overwrite it.
    return () => setTitle("Mon Application");
  }, [children, setTitle]);

  return null;
}
