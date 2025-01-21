import {
  Card,
  Text,
  Button,
  Badge,
  Grid,
  TextInput,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  LazadaFull,
  LazadaInstructionStep1,
  LazadaInstructionStep2,
  LazadaInstructionStep3,
  LazadaInstructionStep4,
} from "../../assets/images";
import {
  IconCalendar,
  IconCircleCheck,
  IconClock,
  IconClock2,
  IconDiscount,
  IconInfoCircle,
  IconLivePhoto,
  IconMoneybag,
  IconPhone,
  IconSearch,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";

export default function Lazada() {
  const [searchResults, setSearchResults] = useState<Array<any> | null>(null);
  const theme = useMantineTheme();
  const steps = [
    {
      title: "Bước 1: Dán link sản phẩm cần tìm",
      image: LazadaInstructionStep1,
      width: 100,
    },
    {
      title: "Bước 2: Bấm nút Search để tìm kiếm",
      image: LazadaInstructionStep2,
      width: 250,
    },
    {
      title: "Bước 3: Chọn sản phẩm phù hợp",
      image: LazadaInstructionStep3,
      width: 250,
    },
    {
      title: "Bước 4: Hoàn tất mua hàng và nhận hoàn tiền",
      image: LazadaInstructionStep4,
      width: 250,
    },
  ];
  const handleSearch = () => {
    // Fake search logic for demonstration
    const results =
      Math.random() > 0.5
        ? [
            {
              id: 1,
              title:
                "CAMEL MENS AUTOMATIC BUCKLE BELT 100% GENUINE COW LEATHER BUSINESS CASUAL STRAP BELT",
              description: "Con lạc đà",
              price: "188.990 ₫",
              cashback: "4.763 ₫",
              image: "/camel-belt.jpg",
            },
          ]
        : [];

    setSearchResults(results);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Cashback Percentage */}
      <div className="text-center bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-center items-center mb-6">
          <img src={LazadaFull} alt="Lazada" className="w-32" />
        </div>
        <Text className="text-gray-800 text-lg font-medium">
          Hoàn tiền đến <span className="text-blue-600 font-bold">22.36%</span>
        </Text>
      </div>

      {/* Link Input */}
      <div className="mb-6 flex items-end gap-2">
        <TextInput
          placeholder="Dán link sản phẩm tại đây"
          label="Link sản phẩm"
          withAsterisk
          className="flex-grow"
        />
        <Button variant="outline" color="blue">
          Dán link
        </Button>
        <Button variant="filled" color="blue" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {/* Search Results */}
      {searchResults === null ? (
        <div className="bg-white flex-col flex justify-center items-center p-2 mb-4">
          <div className="w-40">
            <IconDiscount size={100} color={theme.colors.blue[6]} />
          </div>
          <div className="text-center px-12">
            <p> Nhập link Lazada để shop tìm sản phẩm và hoàn tiền!</p>
          </div>
        </div>
      ) : searchResults.length > 0 ? (
        <Grid className="mb-6" gutter={24}>
          {searchResults.map((product) => (
            <div className="w-full">
              <div className="flex gap-1 items-center p-2">
                <div className="h-10 aspect-square bg-gradient-to-br p-2 from-blue-600 to-blue-800 rounded-full"></div>
                <div className="flex flex-col text-sm text-gray-700">
                  <span className="font-bold">KẾT QUẢ TÌM KIẾM</span>
                </div>
              </div>

              <div className="flex flex-wrap px-2 w-full">
                <div className="p-1 w-full">
                  <div className="flex text-xs md:text-base gap-3 relative w-full bg-white shadow-md rounded-lg h-80 ">
                    <div className="flex justify-center flex-1">
                      <div className="w-full aspect-square overflow-hidden rounded-lg border border-black"></div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex flex-col p-1">
                        <span className="overflow-hidden text-ellipsis line-clamp-3 font-semibold">
                          LILYSHOES GIÀY THỂ THAO THƯỜNG NGÀY CHO NAM MỚI GIÀY
                          VẢI BỐ ĐA NĂNG THỜI TRANG GIÀY CHẠY THƯỜNG NGÀY NGOÀI
                          TRỜI
                        </span>
                        <div className="flex flex-col justify-between">
                          <span className="overflow-hidden text-ellipsis line-clamp-1">
                            No Brand
                          </span>
                          <span>0</span>
                        </div>
                        <span className="text-base font-bold leading-5">
                          99.000&nbsp;₫
                        </span>
                        <span className="text-blue-800">
                          Hoàn tiền đến:
                          <strong className="font-bold text-base leading-3">
                            {" "}
                            1.960&nbsp;₫
                          </strong>
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 justify-end">
                        <button className="p-2 md:p-3 bg-blue-800 text-white rounded w-full font-bold">
                          MUA NGAY
                        </button>
                        <button className="p-2 md:p-3 rounded-md w-full border bg-gray-500 text-white flex-col">
                          <span>THƯỞNG THÊM HOA HỒNG</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm w-full cursor-pointer">
                  <h4 className="text-center bg-amber-200 p-1">
                    <p>Số tiền hoàn có thể thấp hơn thực tế hoặc bằng 0đ</p>
                    <p>
                      Vui lòng đọc kỹ{" "}
                      <span className="font-bold underline">
                        Điều kiện &amp; Điều khoản
                      </span>{" "}
                      trước khi mua hàng
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      ) : (
        <div className="text-center bg-white rounded-lg p-6 mb-6">
          <Text size="lg" className="font-semibold mb-4">
            KẾT QUẢ TÌM KIẾM
          </Text>
          <div className="flex flex-col items-center">
            <img
              src={
                "https://cdn.dribbble.com/users/3035925/screenshots/14046425/no_results_found_4x.jpg"
              }
              alt="No Results"
              className="mb-4 h-60 aspect-square object-contain"
            />
            <Text className="text-gray-700 mb-2">
              Ui tiếc quá, mặt hàng này của bạn không được hoàn tiền rồi.
            </Text>
            <div className="text-blue-500 underline">
              <a href="https://zalo.me/g/odqcwk307">Báo lỗi tại đây</a>
            </div>
          </div>
        </div>
      )}

      {/* Swiper for Cashback Steps */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
          // className="bg-white shadow-md rounded-lg p-4"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  // width="100%"
                  // height={100}
                  // ="contain"
                  className="mx-auto mb-2 border border-gray-300 h-48 aspect-[2/1]"
                />
                {/* <Text className="text-gray-700 font-medium">{step.title}</Text> */}
                <div className="text-xs md:text-sm">
                  <span className="font-bold">{step.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex gap-1 justify-start items-center">
          <div className="h-10 p-2 aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
          <div className="flex flex-col text-sm text-gray-700">
            <span>Tham khảo</span>
            <span className="font-bold">ĐIỀU KHOẢN HOÀN TIỀN</span>
          </div>
        </div>
        <div className="bg-white">
          <div className="p-2">
            <h3 className="text-xs font-bold text text-orange-600 py-1">
              THỜI GIAN HOÀN TIỀN
            </h3>
            <div className="rounded-xl border">
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconClock stroke={2} />
                </div>
                <p className="text-xs">
                  Thời gian cập nhật đơn hàng là 24 - 48H kể từ khi đặt hàng
                  thành công. Nếu sau 48H không thấy hiển thị đơn tức là đơn
                  không được ghi nhận trên app.
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconCalendar stroke={2} />
                </div>
                <p className="text-xs">
                  Thời gian duyệt đơn hàng Shopee là 30 ngày, Lazada là 45 ngày
                  và Tiktok là 7 ngày kể từ khi khách hàng bấm Đã nhận hàng trên
                  app.
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconMoneybag stroke={2} />
                </div>
                <p className="text-xs">
                  Số dư hoàn tiền có thể rút tối thiểu là 10.000đ và khả dụng
                  rút số dư vào 10H ngày 18, 29, 30 hàng tháng
                </p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-xs font-bold text text-orange-600 py-1">
              ĐIỀU KIỆN CHẤP NHẬN HOÀN TIỀN
            </h3>
            <div className="rounded-xl border">
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconInfoCircle stroke={2} />
                </div>
                <p className="text-xs">
                  Hoàn tiền được tính bằng giá trị đơn hàng sau khi đã áp mã
                  giảm giá, mã MPVC... nên số tiền có thể bé hơn dự kiến trên
                  web.
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconShoppingCart stroke={2} />
                </div>
                <p className="text-xs">
                  Để nhận được tối đa số tiền hoàn, bạn nên mua các sản phẩm
                  cùng Shop. Trường hợp nhiều sản phẩm ở nhiều Shop khác nhau,
                  bạn nên tách lẻ đơn của từng Shop.
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconPhone stroke={2} />
                </div>
                <p className="text-xs">
                  Chỉ chấp nhận các đơn hàng phát sinh trên điện thoại và mỗi
                  lần mua hàng chỉ mua 1 đơn duy nhất. Mua đơn thứ 2 trở đi cần
                  quay trở lại website để dán hoàn tiền như ban đầu.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-xs font-bold text text-orange-600 py-1">
              ĐIỀU KIỆN TỪ CHỐI HOÀN TIỀN
            </h3>
            <div className="rounded-xl border">
              <div className="flex items-center justify-start border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconLivePhoto stroke={2} />
                </div>
                <p className="text-xs">
                  Không ghi nhận hoàn tiền cho các đơn hàng phát sinh từ
                  LiveStream và Video.
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconCircleCheck stroke={2} />
                </div>
                <p className="text-xs">
                  Hoàn tiền có thể bị huỷ hoặc bằng OĐ do chính sách và quy định
                  riêng của từng sàn. Xem chi tiết tại đây{" "}
                  <a className="underline" href="https://longhousee.com/post/4">
                    (https://longhousee.com/post/4)
                  </a>
                </p>
              </div>
              <div className="flex items-center border-b last:border-none">
                <div className="h-14 aspect-square flex justify-center items-center text-center text-xl">
                  <IconX stroke={2} />
                </div>
                <p className="text-xs">
                  Các đơn hàng có dấu hiệu gian lận, huỷ đơn, bom hàng, tích trữ
                  hàng hóa, lạm dụng mã giảm giá,... sẽ bị huỷ hoàn tiền
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
