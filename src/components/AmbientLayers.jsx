import './AmbientLayers.css';

// Capas de ambiente "hacker": scanlines fijas + barrido violeta. Puramente decorativas.
export default function AmbientLayers() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <div className="sweep-wrap" aria-hidden="true">
        <div className="sweep" />
      </div>
    </>
  );
}
