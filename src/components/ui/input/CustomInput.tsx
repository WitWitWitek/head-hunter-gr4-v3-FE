import { useField } from "formik";
import StudentStyle from "../../../pages/StudentFormPage/StudentForm.module.scss";
import { props } from "../../../types/StudentTypes/InputTypes";

export const CustomInput = ({ label, ...props }: props) => {
  const [field, meta] = useField(props);
  return (
    <div className={StudentStyle.customInput}>
      <label className={StudentStyle.customInput__label}>{label}</label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "customInput__input error"
            : "customInput__input"
        }
      />
      {meta.touched && meta.error && (
        <div className={StudentStyle.error}>{meta.error}</div>
      )}
    </div>
  );
};
