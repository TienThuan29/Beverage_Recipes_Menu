"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Button, Card, Typography, Space, Tag, Steps, Result, List, Spin } from "antd";
import { ArrowLeftOutlined, ShoppingOutlined, BookOutlined } from "@ant-design/icons";
import type { Beverage, BeverageGroup } from "../../types/beverage";

const { Title, Text } = Typography;

export default function BeverageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const beverageId = params.id as string;
  const [beverage, setBeverage] = useState<Beverage | null>(null);
  const [group, setGroup] = useState<BeverageGroup | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Local storage keys (same as home page for consistency)
  const STORAGE_KEY_GROUPS = "beverage_groups";
  const STORAGE_KEY_BEVERAGES = "beverages";

  // Load beverage from localStorage
  const loadBeverageFromCache = useCallback((id: string): Beverage | null => {
    try {
      const storedBeverages = localStorage.getItem(STORAGE_KEY_BEVERAGES);
      if (storedBeverages) {
        const beverages: Beverage[] = JSON.parse(storedBeverages);
        return beverages.find((b) => b.id === id) || null;
      }
    } catch (err) {
      console.error("Error loading beverage from cache:", err);
    }
    return null;
  }, []);

  // Load groups from localStorage
  const loadGroupsFromCache = useCallback((): BeverageGroup[] => {
    try {
      const storedGroups = localStorage.getItem(STORAGE_KEY_GROUPS);
      if (storedGroups) {
        return JSON.parse(storedGroups);
      }
    } catch (err) {
      console.error("Error loading groups from cache:", err);
    }
    return [];
  }, []);

  // Find group for beverage
  const findGroupForBeverage = useCallback((beverageData: Beverage, groups: BeverageGroup[]): BeverageGroup | null => {
    // Try to find group by beverage's groupId first
    if (beverageData.groupId) {
      const foundGroup = groups.find((g) => g.id === beverageData.groupId);
      if (foundGroup) return foundGroup;
    }
    
    // Fallback: try to match by beverage ID patterns
    const groupBeverageMap: Record<string, string[]> = {
      coffee: ["espresso", "cappuccino", "latte", "americano", "mocha"],
      tea: ["green-tea", "black-tea", "bubble-tea", "herbal-tea"],
      smoothies: [
        "strawberry-smoothie",
        "mango-smoothie",
        "orange-juice",
        "green-smoothie",
        "watermelon-juice",
      ],
      cocktails: ["mojito", "virgin-mojito", "pina-colada", "fruit-punch"],
    };
    
    return groups.find((g) => 
      groupBeverageMap[g.id]?.includes(beverageData.id)
    ) || null;
  }, []);

  useEffect(() => {
    const fetchBeverageData = async () => {
      if (!beverageId) return;

      try {
        setLoading(true);
        
        // Try to load from cache first
        const cachedBeverage = loadBeverageFromCache(beverageId);
        const cachedGroups = loadGroupsFromCache();

        if (cachedBeverage && cachedGroups.length > 0) {
          // Found in cache, use it
          setBeverage(cachedBeverage);
          const foundGroup = findGroupForBeverage(cachedBeverage, cachedGroups);
          if (foundGroup) {
            setGroup(foundGroup);
          }
          setError(null);
          setLoading(false);
          return;
        }

        // Not in cache, fetch from API
        const beverageResponse = await fetch(`/api/beverages/${beverageId}`);
        if (!beverageResponse.ok) {
          if (beverageResponse.status === 404) {
            setError("Beverage not found");
          } else {
            throw new Error("Failed to fetch beverage");
          }
          setLoading(false);
          return;
        }
        
        const beverageData = await beverageResponse.json();
        const fetchedBeverage = beverageData.beverage;
        setBeverage(fetchedBeverage);

        // Try to get groups from cache first, otherwise fetch
        let groups = cachedGroups;
        if (groups.length === 0) {
          const groupsResponse = await fetch("/api/groups");
          if (groupsResponse.ok) {
            const groupsData = await groupsResponse.json();
            groups = groupsData.groups || [];
            // Save groups to cache
            try {
              localStorage.setItem(STORAGE_KEY_GROUPS, JSON.stringify(groups));
            } catch (err) {
              console.error("Error saving groups to cache:", err);
            }
          }
        }

        // Find and set group
        const foundGroup = findGroupForBeverage(fetchedBeverage, groups);
        if (foundGroup) {
          setGroup(foundGroup);
        }

        // Update beverages cache with the fetched beverage
        try {
          const storedBeverages = localStorage.getItem(STORAGE_KEY_BEVERAGES);
          const beverages: Beverage[] = storedBeverages ? JSON.parse(storedBeverages) : [];
          // Update or add the beverage
          const index = beverages.findIndex((b) => b.id === fetchedBeverage.id);
          if (index >= 0) {
            beverages[index] = fetchedBeverage;
          } else {
            beverages.push(fetchedBeverage);
          }
          localStorage.setItem(STORAGE_KEY_BEVERAGES, JSON.stringify(beverages));
        } catch (err) {
          console.error("Error saving beverage to cache:", err);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching beverage:", err);
        setError(err instanceof Error ? err.message : "Failed to load beverage");
      } finally {
        setLoading(false);
      }
    };

    fetchBeverageData();
  }, [beverageId, loadBeverageFromCache, loadGroupsFromCache, findGroupForBeverage]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Spin size="large" tip="Loading beverage details..." />
      </div>
    );
  }

  if (error || !beverage) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Result
          status="404"
          title="404"
          subTitle={error || "Sorry, the beverage you are looking for does not exist."}
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
            <span>Trở về</span>
          </Button>
        </div>

        {/* Header with Group Info */}
        <Card className="mb-4 sm:mb-6 ">
          <Space direction="vertical" size="small" className="w-full">
            {group && (
              <div>
                <Text className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
                  {group.englishName}
                </Text>
                <Text className="text-gray-500 text-xs sm:text-sm inline ml-2">
                  / {group.vietnameseName}
                </Text>
              </div>
            )}
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
              <span className="text-base sm:text-lg font-semibold">Nguyên liệu</span>
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
                    {ingredient.brand && (
                      <Text className="text-gray-500 text-sm sm:text-base">
                        ({ingredient.brand})
                      </Text>
                    )}
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
              <span className="text-base sm:text-lg font-semibold">Cách làm</span>
            </Space>
          }
          className=""
        >
          <Steps
            direction="vertical"
            size="small"
            current={beverage.instructionSteps.length}
            items={beverage.instructionSteps.map((step, index) => ({
              title: <b>Bước {index + 1}</b>,
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
