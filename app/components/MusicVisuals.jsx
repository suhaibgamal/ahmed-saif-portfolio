import { AudioWaveform, Disc3 } from "lucide-react";

const waveformBars = Array.from({ length: 40 }, (_, index) => {
  const level = ((index * 9 + 4) % 12) + 2;
  return { id: index, level };
});

export function Waveform({ dense = false }) {
  return (
    <div className={dense ? "waveform waveform--dense" : "waveform"} aria-hidden="true">
      {waveformBars.map((bar) => (
        <span
          key={bar.id}
          style={{ "--bar-height": `${12 + bar.level * 3}px` }}
        />
      ))}
    </div>
  );
}

export function SonicSeal({ label }) {
  return (
    <div className="sonic-seal" aria-label={label}>
      <span className="sonic-seal__ring" aria-hidden="true" />
      <span className="sonic-seal__ring sonic-seal__ring--two" aria-hidden="true" />
      <Disc3 aria-hidden="true" size={82} strokeWidth={1.05} />
      <AudioWaveform aria-hidden="true" size={30} strokeWidth={1.4} />
    </div>
  );
}

export function MeterStack({ channels }) {
  return (
    <div className="meter-stack" aria-hidden="true">
      {channels.map((channel, index) => (
        <div className="meter-channel" key={channel.label}>
          <span>{channel.label}</span>
          <div>
            {Array.from({ length: 9 }, (_, bar) => (
              <i
                key={bar}
                style={{
                  "--delay": `${(index + bar) * 48}ms`,
                  "--fill": `${32 + ((index * 5 + bar * 7) % 62)}%`
                }}
              />
            ))}
          </div>
          <strong>{channel.value}</strong>
        </div>
      ))}
    </div>
  );
}

export function StaffLines() {
  return (
    <div className="staff-lines" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
