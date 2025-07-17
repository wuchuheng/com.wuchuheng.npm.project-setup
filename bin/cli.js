#!/usr/bin/env node

// 1. Input Processing
// 1.1 Import required modules
const fs = require('fs');
const path = require('path');

// 1.2 Get the current working directory
const targetDir = process.cwd();

// 2. Logic Handling
// 2.1 Define source and destination paths
const sourceDir = path.join(__dirname, '..' );
const filesToCopy = [
  '.gitattributes',
  '.editorconfig',
  ".cursor/rules/base.mdc",
  '.vscode/extensions.json',
  ".trae/rules/project_rules.md",
];

// 2.2 Copy files function
function copyFiles() {
  filesToCopy.forEach(file => {
    const destPath = path.join(targetDir, file);
    const sourcePath = path.join(sourceDir, file);
    
    // 2.2.1 Check if source file exists
    if (fs.existsSync(sourcePath)) {
      // 2.2.2 Create destination directory if it doesn't exist
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // 2.2.3 Copy the file
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Copied ${file} to ${targetDir}`);
    } else {
      console.warn(`⚠️ Source file ${file} not found`);
    }
  });
}

// 3. Output
// 3.1 Execute the copy operation
try {
  console.log('🚀 Starting project initialization...');
  copyFiles();
  console.log('✨ Project initialization completed successfully!');
} catch (error) {
  console.error('❌ Error during initialization:', error.message);
  process.exit(1);
} 
