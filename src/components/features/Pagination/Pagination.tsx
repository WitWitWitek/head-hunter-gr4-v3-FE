import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  itemsPerPage: number;
  lastPage: number;
  paginate: (pageNumber: number) => void;
  changeItemsPerPage: (number: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  lastPage,
  paginate,
  changeItemsPerPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.select}>
        <p>Ilość elementów</p>
        <select
          value={itemsPerPage}
          onChange={(e) => changeItemsPerPage(Number(e.target.value))}
        >
          {[10, 20, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.prevNext}>
        <p>
          {currentPage} z {lastPage}
        </p>
        <div>
          <button
            className={styles.btn}
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            className={styles.btn}
            disabled={currentPage === lastPage}
            onClick={() => paginate(currentPage + 1)}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
      <div className={styles.pageNumbers}>
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={() => paginate(number)}
            href="#"
            className={number === currentPage ? styles.active : ""}
          ></a>
        ))}
      </div>
    </div>
  );
};
