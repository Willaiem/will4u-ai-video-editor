import React from "react";

import "./styles.css";
import { PanelController } from "./controllers/PanelController";
import { App } from "./panels/App";

import { entrypoints } from "uxp";

const appsController = new PanelController(() => <App />, {
  id: "panel",
  menuItems: [
    {
      id: "reload1",
      label: "Reload Plugin",
      enabled: true,
      checked: false,
      oninvoke: () => location.reload(),
    },
    {
      id: "dialog1",
      label: "About this Plugin",
      enabled: true,
      checked: false,
      //@ts-ignore
      oninvoke: () => aboutController.run(),
    },
  ],
});

entrypoints.setup({
  plugin: {
    async create() {
      const plugin = this;
      /* optional */ console.log("created", plugin);
    },
    async destroy() {
      /* optional */ console.log("destroyed");
    },
  },
  panels: {
    apps: appsController,
  },
});
