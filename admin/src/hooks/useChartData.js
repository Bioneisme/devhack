import { useRef, useState } from 'react';
import { useEffect } from 'react';

const useChartData = () => {
  const [chartData, setChartData] = useState({});
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const { data } = ref.current;
      setChartData(data);
    }
  }, []);

  return { ref, chartData };
};

export default useChartData;
