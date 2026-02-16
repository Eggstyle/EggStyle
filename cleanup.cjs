const fs = require('fs');
const path = require('path');

console.log('🧹 Starting EggStyle Cleanup...\n');

// Delete unused UI components (keep only 5 essential ones)
const uiPath = path.join(__dirname, 'src', 'components', 'ui');
const keepComponents = ['button.tsx', 'toaster.tsx', 'sonner.tsx', 'toast.tsx', 'use-toast.ts'];

console.log('📁 Cleaning up UI components...');
try {
  const files = fs.readdirSync(uiPath);
  let deletedCount = 0;
  
  files.forEach(file => {
    if (!keepComponents.includes(file)) {
      fs.unlinkSync(path.join(uiPath, file));
      deletedCount++;
    }
  });
  
  console.log(`   ✅ Deleted ${deletedCount} unused components`);
  console.log(`   ✅ Kept: ${keepComponents.join(', ')}\n`);
} catch (err) {
  console.error('   ❌ Error:', err.message);
}

// Update package.json
console.log('📦 Updating package.json...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  const keepDeps = {
    "lucide-react": packageJson.dependencies["lucide-react"],
    "react": packageJson.dependencies["react"],
    "react-dom": packageJson.dependencies["react-dom"],
    "react-router-dom": packageJson.dependencies["react-router-dom"],
    "sonner": packageJson.dependencies["sonner"],
    "class-variance-authority": packageJson.dependencies["class-variance-authority"],
    "clsx": packageJson.dependencies["clsx"],
    "tailwind-merge": packageJson.dependencies["tailwind-merge"],
    "tailwindcss-animate": packageJson.dependencies["tailwindcss-animate"]
  };
  
  const keepDevDeps = { ...packageJson.devDependencies };
  delete keepDevDeps["lovable-tagger"];
  
  packageJson.dependencies = keepDeps;
  packageJson.devDependencies = keepDevDeps;
  
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('   ✅ Removed unused dependencies');
  console.log('   ✅ Removed lovable-tagger\n');
} catch (err) {
  console.error('   ❌ Error:', err.message);
}

// Update App.tsx
console.log('🔧 Updating App.tsx...');
try {
  const appPath = path.join(__dirname, 'src', 'App.tsx');
  let appContent = fs.readFileSync(appPath, 'utf8');
  
  appContent = appContent.replace(/import.*QueryClient.*from.*@tanstack\/react-query.*;\n/g, '');
  appContent = appContent.replace(/import.*TooltipProvider.*from.*@\/components\/ui\/tooltip.*;\n/g, '');
  appContent = appContent.replace('const queryClient = new QueryClient();\n', '');
  appContent = appContent.replace(/<QueryClientProvider client={queryClient}>\n\s*/g, '');
  appContent = appContent.replace(/\s*<\/QueryClientProvider>/g, '');
  appContent = appContent.replace(/<TooltipProvider>\n\s*/g, '');
  appContent = appContent.replace(/\s*<\/TooltipProvider>/g, '');
  appContent = appContent.replace(/\n{3,}/g, '\n\n');
  
  fs.writeFileSync(appPath, appContent);
  console.log('   ✅ Cleaned up App.tsx\n');
} catch (err) {
  console.error('   ❌ Error:', err.message);
}

console.log('✨ Cleanup complete!\n');
console.log('📋 Next steps:');
console.log('   1. npm install');
console.log('   2. npm run dev');
console.log('   3. Test the site');
console.log('   4. git add . && git commit -m "Cleanup bloat" && git push\n');
