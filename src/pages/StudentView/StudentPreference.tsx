import { Field, FieldProps, Form, Formik } from "formik";
import { Input } from "../../components/ui/Input/Input";
import { Button } from "../../components/ui/Button/Button";
import { StudentFilteredValidation } from "../../validation";
import Style from "./StudentForm.module.scss";
import { Select } from "../../components/ui";
interface FilterValues {
  courseCompletionRating: number;
  activityAndEngagementRating: number;
  ownProjectCodeRating: number;
  teamWorkScrumRating: number;
  preferredWorkLocation: string;
  consentForUnpaidInternship: boolean;
  contractType: string;
  minSalary: string;
  maxSalary: string;
  monthsOfCommercialExp: string;
}

export const StudentPreference = () => {
  return (
    <Formik
      initialValues={{
        courseCompletionRating: 0,
        activityAndEngagementRating: 0,
        ownProjectCodeRating: 0,
        teamWorkScrumRating: 0,
        preferredWorkLocation: "",
        consentForUnpaidInternship: false,
        contractType: "",
        minSalary: "",
        maxSalary: "",
        monthsOfCommercialExp: " ",
      }}
      onSubmit={(values: FilterValues) => {
        console.log(values);
      }}
      validationSchema={StudentFilteredValidation}
    >
      <div className={Style.wrapper}>
        <Form className={Style.form} noValidate>
          <Field name="courseCompletionRating">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Ocena przejścia kursu"
                hasError={
                  form.touched.courseCompletionRating &&
                  !!form.errors.courseCompletionRating
                }
                errorMessage={form.errors.courseCompletionRating}
                type="number"
                min={1}
                max={5}
              />
            )}
          </Field>
          <Field name="activityAndEngagementRating">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Ocena zaangażowania w kurs"
                hasError={
                  form.touched.activityAndEngagementRating &&
                  !!form.errors.activityAndEngagementRating
                }
                errorMessage={form.errors.activityAndEngagementRating}
                type="number"
                min={1}
                max={5}
              />
            )}
          </Field>
          <Field name="ownProjectCodeRating">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Ocena z projektu własnego"
                hasError={
                  form.touched.ownProjectCodeRating &&
                  !!form.errors.ownProjectCodeRating
                }
                errorMessage={form.errors.ownProjectCodeRating}
                type="number"
                min={1}
                max={5}
              />
            )}
          </Field>
          <Field name="teamWorkScrumRating">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Ocena z pracy w zespole"
                hasError={
                  form.touched.teamWorkScrumRating &&
                  !!form.errors.teamWorkScrumRating
                }
                errorMessage={form.errors.teamWorkScrumRating}
                type="number"
                min={1}
                max={5}
              />
            )}
          </Field>
          <Field name="referredWorkLocation">
            {({ field }: FieldProps<string, FilterValues>) => (
              <Select
                {...field}
                description="Preferowane miejsce pracy"
                options={[
                  "Bez znaczenia",
                  "Na miejscu",
                  "Gotowość do przeprowadzki",
                  "Wyłącznie zdalnie",
                  "Hybrydowo",
                ]}
                value="Bez znaczenia"
              />
            )}
          </Field>
          <Field name="consentForUnpaidInternship">
            {({ field }: FieldProps<string, FilterValues>) => (
              <Select
                {...field}
                description="Bezpłatny staż"
                options={["Tak", "Nie"]}
                value="Nie"
              />
            )}
          </Field>
          <Field name="contractType">
            {({ field }: FieldProps<string, FilterValues>) => (
              <Select
                {...field}
                description="Typ kontraktu"
                options={[
                  "Brak preferencji",
                  "Tylko UoP",
                  "Możliwe B2B",
                  "Możliwe UZ/UoD",
                ]}
                value="Brak preferencji"
              />
            )}
          </Field>
          <Field name="minSalary">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Minimalne wynagrodzenie"
                hasError={form.touched.minSalary && !!form.errors.minSalary}
                errorMessage={form.errors.minSalary}
                type="number"
              />
            )}
          </Field>
          <Field name="maxSalary">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Maksymalne wynagrodzenie"
                hasError={form.touched.maxSalary && !!form.errors.maxSalary}
                errorMessage={form.errors.maxSalary}
                type="text"
              />
            )}
          </Field>
          <Field name="monthsOfCommercialExp">
            {({ field, form }: FieldProps<string, FilterValues>) => (
              <Input
                {...field}
                description="Doświadczenie komercyjne(miesiące)"
                hasError={
                  form.touched.monthsOfCommercialExp &&
                  !!form.errors.monthsOfCommercialExp
                }
                errorMessage={form.errors.monthsOfCommercialExp}
                type="text"
              />
            )}
          </Field>
          <Button type="submit" className={Style.btn}>
            Potwierdź
          </Button>
        </Form>
      </div>
    </Formik>
  );
};
