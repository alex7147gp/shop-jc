import Head from "next/head";
import React, { useContext } from "react";
import WrapperOrder from '@containers/WrapperOrder';
import AppContext from "@context/AppContext";
import styles from "@styles/Checkout.module.scss";

const Checkout = () => {
  
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles["Checkout-content"]}>
            <div className={styles.order}>
              <p>
                <span>{state.cart.length} articles</span>
              </p>
            </div>
          </div>
          <WrapperOrder />
        </div>
      </div>
    </>
  );
};

export default Checkout;
