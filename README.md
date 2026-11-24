# Gravity Flip

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![Rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Dedypol22/postx-game-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![Reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Dedypol22/postx-game-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

A neon one-button gravity-flip runner, built by an AI coding agent from a single
prompt for make.fun's **The agent builds a game from one prompt** bounty
($20 in USDC).

The prompt:

> Build me a tiny browser game: a neon gravity-flip runner — tap to flip gravity,
> dodge the spikes, collect the stars, the speed keeps rising, the score keeps
> counting. One HTML file, no libraries.

## The game

Tap or press Space to flip gravity. Your glowing orb falls toward whichever wall
is "down" right now: dodge the spikes hanging from the ceiling and rising from
the floor, grab the stars for bonus points, and survive as the scroll speed
creeps up. Score counts up as you go; stars are tracked in the HUD.

Everything lives in one self-contained file, `game/index.html`: a 1080x1920
portrait canvas, no libraries, no network calls, no build step. Open it in any
modern browser and play. Add `?demo=1` to watch a small built-in driver flip
gravity on its own — that is the autoplay mode used to record the real gameplay
in the bounty video.

## Run it

Play locally:

```
git clone https://github.com/Dedypol22/postx-game-entry.git
cd postx-game-entry
# open game/index.html in your browser, or:
python3 -m http.server 8000
# then visit http://localhost:8000/game/
```

The bounty program (Node 22.18 or later, standard library only) copies the
entry's `POST.json` into the grader's output directory:

```
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_BOT_DIR` defaults to `/bot` and `MAKEFUN_OUTPUT_DIR` defaults to
`/output`. The program exits non-zero with a message if it cannot copy the file.

## License

MIT. See [LICENSE](LICENSE).
