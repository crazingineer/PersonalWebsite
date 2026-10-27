// Audio Controller: Real MP3 Background Music + Interactive Sound FX
let soundEnabled = true; // SFX always enabled by default
let bgAudio: HTMLAudioElement | null = null;
let isAudioPlaying = false;
let musicSubscribers: ((playing: boolean) => void)[] = [];

// Initialize background audio element
const getBackgroundAudio = (): HTMLAudioElement | null => {
  if (typeof window === 'undefined') return null;
  if (!bgAudio) {
    bgAudio = new Audio('./background-music.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.35; // Gentle, soothing volume

    bgAudio.addEventListener('play', () => {
      isAudioPlaying = true;
      notifySubscribers(true);
    });

    bgAudio.addEventListener('pause', () => {
      isAudioPlaying = false;
      notifySubscribers(false);
    });

    bgAudio.addEventListener('ended', () => {
      isAudioPlaying = false;
      notifySubscribers(false);
    });
  }
  return bgAudio;
};

const notifySubscribers = (playing: boolean) => {
  musicSubscribers.forEach((cb) => cb(playing));
};

export const subscribeMusicState = (callback: (playing: boolean) => void) => {
  musicSubscribers.push(callback);
  callback(isAudioPlaying);
  return () => {
    musicSubscribers = musicSubscribers.filter((cb) => cb !== callback);
  };
};

export const isMusicPlaying = () => isAudioPlaying;
export const isSoundEnabled = () => soundEnabled;

export const playBackgroundMusic = async (): Promise<boolean> => {
  const audio = getBackgroundAudio();
  if (!audio) return false;

  try {
    audio.volume = 0.35;
    await audio.play();
    isAudioPlaying = true;
    notifySubscribers(true);
    return true;
  } catch (err) {
    // Autoplay was prevented by browser policy (requires user interaction first)
    isAudioPlaying = false;
    notifySubscribers(false);
    return false;
  }
};

export const pauseBackgroundMusic = () => {
  const audio = getBackgroundAudio();
  if (audio) {
    audio.pause();
    isAudioPlaying = false;
    notifySubscribers(false);
  }
};

export const toggleBackgroundMusic = async (): Promise<boolean> => {
  const audio = getBackgroundAudio();
  if (!audio) return false;

  if (isAudioPlaying) {
    pauseBackgroundMusic();
    return false;
  } else {
    return await playBackgroundMusic();
  }
};

// --- INTERACTIVE SFX (Pure Web Audio API - Always ON) ---
let audioCtx: AudioContext | null = null;

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
