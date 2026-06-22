
import styles from "./LoadingSpinner.module.css"; // 👈 Import the CSS Module

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}

export default Spinner;
