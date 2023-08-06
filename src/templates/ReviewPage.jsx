import ReviewHeader from '@components/ReviewHeader';
import ProductSummary from '@components/ProductSummary';
import ProsAndCons from '@components/ProsAndCons';
import UserReviews from '@components/UserReviews';
import BuyButton from '@components/BuyButton';

import styles from "@styles/ReviewsPage.module.scss"

const ReviewsPage = () => {
  
  return (
    <div className={styles.container} >
      <ReviewHeader />
      <ProductSummary />
      <ProsAndCons /> 
      <UserReviews />
      <BuyButton />
    </div>
  );
};
 
export default ReviewsPage;






