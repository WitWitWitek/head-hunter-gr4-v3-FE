import { useFormik } from "formik";
import { hrSchema } from "../../../validation";
import { Input, Spinner, Button } from "../../ui";
import { hrFormFields } from "../../../constants/hrFormFields";
import styles from "./AddHr.module.scss";
import { useCreateHrMutation } from "../../../app/api/userApiSlice";

const AddHr = () => {
  const [createHr, { isLoading }] = useCreateHrMutation();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        fullName: "",
        company: "",
        maxReservedStudents: 1,
      },
      validationSchema: hrSchema,
      onSubmit: async (values) => {
        await createHr({ ...values });
      },
    });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Dodaj HR</h2>

        {hrFormFields.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            description={field.description}
            placeholder={field.placeholder}
            min={field.min}
            max={field.max}
            hasError={
              touched[field.name as keyof typeof touched] &&
              Boolean(errors[field.name as keyof typeof errors])
            }
            errorMessage={
              errors[field.name as keyof typeof errors] as string | undefined
            }
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[field.name as keyof typeof values]}
          />
        ))}

        <div className={styles.submitButton}>
          <Button type="submit" loading={isLoading}>
            {isLoading ? "Wysyłanie..." : "Wyślij"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddHr;
