import ReviewHeader from '@components/ReviewHeader';
import ProductSummary from '@components/ProductSummary';
import ProsAndCons from '@components/ProsAndCons';
import UserReviews from '@components/UserReviews';
import BuyButton from '@components/BuyButton';

import styles from "@styles/ReviewsPage.module.scss";

const ReviewsPage = ({ 
  title,
  description,
  image,
  descriptionP,
  car1,
  car2,
  car3,
  car4,
  car5,
  asp1,
  asp2,
  asp3,
  asn1,
  asn2,
  asn3,
  pre1,
  res1,
  pre2,
  res2,
  pre3,
  res3,
  url
  }) => {
  
  return (
    <div className={styles.container} >
      <ReviewHeader title={title} description={description} />
      <ProductSummary titleI={title} image={image} descriptionP={descriptionP} car1={car1} car2={car2} car3={car3} car4={car4} car5={car5} />
      <ProsAndCons asp1={asp1} asp2={asp2} asp3={asp3} asn1={asn1} asn2={asn2} asn3={asn3} /> 
      <UserReviews pre1={pre1} res1={res1} pre2={pre2} res2={res2} pre3={pre3} res3={res3} />
      <BuyButton url={url} />
    </div>
  );
};
 
export default ReviewsPage;
 




