Vocal Mixer & Audio Editor

A modular, browser-based audio workstation designed for multi-track management, precise vocal trimming, and real-time waveform visualization. This project focuses on high-performance audio state management and a clean, intuitive user interface.

🚀 Overview

This application provides a streamlined environment for mixing and editing vocal tracks. Unlike basic audio players, it utilizes a custom-built Audio Engine to handle track previews, non-destructive trimming, and synchronized playback without overlapping audio issues.

✨ Key Features

1. Dynamic Waveform Visualization
Canvas Rendering: Decodes audio files on load to generate high-fidelity amplitude bars.

Visual Feedback: Real-time updates to the waveform when trimming, highlighting the active region while graying out cropped areas.

2. Precision Trim Controls
3. 
Dual Sliders: Independent "Start Point" and "End Point" controls for frame-accurate audio selection.

Non-Destructive Editing: Logic-based trimming that updates the engine's playback markers without altering the original file data.

3. Advanced Audio Engine
4. 
Single-Track Previews: Dedicated "Play" buttons for each track to verify edits in isolation.

State Syncing: Intelligent playback management that automatically stops previous previews when a new one starts, ensuring no audio overlap.

Per-Track Transport: Individual Mute/Solo and volume management for complex mixing.

4. Modular Architecture
5. 
audio-engine.js: Handles the heavy lifting—Web Audio API context, buffering, and playback state.

ui-controller.js: Manages DOM interactions, slider updates, and canvas redraws.

style.css: A modern, dark-themed UI designed for focus and clarity.

🛠️ Technical Stack

Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)

Audio API: Web Audio API for low-latency processing.

Graphics: HTML5 Canvas for waveform rendering.

Environment: Developed and tested using a local Python/Node server environment.
