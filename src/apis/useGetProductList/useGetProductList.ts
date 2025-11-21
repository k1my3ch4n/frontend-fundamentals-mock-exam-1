import { useEffect, useState } from 'react';
import { http, isHttpError } from 'tosslib';

interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number;
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
  availableTerms: number;
}

const useGetProductList = () => {
  const [productList, setProductList] = useState<SavingsProduct[]>([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await http.get<SavingsProduct[]>('/api/savings-products');

        if (!response || response.length === 0) {
          throw new Error('No products found');
        }

        setProductList(response);
      } catch (e) {
        if (isHttpError(e)) {
          console.log(e.message);
        }
      }
    };

    fetchProductList();
  }, []);

  return { productList };
};

export default useGetProductList;
