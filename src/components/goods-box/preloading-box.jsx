import React from 'react';
import ContentLoader from 'react-content-loader';

export function PreloadingBox() {
    return (
        <ContentLoader
            className="goods-box"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
                <circle cx="132" cy="120" r="115" />
                <rect x="0" y="260" rx="6" ry="6" width="280" height="24" />
                <rect x="6" y="310" rx="6" ry="6" width="268" height="72" />
                <rect x="0" y="416" rx="6" ry="6" width="90" height="26" />
                <rect x="128" y="408" rx="22" ry="22" width="150" height="44" />
        </ContentLoader>
    );
};
