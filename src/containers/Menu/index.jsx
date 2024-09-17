import { useNavigate } from 'react-router-dom';
import { CardProducts } from '../../components/CardProducts';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { Container, Banner, CategoryMenu, ProducstsContainer, CategoryButton } from './styles'
import { useEffect, useState } from 'react';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { /* chamada api para categorias  */

        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];


           
            setCategories(newCategories);

        }
        async function loadProducts() {
            const { data } = await api.get('/products');


            const newProducts = data
                .map(product => ({
                    currencyValue: formatPrice(product.price),
                    ...product,

                }));

            setProducts(newProducts);

        }

        loadCategories();
        loadProducts();
      }, []);
     
      useEffect( () => {
         if(activeCategory === 0){
            setFilteredProducts(products);
         }else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id === activeCategory,
            );

            setFilteredProducts(newFilteredProducts);
         }

      }, [products, activeCategory]);

    return (

        <Container>
            <Banner>
                <h1>
                    O MELHOR <br />
                    HAMBURGER <br />
                    ESTÁ AQUI!

                    <span>Esse cardápio está irresistivel !</span>
                </h1>

            </Banner>
            <CategoryMenu>
             {categories.map(category => (
                <CategoryButton 
                key={category.id}
                $isActiveCategory={category.id === activeCategory}
                onClick={ () => {
                  navigate(
                    {
                        pathname: '/cardapio',
                        search: `?categoria=${category.id}`,
                    },
                    {
                        replace: true,
                    },
                    
                  );
                  setActiveCategory(category.id);
                }}
                
                
                > {category.name} 
                </CategoryButton>
             ))}
            </CategoryMenu>

            <ProducstsContainer>
                {filteredProducts.map((product) => (
                    <CardProducts product={product} key={product.id}/>
                    
                ))}
                
            </ProducstsContainer>

        </Container>
    );



}