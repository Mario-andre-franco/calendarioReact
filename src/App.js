
import React from 'react';
import './App.css';

function App() {

  class PopulaDiaDaSemanaHeader extends React.Component {
    render() {
        const diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        var data = new Date().getDay();
        switch (data) {
          case 0:
            return <h1>{diaSemana[0]}</h1>
          case 1:
            return <h1>{diaSemana[1]}</h1>
          case 2:
            return <h1>{diaSemana[2]}</h1>
          case 3:
            return <h1>{diaSemana[3]}</h1>
          case 4:
            return <h1>{diaSemana[4]}</h1>   
          case 5:
            return <h1>{diaSemana[5]}</h1>
          case 6:
            return <h1>{diaSemana[6]}</h1>       
        }
    }
  }

  class PopulaDiaDaSemanaCalendario extends React.Component {
    render() {
        const diaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        return <ul className="week-days">
          {diaSemana.map((dia) => <li>{dia}</li>)}
        </ul>
    }
  }
  class PopulaDiaDoMes extends React.Component{
    render() {
      var data = new Date().getDate();
      return <h1>{data}</h1>
    }
  }

  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="calendar">
            <div className="front">
              <div className="current-date">
                <PopulaDiaDaSemanaHeader/>
                <PopulaDiaDoMes/>
              </div>
              <div className="current-month">
              <PopulaDiaDaSemanaCalendario/>

                <div className="weeks">
                  <div className="first">
                    <span className="last-month">28</span>
                    <span className="last-month">29</span>
                    <span className="last-month">30</span>
                    <span className="last-month">31</span>
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                  </div>

                  <div className="second">
                    <span>04</span>
                    <span>05</span>
                    <span className="event">06</span>
                    <span>07</span>
                    <span>08</span>
                    <span>09</span>
                    <span>10</span>
                  </div>

                  <div className="third">
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                    <span>14</span>
                    <span className="active">15</span>
                    <span>16</span>
                    <span>17</span>
                  </div>

                  <div className="fourth">
                    <span>18</span>
                    <span>19</span>
                    <span>20</span>
                    <span>21</span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                  </div>

                  <div className="fifth">
                    <span>25</span>
                    <span>26</span>
                    <span>27</span>
                    <span>28</span>
                    <span>29</span>
                    <span>30</span>
                    <span>31</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="back">
              <input placeholder="Qual aluno?"/>
              <div className="info">
                <div className="date">
                  <p className="info-date">
                  Date: <span>Jan 15th, 2016</span>
                  </p>
                  <p className="info-time">
                    Time: <span>6:35 PM</span>
                  </p>
                </div>
                <div className="address">
                  <p>
                    Address: <span>129 W 81st St, New York, NY</span>
                  </p>
                </div>
                <div className="observations">
                  <p>
                    Observations: <span>Aula presencial</span>
                  </p>
                </div>
              </div>

              <div className="actions">
                <button className="save">
                  Save <i className="ion-checkmark"></i>
                </button>
                <button className="dismiss">
                  Dismiss <i className="ion-android-close"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js'></script>
          <script  src="./script.js"></script>
      </body>
    </div>
  );
}

export default App;
