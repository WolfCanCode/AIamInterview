import React, { useEffect, useState } from 'react';

function isIos() {
  return (
    /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
    // @ts-expect-error: 'standalone' is non-standard, only on iOS Safari
    !window.navigator.standalone
  );
}

function isInStandaloneMode() {
  // iOS
  return (
    // @ts-expect-error: 'standalone' is non-standard, only on iOS Safari
    window.navigator.standalone === true ||
    // Android
    window.matchMedia('(display-mode: standalone)').matches
  );
}

export default function AddToHomeScreenPrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && isIos() && !isInStandaloneMode()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 text-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-2 backdrop-blur-md">
      <span className="text-lg">🌟</span>
      <span>
        Để trải nghiệm tốt nhất, hãy <b>thêm ứng dụng vào màn hình chính</b>.
        <br />
        Nhấn{' '}
        <span className="inline-block px-1 py-0.5 bg-white/10 rounded">
          Chia sẻ
        </span>{' '}
        <span className="inline-block">
          (<b>Share</b>)
        </span>{' '}
        rồi chọn <b>Thêm vào MH chính</b> (<b>Add to Home Screen</b>).
      </span>
      <button
        className="ml-3 px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition"
        onClick={() => setVisible(false)}
        aria-label="Đóng"
      >
        ✕
      </button>
    </div>
  );
}
