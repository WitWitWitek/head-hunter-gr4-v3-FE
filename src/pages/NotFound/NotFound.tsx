import notFound from './NotFound.module.scss';
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
