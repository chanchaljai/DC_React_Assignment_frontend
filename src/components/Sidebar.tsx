import { useNavigate } from "react-router-dom";

interface SidebarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setSidebar }: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setSidebar(false);
    navigate(path);
  };

  return (
    <div className="fixed top-16 left-0 w-64 h-screen bg-white shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Explore</h2>
      </div>

      <ul className="p-4 space-y-4">
        <li
          onClick={() => handleNavigate("/hero")}
          className="cursor-pointer hover:text-indigo-600"
        >
          HeroUI Page
        </li>

        <li
          onClick={() => handleNavigate("/products")}
          className="cursor-pointer hover:text-indigo-600"
        >
          TanStack Page
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;