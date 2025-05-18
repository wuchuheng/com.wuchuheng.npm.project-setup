# Contributing to @wuchuheng/setup

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for developers.


## Publishing Process

### Prerequisites

1. You must have an npm account and be added as a collaborator to the package.
2. Generate an npm access token from your npm account settings.

### Publishing Steps

1. **Update the version** in `package.json`:
   ```bash
   pnpm version patch  # For patch releases
   # or
   pnpm version minor  # For minor releases
   # or
   pnpm version major  # For major releases
   ```

2. **Set your npm token** as an environment variable:
   ```bash
   export NPM_TOKEN=your-npm-token-here
   ```

3. **Publish the package**:
   ```bash
   npm publish
   ```

The `.npmrc` file is already configured to use the `NPM_TOKEN` environment variable for authentication.

## Issue Reporting

Before reporting an issue:
1. Check if it already exists in the [issues page](https://github.com/wuchuheng/com.wuchuheng.npm.project-setup/issues)
2. If not, create a new issue with detailed information

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build
2. Update the README.md with details of changes to the interface, if appropriate
3. The PR will be merged once you have the sign-off of at least one maintainer 