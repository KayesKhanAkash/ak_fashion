import { usePathname } from "next/navigation";
import styles from "./styles";
import Link from "next/link";

const LocationNav = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  return (
    <div
      className={`${
        pathname === "/" ? "hidden" : "block"
      } location-nav bg-gray-100 ${styles.paddingX}`}
    >
      <div className={`py-3 container flex justify-between items-center`}>
        <h4 className="text-xl text-heading_color font-semibold">Shop</h4>
        <div>
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            {pathArray.map((item, index) => (
              <li
                key={index}
                className={`${item ? "before:content-['/'] before:px-3" : ""}`}
              >
                <Link href={pathname}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocationNav;
