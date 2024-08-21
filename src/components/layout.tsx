import Header from "./header";
import Footer from "./footer";

type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

export default function Layout({ children }: ComponentWithChildProps) {
  return (
    <>
      <div className="bg-priamry">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
