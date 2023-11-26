import spinner from './Spinner.module.scss';
export const Spinner = () => {
	return (
		<div className={spinner.spinner}>
			<span className={spinner.spinner__loader}></span>
		</div>
	);
};
