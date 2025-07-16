import NavigationItems from "./NavigationItems";
import useNavigationConfig from "../../utils/useNavigationConfig";

const Navigation = () => {
  const navigationObj = useNavigationConfig();
  return (
    <ul className="bg-gray-900 fixed bottom-0 left-0 right-0 w-screen h-12 grid grid-cols-5 justify-items-center p-1 content-center">
      {navigationObj.map((each) => (
        <NavigationItems
          name={each.name}
          icon={each.icon}
          key={each.name}
          path={each.path}
        />
      ))}
    </ul>
  );
};

export default Navigation;
