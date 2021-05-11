import React from "react";
import Nav from "../components/Nav";

const Sobrepag = () => {

    return(
        <div>
            <Nav /><hr>
            </hr>
            <p class="font-monospace">
            Olá.</p>
            <a style={{fontFamily:"Garamond "}}>Meu nome é João Victhor Nogaroli, sou o criador do projeto.<br />
            O projeto se baseia em um FrontEnd e BackEnd</a>.<br />
        <br />
        <hr/>
        <strong >Quais linguagens foram usadas?</strong>
        
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-black" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        FrontEnd
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body" style={{fontFamily:'Courier New'}}>
                    Foi utilizado o <strong>React</strong> no frontend.<br />
                    Na parte gráfica e alguns efeitos visuais, foi utilizado o Bootstrap com auxílio do Bootstrap Studio.<br />
                    Foram criados Components e Pages.<br />
                    Para Rotas, foi instalado o react-router-dom.<br />
                    Quanto às extrações de dados, foram feitas através do UseEffect e UseState combinados com fetch.<br />
                    FrontEnd hospedado no <strong>Vercel</strong>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-black collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    BackEnd
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body" style={{fontFamily:'Courier New'}}>
                    Foi utilizado o <strong>Python(FastApi)</strong> no backend.<br />
                    Bibliotecas usadas:<br />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Pandas</li>
                        <li class="list-group-item">File, UploadFile</li>
                        <li class="list-group-item">Csv</li>
                        <li class="list-group-item">Fastapi.responses</li>
                        <li class="list-group-item">Starlette.middleware.cors </li>
                    </ul><br/>
                    BackEnd hospedado no <strong>Heroku</strong>

                    </div>
                </div>
            </div>
        </div>


        
        </div>
    )
}

export default Sobrepag;