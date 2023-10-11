interface Props {
  value: string;
}

export function Title({ value }: Props) {
  return <h3 className="text-3xl font-bold">{value}</h3>;
}
