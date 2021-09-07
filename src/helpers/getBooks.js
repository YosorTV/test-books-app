import api from '../api';

export const getBooks = async (setData, setLoading, setError) => {  
  
  try{
    const { data:{ books }, status } = await api.get();
    if(status === 200) {
      setLoading(false);
      setData(books);
    }
  } catch ({response:{ status, statusText }}){
    if(status !== 200) {
      setLoading(false);
      setError(statusText);
    }
  }

}
