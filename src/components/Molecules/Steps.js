import styled from 'styled-components'

const StyledSteps = styled.div`
  position: absolute;
  top: 150px;
  margin-left: 20px;

  .step{
    display: flex;
    margin-bottom: 5px;
  }

  .circle-complete {
    width: 18px;
    height: 18px;
    background: green;
    border-radius: 50%;
    margin-right: 10px;
  }

  .circle {
    width: 18px;
    height: 18px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

function Steps(props) {

  return (
    <StyledSteps>
      <div className="steps">
        {props.steps.map((step, index) => {
          return (
            <div className="step">
              <div className={step.checked ? 'circle-complete' : 'circle'} />
              <div className="step-text" key={index} style={{color: step.checked ? 'green' : ''}}>{step.title}</div>
            </div>
          )
        })}
      </div>
    </StyledSteps>
  );
}
export default Steps;
