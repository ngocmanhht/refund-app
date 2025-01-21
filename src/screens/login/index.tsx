"use client";

import { Button, Text, TextInput } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { watch, handleSubmit, getValues, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    // console.log(getValues());
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Text size="xl" className="text-center mb-6 text-gray-800 font-bold">
          Đăng nhập
        </Text>

        {/* Email Input */}
        <Controller
          control={control}
          rules={{
            required: "Email không thể bỏ trống",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email không hợp lệ",
            },
          }}
          name="email"
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextInput
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label="Email"
              placeholder="Nhập email"
              error={error?.message}
              className="mb-4"
            />
          )}
        />

        {/* Password Input */}
        <Controller
          control={control}
          name="password"
          rules={{ required: "Mật khẩu không thể bỏ trống" }}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <TextInput
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type="password"
              label="Mật khẩu"
              placeholder="Nhập mật khẩu"
              error={error?.message}
              className="mb-4"
            />
          )}
        />

        <div className="flex justify-end mb-6">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mb-4"
          onClick={handleSubmit(onSubmit)}
        >
          Đăng nhập
        </Button>

        {/* Register Link */}
        <Text size="sm" className=" align-middletext-gray-600">
          Bạn chưa có tài khoản?
          <Link to="/register" className="text-blue-500 hover:underline ml-1">
            Đăng ký
          </Link>
        </Text>

        {/* Help Link */}
        <Text size="sm" className="mt-4 text-gray-600 align-middle">
          Hướng dẫn đăng ký tài khoản
          <Link
            to="https://nextjs.org/docs/api-reference/next/link#with-url-object"
            className="text-blue-500 hover:underline ml-1"
          >
            Xem tại đây
          </Link>
        </Text>
      </div>
    </div>
  );
}
