const ResetForm = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <form>
      <input type="email" placeholder="Email" />
      <button type="reset" onClick={reset}>
        Reset
      </button>
    </form>
  );
};

export default ResetForm;
