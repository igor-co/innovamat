import styles from './Button.module.scss';

export const Button = ({
  classNames = '',
  isActive = false,
  isDisabled = false,
  isFullWidth = false,
  label,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${styles.button} ${isFullWidth ? styles.isFullWidth : ''} ${
        isActive ? styles.isActive : ''
      } ${classNames}`}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
};
