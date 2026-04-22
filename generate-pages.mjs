import fs from 'fs';
import path from 'path';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About Us' },
  { path: '/services/weight-loss-weight-gain', name: 'Weight Loss & Weight Gain' },
  { path: '/services/functional-training', name: 'Functional Training' },
  { path: '/services/bootcamp', name: 'Fitness Bootcamp' },
  { path: '/services/body-transformation', name: 'Body Transformation' },
  { path: '/trainers', name: 'Meet the Trainers' },
  { path: '/transformations', name: 'Transformation Gallery' },
  { path: '/pricing', name: 'Membership & Pricing' },
  { path: '/blog', name: 'Blog Index' },
  { path: '/blog/[slug]', name: 'Blog Post' },
  { path: '/locations', name: 'Store Locator' },
  { path: '/franchise', name: 'Franchise Opportunity' },
  { path: '/contact', name: 'Contact' },
];

const dirs = [
  'components/layout',
  'components/ui',
  'components/sections',
  'components/forms',
  'public/images',
];

const baseDir = path.resolve(process.cwd(), 'temp-app');

for (const dir of dirs) {
  fs.mkdirSync(path.join(baseDir, dir), { recursive: true });
}

for (const route of routes) {
  const dirPath = path.join(baseDir, 'app', route.path === '/' ? '' : route.path);
  fs.mkdirSync(dirPath, { recursive: true });
  
  const content = `export default function Page() {
  return (
    <main>
      <h1>${route.name}</h1>
    </main>
  );
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
}
