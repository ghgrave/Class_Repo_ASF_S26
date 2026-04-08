
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import {object, string, number} from "yup";

const App = () => {

    const userSchema = object(
        {
            fname: string()
                .max(5, "Must be 5 characters!")
                .required("Must fill this out!!!!")
        }
    )

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(userSchema)
    })



    const onSubmit =(data) =>{
        console.log(data)
        // the purpose is to package up the data into JSON and send to server
        // fetch.post(endpoint, {
        //     body: JSON.stringify(data)
        // })
        //     .then()
        //     .then(0)
        //     .catch())
        reset()
    }

    const handleChange = (e) =>{
        // console.log(`${e.target.name} : ${e.target.value}`)
        setValue(e.target.name, e.target.value)
    }

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            First Name:
            <input
                type="text"
                {...register("fname")}
                onChange={handleChange}
            />
          </label>
            {errors.fname && <span>{errors.fname.message}</span>}
            <br/>
            <label htmlFor="">
                Age:
                <input
                    type="number"
                    {...register("age")}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <label htmlFor="">
                Password:
                <input
                    type="password"
                    {...register("password")}
                    onChange={handleChange}
                />
            </label>
            <br/>

            <button type={"submit"}>Submit</button>
            <button type="reset">Reset</button>
        </form>
      </>
  )

}

export default App;