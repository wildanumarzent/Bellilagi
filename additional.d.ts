/// <reference types="next-react-svg" />
interface Window {
    ethereum: any
  }
  interface PromiseFulfilledResult<T> {
    status: "fulfilled";
    value: T;
  }
  
  interface PromiseRejectedResult {
    status: "rejected";
    reason: any;
  }
  
  type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;
  