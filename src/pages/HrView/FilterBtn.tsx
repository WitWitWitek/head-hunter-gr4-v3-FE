import HR from "./HRFilter.module.scss";
type filterProps = {
  title: string;
};
export const FilterBtn = (props: filterProps) => {
  return (
    <div className={HR.panel__mark}>
      <h3 className={HR.panel__mark__title}>{props.title}</h3>
      <div className={HR.panel__mark__box}>
        <button className={HR.box__buttons}>
          5 <p className={HR.star}>★</p>
        </button>
        <button className={HR.box__buttons}>
          4 <p className={HR.star}>★</p>
        </button>
        <button className={HR.box__buttons}>
          3 <p className={HR.star}>★</p>
        </button>
        <button className={HR.box__buttons}>
          2 <p className={HR.star}>★</p>
        </button>
        <button className={HR.box__buttons}>
          1 <p className={HR.star}>★</p>
        </button>
      </div>
    </div>
  );
};
