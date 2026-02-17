export default function CardMedia({ thumbSrc, videoSrc, isPlaying, videoRef }) {
  return (
    <div className="absolute inset-0 bg-neutral-900">
      <img
        src={thumbSrc || 'https://via.placeholder.com/800x450/111/333'}
        alt="Thumbnail"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-60'
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
