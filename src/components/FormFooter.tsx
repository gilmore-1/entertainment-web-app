import { Link } from "react-router-dom";

const FormFooter = ({
  textone,
  texttwo,
  linki,
}: {
  textone: string;
  texttwo: string;
  linki: string;
}) => {
  return (
    <div className="mt-6 text-center">
      <p className="font-outfit text-sm">
        {textone}
        <Link to={linki} className="text-red-600 hover:underline ml-1">
          {texttwo}
        </Link>
      </p>
    </div>
  );
};

export default FormFooter;
