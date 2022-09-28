import profile from '../data/lisa_profile.jpg';
import SocialIcons from './SocialIcons';

interface Props {
  name?: string;
  title?: string;
  email?: string;
}

function Avatar({name}: Props) {
  return (
    <img src={profile} alt={name} className="h-40 rounded-full ml-2" />
  );
}

function Contact({email}: Props) {
  return (
    <h5
      className="mr-2 self-center fixed right-0 text-emerald-900 dark:text-neutral-200"
      style={{ writingMode: "vertical-rl" }}>
        {email}
    </h5>
  );
};

export default function Header({name, title, email}: Props) {
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
      <Contact email={email} />
    </>
  );
};