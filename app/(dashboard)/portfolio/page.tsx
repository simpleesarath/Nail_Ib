'use client';

import { useState } from 'react';
import { DollarSign, Download, Filter, LineChart, PieChart, Plus, RefreshCw, Sheet } from 'lucide-react';
import { 
  Cell, 
  Legend, 
  Pie, 
  PieChart as RechartsPieChart, 
  ResponsiveContainer, 
  Tooltip,
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

import { DashboardHeader } from '@/components/layout/dashboard-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample portfolio data
const portfolioPositions = [
  { id: 1, symbol: 'AAPL', name: 'Apple Inc', quantity: 100, price: 190.25, value: 19025, cost: 16500, gain: 2525, gainPct: 15.3 },
  { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 50, price: 415.75, value: 20787.5, cost: 18500, gain: 2287.5, gainPct: 12.4 },
  { id: 3, symbol: 'GOOG', name: 'Alphabet Inc', quantity: 30, price: 180.85, value: 5425.5, cost: 4920, gain: 505.5, gainPct: 10.3 },
  { id: 4, symbol: 'AMZN', name: 'Amazon.com Inc', quantity: 25, price: 178.25, value: 4456.25, cost: 4100, gain: 356.25, gainPct: 8.7 },
  { id: 5, symbol: 'TSLA', name: 'Tesla Inc', quantity: 20, price: 242.30, value: 4846, cost: 5200, gain: -354, gainPct: -6.8 },
  { id: 6, symbol: 'META', name: 'Meta Platforms Inc', quantity: 15, price: 485.65, value: 7284.75, cost: 6300, gain: 984.75, gainPct: 15.6 },
  { id: 7, symbol: 'NVDA', name: 'NVIDIA Corporation', quantity: 40, price: 118.90, value: 4756, cost: 3900, gain: 856, gainPct: 21.9 },
  { id: 8, symbol: 'BTC', name: 'Bitcoin', quantity: 0.5, price: 62415.80, value: 31207.9, cost: 28500, gain: 2707.9, gainPct: 9.5 },
];

// Sample allocation data for charts
const assetTypeAllocation = [
  { name: 'Equities', value: 66585 },
  { name: 'Crypto', value: 31207.9 },
  { name: 'Fixed Income', value: 28000 },
  { name: 'Cash', value: 12500 },
];

const sectorAllocation = [
  { name: 'Technology', value: 49253.75 },
  { name: 'Consumer Cyclical', value: 9302.25 },
  { name: 'Communication', value: 12710.25 },
  { name: 'Financial', value: 15000 },
  { name: 'Healthcare', value: 13000 },
  { name: 'Other', value: 39026.65 },
];

const performanceHistory = [
  { date: '2025-01', value: 120000 },
  { date: '2025-02', value: 125000 },
  { date: '2025-03', value: 123000 },
  { date: '2025-04', value: 130000 },
  { date: '2025-05', value: 135000 },
  { date: '2025-06', value: 138000 },
  { date: '2025-07', value: 138293 },
];

// Colors for charts
const CHART_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

export default function PortfolioPage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const totalValue = portfolioPositions.reduce((sum, position) => sum + position.value, 0);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  const refreshPortfolio = () => {
    setIsRefreshing(true);
    
    // Simulate refreshing portfolio data
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Portfolio" />
      
      <main className="flex-1 p-4 lg:p-6 space-y-6">
        {/* Portfolio Overview */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h2 className="text-2xl font-bold">Alpha Strategy Portfolio</h2>
            <p className="text-muted-foreground">As of {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={refreshPortfolio}
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Position
            </Button>
          </div>
        </div>
        
        {/* Portfolio Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Value
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalValue)}</div>
              <p className="text-xs text-green-500">
                +$12,450 (9.8%) YTD
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Day Change
              </CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">+$1,842</div>
              <p className="text-xs text-muted-foreground">
                +1.35% today
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Annual Dividend
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$3,255</div>
              <p className="text-xs text-muted-foreground">
                2.35% yield
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Risk Score
              </CardTitle>
              <Sheet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65/100</div>
              <p className="text-xs text-muted-foreground">
                Moderate risk
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Portfolio Positions */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Holdings</CardTitle>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Asset Type</DropdownMenuItem>
                    <DropdownMenuItem>Sector</DropdownMenuItem>
                    <DropdownMenuItem>Performance</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort By
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Value: High to Low</DropdownMenuItem>
                    <DropdownMenuItem>Value: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Performance: Best to Worst</DropdownMenuItem>
                    <DropdownMenuItem>Performance: Worst to Best</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                  <TableHead className="text-right">Gain/Loss</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioPositions.map((position) => (
                  <TableRow key={position.id}>
                    <TableCell className="font-medium">{position.symbol}</TableCell>
                    <TableCell>{position.name}</TableCell>
                    <TableCell className="text-right">{formatNumber(position.quantity)}</TableCell>
                    <TableCell className="text-right">${position.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right font-medium">
                      ${position.value.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${position.gainPct >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      ${position.gain.toFixed(2)} ({position.gainPct >= 0 ? '+' : ''}{position.gainPct.toFixed(2)}%)
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        {/* Allocation & Performance */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Allocation Charts */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Allocation</CardTitle>
              <CardDescription>Breakdown of your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="asset-type">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="asset-type">Asset Type</TabsTrigger>
                  <TabsTrigger value="sector">Sector</TabsTrigger>
                </TabsList>
                <TabsContent value="asset-type" className="pt-4">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={assetTypeAllocation}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {assetTypeAllocation.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => formatCurrency(Number(value))}
                          />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 mt-4 md:mt-0">
                      {assetTypeAllocation.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
                            ></div>
                            <span>{item.name}</span>
                          </div>
                          <div className="font-medium">
                            {formatCurrency(item.value)} ({(item.value / totalValue * 100).toFixed(1)}%)
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="sector" className="pt-4">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={sectorAllocation}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {sectorAllocation.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => formatCurrency(Number(value))}
                          />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-full md:w-1/2 space-y-3 mt-4 md:mt-0">
                      {sectorAllocation.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div 
                              className="w-3 h-3 rounded-full mr-2" 
                              style={{ backgroundColor: CHART_COLORS[index % CHART_COLORS.length] }}
                            ></div>
                            <span>{item.name}</span>
                          </div>
                          <div className="font-medium">
                            {formatCurrency(item.value)} ({(item.value / totalValue * 100).toFixed(1)}%)
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>Historical value over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={performanceHistory}
                    margin={{ top: 10, right: 10, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `$${value/1000}K`}
                      domain={['dataMin - 5000', 'dataMax + 5000']}
                    />
                    <Tooltip
                      formatter={(value) => [formatCurrency(Number(value)), 'Value']}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full text-sm">
                <div>
                  <p className="text-muted-foreground">Starting Value</p>
                  <p className="font-medium">{formatCurrency(performanceHistory[0].value)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Current Value</p>
                  <p className="font-medium">{formatCurrency(performanceHistory[performanceHistory.length - 1].value)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Return</p>
                  <p className="font-medium text-green-500">
                    +{formatCurrency(performanceHistory[performanceHistory.length - 1].value - performanceHistory[0].value)} 
                    ({((performanceHistory[performanceHistory.length - 1].value / performanceHistory[0].value - 1) * 100).toFixed(2)}%)
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}