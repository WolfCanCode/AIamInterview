import React from 'react';
import IconPreviewGrid from '@/components/icons/IconPreviewGrid';

export default function IconPreviewPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-12">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8">
        AI am Interview Icon Preview
      </h1>
      <IconPreviewGrid />
    </div>
  );
}
