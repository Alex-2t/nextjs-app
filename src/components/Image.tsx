interface Props {
  src?: string;
  alt: string;
}

export const Image = ({ src, alt }: Props) => {
  // If I use native nextJS Image component - getting
  // Error: Invalid src prop (https://w7.pngwing.com/pngs/1023/88/png-transparent-zoom-social-media-meeting-logo-apps-social-media-icon-thumbnail.png) on `next/image`, hostname "w7.pngwing.com" is not configured under images in your `next.config.js`
  // have no time for configuring it so use just img tag
  return (
    <div className='w-[40px] h-[40px] min-w-[40px] min-h-[40px]'>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className='object-cover rounded-full' />
      ) : (
        <div className='w-full h-full bg-text-link rounded-full' />
      )}
    </div>
  );
};
