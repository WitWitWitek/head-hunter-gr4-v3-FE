import styles from './CenterContainer.module.scss';
interface ContainerProps {
	children: React.ReactNode;
}
const CenterContent = ({ children }: ContainerProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default CenterContent;
