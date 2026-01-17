/*
 * @Author: zuo
 * @Date: 2026-01-16 13:09:48
 */
'use cache'


async function getGlobalStats() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    totalUsers: '1,203,400',
    activeRegions: 15,
    serverStatus: '99.9% Uptime'
  };
}

export default async function GlobalStats() {
  const stats = await getGlobalStats();
  
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
       <div className="text-center">
         <div className="text-2xl font-bold text-blue-600">{stats.totalUsers}</div>
         <div className="text-xs text-blue-400 uppercase tracking-wide">Total Users</div>
       </div>
       <div className="text-center">
         <div className="text-2xl font-bold text-blue-600">{stats.activeRegions}</div>
         <div className="text-xs text-blue-400 uppercase tracking-wide">Regions</div>
       </div>
       <div className="text-center">
         <div className="text-2xl font-bold text-green-600">{stats.serverStatus}</div>
         <div className="text-xs text-blue-400 uppercase tracking-wide">Status</div>
       </div>
       <div className="col-span-3 text-center text-[10px] text-gray-400 mt-2 border-t border-blue-100 pt-2">
         Cached at: {new Date().toLocaleTimeString()}
       </div>
    </div>
  );
}
