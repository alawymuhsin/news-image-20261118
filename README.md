# World News — Wednesday 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/alawymuhsin/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/alawymuhsin/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One image that sums up the world's news of **Wednesday 18 November 2026**,
built for [make.fun's news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118).

## The picture

`entry.png` (1024 × 1024) is a front page: the date in the masthead, one
lead story, six featured cards, a continents band, and 23 more stories in
brief — **30 stories in all, from six continents**:

**Lead — Middle East.** Iran strikes Bahrain and Kuwait: Tehran fires
drones at US bases after the US strike on Qeshm Island; a UAE ship is hit in
the strait and one sailor is missing.

**Featured cards.** Kerch Bridge partly collapses (Europe/Ukraine); Xi hosts
Putin in Shenzhen, greeting Trump at APEC a day before three-way talks
(Asia); Peltola wins Alaska, giving Democrats a 56–44 US Senate majority
(Americas); the Ebola outbreak doubles in DR Congo — 11,000+ cases, 5,400
deaths (Africa); Cyclone Xavier, a Category 5 storm, hits the Northern Cook
Islands (Pacific); COP31 talks deadlock over finance and fossil fuels in
Antalya (Climate).

**In brief (23).** US loses its measles-free status; Trump strikes a trade
note in Manila; William and Kate in Mumbai on the final day of a three-day
India visit; Lee tours Manila and Shenzhen; Cyclone Akvan builds in the Bay
of Bengal; stocks slide worldwide; Kenya's Ebola countdown; Xi pitches AI
and free trade; Kyiv warns on peace talks; Shenzhen trade jumps 41%; cold
threatens Gaza camps; COP31 farm talks collapse; England take the ODI
series; OpenAI launches GPT-6.2; Microsoft's seven MAI models; Nvidia halts
Hopper chip shipments to China; the EU opens a Sanctions Office; the first
star merger in Andromeda is confirmed; a global chemicals update, the first
since 2012; Bangladesh edge Thailand; France's race heats up; Argentina hit
seven in a friendly; Morocco reach fifth in the FIFA rankings.

Every story is one reported on 18 November 2026, checked against that day's
news coverage (Reuters, AP, AFP and others). The date is named in the
masthead and again in the footer, so the picture cannot be read as any other
day's news. The continents band counts the stories per region
(Africa 3, Asia 8, Europe 6, Americas 6, Middle East 2, Pacific 2, World 3),
so the breadth of the day is visible at a glance.

## How it is made

The picture was drawn as a clean HTML layout (flat icons, short labels, no
generated text) and rendered to PNG at exactly 1024 × 1024, so every word
stays crisp and legible. `main.ts` (Node 22, standard library only, no
network) copies `entry.png` to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Verification

The program does not draw anything — it delivers the finished picture
byte-for-byte. Checked locally with Node 24 (the kit targets Node 22):

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png entry.png
```

All three hashes are identical — two runs produce byte-identical output,
and that output is byte-identical to the picture in this repository:

```
9ec8e25822d703504a31c5d2efa75f03f1d557a7f478e5ff5744f8d271ba4a2c
```

`entry.png` is 268,225 bytes, 1024 × 1024. The copy is checked inside
`main.ts` itself: it refuses to exit cleanly unless the written file
matches the source in both length and sha256.

## License

MIT — see [LICENSE](LICENSE).
