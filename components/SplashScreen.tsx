export default function SplashScreen({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#101624] transition-opacity duration-700 pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-10 w-10 sm:w-20 sm:h-20 text-gray-300 drop-shadow-lg"
          >
            <rect
              x="4"
              y="8"
              width="24"
              height="14"
              rx="3"
              className="fill-gray-800"
            />
            <rect
              x="7"
              y="11"
              width="18"
              height="8"
              rx="2"
              className="fill-gray-900"
            />
            <rect
              x="2"
              y="24"
              width="28"
              height="3"
              rx="1.5"
              className="fill-gray-800"
            />
            <circle
              cx="16"
              cy="15"
              r="2"
              className="fill-gray-400 animate-pulse"
            />
          </svg>
          <span className="text-3xl sm:text-5xl font-extrabold text-cyan-300 drop-shadow-lg animate-pulse">
            AI am Interview
          </span>
        </div>
      </div>
    </div>
  );
}
