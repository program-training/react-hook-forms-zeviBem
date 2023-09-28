import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function NameInput() {

    const {
        register,
        formState: {errors},
    } = useForm()


return (

<div>
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
        render={({ message }) => <p>{message}</p>}
      />
      </div>
)}
export default NameInput