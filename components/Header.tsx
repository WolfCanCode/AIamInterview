import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import BackButton from './BackButton';
import LogoIcon from './icons/LogoIcon';

export default function Header({
  onClickLogo,
  onBack,
}: {
  onClickLogo?: () => void;
  onBack?: () => void;
}) {
  const t = useTranslations('');
  return (
    <header className="mb-4 sm:mb-8 flex items-center relative w-full">
      <div className="flex items-center gap-2">
        {onBack && (
          <BackButton
            onClick={onBack}
            ariaLabel={t('back')}
            className="w-8 h-8"
          />
        )}

        <h1
          onClick={onClickLogo}
          className="group text-xl sm:text-2xl font-extrabold text-center bg-futuristic-bg relative inline-flex items-center gap-2 cursor-pointer select-none drop-shadow-lg"
        >
          {/* Animated Logo Icon */}
          <span className="inline-flex items-center justify-center text-xl sm:text-2xl group-hover:animate-spin-slow transition-transform duration-700">
            <LogoIcon className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-lg" />
          </span>
          {/* Animated Gradient Text */}
          {/* <span className="text-2xl text-cyan-300 animate-shimmer font-extrabold relative drop-shadow-md">
            {t('app_title')}
          </span> */}
          {/* Enhanced Underline Animation */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 group-hover:w-4/5 bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-400 rounded-full transition-all duration-700 animate-border-grow shadow-lg"></span>
        </h1>
      </div>

      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
