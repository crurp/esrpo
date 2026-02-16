# EchoSpark Logo Icons

This directory contains the EchoSpark logo in various sizes and formats for use across different platforms and contexts.

## Available Sizes

All icons are provided in SVG format (vector, scalable) and maintain the same design at any size.

| Size | File | Use Case |
|------|------|----------|
| 16px | `logo-16.svg` | Favicon, small UI elements |
| 32px | `logo-32.svg` | Footer, small displays |
| 40px | `logo-40.svg` | Header navigation |
| 48px | `logo-48.svg` | Card icons, medium displays |
| 64px | `logo-64.svg` | Featured displays |
| 128px | `logo-128.svg` | Large displays, social media |
| 256px | `logo-256.svg` | Presentations, print |
| 512px | `logo-512.svg` | Maximum resolution, high-DPI displays |

## Logo Specifications

- **Format:** SVG (Scalable Vector Graphics)
- **ViewBox:** 0 0 40 40 (maintains aspect ratio)
- **Colors:** Gradient from #6366f1 (Indigo) to #8b5cf6 (Violet)
- **Structure:** Hexagon outline with central compass rose cross (8-pointed: 4 cardinal + 4 intercardinal, center circle)

## Usage Guidelines

### Minimum Size
- Never use the logo smaller than 16px
- Maintain clear space equal to logo height on all sides

### Clear Space
- Minimum clear space: 1x logo height
- Recommended clear space: 2x logo height

### Do Not
- ❌ Rotate or tilt the logo
- ❌ Distort or stretch the logo
- ❌ Change the colors
- ❌ Add effects or filters
- ❌ Place on busy backgrounds without sufficient contrast
- ❌ Use outdated versions

### Do
- ✅ Maintain aspect ratio
- ✅ Use on dark backgrounds (primary)
- ✅ Ensure sufficient contrast
- ✅ Use SVG format when possible for scalability

## Exporting to Other Formats

### PNG Export
To export SVG to PNG at specific sizes, use:

```bash
# Using Inkscape (recommended)
inkscape --export-type=png --export-width=512 --export-height=512 logo-512.svg

# Using ImageMagick
convert -background none -density 300 logo-512.svg logo-512.png
```

### ICO Export (Favicon)
For favicon.ico, combine multiple sizes:

```bash
# Using ImageMagick
convert logo-16.svg logo-32.svg logo-48.svg favicon.ico
```

## Color Values

**Primary Gradient:**
- Start: `#6366f1` (Indigo 500)
- End: `#8b5cf6` (Violet 500)

**For Print/One Color:**
- Use solid `#6366f1` (Indigo 500)

## File Structure

```
icons/
├── logo-16.svg      # 16×16px
├── logo-32.svg      # 32×32px
├── logo-40.svg      # 40×40px
├── logo-48.svg      # 48×48px
├── logo-64.svg      # 64×64px
├── logo-128.svg     # 128×128px
├── logo-256.svg     # 256×256px
├── logo-512.svg     # 512×512px
└── README.md        # This file
```

## License

All logo files are proprietary to EchoSpark and are protected by copyright. Unauthorized use is prohibited.

---

**Last Updated:** February 2026  
**Maintained By:** EchoSpark Design Team
