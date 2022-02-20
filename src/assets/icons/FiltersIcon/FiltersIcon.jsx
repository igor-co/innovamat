import styles from '../Icons.module.scss';

export const FiltersIcon = ({ isActive }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={isActive ? styles.navIconActive : styles.navIconDisabled}
    >
      <path
        d='M12.735 15.75L18.735 15.75'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.23499 15.75L8.23499 15.75'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.485 18C9.24234 18 8.23499 16.9926 8.23499 15.75C8.23499 14.5074 9.24234 13.5 10.485 13.5C11.7276 13.5 12.735 14.5074 12.735 15.75C12.735 16.9926 11.7276 18 10.485 18Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.235 8.25L5.23499 8.25'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.485 10.5C17.7276 10.5 18.735 9.49264 18.735 8.25C18.735 7.00736 17.7276 6 16.485 6C15.2423 6 14.235 7.00736 14.235 8.25C14.235 8.84674 14.472 9.41903 14.894 9.84099C15.316 10.2629 15.8882 10.5 16.485 10.5V10.5Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
