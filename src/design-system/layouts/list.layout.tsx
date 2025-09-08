import { List } from "antd";

type PaginationData = {
  count: number;
  pageSize: number;
};

type ListLayoutProps<T> = {
  isLoading?: boolean;
  data: (T & { id: number })[];
  paginationData?: PaginationData;
  renderListItem: (item: T) => React.ReactNode;
  onPaginationChange?: (page: number, pageSize: number) => void;
};

export function ListLayout<T>({
  data,
  isLoading,
  renderListItem,
  paginationData,
  onPaginationChange,
}: ListLayoutProps<T>) {
  return (
    <List
      dataSource={data}
      loading={isLoading}
      grid={{ gutter: 16, column: 3 }}
      pagination={{
        className: "my-10!",
        position: "both",
        total: paginationData?.count,
        pageSize: paginationData?.pageSize,
        pageSizeOptions: ["10", "20", "30"],
        onChange(page, pageSize) {
          onPaginationChange?.(page, pageSize);
        },
      }}
      renderItem={(item) => (
        <List.Item key={item.id}>{renderListItem(item)}</List.Item>
      )}
    />
  );
}
