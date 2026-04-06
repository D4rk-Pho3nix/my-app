<div align="center">

![Doctor Appointment Booking Banner](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/public/generated-banners/2ae4adcc-54ce-4a87-82ad-b04f378362af/final-banner.gif)

![Release Date](https://img.shields.io/github/created-at/D4rk-Pho3nix/my-app?style=flat-square&label=released&color=green)
![Last Commit](https://img.shields.io/github/last-commit/D4rk-Pho3nix/my-app?style=flat-square&label=last%20commit&color=purple)
[![Contact](https://img.shields.io/badge/Contact-Dev-cyan?style=flat-square)](mailto:danielsolomonofficialacc@gmail.com)

**made with 🩷 by [D4rk-Pho3nix](https://github.com/D4rk-Pho3nix)**
*(if you like my work, consider ⭐ starring the repo!)*

</div>
<a name="table-of-contents"></a>
## 📑 Table of Contents

| Section | Description |
|---------|-------------|
| [💡 Why this exists](#-why-this-exists) | Purpose and background of the project |
| [✨ Features](#-features) | Key capabilities and highlights |
| [🍀 Architecture](#-architecture) | Codebase structure and organization |
| [🚀 Quick Start](#-quick-start) | Get up and running in minutes |
| [🤖 Usage](#-usage) | Detailed usage instructions |
| [🩷 Contributors](#-contributors) | Project contributors |
| [💖 Support](#-support) | How to support the project |
| [📄 License](#-license) | Licensing information |

## 💡 Why this exists

> [!TIP]
> A modern healthcare professional discovery platform emphasizing shareable search states through a URL-as-Source-of-Truth architecture.

**Background:** Built on Next.js 15 and React 19, its core philosophy revolves around Deep Linking, treating the browser's URL as the primary source of truth for the application state so that filter combinations, queries, and sorting preferences are captured seamlessly.

## ✨ Features

- **URL-Synced State Management**: Search filters and sorting options synchronize with URL query parameters for persistent, shareable states.
- **Real-time Discovery**: High-performance autocomplete search for doctors and medical specialties with live suggestions.
- **Advanced Filtering**: Multi-criteria filtering capability via sidebar controls, managing specialties and consultation modes.
- **Deterministic Avatar System**: Generates consistent background colors and initials based on doctor names.
- **Responsive & Dark Mode**: Seamlessly adapts to various screen dimensions and user theme preferences using Tailwind CSS classes.

## 🍀 Architecture

```text
my-app/
├── components/          # Reusable UI components including deterministic avatar utilities
│   └── InitialsAvatar.tsx
├── app/                 # Next.js App Router core containing layouts, root page, and styles
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Quick Start

> [!IMPORTANT]
> Ensure your execution environment has access to port 3000 and that either Node.js, Bun, or Docker daemon is actively running before initialization.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | >= 18.x | Core runtime environment |
| Bun | Latest | Recommended for optimal dependency resolution |
| Docker | Latest | Required only for containerized deployment |

### Clone & Setup

```bash
git clone https://github.com/D4rk-Pho3nix/my-app.git
cd my-app
```

**Install**
```bash
npm install
# or
bun install
```

**Build**
```bash
docker build -t my-app .
```

**Run**
```bash
npm run dev
# or
bun dev
# or
docker run -p 3000:3000 my-app
```

> [!TIP] 
> Utilizing Bun instead of NPM will significantly reduce your cold start and module resolution times during development.

## 🤖 Usage

Users can search for healthcare professionals by entering symptoms or names into the autocomplete search bar, refining results using dynamic sidebar filters. The state of these filters is automatically synchronized with the browser's URL.

### Persistent Filter State Mapping

Because this application treats the URL as its Source of Truth, all active constraints, categorizations, and sorting configurations can be shared directly via links.

```http
http://localhost:3000/?mode=Video+Consult&specialties=Dentist&sort=experience
```

## 🩷 Contributors

Thanks goes to these wonderful people <3 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<div align="left"> <table> <tbody> <tr> <td align="center" valign="top" width="14.28%"><a href="https://github.com/D4rk-Pho3nix"><img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/><br /><sub><b>D4rk-Pho3nix</b></sub></a><br /><a href="#" title="Code">💻</a></td> </tr> </tbody> </table> </div>

This project follows the all-contributors specification. Contributions of any kind welcome!

## 💖 Support

If this project helped you, consider buying me a coffee, any donation is appreciated and goes towards my caffeine addiction :p

<a href="https://buymeacoffee.com/d4rkpho3nix"> <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem14OW1tanN3eHlyYmR4NW1sYmJkOTZmbmJxejdjZXB6MXY5cW12MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" width="80" alt="Buy Me A Coffee"> </a>

## 📄 License

```text
This repository does not contain an explicitly declared open-source license.
```

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/my-app&type=Date)](https://star-history.com/#D4rk-Pho3nix/my-app&Date)

</div>

<div align="center">

⬆ [Back to Toppppppppppppppppp](#table-of-contents)

</div>