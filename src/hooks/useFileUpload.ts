import { toast } from "react-toastify";
import Papa from "papaparse";
import {
  CreateStudentType,
  ExtendedStudentType,
} from "../types/createStudentType";
import {
  validateCSVRow,
  CSVRow,
  validateJSON,
} from "../validation/inputFilesValidators";
import { studentsMapper } from "../utils/studentsMapper";

export const useFileUpload = () => {
  const handleFileUpload = async (
    file: File | null,
    setStudents: React.Dispatch<
      React.SetStateAction<ExtendedStudentType[] | undefined>
    >,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setRowCount: React.Dispatch<React.SetStateAction<number>>,
    setCsvErrors: React.Dispatch<React.SetStateAction<string[]>>,
    setJsonErrors: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (!file) {
      toast.error("Proszę wybrać plik.");
      return;
    }

    setLoading(true);
    const fileExtension = file.name.split(".").pop();

    if (fileExtension === "csv") {
      Papa.parse<CSVRow>(file, {
        header: true,
        complete: (results) => {
          const errors: string[] = [];
          results.data.forEach((row, index) => {
            const validation = validateCSVRow(row, index + 1);
            if (!validation.isValid) {
              errors.push(validation.error || `Błąd w wierszu ${index + 1}`);
            }
          });

          if (errors.length > 0) {
            setCsvErrors(errors);
            setLoading(false);
            toast.error("Nieprawidłowy format CSV.");
          } else {
            const students = studentsMapper(
              results.data as unknown as CreateStudentType[]
            );
            setStudents(
              students.map((student) => ({
                ...student,
                status: "brak akcji.",
              }))
            );
            setLoading(false);
            setRowCount(results.data.length);
            toast.success(
              `Plik CSV został przetworzony. Dodano ${results.data.length} kursantów`
            );
          }
        },
      });
    } else if (fileExtension === "json") {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          const jsonData = JSON.parse(result);
          const errors = validateJSON(jsonData);
          if (errors.length > 0) {
            setJsonErrors(errors);
            setLoading(false);
            toast.error(errors.join(", "));
            return;
          } else {
            const students = studentsMapper(
              jsonData as unknown as CreateStudentType[]
            );
            setStudents(
              students.map((student) => ({
                ...student,
                status: "brak akcji.",
              }))
            );
            setLoading(false);
            setRowCount(jsonData.length);
            toast.success(
              `Plik JSON został pomyślnie wczytany. Dodano ${jsonData.length} kursantów/a`
            );
          }
        }
      };
      reader.readAsText(file);
    } else {
      toast.error("Nieobsługiwany format pliku.");
      setLoading(false);
    }
  };

  return { handleFileUpload };
};
