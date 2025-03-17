import React from "react";
import "./content.css";

export const Content = ({ message }: { message: string[] }) => {
  return (
    <sp-body>
      <div className="plugin-content">
        {message.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </sp-body>
  );
};
