import { FaGithub } from "react-icons/fa";
import linkedInLogo from "../../assets/linkedIn.png";
import { FcGoogle } from "react-icons/fc";
const SocialAcccounts = () => {
  return (
    <>
      <p className="text-white font-thin my-1">connect with social accounts!</p>
      <div className="w-6/12 flex justify-between items-center my-2 gap-x-5">
        <button>
          <FcGoogle className="w-8 h-8 " />
        </button>
        <button>
          <FaGithub className="w-8 h-8 text-white" />
        </button>
        <button>
          <img
            src={linkedInLogo}
            alt="linkedInLogo"
            className="w-[30px] h-[30px]"
          />
        </button>
      </div>
    </>
  );
};

export default SocialAcccounts;
