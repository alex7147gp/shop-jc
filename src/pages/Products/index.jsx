import HeadS from "@components/Head";
import Page from "../../templates/Page"

export default function Products() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Products"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <Page 
       title={"Products"}
       description={"the best Products"}
      />
    </div>
  );
};