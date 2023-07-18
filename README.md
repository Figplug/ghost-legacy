<h1 align="center"><img alt="Ghost-legacy" src="src/assets/ghost-legacy.svg" height="150px"/></h1>

<div align="center">
  <p>Convert high fidelity mockups to skeleton placeholder.</p>
  
![GitHub last commit](https://img.shields.io/github/last-commit/mrstev3n/ghost-legacy?color=blue&style=plastic)
![Repo size](https://img.shields.io/github/repo-size/mrstev3n/ghost-legacy?color=orange&style=plastic)
</div>

# Installation

Click the button below to try out this plugin from Figma community

<picture id=arrow-n1>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.postimg.cc/0yMTTzD4/chevron-animated-right.gif">
  <img alt="chevron-color-auto" src="https://i.postimg.cc/0yMTTzD4/chevron-animated-right.gif" height=24>
</picture>
<a href="https://www.figma.com/community/plugin/1017135840453013129"><img alt="Install Plugin" src="https://img.shields.io/endpoint?url=https://figma-plugin-badges.vercel.app/api/installs/1017135840453013129" height=24/></a>
<picture id=arrow-n2>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.postimg.cc/ZKMks8B3/chevron-animated-left.gif">
  <img alt="chevron-color-auto" src="https://i.postimg.cc/ZKMks8B3/chevron-animated-left.gif" height=24>
</picture>

# Usage

## 1. Ghost-legacy > Solid hexColor

Select One (1) or more layers and run the plugin.

For the Type, choose `Solid hexColor` and for the Color enter a valid hexadecimal value.

> Note: in the case of an invalid HEX entry, '000000' is taken by default.

!["Action Preview"](src/assets/ghost-demo-1.gif)

## 2. Ghost-legacy > Solid colorName

Select One (1) or more layers and run the plugin.

For the Type, choose `Solid colorName` and for the Color enter a valid X11 color name or choose from the list.

!["Action Preview"](src/assets/ghost-demo-2.gif)

## 3. Ghost-legacy > Gradient

Select One (1) or more layers and run the plugin.

For the Type, choose Gradient and for the Color choose one of the three existing proposals (Gray, White, Black)

!["Action Preview"](src/assets/ghost-demo-3.gif)

# Object handled

- RECTANGLE
- ELLIPSE
- STAR
- POLYGON
- LINE
- TEXT
- SHAPE_WITH_TEXT
- GROUP
- FRAME
- COMPONENT/ INSTANCE

# Support

You find this plugin useful ? <br/> Please consider making a donation to support 🙏🏼

<p>
<a href="https://www.buymeacoffee.com/mrstev3n"><img alt="Buy Me A Coffee" src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height=32></a>
<a href="https://liberapay.com/mrstev3n/"><img alt="Liberapay" src="https://img.shields.io/badge/Liberapay-F6C915?style=flat&logo=liberapay&logoColor=black" height=32></a>
</p>

# Code

### Quick Setup

- Clone the repository.
- `npm install` installs all the dependencies.
- `npm run build` builds and bundles the plugin.
- Import manifest into Figma and test.

### Contribution

Contributions are welcomed, feel free to make a pull request or create an issue

[![GitHub pull-requests](https://img.shields.io/github/issues-pr/mrstev3n/ghost-legacy.svg)](https://GitHub.com/mrstev3n/ghost-legacy/pull/)
[![GitHub issues](https://img.shields.io/github/issues/mrstev3n/ghost-legacy.svg)](https://GitHub.com/mrstev3n/ghost-legacy/issues/)

# Credits and Thanks

Legacy version - Maker : [@mrstev3n](https://github.com/mrstev3n) & [@rickfaf](https://github.com/rickfaf)

- code sanitization
- add new parameters with custom color support
- figjam friendly
- documentation

Origin version - Maker : [@ckark](https://github.com/ckark)

- lightweight plugin to convert selected layers to solid or gradients

# End Notes

We recall that this is an upgrade of the work initially done by Chris Kark on [Ghost](https://github.com/ckark/ghost). We worked on improving the source code, making it faster and bringing some additional features.
