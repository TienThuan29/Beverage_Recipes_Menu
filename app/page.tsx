"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { Collapse, Card, Typography, Space, Tag, Input, Spin, Alert, Button } from "antd";
import { DownOutlined, SearchOutlined, ReloadOutlined } from "@ant-design/icons";
import type { BeverageGroup, Beverage } from "../types/beverage";
import Link from "next/link";
import type { CollapseProps } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;

export default function Home() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [beverageGroups, setBeverageGroups] = useState<BeverageGroup[]>([]);
  const [beverages, setBeverages] = useState<Beverage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Local storage keys
  const STORAGE_KEY_GROUPS = "beverage_groups";
  const STORAGE_KEY_BEVERAGES = "beverages";
  const STORAGE_KEY_TIMESTAMP = "beverage_data_timestamp";

  // Load data from localStorage
  const loadFromLocalStorage = useCallback(() => {
    try {
      const storedGroups = localStorage.getItem(STORAGE_KEY_GROUPS);
      const storedBeverages = localStorage.getItem(STORAGE_KEY_BEVERAGES);
      
      if (storedGroups && storedBeverages) {
        const groups = JSON.parse(storedGroups);
        const beveragesData = JSON.parse(storedBeverages);
        setBeverageGroups(groups);
        setBeverages(beveragesData);
        return true;
      }
    } catch (err) {
      console.error("Error loading from localStorage:", err);
    }
    return false;
  }, []);

  // Save data to localStorage
  const saveToLocalStorage = useCallback((groups: BeverageGroup[], beveragesData: Beverage[]) => {
    try {
      localStorage.setItem(STORAGE_KEY_GROUPS, JSON.stringify(groups));
      localStorage.setItem(STORAGE_KEY_BEVERAGES, JSON.stringify(beveragesData));
      localStorage.setItem(STORAGE_KEY_TIMESTAMP, new Date().toISOString());
    } catch (err) {
      console.error("Error saving to localStorage:", err);
    }
  }, []);

  // Fetch data from API
  const fetchDataFromAPI = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }
      
      const response = await fetch("/api/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const groups = data.groups || [];
      const beveragesData = data.beverages || [];
      
      setBeverageGroups(groups);
      setBeverages(beveragesData);
      saveToLocalStorage(groups, beveragesData);
      setError(null);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [saveToLocalStorage]);

  // Initial load: try localStorage first, only fetch from API if no local data
  useEffect(() => {
    const hasLocalData = loadFromLocalStorage();
    if (hasLocalData) {
      setLoading(false);
      // Don't auto-fetch, user must click button to update
    } else {
      // No local data, fetch from API
      fetchDataFromAPI(true);
    }
  }, [loadFromLocalStorage, fetchDataFromAPI]);

  // Refresh button handler
  const handleRefresh = useCallback(() => {
    fetchDataFromAPI(false);
  }, [fetchDataFromAPI]);

  // Helper function to get beverages by group
  const getBeveragesByGroup = useCallback((groupId: string): Beverage[] => {
    // Match beverages to groups using groupId if available, otherwise fallback to ID matching
    return beverages.filter((beverage) => {
      // First try to match by groupId if it exists
      if (beverage.groupId) {
        return beverage.groupId === groupId;
      }
      
      // Fallback: try to match by group name patterns (for backward compatibility)
      const group = beverageGroups.find((g) => g.id === groupId);
      if (!group) return false;
      
      // Simple heuristic matching - this is a fallback if groupId is not set in the sheet
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
      
      const beverageIds = groupBeverageMap[groupId] || [];
      return beverageIds.includes(beverage.id);
    });
  }, [beverages, beverageGroups]);

  const handleChange = (keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  };

  // Filter groups and beverages based on search query
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) {
      return beverageGroups;
    }

    const query = searchQuery.toLowerCase().trim();
    return beverageGroups.filter((group) => {
      // Check if group name matches
      const groupMatches =
        group.englishName.toLowerCase().includes(query) ||
        group.vietnameseName.toLowerCase().includes(query);

      // Check if any beverage in the group matches
      const beverages = getBeveragesByGroup(group.id);
      const beverageMatches = beverages.some(
        (beverage) =>
          beverage.englishName.toLowerCase().includes(query) ||
          beverage.vietnameseName.toLowerCase().includes(query)
      );

      return groupMatches || beverageMatches;
    });
  }, [searchQuery, beverageGroups, getBeveragesByGroup]);

  const renderBeverageCard = useCallback((beverage: Beverage) => (
    <Link
      href={`/${beverage.id}`}
      key={beverage.id}
      className="block mb-3 no-underline"
    >
      <Card
        hoverable
        className="w-full transition-all duration-200 hover:shadow-lg border border-gray-200 rounded-lg"
        bodyStyle={{ padding: "16px" }}
      >
        <Space direction="vertical" size="small" className="w-full">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <Title level={5} className="!mb-1 !text-base sm:!text-lg">
                {beverage.englishName}
              </Title>
              <Text className="text-gray-600 text-sm sm:text-base">
                {beverage.vietnameseName}
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {beverage.ingredients.length > 0 && (
              <>
                <Tag color="blue" className="text-xs sm:text-sm">
                  {beverage.ingredients[0].name}
                </Tag>
                <Tag color="green" className="text-xs sm:text-sm">
                  {beverage.ingredients[0].quantity} {beverage.ingredients[0].unitsOfMeasurement}
                </Tag>
                {beverage.ingredients.length > 1 && (
                  <Tag color="default" className="text-xs sm:text-sm">
                    +{beverage.ingredients.length - 1} more
                  </Tag>
                )}
              </>
            )}
          </div>
        </Space>
      </Card>
    </Link>
  ), []);

  // Create collapse items from filtered groups
  const collapseItems: CollapseProps["items"] = useMemo(() => {
    return filteredGroups.map((group: BeverageGroup) => {
      // Inline filtering logic to avoid dependency issues
      const allBeverages = getBeveragesByGroup(group.id);
      const beverages = !searchQuery.trim()
        ? allBeverages
        : allBeverages.filter((beverage) => {
            const query = searchQuery.toLowerCase().trim();
            return (
              beverage.englishName.toLowerCase().includes(query) ||
              beverage.vietnameseName.toLowerCase().includes(query)
            );
          });
      return {
        key: group.id,
        label: (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full pr-4">
            <div>
              <Title
                level={4}
                className="!mb-1 !text-base sm:!text-lg md:!text-xl !font-semibold"
              >
                {group.englishName}
              </Title>
              <Text className="text-gray-600 text-sm sm:text-base">
                {group.vietnameseName}
              </Text>
            </div>
            <Tag
              color="default"
              className="mt-2 sm:mt-0 text-xs sm:text-sm"
            >
              {beverages.length} đồ uống
            </Tag>
          </div>
        ),
        children: (
          <div className="pt-2">
            {beverages.length > 0 ? (
              <div className="grid grid-cols-1 gap-3">
                {beverages.map(renderBeverageCard)}
              </div>
            ) : (
              <Text className="text-gray-500">
                No beverages match your search in this group
              </Text>
            )}
          </div>
        ),
        className: "!border-b !border-gray-200 last:!border-b-0",
      };
    });
  }, [filteredGroups, searchQuery, renderBeverageCard, getBeveragesByGroup]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Spin size="large" tip="Loading beverages..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4">
        <Alert
          message="Error Loading Data"
          description={error}
          type="error"
          showIcon
          action={
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full ">
      <main className="container mx-auto px-4 py-4 sm:px-6 sm:py-6 md:py-8 max-w-4xl">
        {/* Header Section with Search */}
        <div className="mb-6 sm:mb-8">
          <div className="text-center mb-4 sm:mb-6">
            <Title
              level={1}
              className="!mb-2 !text-2xl sm:!text-3xl md:!text-4xl !font-bold mt-5"
            >
              Recipes Menu
            </Title>
            {/* <Text className="text-gray-600 text-sm sm:text-base">
              Search and explore beverage recipes
            </Text> */}
          </div>

          {/* Update new data from google sheet */}
          <div className="flex justify-center mb-4">
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={handleRefresh}
              loading={refreshing}
              size="large"
              className="shadow-sm"
            >
              {refreshing ? "Đang cập nhật..." : "Cập nhật dữ liệu"}
            </Button>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto">
            <Search
              placeholder="Search Nhóm đồ uống hoặc tên đồ uống"
              allowClear
              size="large"
              enterButton={<SearchOutlined />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              style={{
                borderRadius: "8px",
              }}
            />
            {searchQuery && (
              <Text className="text-gray-500 text-xs sm:text-sm mt-2 block text-center">
                Found {filteredGroups.length} group(s) matching your search
              </Text>
            )}
          </div>
        </div>

        <div className="w-full">
          {filteredGroups.length > 0 ? (
            <Collapse
              activeKey={activeKeys}
              onChange={handleChange}
              expandIcon={({ isActive }) => (
                <DownOutlined
                  rotate={isActive ? 180 : 0}
                  className="text-gray-600"
                />
              )}
              className="bg-white rounded-lg shadow-sm"
              size="large"
              items={collapseItems}
            />
          ) : (
            <Card className="text-center py-8 sm:py-12">
              <Text className="text-gray-500 text-base sm:text-lg">
                No groups or beverages found matching &quot;{searchQuery}&quot;
              </Text>
              <br />
              <Text className="text-gray-400 text-sm sm:text-base mt-2 block">
                Try searching with different keywords
              </Text>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
