import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const report = (event) => console.log("User clicked!");
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  }, []);

  return <div>🕵️</div>;
}
