import "./styles.css";
import React from "react";
import Navbar from "./Navbar";
import Cart from "./CartContainer";
import { useGlobalContext } from "./context";

export default function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <Cart />
    </main>
  );
}
