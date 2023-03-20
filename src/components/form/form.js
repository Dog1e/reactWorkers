export default function Form() {
  function handleSubmit(data) {
    data.preventDefault();

    const form = data.target;
    const formTemp = new FormData(form);

    const formData = Object.fromEntries(formTemp.entries());
    console.log(formData);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      Imię:
      <input name="name" type="text" />
      Nazwisko:
      <input name="surname" type="text" />
      Data urodzenia:
      <input name="birthDate" type="date" />
      Wprowadź rolę w zespole:
      <select name="role">
        <option value="project manager">project manager</option>
        <option value="UX/UI designer">UX/UI designer</option>
        <option value="front-end">front-end</option>
        <option value="back-end">back-end</option>
        <option value="tester">tester</option>
      </select>
      Wprowadź technologię:<select name="technology"></select>
      <button type="submit">Dodaj pracownika</button>
    </form>
  );
}
