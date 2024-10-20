
type TTraitListProps = {
  traitList: string[];
};

export default function ComTraitList({
  traitList,
}: TTraitListProps) {
  const traits = traitList.map((trait) => {
    return (
      <li key={trait}>
        <p>{trait}</p>
      </li>
    );
  });

  return (
    <ul>
      {traits}
    </ul>
  );
}
