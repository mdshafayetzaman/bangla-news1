import Image from 'next/image';
import React, { memo } from 'react';

const NewsCard = memo(({ news }: { news: any }) => {
  return (
    <div>
      <Image className='pb-5'
        src={news.imageUrl}
        alt={news.title}
        width={400}
        height={225}
      />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
});

export default NewsCard;
