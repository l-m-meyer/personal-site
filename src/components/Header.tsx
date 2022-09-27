import profile from './lisa_profile.jpg';

interface Props {
  name: string;
  title?: string;
  stack?: string;
}

function Avatar({name}: Props) {
  return (
    <img src={profile} alt="Lisa Meyer" className="h-40 rounded-full" />
  );
}

export default function Header({name, title, stack}: Props) {
  return (
    <>
      <Avatar name={name} />
      <div className="flex-col p-5 text-emerald-900 dark:text-neutral-200">
        <h1
          className="text-5xl font-bold "
        >
          {name}
        </h1>
        <h2 className="text-2xl py-2">{title}</h2>
        <h3>{stack} Stack</h3>
      </div>
    </>
  );
};