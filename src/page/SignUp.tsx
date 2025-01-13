import Button from "../components/Button";
import FormFooter from "../components/FormFooter";
import Input from "../components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
  Repeatpassword: string;
};
const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const password = watch("password");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg min-w-[400px]">
        <h1 className="font-outfit text-3xl font-semibold mb-8">Sign Up</h1>
        <form>
          <div className="space-y-6">
            <div>
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                register={register("email", {
                  required: "Message is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="font-outfit text-[13px] font-normal leading-normal text-[#FC4747] text-right	">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                register={register("password", {
                  required: "Message is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must have at most 20 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="font-outfit text-[13px] font-normal leading-normal text-[#FC4747] text-right	">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div>
              <Input
                type="password"
                id="Repeatpassword"
                placeholder="Repeat password"
                register={register("Repeatpassword", {
                  required: "Message is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must have at most 20 characters",
                  },
                })}
              />
              {errors.Repeatpassword && (
                <span className="font-outfit text-[13px] font-normal leading-normal text-[#FC4747] text-right	">
                  {errors.Repeatpassword.message}
                </span>
              )}
            </div>
            <Button
              text="create your account"
              onClick={handleSubmit(onSubmit)}
            />{" "}
          </div>
        </form>
        <FormFooter
          textone="Already have an account?"
          texttwo="Login"
          linki="/login"
        />
      </div>
    </div>
  );
};

export default SignUp;
