import { Avatar, Button, Menu } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { userService } from "../../services/user-service";

export const Header = () => {
  const token = localStorage.getItem("accessToken");
  const logoutMutation = useMutation({
    mutationFn: () => userService.logout(),
    onSuccess: () => {
      localStorage.removeItem("accessToken");
    },
  });
  console.log("token", typeof token);
  return (
    <div className="w-full bg-white py-4 px-6 shadow-md flex items-center justify-between rounded-xl">
      <div className="text-lg font-semibold text-gray-800">Header</div>
      {!!token && token !== "undefined" ? (
        <Menu shadow="md" width={150}>
          <Menu.Target>
            <Avatar radius="xl" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={() => {
                logoutMutation.mutate();
              }}
              leftSection={<IconLogout size={14} />}
            >
              Log out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button
          component={Link}
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Đăng nhập
        </Button>
      )}
    </div>
  );
};
