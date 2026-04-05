<div align="center">

![Banner](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/generated-banners/c2f52b2e-f5c4-43b8-937a-847c22ae26a4/final-banner.gif)

![Release Date](https://img.shields.io/github/created-at/D4rk-Pho3nix/my-app?style=flat-square&label=released&color=green)
![Last Commit](https://img.shields.io/github/last-commit/D4rk-Pho3nix/my-app?style=flat-square&label=last%20commit&color=purple)
![License](https://img.shields.io/github/license/D4rk-Pho3nix/my-app?style=flat-square&color=orange)
[![Contact](https://img.shields.io/badge/Contact-Dev-cyan?style=flat-square)](mailto:manish.srmist23@gmail.com)

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
| [📖 Usage](#-usage) | Detailed usage instructions |
| [🎗️ Maintainers](#-maintainers) | Project maintainers |
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
- **Dynamic Sorting**: Instantly sort search results by professional experience or consultation fees.
- **Deterministic Avatar System**: Generates consistent background colors and initials based on doctor names.
- **Responsive & Dark Mode**: Mobile-first styling implementation with Tailwind CSS.
- **Optimized Performance**: Implements React Suspense for granular loading states and Next.js App Router.

## 🍀 Architecture

```text
my-app/ 
├── components/          # Reusable UI components including deterministic avatar utilities
│   └── InitialsAvatar.tsx
├── app/                 # Next.js App Router core containing layouts, root page, and styles
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── tailwind.config.ts   # Tailoring utility classes and theme variables
├── next.config.js       # Framework routing and build configurations
└── README.md            # Project documentation and architectural overview
```

## 🚀 Quick Start

> [!IMPORTANT]
> Ensure Docker is running if you intend to use the containerized build, or have Node.js 18+ installed for local development to support Next.js 15 routing features.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js / npm | >= 18.x | Required for local Next.js environment |
| Bun | Latest | Alternative optimized package manager |
| Docker | Latest | Required for containerized execution |

> [!WARNING]
> Ensure port 3000 is available on your machine before running the application to avoid binding conflicts.

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

> [!NOTE] 
> For production environments, it is recommended to run a static build (`npm run build`) before starting the production server.

> [!TIP] 
> Leverage `bun install` and `bun dev` for significantly reduced dependency resolution and server startup times.

## 📖 Usage

Users can access the platform to search, filter, and sort through medical practitioners seamlessly. The UI ensures consistent avatar generation natively capturing the application state, making link sharing with embedded filter configurations completely reliable.

**Programmatic Avatar Generation**
```tsx
import { InitialsAvatar } from '@/components/ui/avatar-utils';

// Example usage within a medical professional list item
<InitialsAvatar 
  name="Dr. Munaf Inamdar" 
  size={64} 
/>
```

**Deep Linking and State Sharing**
```typescript
// Example URL state: Dentist search filtered for In-Clinic visits, sorted by consultation fees
http://localhost:3000/?specialties=Dentist&mode=In+Clinic&sort=fees
```

## 🎗️ Maintainers

<div align="left"> 
  <a href="https://github.com/D4rk-Pho3nix"> 
    <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/> 
  </a> 
</div>

## 🩷 Contributors

Thanks goes to these wonderful people <3 ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<div align="left"> 
  <table> 
    <tbody> 
      <tr> 
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/D4rk-Pho3nix">
            <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/><br />
            <sub><b>D4rk-Pho3nix</b></sub>
          </a><br />
          <a href="#" title="Code">💻</a>
        </td> 
      </tr> 
    </tbody> 
  </table> 
</div>

This project follows the all-contributors specification. Contributions of any kind welcome!

## 💖 Support

If this project helped you, consider buying me a coffee, any donation is appreciated and goes towards my caffeine addiction :p

<a href="https://buymeacoffee.com/d4rkpho3nix"> 
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem14OW1tanN3eHlyYmR4NW1sYmJkOTZmbmJxejdjZXB6MXY5cW12MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" width="80"> 
</a>

## 📄 License

```text
This project is licensed under the MIT License.
```

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/my-app&type=Date)](https://star-history.com/#D4rk-Pho3nix/my-app&Date)

</div>

<div align="center">

⬆ Back to Top

</div>