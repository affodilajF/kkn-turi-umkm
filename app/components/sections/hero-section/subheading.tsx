import { Stars } from "../../assets/stars";

type PropsType = {
  text: string;
};

export function Subheading({ text }: PropsType) {
  return (
    <div className="rounded-full mb-6 max-w-fit ml-0 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-300)] p-0.5">
      <div className="bg-white dark:bg-dark-primary py-2 text-sm items-center gap-2 px-5 inline-flex dark:text-white/90 rounded-full">
        <Stars />
        <p>{text}</p>
      </div>
    </div>
  );
}
