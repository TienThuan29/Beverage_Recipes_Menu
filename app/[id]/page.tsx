"use client";

import { useParams, useRouter } from "next/navigation";
import { Button, Card, Typography, Space, Tag, Steps, Result, List } from "antd";
import { ArrowLeftOutlined, ShoppingOutlined, BookOutlined } from "@ant-design/icons";
import { getBeverageById, getGroupByBeverageId } from "../../mocks/beverage.mock";

const { Title, Text } = Typography;

export default function BeverageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const beverageId = params.id as string;

  const beverage = getBeverageById(beverageId);
  const group = beverage ? getGroupByBeverageId(beverageId) : undefined;

  if (!beverage || !group) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the beverage you are looking for does not exist."
          extra={
            <Button type="primary" onClick={() => router.push("/")}>
              Back to Home
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full mb-16">
      <main className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 md:py-8 max-w-4xl">
        {/* Back Link */}
        <div className="mb-2 sm:mb-6 mt-2">
          <Button
            href="/"
            variant="solid" color="default"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 shadow-sm hover:shadow-md transition-all duration-200 font-medium text-sm sm:text-base"
            aria-label="Back to Home"
          >
            <ArrowLeftOutlined className="text-base sm:text-lg" />
            <span>Back</span>
          </Button>
        </div>

        {/* Header with Group Info */}
        <Card className="mb-4 sm:mb-6 ">
          <Space direction="vertical" size="small" className="w-full">
            <div>
              <Text className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
                {group.englishName}
              </Text>
              <Text className="text-gray-500 text-xs sm:text-sm inline ml-2">
                / {group.vietnameseName}
              </Text>
            </div>
            <Title
              level={1}
              className="!mb-0 !text-2xl sm:!text-3xl md:!text-4xl !font-bold"
            >
              {beverage.englishName}
            </Title>
            <Title
              level={3}
              className="!mb-0 !text-lg sm:!text-xl !text-gray-600 !font-normal"
            >
              {beverage.vietnameseName}
            </Title>
          </Space>
        </Card>

        {/* Ingredients Section */}
        <Card
          title={
            <Space>
              <ShoppingOutlined />
              <span className="text-base sm:text-lg font-semibold">Ingredients</span>
            </Space>
          }
          className="mb-4 sm:mb-6"
        >
          <List
            dataSource={beverage.ingredients}
            renderItem={(ingredient) => (
              <List.Item className="!px-0 !py-3 sm:!py-4 border-b border-gray-100 last:border-b-0">
                <div className="w-full">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <Text className="text-base sm:text-lg font-semibold text-gray-900">
                      {ingredient.name}
                    </Text>
                    <Text className="text-gray-500 text-sm sm:text-base">
                      ({ingredient.brand})
                    </Text>
                    <Tag 
                      color="blue" 
                      className="text-xs sm:text-sm font-medium"
                      style={{
                        backgroundColor: '#e6f4ff',
                        borderColor: '#91caff',
                        color: '#0958d9',
                      }}
                    >
                      {ingredient.quantity} {ingredient.unitsOfMeasurement}
                    </Tag>
                  </div>
                </div>
              </List.Item>
            )}
            className="w-full"
          />
        </Card>

        {/* Instructions Section */}
        <Card
          title={
            <Space>
              <BookOutlined />
              <span className="text-base sm:text-lg font-semibold">Instructions</span>
            </Space>
          }
          className=""
        >
          <Steps
            direction="vertical"
            size="small"
            current={beverage.instructionSteps.length}
            items={beverage.instructionSteps.map((step, index) => ({
              title: <b>Step {index + 1}</b>,
              description: (
                <Text className="text-sm sm:text-base text-gray-700">{step}</Text>
              ),
            }))}
            className="mt-4"
          />
        </Card>
      </main>
    </div>
  );
}
