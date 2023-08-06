import HeadS from "@components/Head";
import Home from "../templates/Home"

export default function HomeOne() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"JC shop"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <Home />
    </div>
  );
};
