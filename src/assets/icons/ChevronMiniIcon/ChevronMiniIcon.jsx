import styles from '../Icons.module.scss';

export const ChevronMiniIcon = ({ isOpened = true }) => {
  return (
    <svg
      svg
      width='16'
      height='10'
      viewBox='0 0 16 10'
      fill='none'
      className={isOpened ? styles.opened : styles.closed}
    >
      <path
        d='M14.0975 9.37625L15.425 8.04125L8.00005 0.623748L0.575044 8.04875L1.90254 9.37625L8.00005 3.27875L14.0975 9.37625Z'
        fill='#A3B7B5'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
