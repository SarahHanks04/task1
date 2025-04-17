type ProgressBarProps = {
  label: string;
  percentage: number;
};

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-primary uppercase">
          {label}
        </span>
      </div>
      <div className="relative w-full">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-secondary h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span
          className="absolute text-xs"
          style={{
            right: `${100 - percentage}%`,
            top: "100%",
            transform: "translateY(4px)",
          }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}
