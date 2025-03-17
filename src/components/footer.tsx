import React from "react";
import "./footer.css";
import ppro from "premierepro";

export const Footer = ({
  writeToConsole,
  clearConsole,
}: {
  writeToConsole: (message: string) => void;
  clearConsole: () => void;
}) => {
  const populateApplicationInfo = async () => {
    const project = await ppro.Project.getActiveProject();
    if (!project) {
      writeToConsole("There is no active project found");
      return;
    }
    writeToConsole(`Active project: ${project.name}`);

    const sequence = await project.getActiveSequence();
    if (!sequence) {
      writeToConsole("There is no active sequence found");
      return;
    }
    writeToConsole(`Active sequence: ${sequence.name}`);
  };

  const clearApplicationInfo = async () => {
    clearConsole();
  };
  return (
    <sp-body>
      <div className="plugin-footer">
        <sp-button onClick={populateApplicationInfo}>
          Populate Application Info
        </sp-button>
        <sp-button onClick={clearApplicationInfo}>
          Clear Application Info
        </sp-button>
      </div>
    </sp-body>
  );
};
