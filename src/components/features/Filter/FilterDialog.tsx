import styles from './FilterDialog.module.scss';
import { Button, Input } from '../../ui';
interface FilterDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ isOpen, onClose }) => {
	return (
		<div className={styles.dialogContainer} data-open={isOpen}>
			<dialog open={isOpen} onClose={onClose}>
				<div className={styles.heading}>
					<h2>Filtrowanie</h2>
					<button className={styles.clearBtn}>Wyczyść wszystkie</button>
				</div>
				<form>
					<div className={styles.points}>
						<Input
							type="number"
							id="teamProjectDegree"
							name="teamProjectDegree"
							min="1"
							max="5"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena pracy w zespole w Scrum"
							descriptionClass={styles.customDescription}
						/>
						<Input
							type="number"
							id="courseCompletion"
							name="courseCompletion"
							min="1"
							max="5"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena przejścia kursu"
							descriptionClass={styles.customDescription}
						/>
						<Input
							type="number"
							id="courseEngagement"
							name="courseEngagement"
							min="1"
							max="5"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena aktywności i zaangażowania na kursie"
							descriptionClass={styles.customDescription}
						/>
						<Input
							type="number"
							id="projectDegree"
							name="projectDegree"
							min="1"
							max="5"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena kodu w projekcie własnym"
							descriptionClass={styles.customDescription}
						/>
					</div>

					<fieldset className={styles.fieldset}>
						<legend>Preferowane miejsce pracy</legend>
						<div className={styles.checkboxGroup}>
							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="remote"
									name="expectedTypeWork"
									value="remote"
									className={styles.checkboxInput}
								/>
								<label htmlFor="remote" className={styles.checkboxLabel}>
									Wyłącznie zdalnie
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="onsite"
									name="expectedTypeWork"
									value="onsite"
									className={styles.checkboxInput}
								/>
								<label htmlFor="onsite" className={styles.checkboxLabel}>
									Na miejscu
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="noPreference"
									name="expectedTypeWork"
									value="noPreference"
									className={styles.checkboxInput}
								/>
								<label htmlFor="noPreference" className={styles.checkboxLabel}>
									Bez znaczenia
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="relocationReady"
									name="expectedTypeWork"
									value="relocationReady"
									className={styles.checkboxInput}
								/>
								<label
									htmlFor="relocationReady"
									className={styles.checkboxLabel}
								>
									Gotowość do przeprowadzki
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="hybrid"
									name="expectedTypeWork"
									value="hybrid"
									className={styles.checkboxInput}
								/>
								<label htmlFor="hybrid" className={styles.checkboxLabel}>
									Hybrydowo
								</label>
							</div>
						</div>
					</fieldset>

					<fieldset className={styles.fieldset}>
						<legend>Oczekiwany typ kontraktu</legend>
						<div className={styles.checkboxGroup}>
							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="UoP"
									name="expectedContractType"
									value="UoP"
									className={styles.checkboxInput}
								/>
								<label htmlFor="UoP" className={styles.checkboxLabel}>
									Tylko UoP
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="noPreference"
									name="expectedContractType"
									value="noPreference"
									className={styles.checkboxInput}
								/>
								<label htmlFor="noPreference" className={styles.checkboxLabel}>
									Brak preferencji
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="UZUoD"
									name="expectedContractType"
									value="UZUoD"
									className={styles.checkboxInput}
								/>
								<label htmlFor="UZUoD" className={styles.checkboxLabel}>
									Możliwe UZ/UoD
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="hybrid"
									name="expectedContractType"
									value="hybrid"
									className={styles.checkboxInput}
								/>
								<label htmlFor="hybrid" className={styles.checkboxLabel}>
									Hybrydowo
								</label>
							</div>

							<div className={styles.checkboxWrapper}>
								<input
									type="checkbox"
									id="B2B"
									name="expectedContractType"
									value="B2B"
									className={styles.checkboxInput}
								/>
								<label htmlFor="B2B" className={styles.checkboxLabel}>
									Możliwe B2B
								</label>
							</div>
						</div>
					</fieldset>
					<fieldset className={styles.salary}>
						<legend>Oczekiwane wynagrodzenie miesięczne netto</legend>
						<div className={styles.salaryInputGroup}>
							<p>Od:</p>
							<Input
								type="text"
								id="salaryMin"
								name="expectedSalaryMin"
								placeholder="np. 1000 zł"
								descriptionClass={styles.customDescription}
							/>
							<p>Do:</p>
							<Input
								type="text"
								id="salaryMax"
								name="expectedSalaryMax"
								placeholder="np. 10000 zł"
								descriptionClass={styles.customDescription}
							/>
						</div>
					</fieldset>

					<fieldset>
						<legend>
							Zgoda na odbycie bezpłatnych praktyk/stażu na początek
						</legend>
						<label>
							<input type="radio" name="canTakeApprenticeship" value="true" />{' '}
							Tak
						</label>
						<label>
							<input type="radio" name="canTakeApprenticeship" value="false" />{' '}
							Nie
						</label>
					</fieldset>

					<div className={styles.expMonths}>
						<Input
							type="number"
							id="monthsOfCommercialExp"
							name="monthsOfCommercialExp"
							min="0"
							placeholder="0 miesięcy"
							description="Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu"
							descriptionClass={styles.customDescription}
						/>
					</div>

					<div className={styles.actions}>
						<Button color={'#0A0A0A'} onClick={onClose}>
							Anuluj
						</Button>
						<Button>Pokaż wyniki</Button>
					</div>
				</form>
			</dialog>
		</div>
	);
};

export default FilterDialog;
