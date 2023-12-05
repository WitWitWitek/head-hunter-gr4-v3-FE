import styles from './ProjectLink.module.scss';
import { BsPaperclip } from 'react-icons/bs';

interface Props {
	link: string;
}

const ProjectLink = (props: Props) => {
	return (
		<div className={styles.projectLink}>
			<a
				href={props.link}
				className={styles.projectUrl}
				title="link do projektu"
				target="_blank"
				rel="noopener noreferrer"
			>
				<BsPaperclip size={24} className={styles.clip} />
				{props.link}
			</a>
		</div>
	);
};

export default ProjectLink;
