import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("picture", data.picture[0]);

    const res = await fetch("http://localhost:3000/picture", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(res));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="upload-picture">
          <p>Browse...</p>
        </label>
        <input id="upload-picture" ref={register} type="file" name="picture" />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
