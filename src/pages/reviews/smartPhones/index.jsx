import HeadS from "@components/Head";
import ReviewPage from "../../../templates/ReviewPage"

import products from "@smartphones/products"

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"SmartPhones"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <ReviewPage />
    </div>
  );
};