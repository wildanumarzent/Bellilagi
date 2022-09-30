import { useEffect, useState } from 'react'

{/* How to Use */}
{/*
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])
*/}

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
