import {
	IStudentData,
	ExpectedContractType,
	ExpectedTypeWork,
} from './src/types/IStudentData';

export const dummyStudent: IStudentData = {
	id: '67890',
	email: 'tester@example.com',
	firstName: 'Tester',
	lastName: 'Testowy',
	tel: '987-654-321',
	bio: 'Zaangażowany student informatyki z pasją do tworzenia innowacyjnych aplikacji webowych... w wolnej chwili pije kawe przed telewizorem i gra w gry, bo ciężko teraz o pracę...',
	bonusProjectUrls: ['https://testproject1.com', 'https://testproject2.com'],
	canTakeApprenticeship: false,
	courseCompletion: 5,
	courseEngagment: 5,
	courses:
		'Dolcelatte bocconcini stilton. Squirty cheese croque monsieur fromage frais cottage cheese edam edam fromage frais blue castello. The big cheese cheeseburger cow halloumi macaroni cheese fromage babybel queso. Emmental cheesy grin cheese strings airedale melted cheese emmental cow bocconcini. Brie cow brie fromage cheesecake hard cheese cow cheese triangles. Stilton boursin cheddar gouda danish fontina cauliflower cheese hard cheese pepper jack. Feta cheese triangles swiss taleggio pecorino parmesan rubber cheese ricotta. Halloumi babybel goat cow camembert de normandie cheesecake. Cow brie cheese slices.',
	education: 'Uniwersytet Jagielloński, Informatyka',
	expectedContractType: ExpectedContractType.UoP,
	expectedSalary: '7000',
	expectedTypeWork: ExpectedTypeWork.REMOTE,
	githubUsername: 'testertech',
	monthsOfCommercialExp: 12,
	portfolioUrls: ['https://myportfolio1.com', 'https://myportfolio2.com'],
	projectDegree: 3,
	projectUrls: ['https://myproject1.com', 'https://myproject2.com'],
	targetWorkCity: 'Kraków',
	teamProjectDegree: 4,
	workExperience:
		'Dolcelatte bocconcini stilton. Squirty cheese croque monsieur fromage frais cottage cheese edam edam fromage frais blue castello. The big cheese cheeseburger cow halloumi macaroni cheese fromage babybel queso. Emmental cheesy grin cheese strings airedale melted cheese emmental cow bocconcini. Brie cow brie fromage cheesecake hard cheese cow cheese triangles. Stilton boursin cheddar gouda danish fontina cauliflower cheese hard cheese pepper jack. Feta cheese triangles swiss taleggio pecorino parmesan rubber cheese ricotta. Halloumi babybel goat cow camembert de normandie cheesecake.',
};
