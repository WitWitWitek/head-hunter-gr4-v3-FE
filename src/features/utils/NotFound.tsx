import notFound from "./style/NotFound.module.css";
export const NotFound = () => {
  return (
    <div className={notFound.notfound}>
      <h2 className={notFound.notfound__title}>Wystąpił błąd:</h2>
      <p className={notFound.notfound__text}>
        Niestety strona nie istnieje lub wystąpił błąd,prosimy spróbować
        póżniej.
      </p>
    </div>
  );
};
