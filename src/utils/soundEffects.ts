// Web Audio API Sound Synthesizer & Soothing Ambient Music Generator
let audioCtx: AudioContext | null = null;
let soundEnabled = true; // SFX always ON by default as requested
let musicPlaying = false;
let ambientGainNode: GainNode | null = null;
let ambientInterval: NodeJS.Timeout | null = null;

export const isSoundEnabled = () => soundEnabled;
export const isMusicPlaying = () => musicPlaying;

const getAudioContext = (): AudioContext | null => {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

// --- SOOTHING AMBIENT MUSIC ENGINE ---
// Generates relaxing, warm, ambient chords (Cmaj9, Am9, Fmaj7, Gsus4) with soft low-pass filter
const CHORD_PROGRESSIONS = [
  [130.81, 196.00, 246.94, 293.66, 329.63], // Cmaj9 (C3, G3, B3, D4, E4)
  [110.00, 164.81, 220.00, 261.63, 329.63], // Am9 (A2, E3, A3, C4, E4)
  [87.31, 130.81, 174.61, 220.00, 261.63],  // Fmaj7 (F2, C3, F3, A3, C4)
  [98.00, 146.83, 196.00, 246.94, 293.66],  // Gsus4 (G2, D3, G3, B3, D4)
];

let chordStep = 0;

export const startSoothingMusic = () => {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (musicPlaying) return;
  musicPlaying = true;

  if (!ambientGainNode) {
    ambientGainNode = ctx.createGain();
    ambientGainNode.gain.setValueAtTime(0.045, ctx.currentTime); // Soft, gentle background volume
    ambientGainNode.connect(ctx.destination);
  } else {
    ambientGainNode.gain.cancelScheduledValues(ctx.currentTime);
    ambientGainNode.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 1.5);
  }

  const playWarmChord = () => {
    if (!musicPlaying || !ctx || !ambientGainNode) return;
    const chord = CHORD_PROGRESSIONS[chordStep % CHORD_PROGRESSIONS.length];
    chordStep++;

    const now = ctx.currentTime;
    const duration = 6.0;

    chord.forEach((freq, idx) => {
      try {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        // Warm sine / triangle blend
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Soft warmth filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650 + (idx * 80), now);
        filter.Q.setValueAtTime(1.2, now);

        // Smooth swell envelope
        oscGain.gain.setValueAtTime(0.0001, now);
        oscGain.gain.linearRampToValueAtTime(0.025 / chord.length, now + 1.8);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(ambientGainNode!);

        osc.start(now);
        osc.stop(now + duration);
      } catch {
        // Safe catch
      }
    });
  };

  playWarmChord();
  ambientInterval = setInterval(playWarmChord, 4800);
};

export const stopSoothingMusic = () => {
  const ctx = getAudioContext();
  musicPlaying = false;
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
  if (ctx && ambientGainNode) {
    ambientGainNode.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
  }
};

export const toggleSoothingMusic = (): boolean => {
  if (musicPlaying) {
    stopSoothingMusic();
    return false;
  } else {
    startSoothingMusic();
    return true;
  }
};

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playSuccessChime();
  }
  return soundEnabled;
};

// --- SFX (Always ON by default) ---

export const playClick = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(580, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch {
    // Graceful
  }
};

export const playSuccessChime = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    const playTone = (freq: number, start: number, duration: number) => {
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.05, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + duration);
    };

    playTone(523.25, now, 0.12);        // C5
    playTone(659.25, now + 0.08, 0.12); // E5
    playTone(783.99, now + 0.16, 0.20); // G5
  } catch {
    // Graceful
  }
};

export const playThud = () => {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch {
    // Graceful
  }
};
