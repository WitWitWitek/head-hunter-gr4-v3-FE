import styles from './ContainerColumnFlex.module.scss';
import { ReactNode } from 'react';
interface ContainerColumnFlexProps {
	children: ReactNode;
}
const ContainerColumnFlex: React.FC<ContainerColumnFlexProps> = ({
	children,
}) => {
	return <div className={styles.container}>{children}</div>;
};

export default ContainerColumnFlex;
