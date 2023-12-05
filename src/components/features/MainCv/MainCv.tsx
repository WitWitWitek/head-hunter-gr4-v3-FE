import styles from './MainCv.module.scss';
import CvLabel from './CvLabel';
import CvDegrees from './CvDegrees';
import Expectations from './Expectations';
import CvLabelWithLinks from './CvLabelWithLinks';
import { IStudentData } from '../../../types/IStudentData';

interface IMainCv {
	student: IStudentData;
}
const MainCv = (props: IMainCv) => {
	const {
		courseCompletion,
		courseEngagment,
		projectDegree,
		teamProjectDegree,
		bonusProjectUrls,
		portfolioUrls,
		projectUrls,
		expectedContractType,
		targetWorkCity,
		expectedTypeWork,
		expectedSalary,
		canTakeApprenticeship,
		monthsOfCommercialExp,
		education,
		workExperience,
		courses,
	} = props.student;

	return (
		<section className={styles.details}>
			<CvLabel title="Oceny">
				<div className={styles.degree}>
					<CvDegrees title="Ocena przejścia kursu" degree={courseCompletion} />
					<CvDegrees
						title="Ocena aktywności i zaangażowania na kursie"
						degree={courseEngagment}
					/>
					<CvDegrees
						title="Ocena kodu w projekcie własnym"
						degree={projectDegree}
					/>
					<CvDegrees
						title="Ocena pracy w zespole w Scrum"
						degree={teamProjectDegree}
					/>
				</div>
			</CvLabel>
			<CvLabel title="Oczekiwanie w stosunku do zatrudnienia">
				<div className={styles.workExpectation}>
					<Expectations title="Preferowane miejsce pracy">
						{expectedTypeWork}
					</Expectations>
					<Expectations title="Docelowe miasto, gdzie chce pracować kandydat">
						{targetWorkCity}
					</Expectations>
					<Expectations title="Oczekiwany typ kontraktu">
						{expectedContractType}
					</Expectations>
					<Expectations title="Oczekiwane wynagrodzenie miesięczne netto">
						{expectedSalary} zł
					</Expectations>
					<Expectations title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
						{canTakeApprenticeship ? 'TAK' : 'NIE'}
					</Expectations>
					<Expectations title="Komercyjne doświadczenie w programowaniu">
						{monthsOfCommercialExp} miesięcy
					</Expectations>
				</div>
			</CvLabel>
			<CvLabel title="Edukacja">
				<p>{education}</p>
			</CvLabel>
			<CvLabel title="Kursy">
				<p>{courses}</p>
			</CvLabel>
			<CvLabel title="Doświadczenie zawodowe">
				<p>{workExperience}</p>
			</CvLabel>
			<CvLabelWithLinks title="Portfolio" urlList={portfolioUrls} />
			<CvLabelWithLinks
				title="Projekt w zespole Scrumowym"
				urlList={bonusProjectUrls}
			/>
			<CvLabelWithLinks title="Projekt na zaliczenie" urlList={projectUrls} />
		</section>
	);
};

export default MainCv;
