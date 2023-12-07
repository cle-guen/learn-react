interface Props {
  text: string;
  hasFinished?: boolean;
}

export function Title({ text, hasFinished }: Props) {
  return (
    <div className="flex items-center">
      <CheckIcon hasFinished={hasFinished} />
      <h1 className="text-black font-bold text-3xl uppercase my-2">{text}</h1>
    </div>
  );
}

interface ICheckIcon {
  hasFinished?: boolean;
}

function CheckIcon({ hasFinished }: ICheckIcon) {
  return <span className="mr-2 text-2xl">{hasFinished ? "🤟" : "❌"}</span>;
}
