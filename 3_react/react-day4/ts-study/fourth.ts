interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const defaultProps: ButtonProps = {
  text: "클릭",
  onClick: () => {
    console.log("클릭!");
  },
  variant: "primary",
  disabled: false,
  size: "medium",
};

function createButton(props: ButtonProps): string {
  const { text, variant, size, disabled } = props;
  return `
        button: ${text}
        style: ${variant || "primary"}
        size: ${size || "medium"}
        disabled: ${disabled ? "예" : "아니오"}
    `;
}

console.log(
  createButton({
    text: "저장",
    onClick: () => {},
    variant: "primary",
    size: "large",
  })
);

console.log(
  createButton({
    text: "삭제",
    onClick: () => {},
    variant: "danger",
    disabled: true,
  })
);
