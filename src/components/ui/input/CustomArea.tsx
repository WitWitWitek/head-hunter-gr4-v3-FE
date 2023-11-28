import { useField } from "formik";
import StudentStyle from "../../../pages/StudentFormPage/StudentForm.module.scss";
interface label {
  label: string;
}
interface props extends label {
  name: string;
}
export const CustomArea = ({ label, ...props }: props) => {
  const [field, meta] = useField(props);
  return (
    <div className={StudentStyle.customInput}>
      <label className={StudentStyle.customInput__label}>{label}</label>
      <textarea
        {...field}
        {...props}
        cols={30}
        rows={10}
        className={
          meta.touched && meta.error
            ? "customInput__area error"
            : "customInput__area"
        }
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
