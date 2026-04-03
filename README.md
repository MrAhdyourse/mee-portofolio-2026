# mee-portofolio-2026

Portofolio statis (Astro + Tailwind). **Sumber kode** di branch `main`. **`node_modules` dan `dist` tidak di-commit** — dependensi di-install lewat `npm ci` (lokal atau di GitHub Actions).

## Live site

Setelah GitHub Pages aktif: **https://mrahdyourse.github.io/mee-portofolio-2026/**

## Perintah lokal

| Perintah        | Keterangan              |
| --------------- | ----------------------- |
| `npm ci`        | Install dependensi      |
| `npm run dev`   | Server pengembangan     |
| `npm run build` | Build ke folder `dist/` |
| `npm run preview` | Preview build         |

## Push sumber ke GitHub (Windows)

Double-click atau jalankan di root proyek:

```bat
build-and-push.bat
```

Dengan pesan commit kustom:

```bat
build-and-push.bat "feat: tambah section proyek"
```

Skrip ini menjalankan `npm ci`, `npm run build`, lalu `git add` / `commit` / `push` ke `origin main`. Jika ada jejak `node_modules` di staging, skrip **berhenti dengan error**.

## GitHub Pages (sekali saja)

1. Repo: [MrAhdyourse/mee-portofolio-2026](https://github.com/MrAhdyourse/mee-portofolio-2026).
2. **Settings → Pages → Build and deployment**: pilih sumber **GitHub Actions** (bukan branch “Deploy from a branch” jika Anda pakai workflow bawaan repo ini).
3. Push ke `main` memicu workflow **Deploy to GitHub Pages**, yang mem-build artefak dan mempublikasikan situs.

Remote contoh:

```bash
git remote add origin https://github.com/MrAhdyourse/mee-portofolio-2026.git
```
