
import { useGetGoodsQuery} from './redux';

function App() {
  //const [count, setCount] = useState('');
  //const [newProduct, setNewProduct] = useState('');
  const {data = [], isLoading} = useGetGoodsQuery();
  //const [addProduct, {isError}] = useAddProductMutation();
  //const [deleteProduct] = useDeleteProductMutation();

  /* const handleAddProduct = async () => {
    if(newProduct) {
      await addProduct({name: newProduct}).unwrap();
      setNewProduct('');
    }
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id).unwrap();
  }
*/
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
 </ul>
   
</div>
);
}

export default App;