import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer
      className="bg-dark text-center text-light py-3 my-3"
      style={footerStyle}
    >
      <h7>copyright &copy; MyTodosList.com</h7>
    </footer>
  );
};
