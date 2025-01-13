import Button from "../components/Button";
import FormFooter from "../components/FormFooter";
import Input from "../components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
};
const LoginIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg min-w-[400px]">
        <h1 className="font-outfit text-3xl font-semibold mb-8">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                register={register("email", { required: true })}
              />
              {errors.email && (
                <span className="font-outfit text-[13px] font-normal leading-normal text-[#FC4747] text-right">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                register={register("password", { required: true })}
              />
              {errors.password && (
                <span className="font-outfit text-[13px] font-normal leading-normal text-[#FC4747] text-right	">
                  This field is required
                </span>
              )}
            </div>
            <Button
              text="Login to your account"
              onClick={handleSubmit(onSubmit)}
            />{" "}
          </div>
        </form>
        <FormFooter
          textone="Don't have an account?"
          texttwo="Sign Up"
          linki="/register"
        />
      </div>
    </div>
  );
};

export default LoginIn;
