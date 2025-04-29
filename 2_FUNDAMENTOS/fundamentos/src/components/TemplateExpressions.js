const TemplateExpressions = () => {
    const name = "Tung tung tung";
    const data = {
        age: 31,
        job : "tralalalala",
    };
    return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Você atua como: {data.job}</p>
    </div>
    );
  };
  
  export default TemplateExpressions;
  