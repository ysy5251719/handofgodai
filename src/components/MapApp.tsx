import React, { useState, useEffect } from 'react';
import { MapView } from './MapView';
import { LiveComments } from './LiveComments';
import { SharePoster } from './SharePoster';
import { WechatShareButton } from './WechatShareButton';

const MapApp: React.FC = () => {
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="relative w-full h-screen">
      <MapView />
      <LiveComments />
      <div className="absolute top-4 right-4 z-10">
        <WechatShareButton onClick={() => setShowShare(true)} />
      </div>
      {showShare && <SharePoster onClose={() => setShowShare(false)} />}
    </div>
  );
};

export default MapApp;
