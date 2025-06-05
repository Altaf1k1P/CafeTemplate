import React, { useEffect, useState } from 'react';

const ReelsLoader = ({ reels }) => {
  const [loading, setLoading] = useState(true);

  // Load Instagram embed script once on mount
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        // After script loads, process embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
          setLoading(false); // mark loading false only after processing
        }
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded, process embeds again on mount
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        setLoading(false);
      }
    }
  }, []);

  // Re-process embeds whenever reels change and loading is false
  useEffect(() => {
    if (!loading && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [reels, loading]);

  // Show skeleton loading until embeds are processed
  if (loading) {
    return (
      <div className="flex gap-6 justify-center flex-wrap px-6 overflow-x-auto scrollbar-hide">
        {Array(3).fill(0).map((_, idx) => (
          <div
            key={idx}
            className="w-[320px] h-[420px] bg-gray-700 animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-6 justify-center flex-wrap px-6 overflow-x-auto scrollbar-hide">
      {reels.map((item, idx) => (
        <div key={idx} className="w-[320px]">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={item.src}
            data-instgrm-version="14"
            style={{ width: '100%', minWidth: '320px', margin: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ReelsLoader;
