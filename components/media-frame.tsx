type MediaFrameProps = {
  src?: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  ratio?: "wide" | "cinematic" | "portrait" | "square";
  label?: string;
  autoplay?: boolean;
  priority?: boolean;
  className?: string;
};

export function MediaFrame({
  src,
  alt,
  kind = "image",
  poster,
  ratio = "wide",
  label,
  autoplay = false,
  priority = false,
  className = "",
}: MediaFrameProps) {
  const classes = ["media-frame", `media-frame--${ratio}`, className]
    .filter(Boolean)
    .join(" ");

  if (!src) {
    return (
      <div className={`${classes} media-frame--placeholder`} role="img" aria-label={alt}>
        <span className="media-frame-label">{label ?? alt}</span>
      </div>
    );
  }

  return (
    <figure className={classes}>
      {kind === "video" ? (
        <video
          className="media-frame-media"
          poster={poster}
          autoPlay={autoplay}
          muted={autoplay}
          loop={autoplay}
          playsInline
          controls={!autoplay}
          aria-label={alt}
        >
          <source src={src} />
        </video>
      ) : (
        <img
          className="media-frame-media"
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      )}
      {label ? <figcaption className="media-frame-label">{label}</figcaption> : null}
    </figure>
  );
}
