# @wuchuheng/setup

A CLI tool to quickly initialize your project with common configuration files like `.gitattributes` and `.editorconfig`.

## Features

- 🚀 Quick project initialization
- 📝 Adds essential configuration files:
  - `.gitattributes` - Ensures consistent line endings across different operating systems
  - `.editorconfig` - Maintains consistent coding styles across different editors and IDEs

## Installation

You can use this tool in two ways:

### 1. Using npx (Recommended)

```bash
npx @wuchuheng/setup
```

### 2. Global Installation

```bash
npm install -g @wuchuheng/setup
```

Then run:
```bash
setup
```

## Usage

1. Navigate to your project directory:
```bash
cd your-project
```

2. Run the setup command:
```bash
npx @wuchuheng/setup
```

The tool will automatically:
- Copy `.gitattributes` to your project
- Copy `.editorconfig` to your project
- Create any necessary directories
- Show progress with emoji indicators

## What Gets Added

### .gitattributes
- Ensures consistent line endings (LF) for:
  - TypeScript/JavaScript files (*.ts, *.tsx, *.js, *.jsx)
  - Markdown files (*.md)
  - HTML files (*.html)
  - CSS files (*.css)
  - PHP files (*.php)

### .editorconfig
- Maintains consistent coding styles across different editors and IDEs
- Configures:
  - Indentation
  - Line endings
  - Character encoding
  - And more...

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Reporting Issues

If you find a bug or have a feature request, please:

1. Check if the issue already exists in the [issues page](https://github.com/wuchuheng/com.wuchuheng.npm.project-setup/issues)
2. If not, create a new issue with:
   - A clear title
   - Detailed description of the problem
   - Steps to reproduce (if it's a bug)
   - Expected behavior
   - Screenshots (if applicable)

## Repository

- GitHub: [https://github.com/wuchuheng/com.wuchuheng.npm.project-setup](https://github.com/wuchuheng/com.wuchuheng.npm.project-setup)
- Issues: [https://github.com/wuchuheng/com.wuchuheng.npm.project-setup/issues](https://github.com/wuchuheng/com.wuchuheng.npm.project-setup/issues)

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Author

wuchuheng 