'use client';

import { useState } from 'react';
import { CandlestickChart, Clock, DollarSign, Search, SlidersHorizontal, TrendingDown, TrendingUp } from 'lucide-react';
import { 
  Area, 
  AreaChart, 
  Line,
  LineChart,
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

import { DashboardHeader } from '@/components/layout/dashboard-header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Sample market data
const stockData = [
  { symbol: 'AAPL', name: 'Apple Inc', price: 190.25, change: 2.15, changePct: 1.14, volume: 58254000 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 415.75, change: 5.40, changePct: 1.31, volume: 23541000 },
  { symbol: 'GOOG', name: 'Alphabet Inc', price: 180.85, change: -0.65, changePct: -0.36, volume: 15682000 },
  { symbol: 'AMZN', name: 'Amazon.com Inc', price: 178.25, change: 1.05, changePct: 0.59, volume: 32456000 },
  { symbol: 'TSLA', name: 'Tesla Inc', price: 242.30, change: -4.20, changePct: -1.70, volume: 48721000 },
  { symbol: 'META', name: 'Meta Platforms Inc', price: 485.65, change: 9.80, changePct: 2.06, volume: 19874000 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 118.90, change: 3.45, changePct: 2.99, volume: 85642000 },
  { symbol: 'BRK.A', name: 'Berkshire Hathaway Inc', price: 628415.00, change: 1265.00, changePct: 0.20, volume: 674000 },
];

const cryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 62415.80, change: 1245.65, changePct: 2.04, volume: 24560000000 },
  { symbol: 'ETH', name: 'Ethereum', price: 3485.25, change: 105.40, changePct: 3.12, volume: 15784000000 },
  { symbol: 'SOL', name: 'Solana', price: 142.30, change: -2.15, changePct: -1.49, volume: 3256000000 },
  { symbol: 'XRP', name: 'XRP', price: 0.5825, change: 0.0124, changePct: 2.18, volume: 1852000000 },
  { symbol: 'ADA', name: 'Cardano', price: 0.4625, change: -0.0085, changePct: -1.81, volume: 958000000 },
];

// Sample chart data for a selected asset
const chartData = [
  { time: '9:30', price: 190.25 },
  { time: '10:00', price: 190.75 },
  { time: '10:30', price: 191.25 },
  { time: '11:00', price: 190.80 },
  { time: '11:30', price: 191.50 },
  { time: '12:00', price: 192.00 },
  { time: '12:30', price: 191.75 },
  { time: '13:00', price: 192.50 },
  { time: '13:30', price: 193.25 },
  { time: '14:00', price: 193.00 },
  { time: '14:30', price: 192.75 },
  { time: '15:00', price: 193.50 },
  { time: '15:30', price: 194.25 },
  { time: '16:00', price: 195.00 },
];

const cryptoChartData = [
  { time: '00:00', price: 60125.50 },
  { time: '02:00', price: 60350.75 },
  { time: '04:00', price: 60875.25 },
  { time: '06:00', price: 61200.80 },
  { time: '08:00', price: 61550.30 },
  { time: '10:00', price: 61425.00 },
  { time: '12:00', price: 61750.75 },
  { time: '14:00', price: 62125.50 },
  { time: '16:00', price: 62450.25 },
  { time: '18:00', price: 62350.00 },
  { time: '20:00', price: 62250.75 },
  { time: '22:00', price: 62415.80 },
];

export default function MarketsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(stockData[0]);
  const [selectedTab, setSelectedTab] = useState('stocks');
  
  // Format numbers for display
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2,
      maximumFractionDigits: value < 1 ? 4 : 2,
    }).format(value);
  };
  
  const formatVolume = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(2)}B`;
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K`;
    }
    return value.toString();
  };
  
  const handleAssetSelect = (asset: any) => {
    setSelectedAsset(asset);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader title="Markets" />
      
      <main className="flex-1 p-4 lg:p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Market List Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search markets..."
                  className="pl-8"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filters</span>
              </Button>
            </div>
            
            <Tabs defaultValue="stocks" onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="stocks">Stocks</TabsTrigger>
                <TabsTrigger value="crypto">Crypto</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stocks" className="space-y-4 mt-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Watchlist</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Symbol</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stockData.map((stock) => (
                          <TableRow 
                            key={stock.symbol}
                            onClick={() => handleAssetSelect(stock)}
                            className={`cursor-pointer ${selectedAsset.symbol === stock.symbol ? 'bg-muted' : ''}`}
                          >
                            <TableCell className="font-medium">
                              {stock.symbol}
                            </TableCell>
                            <TableCell>
                              {formatCurrency(stock.price)}
                            </TableCell>
                            <TableCell className={`text-right ${stock.changePct >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                              {stock.changePct >= 0 ? '+' : ''}{stock.changePct.toFixed(2)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="crypto" className="space-y-4 mt-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Crypto Watchlist</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Symbol</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="text-right">Change</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cryptoData.map((crypto) => (
                          <TableRow 
                            key={crypto.symbol}
                            onClick={() => handleAssetSelect(crypto)}
                            className={`cursor-pointer ${selectedAsset.symbol === crypto.symbol ? 'bg-muted' : ''}`}
                          >
                            <TableCell className="font-medium">
                              {crypto.symbol}
                            </TableCell>
                            <TableCell>
                              {formatCurrency(crypto.price)}
                            </TableCell>
                            <TableCell className={`text-right ${crypto.changePct >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                              {crypto.changePct >= 0 ? '+' : ''}{crypto.changePct.toFixed(2)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Market Detail Section */}
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{selectedAsset.name} ({selectedAsset.symbol})</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold">{formatCurrency(selectedAsset.price)}</span>
                      <span className={`flex items-center ${selectedAsset.changePct >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {selectedAsset.changePct >= 0 ? (
                          <TrendingUp className="h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-1" />
                        )}
                        {selectedAsset.changePct >= 0 ? '+' : ''}{selectedAsset.change.toFixed(2)} ({selectedAsset.changePct.toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Buy</Button>
                    <Button variant="outline">Sell</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="chart">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="chart">Price Chart</TabsTrigger>
                    <TabsTrigger value="depth">Market Depth</TabsTrigger>
                  </TabsList>
                  <TabsContent value="chart" className="pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Last updated: {new Date().toLocaleTimeString()}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">1D</Button>
                        <Button variant="outline" size="sm">1W</Button>
                        <Button variant="outline" size="sm">1M</Button>
                        <Button variant="outline" size="sm">YTD</Button>
                        <Button variant="outline" size="sm">1Y</Button>
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart 
                        data={selectedTab === 'crypto' ? cryptoChartData : chartData}
                        margin={{ top: 10, right: 10, left: 20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop 
                              offset="5%" 
                              stopColor={selectedAsset.changePct >= 0 ? "hsl(142, 76%, 36%)" : "hsl(0, 84%, 60%)"}
                              stopOpacity={0.8}
                            />
                            <stop 
                              offset="95%" 
                              stopColor={selectedAsset.changePct >= 0 ? "hsl(142, 76%, 36%)" : "hsl(0, 84%, 60%)"}
                              stopOpacity={0.2}
                            />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                        <YAxis 
                          domain={['dataMin - 0.5', 'dataMax + 0.5']} 
                          tick={{ fontSize: 10 }}
                          tickFormatter={(value) => value.toFixed(2)}
                        />
                        <Tooltip 
                          formatter={(value) => [formatCurrency(Number(value)), 'Price']} 
                          labelFormatter={(label) => `Time: ${label}`}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="price" 
                          stroke={selectedAsset.changePct >= 0 ? "hsl(142, 76%, 36%)" : "hsl(0, 84%, 60%)"} 
                          fillOpacity={1} 
                          fill="url(#colorPrice)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </TabsContent>
                  <TabsContent value="depth">
                    <div className="flex items-center justify-center h-[300px] mt-4 border rounded-md border-dashed">
                      <div className="text-center">
                        <CandlestickChart className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Market depth visualization would appear here</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Volume</p>
                    <p className="font-medium">{formatVolume(selectedAsset.volume)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="font-medium">$1.2T</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">52w Range</p>
                    <p className="font-medium">$145.26 - $195.34</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            
            {/* Market News */}
            <Card>
              <CardHeader>
                <CardTitle>Related News</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex-1">
                        <h3 className="font-medium hover:text-primary cursor-pointer">
                          {selectedAsset.name} reports strong quarterly earnings, beats expectations
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {new Date().toLocaleDateString()} • Financial Times
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All News</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}