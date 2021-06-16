import React from "react";
import styled from "styled-components";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.Continue = this.Continue.bind(this);
    this.handlePlayer1 = this.handlePlayer1.bind(this);
    this.handlePlayer2 = this.handlePlayer2.bind(this);
    this.state = {
      player1: "",
      player2: "",
    };
  }
  Continue() {
    localStorage.setItem("player1", this.state.player1);
    localStorage.setItem("player2", this.state.player2);

    this.props.history.push("/components/Home");
  }
  handlePlayer1(e) {
    this.setState({
      player1: e.target.value,
    });
  }

  handlePlayer2(e) {
    this.setState({
      player2: e.target.value,
    });
  }
  render() {
    return (
      <Container>
        <Form style={{ paddingTop: "10%" }}>
          <p
            className="font"
            style={{ color: "#086A87", fontSize: "25px", fontWeight: "bold" }}
          >
            Game
          </p>

          <div class="form-group">
            <input
              className="font"
              style={{
                backgroundColor: "	#E8F0FE",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
              type="text"
              placeholder="Player1"
              value={this.state.player1}
              onChange={this.handlePlayer1}
              class="form-control"
            />
          </div>
          <br />

          <br />
          <div class="form-group  form-rad">
            <input
              className="font form-rad"
              style={{
                backgroundColor: "	#E8F0FE",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
              type="text"
              placeholder=" Player 2"
              value={this.state.player2}
              onChange={this.handlePlayer2}
              class="form-control form-rad"
            />
          </div>

          <button
            type="button"
            class="btn btn-primary  save-data"
            onClick={() => this.Continue()}
            style={{ color: "#086A87", fontSize: "20px", fontWeight: "bold" }}
            className="font"
          >
            Continue
          </button>
        </Form>
        <div></div>
      </Container>
    );
  }
}


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 350px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #086a87;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;



const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

export default Login;
