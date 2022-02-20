import styles from '../Icons.module.scss';

export const AmbientesIcon = ({ isActive = false }) => {
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
        d='M0.75 18.75H6.75V23.25H1.75C1.19772 23.25 0.75 22.8023 0.75 22.25V18.75Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.164 14.25H2.25C1.42157 14.25 0.75 14.9215 0.75 15.75V18.75H18.116'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.75 18.75H12.75V22.25C12.75 22.8023 12.3023 23.25 11.75 23.25H6.75V18.75Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.75 0.749969H5.75C6.30228 0.749969 6.75 1.19768 6.75 1.74997V5.24997H0.75V1.74997C0.75 1.19768 1.19772 0.749969 1.75 0.749969Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.75 0.749969H17.75C18.3023 0.749969 18.75 1.19768 18.75 1.74997V5.24997H12.75V1.74997C12.75 1.19768 13.1977 0.749969 13.75 0.749969Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.75 9.74997H12.75V14.25H6.75V9.74997Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.7145 7.37024C15.5434 6.55966 16.0619 5.7639 16.8725 5.59287L18.3402 5.28318C19.1507 5.11214 19.9465 5.63059 20.1175 6.44117L23.2171 21.1307C23.3881 21.9413 22.8697 22.737 22.0591 22.9081L20.5914 23.2178C19.7809 23.3888 18.9851 22.8704 18.8141 22.0598L15.7145 7.37024Z'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.75 5.24997H0.75V8.24997C0.75 9.0784 1.42157 9.74997 2.25 9.74997H16.215'
        stroke-width='1.5'
        stroke-linecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
