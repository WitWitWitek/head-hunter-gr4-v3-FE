import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Spinner, Button } from "../../ui";
import { toast } from "react-toastify";
import Papa from "papaparse";
import styles from "./AddFiles.module.scss";
import { CreateStudentType } from "../../../types/createStudentType";
import { useCreateStudentMutation } from "../../../app/api/userApiSlice";
import { studentsMapper } from "../../../utils/studentsMapper";

function AddFiles() {
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [students, setStudents] = useState<CreateStudentType[]>();
  const [createStudent, { isSuccess }] = useCreateStudentMutation();

  const sendStudents = async () => {
    students && (await createStudent({ students: [...students] }));
  };

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: (values) => {
      handleFile(values.file);
    },
  });

  useEffect(() => {
    setSelectedFileName(() => "");
  }, [isSuccess]);

  const handleFile = (file: File | null) => {
    if (!file) {
      toast.error("Proszę wybrać plik.");
      return;
    }

    setLoading(true);
    const fileExtension = file.name.split(".").pop();

    if (fileExtension === "csv") {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          // @todo dodac walidację results tak żeby otrzymywać typ CreateStudentType[]
          const students = studentsMapper(
            results.data as unknown as CreateStudentType[]
          );
          setStudents(() => students);
          setLoading(false);
          toast.success("Plik CSV został przetworzony.");
        },
      });
    } else if (fileExtension === "json") {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          const jsonData = JSON.parse(result);
          // @todo dodac walidację jsonData tak żeby otrzymywać typ CreateStudentType[]
          const students = studentsMapper(
            jsonData as unknown as CreateStudentType[]
          );
          setStudents(() => students);
          setLoading(false);
          toast.success("Plik JSON został przetworzony.");
        }
      };
      reader.readAsText(file);
    } else {
      toast.error("Nieobsługiwany format pliku.");
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null;
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension === "csv" || fileExtension === "json") {
        formik.setFieldValue("file", file);
        setSelectedFileName(file.name);
        setFileError(""); // Reset błędu
      } else {
        setFileError(
          "Niepoprawny format pliku. Akceptowane formaty: .csv, .json"
        );
        formik.setFieldValue("file", null);
        setSelectedFileName("");
      }
    } else {
      formik.setFieldValue("file", null);
      setSelectedFileName("");
      setFileError("");
    }
  };

  const handleFileRemove = () => {
    formik.setFieldValue("file", null);
    setSelectedFileName("");
  };

  return (
    <div className={styles.container}>
      <h2 style={{ color: "white" }}>Dodawanie listy kursantów</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.fileInputContainer}>
          <label htmlFor="fileInput" className={`${styles.fileInputLabel}`}>
            Wybierz plik
          </label>
          <input
            id="fileInput"
            type="file"
            name="file"
            onChange={handleFileChange}
            className={styles.hiddenFileInput}
          />
          <div className={styles.fileName}>{selectedFileName}</div>
        </div>
        {fileError && <div className={styles.fileError}>{fileError}</div>}
        <div className={styles.buttonsContainer}>
          <button onClick={handleFileRemove} className={styles.removeBtn}>
            Usuń
          </button>
          <Button type="submit">Importuj dane</Button>
          {students && (
            <Button type="button" onClick={() => sendStudents()}>
              Zapisz
            </Button>
          )}
        </div>
      </form>
      {loading && <Spinner />}
    </div>
  );
}

export default AddFiles;
