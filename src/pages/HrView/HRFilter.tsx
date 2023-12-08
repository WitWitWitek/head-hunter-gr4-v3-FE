import { FilterBtn } from "./FilterBtn";
import HR from "./HRFilter.module.scss";

export const HRFilter = () => {
  return (
    <div className={HR.wrapper}>
      <section className={HR.panel}>
        <div className={HR.panel__brand}>
          <h2 className={HR.panel__brand__title}>Filtrowanie</h2>
          <button className={HR.panel__brand__btn}>Wyczyść wszystkie</button>
        </div>
        <FilterBtn title="Ocena przejścia kursu" />
        <FilterBtn title="Ocena aktywności i zaangażowania na kursie" />
        <FilterBtn title="Ocena kodu w projekcie własnym" />
        <FilterBtn title="Ocena pracy w zespole scrum" />
        <div className={HR.panel__mark}>
          <h3 className={HR.panel__mark__title}>Preferowane miejsce pracy</h3>
          <div className={HR.panel__mark__box}>
            <button className={HR.box__buttons}>Praca zdalna</button>
            <button className={HR.box__buttons}>Praca w biurze</button>
          </div>
        </div>
        <div className={HR.panel__mark}>
          <h3 className={HR.panel__mark__title}>Oczekiwany typ kontraktu</h3>
          <div className={HR.panel__mark__box}>
            <button className={HR.box__buttons}>Umowa o pracę</button>
            <button className={HR.box__buttons}>B2B</button>
            <button className={HR.box__buttons}>Umowa zlecenie</button>
            <button className={HR.box__buttons}>Umowa o dzieło</button>
          </div>
        </div>
      </section>
    </div>
  );
};
