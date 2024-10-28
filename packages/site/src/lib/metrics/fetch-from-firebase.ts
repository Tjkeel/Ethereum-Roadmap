/**
 * 
 * @param url 
 * @param name 
 * @param validateData 
 * @param unwrapData 
 * @param mockValue 
 * @returns 
 */
export function makeFirebaseFetch<DataType, ReturnType>(
  url: string,
  name: string,
  validateData: (data: DataType) => boolean,
  unwrapData: (data: DataType) => ReturnType,
  mockValue: ReturnType,
): {
  impl: () => Promise<ReturnType>,
  mock: () => Promise<ReturnType>,
 } {
  return {
    impl: async () => fetch(url)
      .then(response => response.json())
      .catch((cause) => {
        throw new Error(`Error fetching ${name}`, { cause });
      })
      .then(data => {
        if (!validateData(data)) {
          throw new Error(`Failed to fetch ${name}`, { cause: data });
        }
        return unwrapData(data);
      }),
    mock: async () => {
      const delay = Math.floor(30 + 30 * Math.random())
      return new Promise(
        (resolve) => setTimeout(() => resolve(mockValue), delay),
      );
    },
  }
}
