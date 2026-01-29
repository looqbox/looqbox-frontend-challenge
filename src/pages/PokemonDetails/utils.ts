export function clampPercent(v: number) {
  return Math.max(0, Math.min(100, v));
}

export function statPercent(baseStat: number) {
  return clampPercent(Math.round((baseStat / 255) * 100));
}

export function captureRatePercent(captureRate: number) {
  return clampPercent(Math.round((captureRate / 255) * 100));
}

export function dmToMeters(dm: number) {
  return `${(dm / 10).toFixed(1)}m`;
}

export function hgToKg(hg: number) {
  return `${(hg / 10).toFixed(1)}kg`;
}

export function padDex(id: number) {
  return `#${String(id).padStart(3, '0')}`;
}

export function buildStatMap(stats: Array<{ base_stat: number; stat: { name: string } }>) {
  const map = new Map<string, number>();
  for (const s of stats) map.set(s.stat.name, s.base_stat);
  return map;
}
