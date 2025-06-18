import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Total', value: 100, fill: '#3b82f6' },
  { name: 'Present', value: 90, fill: '#10b981' },
  { name: 'Absent', value: 10, fill: '#ef4444' }
];

function AttendanceChart() {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4"> </h3>
      <ResponsiveContainer width="50%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;
