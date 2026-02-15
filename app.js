import { UIController } from './modules/ui-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = new UIController();

    // Add simple random movement to meters for visual feedback 
    // real analysis would require AnalyserNode connection in a loop
    setInterval(() => {
        if (app.audioEngine.isPlaying) {
            ['vocal', 'karaoke'].forEach(type => {
                const meter = document.getElementById(`meter-${type}`);
                const track = app.audioEngine.tracks[type];
                if (!track.isMuted) {
                    // Mock visualization based on volume + random variance
                    const vol = track.volume;
                    const variance = Math.random() * 20;
                    const width = (vol * 80) + variance;
                    meter.style.width = `${Math.min(100, width)}%`;
                } else {
                    meter.style.width = '0%';
                }
            });
        }
    }, 100);
});
