import { useState } from 'react';

type AvailableTerm = 6 | 12 | 24;

const useSavingsForm = () => {
  const [targetAmount, setTargetAmount] = useState<string>('');
  const [monthAmount, setMonthAmount] = useState<string>('');
  const [availableTerm, setAvailableTerm] = useState<AvailableTerm>(12);

  const handleTargetAmountChange = (value: string) => {
    setTargetAmount(value.replace(/\D/g, ''));
  };

  const handleMonthAmountChange = (value: string) => {
    setMonthAmount(value.replace(/\D/g, ''));
  };

  const handleAvailableTermChange = (value: AvailableTerm) => {
    setAvailableTerm(value);
  };

  return {
    targetAmount,
    monthAmount,
    availableTerm,
    handleTargetAmountChange,
    handleMonthAmountChange,
    handleAvailableTermChange,
  };
};

export default useSavingsForm;
