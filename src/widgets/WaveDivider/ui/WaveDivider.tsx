import styles from "./WaveDivider.module.css";

interface WaveDividerProps {
  fill?: string;
  flip?: boolean;
}

export function WaveDivider({
  fill = "#ffffff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div className={styles.wave}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {flip ? (
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,80 L0,80 Z" fill={fill} />
        ) : (
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={fill} />
        )}
      </svg>
    </div>
  );
}
