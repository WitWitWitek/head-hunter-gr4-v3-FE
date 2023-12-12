import { Button, Input } from "../../components/ui";
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
        <div className={HR.panel__mark}>
          <h3 className={HR.panel__mark__title}>
            Oczekiwane wynagrodzenie miesięczne netto
          </h3>
          <div className={HR.panel__mark__box}>
            <p className={HR.box__name}>Od</p>
            <Input
              className={HR.box__input}
              placeholder="np. 1000zł"
              type="text"
            />
            <p className={HR.box__name}>Do</p>
            <Input
              className={HR.box__input}
              placeholder="np. 10000zł"
              type="text"
            />
          </div>
        </div>
        <div className={HR.panel__mark}>
          <h3 className={HR.panel__mark__title}>
            Zgoda na odbycie bezpłatnych praktyk/stażu na początek
          </h3>
          <div className={HR.box}>
            <input type="checkbox" className={HR.box__check} value="Tak" />
            <p className={HR.box__vote}>Tak</p>
          </div>
          <div className={HR.box}>
            <input type="checkbox" className={HR.box__check} value="Nie" />
            <p className={HR.box__vote}>Nie</p>
          </div>
        </div>
        <div className={HR.panel__mark}>
          <h3 className={HR.panel__mark__title}>
            Ilość miesięcy doświadczenie komercyjnego kandydata w programowaniu
          </h3>
          <Input className={HR.month} placeholder="0 miesięcy" type="number" />
        </div>
        <div className={HR.finalBtn}>
          <button className={HR.finalBtn__cancel}>Anuluj</button>
          <Button>Pokaż wyniki</Button>
        </div>
      </section>
    </div>
  );
};
