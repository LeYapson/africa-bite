import { getMenuItems } from "../utils/getMenuItems";
import CategoryFilter from "../components/menu/CategoryFilter";
import MenuCard from "../components/menu/MenuCard";
import PageTitle from "../components/common/PageTitle";

export default function Menu() {
  const menuItems = getMenuItems();
  
  // Obtenir les catégories uniques
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <PageTitle>Notre Menu</PageTitle>
      
      <CategoryFilter categories={categories} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}