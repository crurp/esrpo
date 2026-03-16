# EchoSpark Logo - PNG Files

This directory contains the EchoSpark logo in PNG format at various sizes, all at maximum resolution.

## Available Sizes

| Size | File | Resolution | Use Case |
|------|------|------------|----------|
| 16px | `logo-16.png` | 16×16px | Favicon, small UI elements |
| 32px | `logo-32.png` | 32×32px | Footer, small displays |
| 40px | `logo-40.png` | 40×40px | Header navigation |
| 48px | `logo-48.png` | 48×48px | Card icons, medium displays |
| 64px | `logo-64.png` | 64×64px | Featured displays |
| 128px | `logo-128.png` | 128×128px | Large displays, social media |
| 256px | `logo-256.png` | 256×256px | Presentations, print |
| 512px | `logo-512.png` | 512×512px | Maximum resolution, high-DPI displays |

## File Specifications

- **Format:** PNG (Portable Network Graphics)
- **Color Depth:** 8-bit RGBA (supports transparency)
- **Quality:** Maximum resolution, lossless compression
- **Source:** Generated from `logo-master.svg`

## Usage

All PNG files are ready to use and optimized for their respective sizes. The files maintain the gradient colors from the original SVG:
- Primary: #2563eb (Blue)
- Secondary: #1e40af (Dark Blue)

## Regeneration

To regenerate these PNG files, run:
```bash
python3 convert_logo_to_png.py
```

**Note:** Requires `cairosvg` library (install with: `pip install cairosvg`)

---

**Generated:** January 2025  
**Maintained By:** EchoSpark Design Team
