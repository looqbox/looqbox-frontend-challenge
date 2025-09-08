import { useEffect, useState } from 'react';
import type { DeviceType } from '../models/types/device.type';

export function useDevice(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setDevice('mobile');
      } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    checkDevice(); // roda na primeira vez

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return device;
}
