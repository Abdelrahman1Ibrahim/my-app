"use client";

import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";
import styles from "./todo-status-chart.module.css";
import type { todo } from "../../../types/index";

interface TodoStatusChartProps {
  todos: todo[];
}

const STATUS_COLORS = {
  completed: "hsl(var(--completed))",
  inProgress: "hsl(var(--inProgress))",
  notStarted: "hsl(var(--notStarted))"
};

const STATUS_LABELS = {
  completed: "Completed",
  inProgress: "In Progress",
  notStarted: "Not Started"
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className={styles.customTooltip}>
        <div className={styles.tooltipLabel}>{data.label}</div>
        <div className={styles.tooltipValue}>
          Count: {data.count} (
          {((data.count / payload[0].payload.total) * 100).toFixed(0)}%)
        </div>
      </div>
    );
  }
  return null;
};

export function TodoStatusChart({ todos }: TodoStatusChartProps) {
  const chartData = useMemo(() => {
    const statusCounts = todos.reduce((acc, todo) => {
      acc[todo.status] = (acc[todo.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      count,
      label: STATUS_LABELS[status as keyof typeof STATUS_LABELS],
      fill: STATUS_COLORS[status as keyof typeof STATUS_COLORS],
      total: todos.length
    }));
  }, [todos]);

  const totalTodos = todos.length;

  if (totalTodos === 0) {
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Todo Status Overview</h3>
          <p className={styles.cardDescription}>
            Distribution of todos by status
          </p>
        </div>
        <div className={`${styles.cardContent} ${styles.emptyState}`}>
          No todos to display
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Todo Status Overview</h3>
        <p className={styles.cardDescription}>
          Distribution of {totalTodos} todo{totalTodos !== 1 ? "s" : ""} by
          status
        </p>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ label, count, percent }) =>
                  `${label}: ${count} (${((percent || 0) * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
