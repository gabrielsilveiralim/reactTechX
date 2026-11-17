import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Button from "../../components/ui/Button"
import Badge from "../../components/ui/Badge"
import Card from "../../components/ui/Card"
import Input from "../../components/ui/Input"
import Alert from "../../components/ui/Alert"
import Lista from "../../components/lista/Lista"

export default function Home() {
  const tecnologias = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
          <section className="mb-10">

            <h2 className="mt-4 text-3xl font-bold ">
              Design System
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Uma coleção de componentes React reutilizáveis,
              estilizados com Tailwind CSS
            </p>
          </section>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              titulo="Botões"
              descricao="Componentes de botão com diferentes variantes">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={() => window.alert("Ação principal!")}>
                  Primário
                </Button>

                <Button variant="secondary">
                  Secundário
                </Button>

                <Button variant="danger">
                  Excluir
                </Button>
              </div>
            </Card>

            <Card
              titulo="Badges"
              descricao="Etiquetas visuais para identificar estados">
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Informação</Badge>
                <Badge variant="success">Ativo</Badge>
                <Badge variant="warning">Pendente</Badge>
                <Badge variant="danger">Inativo</Badge>
                <Badge variant="neutral">Neutro</Badge>
              </div>
            </Card>

            <Card
              titulo="Inputs"
              descricao="Campos reutilizáveis para entrada de dados">
              <div className="space-y-4">
                <Input
                  id="nome"
                  label="Nome completo"
                  placeholder="Digite seu nome"/>

                <Input
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder="exemplo@email.com"/>
              </div>
            </Card>

            <Card
              titulo="Tecnologias"
              descricao="Exemplo de lista dinâmica utilizando props">
              <Lista itens={tecnologias} />
            </Card>
          </div>

          <section className="mt-10">
            <h2 className="mb-5 text-xl font-semibold">
              Componentes de alerta
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Alert variant="success">
                Operação realizada com sucesso.
              </Alert>

              <Alert variant="error">
                Não foi possível concluir a operação.
              </Alert>

              <Alert variant="warning">
                Verifique os dados antes de continuar.
              </Alert>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

