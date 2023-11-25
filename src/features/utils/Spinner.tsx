import spinner from "./style/Spinner.module.css";
export const Spinner = () => {
  return (
    <div className={spinner.spinner}>
      <span className={spinner.spinner__loader}></span>
    </div>
  );
};
