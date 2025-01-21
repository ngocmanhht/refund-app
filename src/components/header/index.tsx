import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full bg-white py-4 px-6 shadow-md flex items-center justify-between">
      <div className="text-lg font-semibold text-gray-800">Header</div>
      <Button
        component={Link}
        to="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Đăng nhập
      </Button>
    </div>
  );
};
