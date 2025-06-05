import fs from 'fs';
import path from 'path';

interface MenuItem {
  title: string;
  slug: string;
  category: string;
  ingredients: string[];
  calories: number;
  imageSrc: string;
  description: string;
}

export function getMenuItems(): MenuItem[] {
  const directory = path.join(process.cwd(), 'public/content/content/menu-offer');
  const filenames = fs.readdirSync(directory);
  
  const menuItems = filenames.map(filename => {
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extraction des métadonnées du frontmatter
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---\s*([\s\S]*)/;
    const matches = fileContent.match(frontmatterRegex);
    
    if (!matches) return null;
    
    const [, frontmatter, content] = matches;
    
    // Parsing des métadonnées
    const titleMatch = frontmatter.match(/title:\s*(.*)/);
    const slugMatch = frontmatter.match(/slug:\s*(.*)/);
    const categoryMatch = frontmatter.match(/category:\s*(.*)/);
    const caloriesMatch = frontmatter.match(/calories:\s*(.*)/);
    const imageSrcMatch = frontmatter.match(/imageSrc\s*:\s*"(.*)"/);
    
    // Extraction des ingrédients
    const ingredientsRegex = /ingredients:\s*\n((?:\s*-\s*.*\n)*)/;
    const ingredientsMatch = frontmatter.match(ingredientsRegex);
    let ingredients: string[] = [];
    
    if (ingredientsMatch && ingredientsMatch[1]) {
      ingredients = ingredientsMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/\s*-\s*/, '').trim());
    }
    
    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      slug: slugMatch ? slugMatch[1].trim() : '',
      category: categoryMatch ? categoryMatch[1].replace(/['"]/g, '').trim() : '',
      ingredients,
      calories: caloriesMatch ? parseInt(caloriesMatch[1], 10) : 0,
      imageSrc: imageSrcMatch ? imageSrcMatch[1] : 'no-image.png',
      description: content.trim()
    };
  }).filter(Boolean) as MenuItem[];
  
  return menuItems;
}

export function getMenuItemBySlug(slug: string): MenuItem | undefined {
  const menuItems = getMenuItems();
  return menuItems.find(item => item.slug === slug);
}

export function getMenuItemsByCategory(category: string): MenuItem[] {
  const menuItems = getMenuItems();
  return menuItems.filter(item => item.category === category);
}