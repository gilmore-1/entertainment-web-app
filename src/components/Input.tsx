const Input = ({
  type,
  id,
  placeholder,
  register,
}: {
  type: string;
  id: string;
  placeholder: string;
  register: any;
}) => (
  <>
    <input
      type={type}
      id={id}
      className="w-full p-3 border-gray-600 outline-none bg-gray-700 rounded focus:border-blue-500"
      placeholder={placeholder}
      {...register}
    />
  </>
);

export default Input;
