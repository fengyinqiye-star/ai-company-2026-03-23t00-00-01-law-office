'use client';

type ShareButtonsProps = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">シェア:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-navy hover:text-white transition-colors"
        aria-label="Xでシェア"
      >
        <span className="text-sm font-bold">X</span>
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:bg-[#06C755] hover:text-white transition-colors"
        aria-label="LINEでシェア"
      >
        <span className="text-xs font-bold">LINE</span>
      </a>
    </div>
  );
}
