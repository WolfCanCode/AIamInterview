import LogoIcon from './icons/LogoIcon';

export default function SplashScreen({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#101624] transition-opacity duration-500">
      <LogoIcon width={96} height={96} className="mb-6 drop-shadow-2xl" />
      <h1 className="text-3xl font-extrabold text-cyan-300 tracking-wide mb-2">
        Interview Trainer
      </h1>
      <span className="text-base text-gray-400">Sharpen your skills</span>
    </div>
  );
}
