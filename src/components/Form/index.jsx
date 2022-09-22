import "./Form.css";
import getSelectOptions from "../../utilities/getSelectOptions";

export default function UserCreationForm() {
  return (
    <form>
      <label htmlFor="full-name">Full Name</label>
      <input name={"full-name"} type={"text"} placeholder={"Full Name"} />
      <div>Validation message gutter for Full Name </div>

      <label htmlFor="email">Email</label>
      <input name={"email"} type={"email"} placeholder={"email@address"} />
      <div>Validation message gutter for Email </div>

      <label htmlFor="password">Password</label>
      <input name={"password"} type={"password"} placeholder={"password"} />
      <div>Validation message gutter for Password </div>

      <label htmlFor="password-confirm">Confirm Password</label>
      <input
        name={"password-confirm"}
        type={"password"}
        placeholder={"confirm password"}
      />
      <div>Validation message gutter for Password Confirm </div>

      <label htmlFor="Occupation">
        Occupation (If there's time, do autocomplete instead of select)
      </label>
      <input type={"text"} placeholder={"Occupation"} />
      <div>Validation message gutter for Occupation. </div>

      <label htmlFor="state">
        State (If there's time, do autocomplete instead of select)
      </label>
      <select name={"state"}>
        <option>State A</option>
        <option>State B</option>
        <option>State B</option>
      </select>
      <div>Validation message gutter for State </div>

      <button type={"submit"} onSubmit={getSelectOptions}>
        Create User
      </button>
      {/* submission status div will be placed outside of form element */}
    </form>
  );
}
