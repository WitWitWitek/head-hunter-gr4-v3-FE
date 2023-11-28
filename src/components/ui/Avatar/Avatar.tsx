import React from 'react';
import styles from './Avatar.module.scss';
import defaultAvatar from '../../../assets/images/defaultAvatar.png';

interface AvatarProps {
	type?: 'small' | 'large';
	githubUsername?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
	type = 'small',
	githubUsername,
}) => {
	const avatarClass =
		type === 'large' ? styles.img_avatar_large : styles.img_avatar_small;
	const imageUrl = githubUsername
		? `https://github.com/${githubUsername}.png`
		: defaultAvatar;

	return (
		<img
			className={avatarClass}
			src={imageUrl}
			alt={
				githubUsername ? 'Avatar zalogowanego użytkownika' : 'Domyślny avatar'
			}
		/>
	);
};
