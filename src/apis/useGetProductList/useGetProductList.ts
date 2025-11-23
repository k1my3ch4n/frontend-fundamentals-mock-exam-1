import { useEffect, useState } from 'react';
import { http, isHttpError } from 'tosslib';

export interface SavingsProduct {
  id: string;
  name: string;
  annualRate: number;
  minMonthlyAmount: number;
  maxMonthlyAmount: number;
  availableTerms: number;
}

const useGetProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [productList, setProductList] = useState<SavingsProduct[]>([]);

  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await http.get<SavingsProduct[]>('/api/savings-products');

        if (!response || response.length === 0) {
          throw new Error('No products found');
        }

        setProductList(response);
      } catch (e) {
        setIsError(true);

        if (isHttpError(e)) {
          console.log(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductList();
  }, []);

  return { productList, isLoading, isError };
};

export default useGetProductList;
