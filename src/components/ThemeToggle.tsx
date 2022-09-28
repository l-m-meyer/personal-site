import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface ThemeToggleProps {
  darkToggle: boolean;
  setDarkToggle: (value: boolean) => void;
}

export default function ThemeToggle({darkToggle, setDarkToggle}: ThemeToggleProps) {
  return(
    <button
        onClick={() => setDarkToggle(!darkToggle)}
        className="fixed top-5 right-5 bg-emerald-500 rounded-full p-2 w-20 flex justify-around"
        style={{ zIndex: 1 }}
      >
      <FontAwesomeIcon
        icon={solid('moon')}
        className={`${darkToggle ? 'text-emerald-100' : 'text-emerald-900'}`}
      />
      <FontAwesomeIcon
        icon={solid('sun')}
        className={`${darkToggle ? 'text-emerald-900' : 'text-emerald-100'}`}
      />
    </button>
  );
};