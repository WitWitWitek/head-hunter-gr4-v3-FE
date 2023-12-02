import styles from './UserGreeting.module.scss';

const UserGreeting = ({ userName = 'randomUser' }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.greeting}>Witaj, {userName}!</h1>
		</div>
	);
};

export default UserGreeting;
