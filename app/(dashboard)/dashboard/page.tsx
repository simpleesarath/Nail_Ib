'use client';

import { useEffect, useState } from 'react';
import { Activity, ArrowDown, ArrowUp, DollarSign, PiggyBank, RefreshCw } from 'lucide-react';
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend,
  Line,
  LineChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardHeader } from '@/components/layout/dashboard-header';
import { Progress } from '@/components/ui/progress';

// Sample data - would come from API in real app
const portfolioData = [
  { date: '2025-01', value: 4000, previous: 3800 },
  { date: '2025-02', value: 4200, previous: 4000 },
  { date: '2025-03', value: 4100, previous: 4200 },
  { date: '2025-04', value: 4400, previous: 4100 },
  { date: '2025-05', value: 4700, previous: 4400 },
  { date: '2025-06', value: 5000, previous: 4700 },
  { date: '2025-07', value: 4800, previous: 5000 },
];

const assetAllocation = [
  { name: 'Equities', value: 45 },
  { name: 'Fixed Income', value: 30 },
  { name: 'Alternatives', value: 15 },
  { name: 'Cash', value: 10 },
];

const recentTrades = [
  { id: 1, symbol: 'AAPL', direction: 'buy', quantity: 100, price: 190.25, date: '2025-07-01', status: 'completed' },
  { id: 2, symbol: 'MSFT', direction: 'sell', quantity: 50, price: 415.75, date: '2025-06-30', status: 'completed' },
  { id: 3, symbol: 'TSLA', direction: 'buy', quantity: 25, price: 242.30, date: '2025-06-29', status: 'completed' },
  { id: 4, symbol: 'GOOG', direction: 'buy', quantity: 10, price: 180.85, date: '2025-06-28', status: 'pending' },
];

const marketData = [
  { time: '09:30', SP500: 5400, NASDAQ: 17200, DOW: 40100 },
  { time: '10:00', SP500: 5420, NASDAQ: 17250, DOW: 40150 },
  { time: '10:30', SP500: 5415, NASDAQ: 17230, DOW: 40130 },
  { time: '11:00', SP500: 5430, NASDAQ: 17260, DOW: 40180 },
  { time: '11:30', SP500: 5440, NASDAQ: 17280, DOW: 40200 },
  { time: '12:00', SP500: 5435, NASDAQ: 17270, DOW: 40190 },
  { time: '12:30', SP500: 5445, NASDAQ: 17290, DOW: 40210 },
];

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [riskScore, setRiskScore] = useState(65);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateRiskMetrics = () => {
    setIsUpdating(true);
    
    // Simulate risk calculation
    setTimeout(() => {
      setRiskScore(Math.floor(Math.random() * 30) + 50); // Random between 50-80
      setIsUpdating(false);
    }, 1500);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Dashboard" />
      
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total AUM
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4.89M</div>
              <p className="text-xs text-muted-foreground">
                +2.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                YTD Return
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-1">+12.4%</div>
              <p className="text-xs text-muted-foreground">
                +4.2% above benchmark
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Cash Position
              </CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$489K</div>
              <p className="text-xs text-muted-foreground">
                10% of portfolio
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Risk Score
              </CardTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-4 w-4 p-0" 
                onClick={updateRiskMetrics}
                disabled={isUpdating}
              >
                <RefreshCw className={`h-4 w-4 text-muted-foreground ${isUpdating ? 'animate-spin' : ''}`} />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{riskScore}/100</div>
              <Progress value={riskScore} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        
        {/* Date and Time */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Portfolio Overview</h2>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString()} • {currentTime}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid gap-4 md:grid-cols-7">
          {/* Portfolio Chart - 4 columns */}
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>6-month performance compared to benchmark</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}K`} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip 
                    formatter={(value) => [`$${value}K`, 'Value']}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--chart-1))" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    name="Portfolio"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="previous" 
                    stroke="hsl(var(--chart-2))" 
                    fillOpacity={1} 
                    fill="url(#colorPrevious)" 
                    name="Benchmark"
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          {/* Asset Allocation - 3 columns */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Current portfolio breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assetAllocation} layout="vertical">
                  <XAxis type="number" tick={{ fontSize: 12 }} />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                  <Bar 
                    dataKey="value" 
                    radius={[0, 4, 4, 0]}
                    barSize={30}
                  >
                    {assetAllocation.map((entry, index) => (
                      <rect key={`cell-${index}`} fill={`hsl(var(--chart-${(index % 5) + 1}))`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Market Data & Recent Trades */}
        <div className="grid gap-4 md:grid-cols-7">
          {/* Market Data - 4 columns */}
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Market Watch</CardTitle>
              <CardDescription>Real-time market indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="indices" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="indices">Indices</TabsTrigger>
                  <TabsTrigger value="forex">Forex</TabsTrigger>
                  <TabsTrigger value="crypto">Crypto</TabsTrigger>
                </TabsList>
                <TabsContent value="indices" className="space-y-4">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={marketData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} domain={['dataMin - 50', 'dataMax + 50']} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="SP500" 
                        stroke="hsl(var(--chart-1))" 
                        activeDot={{ r: 8 }} 
                        name="S&P 500"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="NASDAQ" 
                        stroke="hsl(var(--chart-2))" 
                        name="NASDAQ"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="DOW" 
                        stroke="hsl(var(--chart-3))" 
                        name="DOW"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="forex">
                  <div className="flex items-center justify-center h-[250px] border rounded-md border-dashed">
                    <p className="text-sm text-muted-foreground">Forex data feed would appear here</p>
                  </div>
                </TabsContent>
                <TabsContent value="crypto">
                  <div className="flex items-center justify-center h-[250px] border rounded-md border-dashed">
                    <p className="text-sm text-muted-foreground">Crypto data feed would appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Recent Trades - 3 columns */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Trades</CardTitle>
              <CardDescription>Latest portfolio transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTrades.map((trade) => (
                  <div 
                    key={trade.id} 
                    className="flex items-center justify-between p-3 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        trade.direction === 'buy' 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {trade.direction === 'buy' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-semibold">{trade.symbol}</p>
                        <p className="text-xs text-muted-foreground">{trade.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(trade.price * trade.quantity)}</p>
                      <p className="text-xs text-muted-foreground">
                        {trade.quantity} × ${trade.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Trades</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}