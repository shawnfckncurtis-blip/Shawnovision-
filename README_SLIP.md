# Slip Event — Saint‑Roch Incident (Scripted)

This document inserts the Saint‑Roch system log into the cinematic Slip Event and defines the "Drop an incident seed" branch.

## Detection beat (Scene insert)
At the moment the Whey‑Slip begins to form, the node console flashes with a system log from the Saint‑Roch node. The message reads as a diegetic UI prompt and presents three choices.

Include the exact text from `assets/dialogue/saint_roch_log.md` as the on‑screen console message.

## Choice: Drop an incident seed (Choice 3)
Effect: Deliberately inject instability. Immediate, spectacular Slip amplification (strong visual effect + risk). Opens chaotic branch with identity‑shifts and access to Whey‑Slip Domain secrets; increases replay value but raises long‑term diplomatic collapse.

### Scene beats for Drop flow
- The Architect selects "Drop an incident seed." The console emits a sharp glyph pulse.
- Visual: the Slip-Vector lumen spikes; whey‑filaments tear outward; a particle burst of curd‑shards follows the vector.
- Sound: a wet crack followed by an accelerating choir and filtered static.
- Narrative: gameState.diplomaticCollapse += 25. gameState.chaoticBranch = true.
- Result: Shawn and Gemini are flung deeper into identity‑shift territory. New lore nodes (Whey‑Slip secrets) become available; diplomacy checks later are harder.

### Implementation notes
- On activation ramp the shader uniform `uIntensity` from 0 to 1.5 over 1.2s (ease: power2.out).
- Spawn a particle burst centered on the Slip‑Vector; particles carry glyph textures.
- Play an event SFX (whey_burst.wav) and modulate choir pad.
- Overlay an "Identity Shift" screen effect: dissolving glyphs, chromatic aberration, and randomized UV swirl.

## Developer actions
- The demo folder includes a minimal Three.js runner that exposes the Drop behavior on a button click.
- See `demo/` for runnable code and a shader implementation in `demo/shaders/slip.frag`.
