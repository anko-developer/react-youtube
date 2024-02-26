interface HandleSearchChangeInterface<T> {
  target: React.ChangeEvent<T>;
}

interface CommonResponse<T> {
  code: 'SUCCESS' | 'ERROR' | 'FAIL';
  data: T;
  message: string;
  statusCode: number;
}

export { HandleSearchChangeInterface, CommonResponse };