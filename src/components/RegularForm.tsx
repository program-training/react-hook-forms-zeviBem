import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"
import './RegularForm.css'

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormData {
  username: string;
  email: string;
  password:string;
  gender: GenderEnum
}

function RegularForm() {
    const {
      register,
      handleSubmit,
      formState: {errors, isSubmitting},
      reset,
    } = useForm<FormData>()

    const passwordPattern =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/;

  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  

  const onSubmit = (data:FormData) => {
      console.log(data)
      reset();
  };
  

  return (
    <form className="style_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Change Me To React Hook Form</h1>

      <div className="style_div">
      <input
          {...register('username', {
            required: 'User name is required',
            minLength: {
              value: 2,
              message: 'User name must be at least 2 letters',
            },
          })}
          type="text"
          id="username"
          name="username"
          placeholder="Enter UserName"
        />
        <ErrorMessage
        errors={errors}
        name="username"
        render={({ message }) => <p className="error">{message}</p>}
      />
      </div>
      <div className="style_div">
        <input
          {...register('email', {required: "email is required", pattern: {value: emailPattern , message: "its must have a some cher"} })}
          type="email"
          id="email"
          name="email"
          placeholder='Enter Email'
        />
        {errors.email && (
          <p className="error">{`${errors.email.message}`}</p>
        )}
      </div>
      <div className="style_div"> 
        <input
          {...register('password',
            {required: "password is required", pattern: {value: passwordPattern, message: "its must have a some cher"}
        
          })}
          type="text"
          id="password"
          name="password"
          placeholder='Enter Password'
        />
        {errors.password && (
          <p className="error">{`${errors.password.message}`}</p>
        )}
      </div>

      <div className="style_div">
        GenderSelection
          <select {...register("gender",
           {required: "Please select your gender",})}>
            <option value="" id="option">Select gender</option>
            <option value="female" >female</option>
            <option value="male" >male</option>
            <option value="other" >other</option>
        </select>
        {errors.gender && <p className="error">{errors.gender.message}</p>}
      </div>
      <br />
      <br />
      <div>
      <button
       disabled = {isSubmitting}
       type="submit" id="submit">Submit</button>
       </div>
    </form>
  );
}

export default RegularForm;


