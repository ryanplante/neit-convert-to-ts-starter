import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Products';

interface Props {
  product: Product;
}

export const ProductListRow: React.FC<Props> = ({ product }: Props) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
      }}
    >
      <Thumbnail description={product.description} image={product.image} width={0} />
      <Link key={product.id} to={`${product.id}`}>
        {product.title}
      </Link>
    </Card>
  );
};
