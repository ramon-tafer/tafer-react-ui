export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function AppButton({
  label,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
