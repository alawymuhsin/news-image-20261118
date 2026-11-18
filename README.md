# World News — Wednesday 18 November 2026

[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/alawymuhsin/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/alawymuhsin/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

One image that sums up the world's news of **Wednesday 18 November 2026**,
built for [make.fun's news-image-20261118 bounty](https://make.fun/bounty/news-image-20261118).

## The picture

`entry.png` (1024 × 1024) is a front page: the date in the masthead and six
stories from the day, across regions and fields:

1. **Middle East — Iran strikes Bahrain and Kuwait.** Tehran fires drones at
   US bases after the US strike on Qeshm Island.
2. **Europe — Kerch Bridge partly collapses.** Ukraine hits the bridge to
   Crimea again; a road span falls into the strait.
3. **Asia — Xi hosts Putin in Shenzhen.** The two leaders meet a day before
   three-way talks with Trump.
4. **Americas — Peltola wins Alaska.** Democrats take a 56–44 majority in
   the US Senate.
5. **Africa — Ebola outbreak doubles.** More than 11,000 cases and 5,400
   deaths in DR Congo, the UN says.
6. **Pacific — Cyclone Xavier hits.** A Category 5 storm strikes the
   Northern Cook Islands.

Every story is one reported on 18 November 2026, checked against that day's
news coverage (Reuters, AP, AFP and others). The date is named in the
masthead and again in the footer, so the picture cannot be read as any other
day's news.

## How it is made

The picture was drawn as a clean HTML layout (flat icons, short labels, no
generated text) and rendered to PNG at exactly 1024 × 1024, so every word
stays crisp and legible. `main.ts` (Node 22, standard library only, no
network) copies `entry.png` to the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
