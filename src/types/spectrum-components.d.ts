declare namespace JSX {
  interface IntrinsicElements {
    "sp-body": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      variant?: "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
    };
    "sp-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > & {
      variant?: "cta" | "primary" | "secondary" | "warning" | "overBackground";
      disabled?: boolean;
      quiet?: boolean;
    };
  }
}
