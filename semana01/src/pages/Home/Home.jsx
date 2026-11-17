import Header from "../../components/header/Header"
import Card from "../../components/card/Card";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const tecnologias = [
    "JavaScript",
    "React",
    "Node.js"
  ];

  return (
    <>
      <Header />

      <main className="container">
        <section className="intro">
          <h2>Fundamentos do Desenvolvimento Web</h2>
          <p>
            Tecnologias estudadas no curso de Desenvolvimento Web
          </p>
        </section>

        <section className="cards">
          <Card
            titulo="JavaScript"
            descricao="Linguagem de programação que
            adiciona interatividade às páginas."
          />

          <Card
            titulo="React"
            descricao="Biblioteca JavaScript utilizada
            para construir interfaces com componentes."
          />
        </section>

        <section className="tecnologias">
          <h2>Tecnologias estudadas</h2>
          <Lista itens={tecnologias} />
        </section>
      </main>

      <Footer />
    </>
  );
}

