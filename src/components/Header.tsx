import profile from '../data/lisa_profile.jpg';
import SocialIcons from './SocialIcons';

interface Props {
  name: string;
  title?: string;
}

function Avatar({name}: Props) {
  return (
    <img src={profile} alt="Lisa Meyer" className="h-40 rounded-full" />
  );
}

export default function Header({name, title}: Props) {
  return (
    <>
      <Avatar name={name} />
      <div className="flex-col p-5 text-emerald-900 dark:text-neutral-200">
        <h1 className="text-5xl font-bold">
          {name}
        </h1>
        <h2 className="text-2xl py-2">{title}</h2>
        <SocialIcons />
      </div>
    </>
  );
};