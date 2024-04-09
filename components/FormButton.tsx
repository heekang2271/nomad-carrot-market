interface FormButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
}

const FormButton = ({ loading = false, children }: FormButtonProps) => {
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? '로딩 중' : children}
    </button>
  );
};

export default FormButton;
