export default function CardMedia({ thumbSrc, videoSrc, isPlaying, videoRef }) {
  return (
    <div className="absolute inset-0">
      <img
        src={
          `${thumbSrc}?w=1000&q=80&auto=format` ||
          'https://via.placeholder.com/800x450/111/333'
        }
        loading="lazy"
        alt="Thumbnail"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>
    </div>
  );
}
