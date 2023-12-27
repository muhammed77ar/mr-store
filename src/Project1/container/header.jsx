import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed top-0 w-full bg-gray-800 text-white">
      <div className="container mx-auto py-2">
        <Link to="/" className="text-2xl font-bold no-underline text-white">
          FakeStore
        </Link>
      </div>
    </div>
  );
}
