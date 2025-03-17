import ReactDOM from "react-dom";
import { entrypoints } from "uxp";

const _id = Symbol("_id");
const _root = Symbol("_root");
const _attachment = Symbol("_attachment");
const _Component = Symbol("_Component");
const _menuItems = Symbol("_menuItems");

type MenuItem = {
  id: string;
  label: string;
  enabled: boolean;
  checked: boolean;
  oninvoke?: () => void;
};

export class PanelController implements entrypoints.PanelConfig {
  private [_id]?: string | null;
  private [_root]: HTMLElement | null;
  private [_attachment]: HTMLElement | null;
  private [_Component]: ({
    panel,
  }: {
    panel: entrypoints.PanelConfig;
  }) => JSX.Element;
  private [_menuItems]: MenuItem[];
  menuItems: MenuItem[];

  constructor(
    Component: ({ panel }: { panel: entrypoints.PanelConfig }) => JSX.Element,
    {
      id,
      menuItems,
    }: {
      id?: string;
      menuItems?: MenuItem[];
    } = {}
  ) {
    this[_root] = null;
    this[_attachment] = null;
    this[_Component] = Component;
    this[_id] = id;
    this[_menuItems] = menuItems || [];
    this.menuItems = this[_menuItems].map((menuItem) => ({
      id: menuItem.id,
      label: menuItem.label,
      enabled: menuItem.enabled || true,
      checked: menuItem.checked || false,
    }));

    ["create", "show", "hide", "destroy", "invokeMenu"].forEach(
      //@ts-ignore
      (fn) => (this[fn] = this[fn].bind(this))
    );
  }
  _id: symbol;

  async create() {
    this[_root] = document.createElement("div");
    this[_root].style.height = "100vh";
    this[_root].style.overflow = "auto";
    this[_root].style.padding = "8px";

    ReactDOM.render(this[_Component]({ panel: this }), this[_root]);
  }

  async show() {
    if (!this[_root]) this.create();
    // this[_attachment] = HTMLElement;
    this[_attachment]?.appendChild(this[_root]!);
  }

  async hide() {
    if (this[_attachment] && this[_root]) {
      this[_attachment].removeChild(this[_root]);
      this[_attachment] = null;
    }
  }

  async destroy() {}

  async invokeMenu(id: string) {
    const menuItem = this[_menuItems].find((c) => c.id === id);
    if (menuItem) {
      menuItem.oninvoke?.();
    }
  }
}
