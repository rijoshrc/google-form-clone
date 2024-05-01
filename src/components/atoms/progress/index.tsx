import { twMerge } from "tailwind-merge";
import "./style.css";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  classNames?: {
    container?: string;
    track?: string;
  };
  progress: number;
  processing?: boolean;
  loading?: boolean;
}

// show animation if the percetage is zero
// indicate that the background analysis is going on
const Progress: React.FC<ProgressProps> = ({
  classNames,
  progress,
  processing,
  loading,
}) => {
  if (processing)
    return (
      <div
        className={twMerge(
          "bg-secondary rounded-full h-3 overflow-hidden",
          classNames?.container
        )}
      >
        <div
          className={twMerge(
            "progress h-full bg-accent left-right rounded-t-full rounded-b-full",
            classNames?.track
          )}
        ></div>
      </div>
    );
  return (
    <div
      className={twMerge(
        "bg-secondary rounded-full h-3 w-full",
        classNames?.container
      )}
    >
      <div
        className={twMerge(
          "bg-accent h-3 rounded-t-full rounded-b-full ",
          classNames?.track,
          `${loading && " shim-green relative"}`
        )}
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default Progress;
