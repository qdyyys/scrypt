interface ChangeIcoProps {
  lightTheme: boolean;
}

const ChangeIco: React.FC<ChangeIcoProps> = ({ lightTheme }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.33331H14M2 14.6666H14M5.2 12H10.8C11.9201 12 12.4802 12 12.908 11.782C13.2843 11.5902 13.5903 11.2843 13.782 10.908C14 10.4801 14 9.92008 14 8.79998V7.19998C14 6.07987 14 5.51982 13.782 5.092C13.5903 4.71567 13.2843 4.40971 12.908 4.21797C12.4802 3.99998 11.9201 3.99998 10.8 3.99998H5.2C4.0799 3.99998 3.51984 3.99998 3.09202 4.21797C2.71569 4.40971 2.40973 4.71567 2.21799 5.092C2 5.51982 2 6.07987 2 7.19998V8.79998C2 9.92008 2 10.4801 2.21799 10.908C2.40973 11.2843 2.71569 11.5902 3.09202 11.782C3.51984 12 4.07989 12 5.2 12Z"
        stroke={lightTheme ? "#100F1B" : "#FFFFFF"} // Adjust color based on lightTheme
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChangeIco;
