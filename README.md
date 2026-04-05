<div align="center">

![Banner Placeholder](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/generated-banners/66ef34fb-937f-4165-9444-5e6fe532ddf5/final-banner.gif)

![Release Date](https://img.shields.io/github/created-at/D4rk-Pho3nix/my-app?style=flat-square&label=released&color=green)
![Last Commit](https://img.shields.io/github/last-commit/D4rk-Pho3nix/my-app?style=flat-square&label=last%20commit&color=purple)
![License](https://img.shields.io/github/license/D4rk-Pho3nix/my-app?style=flat-square&color=orange)
[![Contact](https://img.shields.io/badge/Contact-Dev-cyan?style=flat-square)](mailto:manish.srmist23@gmail.com)

**made with 🩷 by [D4rk-Pho3nix](https://github.com/D4rk-Pho3nix)**
*(if you like my work, consider ⭐ starring the repo!)*

</div>

## 💡 Why this exists

> [!TIP]
> A modern healthcare professional discovery platform emphasizing shareable search states through a URL-as-Source-of-Truth architecture.

**Background:** The project is built on Next.js 15 and React 19. Its core philosophy revolves around Deep Linking, treating the browser's URL as the primary source of truth for the application state so that filter combinations, queries, and sorting preferences are captured seamlessly.

## ✨ Features

- **URL-Synced State Management:** Search filters and sorting options synchronize with URL query parameters for persistent, shareable states using next/navigation hooks.
- **Real-time Discovery:** High-performance autocomplete search for doctors and medical specialties with live suggestions.
- **Advanced Filtering:** Multi-criteria filtering capability via sidebar controls, managing specialties and consultation modes.
- **Dynamic Sorting:** Instantly sort search results by professional experience or consultation fees.
- **Deterministic Avatar System:** Generates consistent background colors and initials based on doctor names through a deterministic hashing utility.
- **Responsive & Dark Mode:** Mobile-first styling implementation with Tailwind CSS supporting system-based and manual dark mode configurations.
- **Optimized Performance:** Implements React Suspense for granular loading states and Next.js App Router for streamlined server-side rendering.

## 🍀 Architecture

```text
my-app/
├── app/           # Next.js App Router (pages, layouts, and API)
├── components/    # UI components and feature-specific logic
│   ├── ui/        # Reusable atomic design components
├── constants/     # Static data and configuration constants
├── hooks/         # Custom React hooks for state and URL management
├── public/        # Static assets and images
├── styles/        # Global CSS and Tailwind configuration
├── types/         # TypeScript interfaces and type definitions
└── utils/         # Helper functions and hashing utilities
```

## 🚀 Quick Start

> [!IMPORTANT]
> Ensure Docker is installed if you intend to run the containerized setup. Node.js or Bun is required for local development.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js     | 18+     | Required for npm |
| Bun         | Latest  | Alternative runtime/package manager |
| Docker      | Latest  | Containerization support |
| Next.js     | 15      | Core framework |
| React       | 19      | UI library |

> [!WARNING]
> This project utilizes modern Next.js 15 and React 19 features. Ensure your tooling and environment are properly updated to avoid compatibility issues.

### Clone & Setup

```bash
git clone https://github.com/D4rk-Pho3nix/my-app.git
cd my-app
```

Install
```bash
npm install
# or
bun install
```

Build
```bash
docker build -t my-app .
```

Run
```bash
npm run dev
# or
bun dev
# or
docker run -p 3000:3000 my-app
```

> [!NOTE] 
> Next.js hot module replacement is active by default in dev environments.

## 🤖 Usage

Users can access the platform to search, filter, and sort through medical practitioners. The UI ensures consistent avatar generation and enables link sharing with embedded filter configurations natively capturing the application state.

### Programmatic Avatar Generation

```tsx
import { InitialsAvatar } from '@/components/ui/avatar-utils';

// Example usage in a list item
<InitialsAvatar 
  name="Dr. Munaf Inamdar" 
  size={64} 
/>
```

### Deep Linking and State Sharing

```javascript
// Example: Dentist search filtered for In-Clinic visits, sorted by fees
http://localhost:3000/?specialties=Dentist&mode=In+Clinic&sort=fees
```

## 🤝 Contributing
Contributions are welcome! Please see CONTRIBUTING.md for guidelines.

Quick contribution flow:

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit with conventional commits
git commit -m "feat: add amazing feature"

# Push and create PR
git push origin feature/amazing-feature
```
> [!NOTE]
> All PRs must pass CI checks before merging.

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