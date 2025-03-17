import { Button, Text, Card, Grid, Container } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { IconArrowRight } from "@tabler/icons-react";
import { Content, Lazada, Shopee, Tiktok } from "../../assets/images";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex min-h-screen py-4">
        <Container
          size="xl"
          px="md"
          className="bg-gray-100 min-h-screen w-[90rem]"
        >
          {/* Banner */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem",
              background: "linear-gradient(to right, #ff7e5f, #fd3a69)",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            <div>
              <Text size="xl" className="font-bold color-white">
                SĂN SALE CỰC ĐỈNH <br /> HOÀN TIỀN CỰC ĐÃ
              </Text>
              <Button
                mt="md"
                color="dark"
                radius="md"
                onClick={() => navigate("/login")}
                styles={(theme) => ({
                  root: {
                    backgroundColor: theme.colors.gray[8],
                    color: "white",
                    "&:hover": {
                      backgroundColor: theme.colors.gray[7],
                    },
                  },
                })}
              >
                Đăng nhập
              </Button>
            </div>
            <img
              src={Content}
              alt="Dragon Mascot1"
              style={{ width: "150px", height: "auto" }}
            />
          </div>

          {/* Cashback Section */}
          <div className="p-6 bg-white rounded-lg">
            <Text size="lg" className="font-semibold" mb="sm">
              MUA SẮM HOÀN TIỀN <span style={{ color: "red" }}>HOT</span>
            </Text>
            <Grid>
              {[
                {
                  title: "Shopee",
                  href: "/shopee",
                  cashback: "30.28%",
                  color: "#ff6f61",
                  image: Shopee,
                },
                {
                  title: "TikTok",
                  href: "/tiktok",

                  cashback: "20.02%",
                  color: "#8a2be2",
                  image: Tiktok,
                },
                {
                  title: "Lazada",
                  href: "/lazada",

                  cashback: "22.36%",
                  color: "#00aaff",
                  image: Lazada,
                },
              ].map((item, index) => (
                <Grid.Col span={4} key={index}>
                  <a
                    className={`col-span-1 p-1 flex flex-col md:p-2 justify-end rounded-md w-full aspect-square bg-[${item.color}]`}
                    href={item.href}
                  >
                    <div className="flex-1 flex flex-col justify-end items-center overflow-hidden h-full aspect-square">
                      <div className="flex h-2/3 aspect-square flex-col items-center justify-center p-1">
                        <div className="relative aspect-square bg-black rounded-lg flex justify-center items-center h-5/6 object-cover">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <span className="h-1/3 font-bold md:text-xl">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex flex-col text-white">
                      <span className="text-[10px] md:text-base">Hoàn đến</span>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold leading-3 md:text-xl">
                          {item.cashback}
                        </span>
                        <IconArrowRight />
                      </div>
                    </div>
                  </a>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
