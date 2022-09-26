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
      <div className="flex-col p-5">
        <h1
          className="text-5xl font-bold text-emerald-900"
        >
          Lisa Meyer
        </h1>
        <h2 className="text-2xl text-emerald-900 py-2">Full Stack Web Developer</h2>
        <h3 className="text-emerald-900">PERN Stack</h3>
      </div>
    </>
  );
};