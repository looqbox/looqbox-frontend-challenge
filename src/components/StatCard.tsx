import { Typography } from 'antd';

const { Text } = Typography;

interface StatCardProps {
  label: string;
  value: string;
  className?: string;
}

const StatCard = ({ label, value, className }: StatCardProps) => (
  <div className={`flex flex-col rounded-lg p-2 ${className}`}>
    <Text type="secondary" className="text-xs font-semibold">
      {label}
    </Text>
    <Text className={`font-semibold`}>{value}</Text>
  </div>
);

export default StatCard;
