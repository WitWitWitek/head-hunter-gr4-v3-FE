import styles from './CenterContainer.module.scss';
import { ContainerProps } from '../../../types/ui';
const CenterContent = ({ children }: ContainerProps) => (
	<div className={styles.container}>{children}</div>
);

export default CenterContent;
