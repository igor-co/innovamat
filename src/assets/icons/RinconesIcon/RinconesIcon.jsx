import styles from '../Icons.module.scss';

export const RinconesIcon = ({ isActive = false }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={isActive ? styles.navIconActive : styles.navIconDisabled}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.75 2.25003C0.75 1.4216 1.42157 0.750031 2.25 0.750031H21.75C22.5784 0.750031 23.25 1.4216 23.25 2.25003V21.75C23.25 22.5785 22.5784 23.25 21.75 23.25H2.25C1.42157 23.25 0.75 22.5785 0.75 21.75V2.25003Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.238 20.25C18.8948 20.25 20.238 18.9069 20.238 17.25C20.238 15.5932 18.8948 14.25 17.238 14.25C15.5811 14.25 14.238 15.5932 14.238 17.25C14.238 18.9069 15.5811 20.25 17.238 20.25Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 20.25L6.75 14.25L9.75 20.25H3.75V20.25Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 4.50003H9.75V10.5H3.75V4.50003Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.267 3.99204L18.134 6.28104H19.821C19.9939 6.27592 20.1518 6.37882 20.2168 6.53908C20.2819 6.69933 20.2405 6.88316 20.113 7.00004L18.648 8.02404L19.46 9.88804C19.5328 10.0632 19.4858 10.2652 19.3432 10.3902C19.2005 10.5152 18.994 10.5352 18.83 10.44L16.869 9.34004L14.908 10.44C14.744 10.5352 14.5375 10.5152 14.3948 10.3902C14.2522 10.2652 14.2052 10.0632 14.278 9.88804L15.09 8.02404L13.625 7.00004C13.4942 6.88432 13.4503 6.69884 13.5154 6.53678C13.5805 6.37472 13.7405 6.27113 13.915 6.27804H15.6L16.468 3.98904C16.5449 3.83886 16.6997 3.74464 16.8684 3.74527C17.0372 3.74591 17.1912 3.84129 17.267 3.99204Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
