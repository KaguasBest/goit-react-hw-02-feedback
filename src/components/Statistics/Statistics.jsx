import { StatisticsItem, StatisticsList } from './Statistics.style';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {totalFeedback}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};
