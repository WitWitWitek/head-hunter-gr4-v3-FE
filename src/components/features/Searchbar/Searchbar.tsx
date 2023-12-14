import { useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import styles from "./Searchbar.module.scss";
import FilterDialog from "../Filter/FilterDialog";
import { FormValues } from "../Filter/FilterDialog";

interface SearchBarProps {
  setQueryParams: (params: FormValues) => void;
}

const Searchbar = ({ setQueryParams }: SearchBarProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Szukaj"
        />
        <button onClick={openDialog}>
          <MdFilterAlt className={styles.icon} size={22} color="#4D4D4D" />
          Filtrowanie
        </button>
        {isDialogOpen && (
          <FilterDialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            setQueryParams={setQueryParams}
          />
        )}
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Searchbar;
