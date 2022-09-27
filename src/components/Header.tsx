import profile from './lisa_profile.jpg';

function Avatar() {
  return (
    <img src={profile} alt="Lisa Meyer" className="h-40 rounded-full" />
  );
}

export default function Header() {
  return (
    <>
      <Avatar />
      <div className="flex-col p-5 text-emerald-900 dark:text-neutral-200">
        <h1
          className="text-5xl font-bold "
        >
          Lisa Meyer
        </h1>
        <h2 className="text-2xl  py-2">Full Stack Web Developer</h2>
        <h3>PERN Stack</h3>
      </div>
    </>
  );
};