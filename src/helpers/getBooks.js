import api from '../api';

export const getBooks = async (setData, setLoading, setError) => {  
  const { data:{ books }, status, statusText } = await api.get();
  

  if(status === 200) {
    setData(books);
    setLoading(false);
  }

  if(status !== 200) {
    setLoading(false);
    setError(statusText)
  }
  
}