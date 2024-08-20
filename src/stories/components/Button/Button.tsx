export interface ButtonProps {
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={'rounded-sm bg-gray-300 px-2 py-1'}
      {...props}
    >
      {label}
    </button>
  );
};
