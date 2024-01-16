type MenuLink = {
	to: string;
	label: string;
	exact?: boolean;
};

export const adminLinks: MenuLink[] = [
	{ to: '/admin', label: 'Panel', exact: true },
	{ to: '/admin/add-students', label: 'Dodaj kursantów' },
	{ to: '/admin/add-hr', label: 'Dodaj HR' },
];

export const studentLinks: MenuLink[] = [
	{ to: '/student', label: 'Panel', exact: true },
	{ to: '/student/edit-cv', label: 'Edytuj swoje CV' },
	{ to: '/student/view-cv', label: 'Zobacz swoje CV' },
];

export const hrLinks: MenuLink[] = [
	{ to: '/hr', label: 'Dostępni kursanci', exact: true },
	{ to: '/hr/to-talk', label: 'Do rozmowy' },
];
